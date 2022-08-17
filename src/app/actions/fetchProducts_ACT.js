
const fetchProducts_ACT = (nr)=> {
  return {
    type: "FETCH_PRODUCTS",
    payload: nr
  }
}

export default fetchProducts_ACT;