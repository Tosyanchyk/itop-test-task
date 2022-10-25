import { useEffect, useState } from 'react'; 
import s from './Header.module.sass'

export default function Header(data) {

  const [exchange, setExchange] = useState(null)

  const currUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

  useEffect(() => {
    fetch(currUrl)
      .then(res => res.json())
      .then(data => setExchange(data))
  }, [])




  return <header className={s.header}>

    <div className={s.asd}>Exchange Rate</div>

  </header>
}