const counter = (state = 0, action) => {
  console.log('count');
  console.log(action);
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    default:
      return state;
  }
};

export default counter;