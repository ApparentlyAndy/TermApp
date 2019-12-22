const TermAppReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_TERMS":
      return action.terms;
    case "ADD_TERM":
      return [...state, { id: action.id, term: action.term }];
    case "REMOVE_TERM":
      return state.filter(term => term.id !== action.id);
    default:
      return state;
  }
};

export default TermAppReducer;
