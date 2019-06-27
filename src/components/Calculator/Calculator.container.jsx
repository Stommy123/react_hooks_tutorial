/* eslint-disable */
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { USD, RATES_URL, INITIAL_STATE } from './Calculator.constants';
import Calculator from './Calculator.component';

const calcReducer = (state, payload) => ({ ...state, ...payload });

const CalculatorContainer = _ => {
  const [state, setState] = useReducer(calcReducer, INITIAL_STATE);
  const { base, rates, amount } = state;
  const handleChange = key => e => setState({ [key]: e.target.value });
  const fetchRates = async _ => {
    const { data = {} } = await axios.get(RATES_URL + base);
    const rates = { EUR: 1.0, ...data.rates };
    setState({ rates });
  };
  const parsedRates = Object.keys(rates).sort();
  useEffect(
    _ => {
      fetchRates();
    },
    [base]
  );
  return <Calculator parsedRates={parsedRates} amount={amount} base={base} rates={rates} handleChange={handleChange} />;
};

export default CalculatorContainer;
