import React, { useState, useEffect, useRef } from "react";
import Admin from "../estimator/Admin";
import User from "../estimator/User";
import { RxAvatar } from "react-icons/rx";

function Estimate() {
  const [userState, setUserState] = useState("");
  const [page, setPage] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    if (userState === "admin") {
      setPage("admin");
    } else if (userState === "user") {
      setPage("user");
    } else inputRef.current.focus();
  }, [userState]);

  return (
    <div className="flex flex-col justify-evenly items-center  h-screen overflow-y-auto m-1 p-4 bg-[rgba(255,255,255,0.9)] rounded-sm">
      <div
        className={`absolute pl-4 pr-4 top-5 flex ${
          page === "" ? "justify-center" : "justify-between"
        } w-full items-center`}
      >
        {page !== "" && (
          <div className="flex border items-center">
            <RxAvatar className="text-3xl" />
            <h1 className="text-xl flex justify-center capitalize pl-1">
              {page}
            </h1>
          </div>
        )}
        <h1 className="text-5xl font-bold">Estimator</h1>
        {page !== "" && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
            onClick={() => {
              setPage("");
              setUserState("");
            }}
          >
            Logout
          </button>
        )}
      </div>
      <div className="mt-8 mb-16 box-border w-full h-full">
        {page === "admin" && <Admin />}
        {page === "user" && <User />}
        {page === "" && (
          <div className="flex justify-center items-center flex-col h-full">
            <input
              ref={inputRef}
              className="p-4 border-2 border-gray-300 rounded-lg w-72 my-auto"
              value={userState}
              onChange={(e) => setUserState(e.target.value)}
              type="text"
              placeholder="Password"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Estimate;
