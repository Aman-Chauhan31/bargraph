import React, { useState } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import './barchart.css'

const Barchart = () => {

const initialdata = [
  {name: 'Easy', students: 78},
  {name: 'Medium', students: 24},
  {name: 'Hard', students: 99},
  
];

const [data,setData] = useState(initialdata)
const [dataShow, setDataShow] = useState(data)

const easyChange = (e) =>{
    if (e.target.value < 100 && e.target.value > 0 ) {
    const newState = data.map(obj => {
            if (obj.name === e.target.name){
                return{...obj, students : e.target.value}
    }
    return obj
    })


    setData(newState)
}
else 
{
    alert ('Value should be in between 1-100')
    setData(initialdata)
}
}

const mediumChange = (e) =>{
    if (e.target.value < 100 && e.target.value > 0 ) {
    const newState = data.map(obj => {
            if (obj.name === e.target.name){
                return{...obj, students : e.target.value}
    }
    return obj
    })

    setData(newState)
}
else 
{
    alert ('Value should be in between 1-100')
    setData(initialdata)
}
    
}

const hardChange = (e) =>{
    if (e.target.value < 100 && e.target.value > 0 ) {
    const newState = data.map(obj => {
            if (obj.name === e.target.name){
                return{...obj, students : e.target.value}
    }
    return obj
    })

    setData(newState)
}
else 
{
    alert ('Value should be in between 1-100')
    setData(initialdata)
}
    
}

const submitChange =(e)=>{
  setDataShow(data);
  console.table(data)
  e.preventDefault();
}



  
  return (
    <div className='container'>
        <div className='boxform'>
        <form className='form1'>
            <label>
                Easy:
            </label>
            <input type='number' name='Easy' onChange={easyChange} />
            <label>
                Medium:
            </label>
            <input type='number' name='Medium' onChange={mediumChange}/>
            <label>
                Hard:
            </label>
            <input type='number' name='Hard' onChange={hardChange}/>
            <br/>
            <input type='submit' value='Refresh' onClick={submitChange}/>
        </form>
        </div>
        <div className='bar'>
      <BarChart width={300} height={300} data={dataShow}>
    <Bar dataKey="students" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
  </div>
    </div>
  )
}

export default Barchart
