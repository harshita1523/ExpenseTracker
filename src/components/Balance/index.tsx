import React, { useEffect, useState } from "react";
import { ITransaction } from "../AddTxn/Txn";

interface IBalanceProps {
  txnList: ITransaction[];
}

const Balance: React.FC<IBalanceProps> = ({ txnList }) => {
  const [expense, setExpense] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);

  useEffect(() => {
    txnList.map((txn: ITransaction) => {
      txn.type === "Expense"
        ? setExpense(expense + txn.amount)
        : setIncome(income + txn.amount);
    });
  }, [txnList]);

  return (
    <div>
      <h3>YOUR BALANCE</h3>
      <h1 className="text-[#242424] text-[40px] font-bold">
        {income - expense}
      </h1>
      <div className="flex m-2">
        <div className="border h-11 p-2 w-full m-1 items-center border-pink-600 text-xl">
          INCOME &nbsp;
          <span className="text-green-600">${income}</span>
        </div>

        <div className="border h-11 p-2 m-1 w-full text-xl border-green-600">
          EXPENSE &nbsp; <span className="text-red-600">${expense}</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
