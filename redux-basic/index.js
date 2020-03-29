import { createStore } from 'redux';

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

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

// Store
const store = createStore(reducer);

// Render
const render = () => {
  const state = store.getState();
  
  if(state.toggle) {
    toggle.classList.add('active');
  } else {
    toggle.classList.remove('active');
  }
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

// Action
toggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
}
btnDecrease.onclick = () => {
  store.dispatch(decrease());
}