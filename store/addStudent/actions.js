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

export const CHECK = (id) => {
  return {
    type: 'CHECK',
    id,
  };
};

export const UNCHECK = (id) => {
  return {
    type: 'UNCHECK',
    id,
  };
};