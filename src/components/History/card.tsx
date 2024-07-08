import React from "react";
import { ITransaction } from "../AddTxn/Txn";

const Card: React.FC<ITransaction> = ({ amount, type, text, id }) => {
  return (
    <div
      key={id}
      className={`border text-black shadow-md flex w-[20%] p-3 m-2 justify-between border-r-4
    ${type === "Expense" ? "border-r-red-600" : "border-r-green-600"}`}
    >
      <div>{text}</div>
      <div>
        {type === "Expense" ? "-" : "+"} {amount}
      </div>
    </div>
  );
};

export default Card;
