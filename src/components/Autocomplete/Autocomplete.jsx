import { useState, useMemo, useEffect } from 'react'
import { Combobox } from '@headlessui/react'
import styles from './Autocomplete.module.scss'
import { ReactComponent as Arrow } from '../../accets/icons/select-arrow.svg'
import cn from 'classnames'


export function Autocomplete({ options, onChange, value, placeholder }) {
  const [query, setQuery] = useState('')

  const filteredCities = useMemo(() => {
    return query === ''
    ? options
    : options.filter((city) => {
        return city.toLowerCase().includes(query.toLowerCase())
      })
  },[query])

  return (
    <div className={styles.container}>
        <Combobox value={value} onChange={onChange}>
          {({open}) => (
            <>
              <dir className={styles.container__input}>
                <Combobox.Input onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} className={styles.container__input__field}/>
                <Combobox.Button className={cn(styles.container__input__button, {[styles.open]:open})}><Arrow /></Combobox.Button>
              </dir>
              <Combobox.Options className={styles.container__options}>
                  {filteredCities.map((city) => (
                    <Combobox.Option key={'city' + city} value={city}>
                        {city}
                    </Combobox.Option>
                  ))}
              </Combobox.Options>
            </>
          )}
        </Combobox>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg> */}
    </div>
  )
}