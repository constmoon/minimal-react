// DOM refrence
const toggle = document.querySelector('.toggle');
const counter = document.querySelector('.num');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// Action type
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// Action function
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = diff => ({ type: INCREASE, diff });
const decrease = () => ({ type: DECREASE });

// Initial state
const initialState = {
  toggle: false,
  counter: 0
}