import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon, CheckIcon } from '../../atoms/svg'
import '../../../styles/components/dropdown.css'

export const DropdownGlassmorphism = ({
  value,
  setValue,
  options,
  buttonValue,
  valueAccessor
}) => {
  return (
    <Listbox value={value} onChange={setValue}>
      <div className='dropdown-glass-selector__listbox--content'>
        <Listbox.Button className='dropdown-glass-selector__button'>
          {buttonValue}
          <SelectorIcon
            className='dropdown-glass-selector__selector-icon'
            aria-hidden='true'
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <Listbox.Options className='dropdown-glass-selector__menu'>
            {options.map(([key, value], i) => (
              <Listbox.Option
                key={i}
                value={key}
                className={({ active }) =>
                  `dropdown-glass-selector__menu--option ${
                    active && 'dropdown-glass-selector__menu--option-active'
                  }`
                }>
                {({ selected }) => (
                  <Fragment>
                    <span
                      className={`block truncate ${
                        selected
                          ? 'dropdown-glass-selector__menu--option-selected'
                          : 'font-medium'
                      }`}>
                      {value[valueAccessor]}
                    </span>
                    {selected && (
                      <span className='dropdown-glass-selector__check--container'>
                        <CheckIcon
                          className='dropdown-glass-selector__check--icon'
                          aria-hidden='true'
                        />
                      </span>
                    )}
                  </Fragment>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
