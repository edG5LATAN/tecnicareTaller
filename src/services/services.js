import axios from "axios"


const dtbase='https://tecnicareexpress-production.up.railway.app/telefonos'

export const getAllTelefonos=(setdata)=>{
  axios.get(dtbase)
  .then(res=>setdata(res.data))
  .catch(error=>console.log(error))
}

