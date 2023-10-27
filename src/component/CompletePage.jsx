import { Button } from 'antd'
import React, { useState } from 'react'
import './Component.css'
import Check from './Checkbox'

function CompletePage() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(true)
    }
  return (
    <>
    {click ? (<Button onClick={handleClick} className='button-complete'>Delete</Button>):(<div className='complete'>
        <div><Check/></div>
        <Button onClick={handleClick} className='button-complete'>Delete</Button>
    </div>)}
    </>
  )
}

export default CompletePage