import { useDispatch } from "react-redux"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { contactEdit } from "../features/contactSlice"
const Edit = () => {
 const location = useLocation()
 console.log(location.state)
 const dispatch = useDispatch()
 const [firstName, setFirstName] = useState(location.state.firstName)
 const [lastName, setLastName] = useState(location.state.lastName)
 const navigate = useNavigate()
 const firstNameChange = e => setFirstName(e.target.value)
 const lastNameChange = e => setLastName(e.target.value)

 const onEdit = () => {
  
   if (firstName && lastName && /^[a-zA-Z]+$/.test(firstName) && /^[a-zA-Z]+$/.test(lastName)) {
   console.log("heeh")
    dispatch(contactEdit(location.state.id,firstName,lastName))
     navigate("/")
  }
  else{
    alert("Please use valid alphabets for Editing")
  }
  
 }

 return (
  <div className='flex flex-col justify-center mr-4'>
   <div className="flex flex-col p-10 md: p-3" >
    <h1 className="text-center mb-8 font-bold text-2xl">Edit Contact </h1>
    <form className="flex text-center md:flex-col items-center justify-center" >
     <label className="mr-1 ml-1">First Name</label>
     <input onChange={firstNameChange} value={firstName} className="shadow appearance-none border border-blue-500 rounded w-xl py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " maxlength="10" />
     <label className="mr-1 ml-1">Last Name</label>
     <input onChange={lastNameChange} value={lastName} className=" shadow appearance-none border border-blue-500 rounded w-xl py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" maxlength="10" />
    </form>
    <button onClick={onEdit} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xl" >Save Changes</button>
   </div>
  </div>
 )
}

export default Edit