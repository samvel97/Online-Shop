export const cards = (state) => state.cards.card
export const total = (state) => {
  const allBuyProduct =  state.cards.card.filter((elem) => elem.totalprice !==  0)
  return allBuyProduct
}
export const info = (state) => state.cards.infoPage
