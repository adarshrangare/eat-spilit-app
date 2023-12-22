import React from 'react'
import Button from './Button';

function FormSplitBill({selectedFriend}) {

    

    return (
      <form className="form-split-bill">
        <h2>Split bill with {selectedFriend.name}</h2>
  
        <label>💰 Bill value</label>
        <input type="text" />
  
        <label>🙎 Your Expenses</label>
        <input type="text" />
  
        <label>👬 {selectedFriend.name}'s Expenses</label>
        <input type="text" />
  
        <label>🤑 WHo will pay the bill?</label>
        <select>
          <option>You</option>
          <option>{selectedFriend.name}</option>
        </select>
  
        <Button>Split Bill</Button>
      </form>
    );
  }

export default FormSplitBill