
interface obj {
 [key:string]: number
}

export const details = (data : obj) : number[] => {
 console.log(data)
 const categories:number[] = [0,0,0,0]
 Object.keys(data).forEach(function(key) {
  if (data){
   categories[new Date(key).getFullYear() - 2020] += Math.abs(data[key])
  }
  
 })
 
 console.log(categories)
 return categories
}
