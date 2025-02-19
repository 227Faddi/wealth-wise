"use client";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    console.log(formData.get("text"), formData.get("amount"));
  };
  return (
    <>
      <h3>Add Transaction</h3>
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> ( negative - expense, positive - income )
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter amount..."
          />
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
