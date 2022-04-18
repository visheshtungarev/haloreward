const INITIAL_STATE = {
  user: {
   
  },
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type === undefined) {
    return state;
  }

  switch (action.type) {
  
    default:
      return state;
  }
};

export default AuthReducer;
