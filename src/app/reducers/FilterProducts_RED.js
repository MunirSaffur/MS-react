
const filterProducts_RED = (state = null, action)=> {
    switch (action.type) {
      case 'FILTER_PRODUCTS':
        return state = action.payload
      default:
        return state
    }
  }
  export default filterProducts_RED;