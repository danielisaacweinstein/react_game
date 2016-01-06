

function reducer(state = 0, action) {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return state
    case 'LEVELUP':
      return state + 1
    default:
      return state
  }
  return state
}

export default reducer