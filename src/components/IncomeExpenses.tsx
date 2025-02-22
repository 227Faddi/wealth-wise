import getIncomeExpense from "@/actions/getIncomeExpense";

const IncomeExpenses = async () => {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
