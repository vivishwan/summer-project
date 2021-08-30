import React from 'react'

const SelectWard = ({ wardDetails, selected, switchWards }) => {
  const options = Object.keys(wardDetails).map(m => <option key={m} value={m}>{m}</option>)
  return (
    <div className="select-ward">
      <div>Select Ward:{'\u00A0'}</div>
      <div className="select-ward__select-container">
        <select onChange={switchWards} value={selected}>
          {options}
        </select>
      </div>
    </div>
  )
}

export default SelectWard
