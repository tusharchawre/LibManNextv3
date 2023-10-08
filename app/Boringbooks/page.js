"use client"
import React from 'react'
import Menu from 'app/components/Menu'
import "app/Home/Home.css"



async function getData() {
  const res = await fetch( process.env.URL + '/api/techknowledge', {cache:"no-store"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = async () => {

   

  const data = await getData()


  
  
  return (
    <div>
            
 <div className="nav">

 <a href="/Home">

<h1> Title!</h1>
</a>
  <div className="profile"></div>
 </div>
 <Menu />


    <div className="thumbpane">
    {data.map((item)=>(<>
        <a  key={item} href={`/Boringbooks/${item.title}`}>

     

        <div className="thumbs">
        <div className="gradient">
       
       <p>{item.title}</p>

        </div>
            <img src={item.img} alt="" />
        </div>
        </a>
        </>

    ))}

    </div>

    </div>
  )
}

export default page