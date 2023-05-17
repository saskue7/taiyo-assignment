

export const details = (data) => {
 console.log(data)
 const categories = [0, 0, 0, 0]
 Object.keys(data).forEach(function (key) {
  if (data) {
   categories[new Date(key).getFullYear() - 2020] += Math.abs(data[key])
  }

 })

 console.log(categories)
 return categories
}
