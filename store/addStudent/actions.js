export const ADD = (data, index) => {
	return {
		type: 'ADD',
		payload: {
			data,
			index,
		},
	};
};

export const DELETE = (index) => {
	return {
		type: 'DELETE',
		payload: {
			index,
		},
	};
};

export const CHECK = (index) => {
	return {
		type: 'CHECK',
		payload: {
			index,
		},
	};
};
