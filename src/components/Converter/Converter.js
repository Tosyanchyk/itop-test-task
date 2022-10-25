import s from './Converter.module.sass' // Convertation component with input

export default function Converter(props) {
  const {
    currencyOptions
  } = props

  return <section className={s.section}>
    <input type="number" />
    
  </section >
}