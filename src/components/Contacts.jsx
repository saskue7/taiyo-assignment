import { useDispatch } from "react-redux"
import {contactRemoved,contactEdit} from "../features/contactSlice"
import { NavLink } from "react-router-dom"

const Contacts = ({data}) => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center items-center flex-col h-56 w-90 '>
      <div className="flex flex-wrap flex-col border-4 border-grey p-4 text-center">
      <h1 className="text-xl">{data.firstName}</h1>
        <h1 className="text-xl">{data.lastName}</h1>
     </div>
      <NavLink to={"/edit"} state={{id:data.id,firstName:data.firstName,lastName:data.lastName}}><button className="mt-5 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xl">Edit</button></NavLink>
    <button onClick={() => dispatch(contactRemoved(data.id))} className="mt-5 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xl">Delete</button>
    </div>
  )
}

export default Contacts