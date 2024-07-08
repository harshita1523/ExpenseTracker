import { Button, Radio } from "antd";
import { ITransaction } from "./Txn";

interface IAddTransactionProps {
  txn: ITransaction;
  setTxn: React.Dispatch<React.SetStateAction<ITransaction>>;
  setTxnList: React.Dispatch<React.SetStateAction<ITransaction[]>>;
}

const AddTransactions: React.FC<IAddTransactionProps> = ({
  txn,
  setTxn,
  setTxnList,
}) => {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-xl m-2">Add Transaction</h1>
        <div>
          <div>
            <label>Text</label>
            <input
              type="text"
              value={txn.text}
              placeholder="Enter Transaction"
              className="border-2 border-blue-600 p-2 rounded-md m-3"
              onChange={(e) => setTxn({ ...txn, text: e.target.value })}
            />
            <label>Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              className="border-2 border-blue-600 p-2 rounded-md m-3"
              onChange={(e) =>
                setTxn({ ...txn, amount: Number(e.target.value) })
              }
            />
          </div>
          <div>
            <label>Type</label>

            <Radio.Group
              options={[
                { label: "Expense", value: "Expense" },
                { label: "Income", value: "Income" },
              ]}
              onChange={(e) => setTxn({ ...txn, type: e.target.value })}
              value={txn?.type}
              defaultValue={"Expense"}
              optionType="button"
              className="m-3"
              buttonStyle="solid"
            />
            <Button
              type="primary"
              className="m-3"
              onClick={() => {
                setTxnList((txnList) => [...txnList, txn]);
                setTxn({
                  id: Math.random() * 200,
                  text: "",
                  amount: 0,
                  type: "Expense",
                });
              }}
            >
              Add Transaction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransactions;
