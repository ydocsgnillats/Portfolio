import { IoMdAddCircleOutline } from "react-icons/io";
import { TiDelete } from "react-icons/ti";

function Item(props) {
  const handleAdd = () => {
    props.add(props.index);
  };
  const handleDelete = () => {
    props.delete(props.index);
  };

  const handleEdit = () => {
    props.edit(props.index);
  };

  return (
    <div className="flex">
      <div
        className={`flex justify-between w-96 border border-black p-2 ${
          props.index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
        } `}
        onClick={props.edit ? handleEdit : null}
      >
        <p className="text-left">{props.name}</p>
        <p className="text-right">${props.price}</p>
      </div>
      {props?.add && (
        <button onClick={handleAdd}>
          <IoMdAddCircleOutline className="text-2xl" />
        </button>
      )}
      {props?.delete && (
        <button onClick={handleDelete}>
          <TiDelete className="text-2xl" />
        </button>
      )}
    </div>
  );
}
export default Item;
