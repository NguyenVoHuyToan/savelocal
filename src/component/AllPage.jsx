import { Button, Input } from 'antd';
import React, { useState } from 'react'

function AllPage() {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState((storageJobs ?? []));
    const [checked, setChecked] = useState([])

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob('')

      };
    
    const handleChecked = (index) => {
        setChecked(prev => {
            const isChecked = checked.includes(index)
            if (isChecked){
                return checked.filter(item => item !== index)
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
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="add detail"
        ></Input>

        <Button className="button-todo" onClick={handleSubmit}>
          Add
        </Button>
      </div>
      <ul>
          {jobs.map((job, index) => {
            return(
              <div className="map-job" key={index}>
                <input  
                type="checkbox"
                checked={checked.includes(index)}
                onChange={() => handleChecked(index) }></input>
                {job}
              </div>
            )
          })}
        </ul>
    </div>
  )
}

export default AllPage