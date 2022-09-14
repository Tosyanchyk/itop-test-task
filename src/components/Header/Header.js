import { useEffect, useState } from 'react';

export default function Header(data) {

  const [exchange, setExchange] = useState(null)

  useEffect(() => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(res => res.json())
      .then(data => setExchange(data))
  }, [])

  console.log(exchange)

  return <>

    {exchange &&
      <ul>
        {exchange.map((item, index) => {
          return <li key={index}>
            {item.ccy}
          </li>
        })}
      </ul>
    }

    {/*
      base_ccy: "UAH"
      buy: "39.50000"
      ccy: "USD"
      sale: "39.90000"
    */}
  </>
}