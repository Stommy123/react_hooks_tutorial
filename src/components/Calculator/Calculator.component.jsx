import React from 'react';

const Calculator = ({ parsedRates, amount, base, rates, handleChange }) => (
  <>
    <div>
      <h1>How much is it worth?</h1>
      <input type="number" min={1} value={amount} onChange={handleChange('amount')} />
      <select onChange={handleChange('base')} value={base}>
        {parsedRates.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
    <div>
      <ul>
        {parsedRates.map(currency => (
          <li key={currency}>
            {currency} {(amount * rates[currency]).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Calculator;
