import React from "react";

function TotalBox({ estimateData }) {
  const totalPrice = estimateData?.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  const formattedTotalPrice = `$${parseFloat(totalPrice).toFixed(2)}`;
  console.log("formattedTotalPrice", formattedTotalPrice, estimateData);
  return (
    <div className="relative bottom-0 mt-4 bg-gray-100 p-4 border border-2 border-gray-500 w-48">
      <div className="text-lg font-semibold flex items-center justify-between">
        <p className="text-left">Total:</p>{" "}
        <p className="text-right">{formattedTotalPrice}</p>
      </div>
    </div>
  );
}

export default TotalBox;
