import { FC, MutableRefObject, useRef } from 'react'
import { useRegisterOutsideListener } from '../../Assets/index';
import SelectYearOption from './SelectOption/SelectOption'
import './SelectInput.scss'

const SelectInput: FC<SelectInputProps> = ({ isActive, toggleSelect, handleChange, selectedOption, selectOptions, compId }) => {
    
    const selectRef = useRef() as MutableRefObject<HTMLDivElement>

    const handleClickOutside = (event: MouseEvent) => {
        if (!selectRef.current?.contains(event.target as Node) && isActive) {
            toggleSelect(false)
        }
    }

    useRegisterOutsideListener(compId, handleClickOutside)

    const handleOptionChange = (year: string) => {
        handleChange(year);
        toggleSelect()
    }

    return (
            <div className="year-input-box" ref={selectRef}>
                <div className={`select-options-container ${isActive ? 'select-input-isActive' : ''}`}>
                    {
                        selectOptions.map((value, index) => {
                            return <SelectYearOption key={`select-option-${index}`} label={value} handleChange={handleOptionChange} />
                        })
                    }
                </div>
                <div className="default-select-option" onClick={() => toggleSelect()}>
                    { selectedOption }
                </div>
            </div>
    )
}

export default SelectInput
