
import React, {useState} from 'react'
import {getDatabase, ref, set} from 'firebase/database'
import {app} from '../Firebase'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {

const [name, setName] = useState('')
const [phone, setPhone] = useState(null)
const [admNo, setAdmNo] = useState(null)
const navigate = useNavigate()

const submitHandler = (event) => {
  event.preventDefault();
  const db = getDatabase(app);
  console.log(name,phone);
  set(ref(db,'student/'+admNo),{
    studentName: name,
    phoneNumber:phone,
  })
  .then(res=> {
    navigate('/studentList')
  })
  .catch(err=> {
    console.log(err)
  })
}

  return (
    <div>
      <form onSubmit={submitHandler}>
      <input onChange={(e)=> setAdmNo(e.target.value)} type="text" placeholder='Adm no.' />
        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='student name' />
        <input onChange={(e)=> setPhone(e.target.value)}  type="number" placeholder='phone number' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddStudent