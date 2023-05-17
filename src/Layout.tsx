import {Outlet} from "react-router-dom"
import Sidebar from "./components/Sidebar"
const Layout = () => {
  return (
    <div className="flex min-h-full gap-5 border columns-2 p-10 py-20 bg-white   md:flex-col p-2 divide-y-2  ">
      
     <Sidebar />
      <hr style={{height:30}} />
     <Outlet />
    </div>
  )
}

export default Layout