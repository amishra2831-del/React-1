

// import { useState } from "react"

import { useLoaderData } from "react-router-dom"

// import { useEffect} from "react"


function Github() {
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //    fetch('https://api.github.com/users/amishra2831-del') 
    //    .then(response => response.json())
    //    .then(data => {
    //         console.log(data)
    //         setdata(data)
            
    //    })
    // }, [])
    const data =  useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4'>
      Github Followers : {data.followers}
      <img src={data.avatar_url}alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export  const gitinfoloader = async () =>{
        const response = await fetch('ttps://api.github.com/users/amishra2831-del ')
        return response.json()
}