import React from 'react'
import { retranslate } from '../utils';



function MySortSelect({selectLabel ,defaultName, changeHandler, options}) {
  return (
      <div className='select-wrapper'>
         <div className="select-label">
            {selectLabel}
         </div>
         <select onChange={(e) => changeHandler(e.target.value)} name="" id="">
            <option disabled>{retranslate(defaultName)}</option>
            {options.map(option =>
               <option key={option} value={option}>{retranslate(option)}</option>
            )}
         </select>
      </div>

  )
}

export default MySortSelect