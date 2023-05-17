import { useState, useEffect } from "react"
import Chart from "react-apexcharts"
import { details } from "../utility"
import axios from "axios"
const Charts = () => {

  const [data, setData] = useState()
  const [totalData, setTotalData] = useState()
  useEffect(() => {

    const dataCall = async () => {
      const res = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      setData(res.data)
      console.log(res.data)
      const doc = await axios.get("https://disease.sh/v3/covid-19/all")
      setTotalData(doc.data)

    }
    dataCall()


  }, [])
  if (!data) {
    return "Loading....."
  }
  console.log(data)
  console.log(totalData)
  const cases = details(data.cases)
  const deaths = details(data.deaths)
  const recovered = details(data.recovered)



  return (
    <div className="flex   lg:flex-col my-3">

      <div className="flex flex-wrap text-white items-center justify-center gap-5 w-1/4 lg:w-full mb-10 ">
        <div className="flex flex-col text-xl font-bold border border-gray-500 h-30 w-40 items-center justify-center rounded-xl p-2 bg-yellow-500">
          <h1>TodayCases</h1>
          <p>{!totalData ? "Loading..." : totalData.todayCases}</p>
        </div>

        <div className="flex flex-col  text-xl font-bold border border-gray-500 h-30 w-40 items-center justify-center rounded-xl p-2 bg-red-500">
          <h1>TodayDeaths</h1>
          <p>{!totalData ? "Loading..." : totalData.todayDeaths}</p>
        </div>

        <div className="flex flex-col text-xl font-bold border border-gray-500 h-30 w-40 items-center justify-center rounded-xl p-2 bg-green-500">
          <h1>TodayRecovered</h1> 
          <p>{!totalData ? "Loading..." : totalData.todayRecovered}</p>
        </div>

        <div className="flex flex-col text-xl font-bold border border-gray-500 h-30 w-40 items-center justify-center rounded-xl p-2 bg-pink-700">
          <h1>Active</h1> 
          <p>{!totalData ? "loading..." : totalData.active}</p>
        </div>

        <div className="flex flex-col text-xl font-bold border border-gray-500 h-30 w-40 items-center justify-center rounded-xl p-2 bg-orange-400">
          <h1>Population</h1> 
          <p>{!totalData ? "loading..." : totalData.population}</p>
        </div>


      </div>
      <Chart className ="w-full h-full" 

        options={{
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [2020, 2021, 2022, 2023]
          }
        }}
        series={[
          {
            name: "Cases",
            data: cases
          }, {
            name: "Deaths",
            data: deaths
          }, {
            name: "Recovered",
            data: recovered
          }
        ]}
        type="line"
        // width={450}
      />
    </div>
  )
}

export default Charts