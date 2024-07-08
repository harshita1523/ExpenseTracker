import { Col, Divider, Row } from "antd";
import Balance from "../Balance";
import AddTransactions from "../AddTxn";
import History from "../History";
import { ITransaction } from "../AddTxn/Txn";
import { useState } from "react";

const MainPage = () => {
  const [txn, setTxn] = useState<ITransaction>({
    id: 0,
    text: "",
    amount: 0,
    type: "Expense",
  });
  const [txnList, setTxnList] = useState<ITransaction[]>([]);
  return (
    <>
      <Row justify={"space-evenly"} align={"middle"}>
        <Col className="border border-blue-700 p-8 rounded-lg" span={10}>
          <Balance txnList={txnList} />
        </Col>
        <Col className="border border-blue-700 rounded-lg" span={10}>
          <AddTransactions txn={txn} setTxn={setTxn} setTxnList={setTxnList} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <History txnList={txnList} />
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
