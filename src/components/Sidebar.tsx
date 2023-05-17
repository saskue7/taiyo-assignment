import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="flex flex-col font-bold text-2xl uppercase  gap-5 p-2 border-8 ">
      <Link to={"/"} className="bg-blue-500 rounded-md py-2 px-2 text-center max-w-4  sticky top-0">Contact</Link>
      <Link to={"/maps"} className="bg-blue-500 rounded-md py-2 px-2 text-center sticky top-20">Charts and Maps</Link>
    </div>
  )
}

export default Sidebar