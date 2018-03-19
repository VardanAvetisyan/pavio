import React, { Component } from 'react'

export default class CryptoCurrency extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {cryptocurrency:{loading, data},onCryptoCurrency} = this.props;
    return (
      <div style={{ width: '60%',margin: '0 auto 4px auto'}}>
        <button onClick={onCryptoCurrency}>
            Get data
        </button>
        <br/>Status: 
        <span style={{color:"red"}}>
            {loading}</span>
        <p/>

        <div className="App">
            <CryptoCurrencyList cryptocurrency={data}/>
        </div>
      </div>
    )
  }
}

function handleClick(selector) {
    document.querySelector("."+selector).style.display = 'block';
  }

function CryptoCurrencyList(props) {
    var me = this;

    var cryptoConatainerStyle = {
        background: 'white',
        width: '70%',
        margin: '0 auto 4px auto',
        padding: '1em',
        boxShadow: '1px 1px 0 lightgrey'
    }

    var shortDetaileInfoStyles = {
        marginLeft: '10px',
        fontSize:'14px'
    }

    var detailedInfoButtonStyle = {
        fontSize: '11px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }

    var rankStyle = {
        fontSize: '12px',
        color: 'red'
    }

    return (
        <div>
        {props.cryptocurrency.map((data)=>
                <div className="crypto-container" style={cryptoConatainerStyle} key={data.id}>
                    <div>{data.symbol} <span className="rank-class" style={rankStyle}>{data.rank}</span></div>
                    <div className="short-info" style={shortDetaileInfoStyles}>
                        <div className="inner">
                            <span>Price​ ​in​ ​the​ ​selected​ ​fiat​ ​currency : </span>
                                {data.price_usd}
                            </div>
                            <div className="inner">
                            <span>24​ ​hour​ ​change: </span>
                                {data['24h_volume_usd']}
                        </div>
                    </div>
                    <div>
                        <span onClick={() => handleClick(data.id+"-detailed-info")} className='detailed-info-button-class' style={detailedInfoButtonStyle}>
                            Detailed info
                        </span>
                    </div>

                    <div className={data.id+"-detailed-info detailed-info"} style={{display:'none', marginLeft:'10px',fontSize:'14px'}}>
                        <div className="inner">
                            <span>Rank: {data.rank}</span>
                        </div>
            
                        <div className="inner">
                            <span>Name: {data.name}</span>
                        </div>
            
                        <div className="inner">
                            <span>Symbol: {data.symbol}</span>
                        </div>
            
                        <div className="inner">
                            <span>price,​ ​24h​ ​volume​ ​and​ ​market​ ​cap​ ​in​ ​the​ ​selected​ ​fiat​ ​currency:{data.price_usd} {data['24h_volume_usd']} {data.market_cap_usd}</span>
                        </div>
            
                        <div className="inner">
                            <span>price​ ​in​ ​bitcoin:{data.price_btc}</span>
                        </div>
            
                        <div className="inner">
                            <span>1h​ ​change,​ ​24h​ ​change,​ ​7d​ ​change:{data.percent_change_1h} {data.percent_change_24h} {data.percent_change_7d}</span>
                        </div>
            
                        <div className="inner">
                            <span>Total​ ​and​ ​available​ ​supply:{data.total_supply} {data.available_supply}</span>
                        </div>
            
                    </div>
                </div>
                    )}
        </div>
    )
}

