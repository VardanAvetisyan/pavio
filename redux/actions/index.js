import $ from 'jquery'

export const getCryptoCurrency = (dispatch, state) => {
  dispatch({ type: 'CRYPTOCURRENCY_LOADING' });
  var coinMarketAPI = "https://api.coinmarketcap.com/v1/ticker/?start=100";
  $.getJSON(coinMarketAPI).done(data =>
    dispatch({ type: 'CRYPTOCURRENCY', data:data}))
}
