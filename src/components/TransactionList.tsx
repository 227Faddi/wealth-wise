import getTransactions from "@/actions/getTransactions";
import { Transaction } from "@/types";
import TransactionItem from "./TransactionItem";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((item: Transaction) => (
            <TransactionItem transaction={item} key={item.id} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
