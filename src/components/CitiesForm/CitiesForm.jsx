import React, { useState } from 'react'
import styles from './CitiesForm.module.scss'
import { Autocomplete } from '../Autocomplete'
import { getRoadFromList, formatTime } from './utils'
import { Select } from '../Select'
import { tarifs, cities } from '../../data'

export const CitiesForm = () => {
    const [ cityA, setCityA ] = useState('')
    const [ cityB, setCityB ] = useState('')
    const [ tarif, setTrif ] = useState(null)
    const [finalResult, setFinalResult] = useState({ 
        price: 0,
        range: 0,
        time: 0
     })
    function setupRoad() {
        console.log('cityA && cityB & tarif', cityA && cityB && tarif)
        if (cityA && cityB && tarif) {
            const road = getRoadFromList(cityA, cityB)
            return setFinalResult({
                price: road.km * tarif.price,
                range: road.km,
                time: formatTime(road.t)
            })
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.container__header}>Расчитайте стоимости поездки</div>
        <div className={styles.container__form}>
            <Autocomplete onChange={setCityA} value={cityA} placeholder='Откуда?' options={cities}/>
            <Autocomplete onChange={setCityB} value={cityB} placeholder='Куда?' options={cities}/>
            <Select options={tarifs} placeholder="Тариф" value={tarif} onChange={setTrif}/>
            <button className={styles.container__form__button} onClick={() => setupRoad()}>Рассчитать</button>
            <div className={styles.container__result}>Стоимость поездки выйдет: ~{finalResult.price} рублей</div>
            <div className={styles.container__result}>Примерное растояние: {finalResult.range} км</div>
            <div className={styles.container__result}>Время в пути: ~{finalResult.time}</div>
            <div className={styles.container__anotation}>*здесь указана примерная стоимость поездки. Для того, чтобы узнать точную цену, нажмите на кнопку ниже.</div>
        </div>
    </div>
  )
}
