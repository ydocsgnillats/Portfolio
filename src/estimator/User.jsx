import { useState, useEffect, useRef } from "react";
import data from "./data/items.json";
import Item from "./components/Item";
import Total from "./components/Total";

function User() {
  const [estimateData, setEstimateData] = useState([]);
  const [allItems, setAllItems] = useState();
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      try {
        setEstimateData(parseCSV(fileContent));
        setFileName(uploadedFile.name);
      } catch (error) {
        console.error("Error parsing file:", error);
      }
    };
    reader.readAsText(uploadedFile);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const parseCSV = (csvContent) => {
    const lines = csvContent.split("\n");
    const headers = lines[0].split(","); // Assuming the first line contains column headers
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");
      if (values.includes("Total")) {
        continue;
      }
      if (values.length === headers.length) {
        const item = {};
        headers.forEach((header, index) => {
          const trimmedHeader = header.trim();
          const trimmedValue = values[index].trim();
          if (trimmedHeader === "Count") {
            item[trimmedHeader] = parseFloat(trimmedValue);
          } else {
            item[trimmedHeader] = trimmedValue;
          }
        });
        data.push(item);
      }
    }
    return data;
  };

  const handleDownload = () => {
    const headers = ["name", "count", "price"];

    const total = estimateData
      .filter((item) => item.count > 0)
      .reduce((acc, item) => acc + item.count * item.price, 0);

    const csvContent = [
      headers.join(","),
      ...estimateData
        .filter((item) => item.count > 0)
        .map((item) => `${item.name},${item.count},${item.price}`),
      `Total,-,${parseFloat(total).toFixed(2)}`, // Append total row
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName.length > 0 ? fileName : `quote${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleAdd = (index) => {
    const selectedItem = allItems[index];
    const existingItemIndex = estimateData.findIndex(
      (item) => item.name === selectedItem.name
    );

    if (existingItemIndex !== -1) {
      const updatedEstimateData = [...estimateData];
      updatedEstimateData[existingItemIndex] = {
        ...updatedEstimateData[existingItemIndex],
        count: updatedEstimateData[existingItemIndex].count + 1,
        price:
          updatedEstimateData[existingItemIndex].price + selectedItem.price,
      };
      setEstimateData(updatedEstimateData);
    } else {
      setEstimateData([...estimateData, { ...selectedItem, count: 1 }]);
    }
  };

  const handleDelete = (index) => {
    const item = estimateData[index];

    if (item.count > 1) {
      const updatedEstimateData = [...estimateData];
      updatedEstimateData[index] = {
        ...item,
        count: item.count - 1,
        price: item.price - item.price / item.count,
      };
      setEstimateData(updatedEstimateData);
    } else {
      const newEstimateData = estimateData.filter((item, i) => i !== index);
      setEstimateData(newEstimateData);
    }
  };

  useEffect(() => {
    const updatedEstimateData = allItems?.reduce((acc, currentItem) => {
      const existingItemIndex = acc.findIndex(
        (item) => item.name === currentItem.name
      );
      if (existingItemIndex !== -1) {
        acc[existingItemIndex] = {
          ...acc[existingItemIndex],
          count: acc[existingItemIndex].count + 1,
          price: acc[existingItemIndex].price + currentItem.price,
        };
      }
      return acc;
    }, []);

    setEstimateData(updatedEstimateData);
  }, [allItems]);

  useEffect(() => {
    let quote = sessionStorage.getItem("quote");
    if (quote) {
      setAllItems(JSON.parse(quote));
    } else setAllItems(data);
  }, []);

  useEffect(() => {
    console.log("estimateData", estimateData);
  }, [estimateData]);

  return (
    <div className="flex flex-col h-full">
      <input
        className="flex items-center mx-auto mt-12 mb-12 p-2 border-2 border-gray-300 rounded-lg w-72 justify-center"
        placeholder="File Name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <div className="flex justify-around">
        <div className="flex flex-col ml-4 mr-4 min-w-96">
          {allItems?.map((item, i) => {
            return (
              <Item
                key={i}
                index={i}
                name={item?.name}
                price={item?.price.toFixed(2)}
                add={(i) => handleAdd(i)}
              />
            );
          })}
        </div>
        <div className="flex flex-col ml-4 mr-4 min-w-96">
          {estimateData
            ?.filter((item) => item.count > 0 || item.count === "-")
            .map((item, i) => {
              return (
                <Item
                  key={i}
                  index={i}
                  name={`${item.count} ${item.name}`}
                  price={parseFloat(item.price).toFixed(2) || 0}
                  delete={(i) => handleDelete(i)}
                />
              );
            })}
        </div>
      </div>
      <div className="absolute bottom-5 px-8 left-0 flex justify-between w-full box-border items-center">
        <div>
          <input
            className="mt-4 bg-gray-100 p-1 border border-2 border-gray-500"
            type="file"
            placeholder="Import"
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e)}
            ref={fileInputRef}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded w-48 mr-4"
            onClick={handleUploadClick}
          >
            Import Quote
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded w-48"
            onClick={handleDownload}
          >
            Download Quote
          </button>
        </div>
        <Total estimateData={estimateData} />
      </div>
    </div>
  );
}

export default User;
