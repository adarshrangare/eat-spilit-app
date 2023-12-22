import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpenses, setYourExpenses] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
      <select>
        <option value="user">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
