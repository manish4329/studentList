const initialState = {
  value: [{name:Manish, age:26, id: 1}],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      const {id, name, age} = action.payload;
      return {
        ...state,
        value: [
          ...state.value,
          {
            id: id,
            name: name,
            age: age,
          },
        ],
      };
    case 'DELETE':
      const newValue = state.value.filter(elem => elem.id !== action.id);
      return {
        ...state,
        value: newValue,
      };
    default:
      return state;
  }
};
export default reducer;