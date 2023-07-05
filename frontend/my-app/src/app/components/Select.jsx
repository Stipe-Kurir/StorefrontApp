import React from 'react'

const Select = ({opcija,opcija_prva,opcija_druga,opcija_treca}) => {
  return (
    <div className='w-[70%] bg-white flex justify-center'>
        <select className='w-full pt-2 pb-2' id="opcije" name="opcije" >
            <option value={opcija_prva}>{opcija_prva}</option>
            <option value={opcija_druga}>{opcija_druga}</option>
            <option value={opcija_treca}>{opcija_treca}</option>
        </select>
    </div>
  )
}

export default Select
