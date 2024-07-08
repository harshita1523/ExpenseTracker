export type TTransactionType = "Expense" | "Income";
export interface ITransaction {
  id: number;
  text: string;
  amount: number;
  type: TTransactionType;
}
