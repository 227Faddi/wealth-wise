"use client";

import deleteTransaction from "@/actions/deleteTransaction";
import { addCommas } from "@/lib/utils";
import { Transaction } from "@/types";
import toast from "react-hot-toast";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteItem = async (id: string) => {
    const confirmed = window.confirm("Are you sure?");
    if (!confirmed) {
      return;
    }
    const { message, error } = await deleteTransaction(id);

    if (error) {
      return toast.error(error);
    }

    toast.success(message as string);
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}
        {addCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => handleDeleteItem(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
