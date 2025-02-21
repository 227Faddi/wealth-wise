"use server";

import { auth } from "@clerk/nextjs/server";

interface TransactionData {
  text: string;
  amount: number;
  userId: string;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Text or amount is missing" };
  }

  // formatting
  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  const transactionData: TransactionData = {
    text,
    amount,
    userId,
  };

  return { data: transactionData };
}

export default addTransaction;
