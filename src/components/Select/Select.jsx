import { Listbox } from '@headlessui/react'
import styles from './Select.module.scss'
import cn from 'classnames'
import { ReactComponent as Arrow } from '../../accets/icons/select-arrow.svg'

export function Select({ options, placeholder, value, onChange }) {
    const selectedOption = options.find(el => el?.name ===  value?.name)

  return (
    <div className={styles.container}>
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
            <>
                <Listbox.Button 
                    className={cn(styles.container__input,{
                        [styles.container__placeholder]: !selectedOption 
                    })}>
                        {selectedOption?.name || placeholder}
                        <Arrow className={cn({[styles.open]:open})}/>
                </Listbox.Button>
                
                <Listbox.Options className={styles.container__options}>
                    {options.map((option) => (
                        <Listbox.Option
                            key={option.name}
                            value={option}
                        >
                            {option.name}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </>
        )}
        </Listbox>
    </div>

  )
}