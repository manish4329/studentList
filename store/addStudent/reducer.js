const initialState = {
	students: [],
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			const { data } = action.payload;
			state = {
				...state,
				students: [...state.students, data],
			};
			return state;
		case 'CHECK':
			const index = action.payload.index;
			const student = state.students[index];
			student.isPass = !student.isPass;
			state = {
				...state,
				students: [
					...state.students.slice(0, index),
					student,
					...state.students.slice(index + 1, state.students.length),
				],
			};
			return state;
		case 'DELETE':
			const id = action.payload.index;
			const newValue = state.students[id];
			const checkTrue = state.students.filter(
				(elem) => elem.isPass === true,
			);
			const checkClicked = checkTrue.filter((elem) => elem !== newValue);
			const checkRest = state.students.filter(
				(elem) => elem.isPass === false,
			);
			const newList = checkClicked.concat(checkRest);
			state = {
				...state,
				students: newList,
			};
			return state;
		default:
			return state;
	}
};
export default reducer;
