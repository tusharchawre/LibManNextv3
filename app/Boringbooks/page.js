
import React from 'react'

import "app/Home/Home.css"
import Menu2 from '../components/Menu2'
import Navbar from '../components/Navbar';


export const fetchCache = 'force-no-store';

async function getData() {
  const res = await fetch( `${process.env.URL_}/api/techknowledge`, {next: { revalidate: 1 }})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = async () => {
  if(!process.env.URL_){
    return null;
  }
   
  else{



  const data = await getData()


  
  
  return (
    <div>

<Navbar />


 <Menu2 />

 <h1 className="recommedations">E-books</h1>


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
  )  }
}

export default page
