import initialState from './initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SPIN_REELS':
      return {
        ...state,
        isSpinning: true,
        reels: action.reels.map(reel => {
          return {
            position: reel.position,
            activeSlot: reel.activeSlot
          }
        })
      }

    case 'FINISH_SPINNING':
      return {
        ...state,
        isSpinning: !state.isSpinning
      }

    default:
      return state
  }
}

export default rootReducer
