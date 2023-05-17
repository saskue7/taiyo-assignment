import { useState } from "react"
import { Link } from "react-router-dom"
import Contacts from "./Contacts"
import {selectAllContacts} from "../features/contactSlice"
import { useSelector } from "react-redux"
import cross from "../cross.jpeg"
const Contact = () => {

  const defaultStyle = (
    <div className="flex sm:flex-col text-center items-center w-full">
      <img src={cross} alt="" width={60} height={50}  />
      <div className="ml-4 mt-3">
        <h1 className="text-xl text-black font-bold">No Contact Found</h1>
        <p className="text-lg">Please add contact from Create Contact Button</p>
      </div>
    </div>
  )
  const data = useSelector(selectAllContacts)
  return (
    <div className='flex w-3/4 justify-center sm: w-full'>
      <div className="flex flex-col justify-center items-center mt-5">
        <Link to={"/create"} className="border-4 border-black-500 mb-8 font-bold text-center text-2xl p-2">Create Contact </Link>
        <div className='flex flex-wrap items-center justify-center gap-10 max-w-fit'>
          {data.length===0 ? defaultStyle : (data.map(data => (
            <Contacts key={data.id} data={data} />
          )))}
        </div>
      </div>
    </div>
  )
}

export default Contact