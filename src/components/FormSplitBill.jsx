import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, handleSplit }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpenses, setYourExpenses] = useState("");
  const [whoPays, setWhoPays] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    let amount =
      whoPays == "user" ? +(billValue - yourExpenses) : +yourExpenses;

     amount = whoPays != "user" ? (amount * (-1)) : amount; 
      

    console.log(amount);
    handleSplit(amount);
    setBillValue("");
    setYourExpenses("");
    setWhoPays("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />

      <label>🙎 Your Expenses</label>
      <input
        type="text"
        value={yourExpenses}
        onChange={(e) =>
          setYourExpenses((prev) =>
            +e.target.value > +billValue ? prev : e.target.value
          )
        }
      />

      <label>👬 {selectedFriend.name}'s Expenses</label>
      <input type="text" disabled={true} value={billValue - yourExpenses} />

      <label>🤑 WHo will pay the bill?</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value={"user"}>You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
