import { formToJSON } from "axios"

let extract = await fetch('/portfolio.json')
.then(response =>{
    return response.json()
})
.then(data =>{
    return data
})
const types = []
for (let index = 0; index < extract.length; index++) {
    if(!types.includes(extract[index].type))
    types.push(extract[index].type);
    
}
console.log(types);

