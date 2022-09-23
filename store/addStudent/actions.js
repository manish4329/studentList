export const ADD = (data) => {
  return {
    type: 'ADD',
    payload: {
      id: new Date().getTime().toString(),
      name: data.name,
      age: data.age,
    },
  };
};

export const DELETE = id => {
  return {
    type: 'DELETE',
    id,
  };
};
