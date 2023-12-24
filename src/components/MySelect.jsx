import React from 'react'
import { retranslate } from '../utils';



function MySelect({value ,selectLabel, defaultValue = 'all', defaultName, changeHandler, options}) {
  return (
      <div className='select-wrapper'>
         <div className="select-label">
            {selectLabel}
         </div>
         <select value={value} onChange={(e) => changeHandler(e.target.value)} name="" id="">
            <option value={defaultValue}>{defaultName}</option>
            {options.map(option =>
               <option key={option} value={option}>{retranslate(option)}</option>
            )}
         </select>
      </div>
  )
}

export default MySelect