import { useEffect, useState } from 'react' // Summary for component

import Header from './components/Header/Header'
import Converter from './components/Converter/Converter'

import s from './App.module.sass'

export default function App() {

  const [currencyOptions, setCurrencyOptions] = useState([]);

  const currUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

  useEffect(() => {
    fetch(currUrl)
      .then(res => res.json())
      .then(data => setCurrencyOptions(data))
  }, [])

  return <div className='container'>
    <Header />
    <div className={s.inner}>
      <Converter
        currencyOptions={currencyOptions}
      />
      <span>is</span>
      <Converter
        currencyOptions={currencyOptions}
      />
    </div>
  </div >
}
