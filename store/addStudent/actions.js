export const ADD = (data) => {
  return {
    type: 'ADD',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const DELETE = (id) => {
  return {
    type: 'DELETE',
    id,
  };
};
