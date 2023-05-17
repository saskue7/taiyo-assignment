import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Map from "./components/Map"
import Contact from "./components/Contact"
import CreateContact from "./features/CreateContact"
import Edit from "./components/Edit"
const App = () => {
  return (
    <BrowserRouter>
      <h1 className="bg-white text-center text-3xl font-bold uppercase">Taiyo Assignment</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contact />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/maps" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App