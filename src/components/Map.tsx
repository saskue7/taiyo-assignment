import { useEffect, useState } from "react"
import axios from "axios"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import Chart from "./Chart"

const Map = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const res = axios.get("https://disease.sh/v3/covid-19/countries")
      .then(res => setData(res.data))
  }, [])
  console.log(data)
  // const categories = data.map(data=>) 
  return (
    <div className="flex flex-col w-full items-center">

      <Chart />

      <MapContainer center={[30.0668, 79.0193]} zoom={13}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {data?.map(data => (
          <Marker
            key={data.country}
            position={[data.countryInfo.lat, data.countryInfo.long]}>
            <Popup position={[data.countryInfo.lat, data.countryInfo.long]}>
              <div>
                <div>
                  <h1 className="text-2xl">{data.country}</h1>
                </div>
                <div>
                  <h1 className="text-base text-red-500">Total Deaths</h1>
                  {data.deaths}
                </div>
                <div>
                  <h1 className="text-base text-yellow-600">Total Active</h1>
                  {data.active}
                </div>
                <div>
                  <h1 className="text-base text-green-500">Total Recovered</h1>
                  {data.recovered}
                </div>

              </div>
            </Popup>


          </Marker>
        ))}

      </MapContainer>
    </div>

  )
}

export default Map