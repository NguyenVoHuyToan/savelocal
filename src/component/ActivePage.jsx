import { Button, Input } from 'antd';
import React, { useState } from 'react'

function ActivePage() {
    const storageValue = JSON.parse(localStorage.getItem('value'))
    const [newJob, setNewJob] = useState("");
    const [newJobs, setNewJobs] = useState(storageValue ?? []);
    const [succes, setSucces] = useState([])

    const handleSubmit = () => {
        setNewJobs(prev => {
            const getvalue = [...prev, newJob]
            const jsonResult = JSON.stringify(getvalue)
            localStorage.setItem('value', jsonResult)
            return getvalue
        })
        
        setNewJob('')
      };
    
    const handleChecked = (index) => {
        setSucces(prev => {
            const isChecked = succes.includes(index)
            if (isChecked){
                return succes.filter(item => item !== index)
            }else{
                return [...prev, index]
            }
        })
    }
  return (
    <div>
        <div className="todo">
        <Input
          className="input-todo"
          value={newJob}
          onChange={(e) => setNewJob(e.target.value)}
          placeholder="add detail"
        ></Input>

        <Button className="button-todo" onClick={handleSubmit}>
          Add
        </Button>
      </div>
      <ul>
          {newJobs.map((newJob, index) => {
            return(
              <div className="map-job" key={index}>
                <input  
                type="checkbox"
                checked={succes.includes(index)}
                onChange={() => handleChecked(index) }></input>
                {newJob}
              </div>
            )
          })}
        </ul>
    </div>
  )
}

export default ActivePage