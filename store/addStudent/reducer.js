const initialState = {
  value: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      const {id, data} = action.payload;
      return {
        ...state,
        value: [
          ...state.value,
          {
            id: id,
            data: data,
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
