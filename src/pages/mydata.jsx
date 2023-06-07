import axios from "axios";

const { useEffect } = require("react")

const Mydata = ()=>{


    useEffect(()=>{
        console.log(process.env.NEXT_PUBLIC_STRAPI_BASE_URL);
        axios.post(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/meetings`,{
          data: { 
            email:'email@gmail.com',
            phone:12345678909,
            topic:'nothing'
        }
        }).then(response => {
            console.log(response.data);
          }).catch((err)=>console.log(err))
    },[])
    return(
        <>
    
       <div>

       </div>

        </>
    )
}
export default Mydata