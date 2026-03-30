import React from 'react'

export const Dropdown = () => {
  return (
    <div className='dropdownContainer'>
        <div className="mainDiv">
            <select>
                <option>Automation</option>
                <option>VFD</option>
                <option>Robotics</option>
                <option>IPC</option>
            </select>
        </div>
    </div>
  )
}
