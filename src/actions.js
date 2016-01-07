// export function setInitialState(state) {
//   return {
//     type: 'SET_INITIAL_STATE',
//     state
//   }
// }


/*
 * action types
 */

export const SET_INITIAL_STATE = 'SET_INITIAL_STATE'
export const HIGHLIGHT = 'HIGHLIGHT'

/*
 * action creators
 */

let cellID = 0

export function highlightCell(index) {
  return {
    type: HIGHLIGHT,
    index
  }
}

// export function setInitialState(state) {
//   return {
//     type: SET_INITIAL_STATE
//     state
//   }
// }
