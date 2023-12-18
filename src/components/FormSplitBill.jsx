import React from 'react'
import Button from './Button';

function FormSplitBill() {
    return (
      <form className="form-split-bill">
        <h2>Split bill with X</h2>
  
        <label>💰 Bill value</label>
        <input type="text" />
  
        <label>🙎 Your Expenses</label>
        <input type="text" />
  
        <label>👬 X's Expenses</label>
        <input type="text" />
  
        <label>🤑 WHo will pay the bill?</label>
        <select>
          <option>You</option>
          <option>X</option>
        </select>
  
        <Button>Split Bill</Button>
      </form>
    );
  }

export default FormSplitBill