import { selectAllContacts } from "./contactSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { contactAdded } from "./contactSlice"
import { useNavigate } from "react-router-dom"
const CreateContact = () => {

  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const navigate = useNavigate()
  const firstNameChange = e => setFirstName(e.target.value)
  const lastNameChange = e => setLastName(e.target.value)
  const onSave = () => {
    
    if (firstName && lastName) {
      dispatch(
        contactAdded(firstName, lastName)
      );
      navigate("/")
      
   }
  }
  return (
    <div className='flex flex-col justify-center mr-4'>
      <div className="flex flex-col p-10 md: p-3" >
        <h1 className="text-center mb-8 font-bold text-2xl">Create Contact </h1>
        <form className="flex text-center md:flex-col items-center justify-center" >
          <label className="mr-1 ml-1">First Name</label>
          <input onChange={firstNameChange} className="shadow appearance-none border border-blue-500 rounded w-xl py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " maxlength="10" />
          <label className="mr-1 ml-1">Last Name</label>
          <input onChange={lastNameChange} className=" shadow appearance-none border border-blue-500 rounded w-xl py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" maxlength="10" />
        </form>
        <button onClick={onSave} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xl" >Save Contact</button>
      </div>
    </div>
  )
}

export default CreateContact