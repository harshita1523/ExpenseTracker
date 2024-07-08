import Card from "./card";
import { ITransaction } from "../AddTxn/Txn";

interface IHistoryProps {
  txnList: ITransaction[];
}

const History: React.FC<IHistoryProps> = ({ txnList }) => {
  return (
    <>
      <div className="text-2xl m-2 font-semibold">Transaction History</div>
      <div className="flex flex-wrap justify-evenly">
        {txnList.map((txn: ITransaction) => (
          <Card
            id={txn.id}
            text={txn.text}
            amount={txn.amount}
            type={txn.type}
          />
        ))}
      </div>
    </>
  );
};

export default History;
