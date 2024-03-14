import { useState, useEffect } from "react";
import data from "./data/items.json";
import Item from "./components/Item";

function Admin() {
  const [allItems, setAllItems] = useState(data);
  const [editIndex, setEditIndex] = useState(null);
  const [item, setItem] = useState({
    name: "",
    price: 0,
  });

  let quote = sessionStorage.getItem("quote");

  const saveQuote = () => {
    const jsonContent = JSON.stringify(allItems);
    sessionStorage.setItem("quote", jsonContent);
  };

  const handleDelete = (index) => {
    const item = allItems[index];

    if (item.count > 1) {
      const updatedAllItems = [...allItems];
      updatedAllItems[index] = {
        ...item,
        count: item.count - 1,
        price: item.price - item.price / item.count,
      };
      setAllItems(updatedAllItems);
    } else {
      const newAllItems = allItems.filter((item, i) => i !== index);
      setAllItems(newAllItems);
    }
  };

  const handleEdit = (index) => {
    const item = allItems[index];
    setItem(item);
    setEditIndex(index);
  };

  useEffect(() => {
    if (quote) {
      setAllItems(JSON.parse(quote));
    } else setAllItems(data);
  }, []);

  useEffect(() => {
    saveQuote();
  }, [allItems]);

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex justify-around">
        <div className="flex flex-col ml-4 mr-4">
          {allItems?.map((item, i) => {
            return (
              <Item
                key={i}
                index={i}
                name={item.name}
                price={item?.price}
                delete={(i) => handleDelete(i)}
                edit={(i) => {
                  handleEdit(i);
                }}
              />
            );
          })}
        </div>
        <div className="flex flex-col ml-4 mr-4">
          <input
            className="p-2 border-2 border-gray-300 rounded-lg w-72"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
            type="text"
            placeholder="Name"
          />
          <input
            className="p-2 mt-2 border-2 border-gray-300 rounded-lg w-72"
            value={item.price}
            onChange={(e) =>
              setItem({ ...item, price: parseFloat(e.target.value) })
            }
            type="number"
            placeholder="Price"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-36 m-1 mt-4"
            onClick={() => {
              editIndex !== null
                ? setAllItems(
                    allItems.map((i, index) => {
                      if (index === editIndex) {
                        return item;
                      }
                      return i;
                    })
                  )
                : setAllItems([...allItems, item]);
              setItem({ name: "", price: 0 });
              saveQuote();
            }}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
