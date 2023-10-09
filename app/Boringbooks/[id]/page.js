


import "app/Home/Home.css"
import "app/[id]/Page.css"
import React from "react";
import axios from "axios";






async function getDatashit() {
  const res = await fetch( `${process.env.URL_}/api/techknowledge`, {cache:"no-store"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 




async function getData(id) {

  const res = await fetch(`${process.env.URL_}/api/techknowledge/${id}`, {cache:"no-store"})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const page = async ({params}) => {

  if(!process.env.URL_){
    return null;
  }

else{
  
 
const data = await getData(params.id)





const datashit = await getDatashit()






  return (
<>
<div className="main">
<div className="nav">

<a href="/Boringbooks">

<h1> Title!</h1>
</a>
      
  <div className="profile"></div>
 </div>

    <div className="aboutpage">
      <div className="thumb">
      <img className='thumbs' src={data[0].img} alt="" />
     <div className="details">
     <p >Product Details</p>
      <p>ISBN-13: 9781421522449</p>
      <p>Publisher: Viz Media</p>
      <p>Publisher Imprint: Viz Media</p>
      <p>Publisher Date: {data[0].date_publish}</p>
      <p>No of Pages: {data[0].Pages}</p>
      <p>Genre: {data[0].Genre}</p>
     </div>
      

      </div>
      <div className="jankari">
        <div className="heading">
          <h1>{data[0].title}</h1>
          <p>Author: {data[0].author} | Publisher: Viz Media |</p>
        </div>
        <div className="about-book">
        <h4>About the Book</h4>
          <p>{data[0].desc}</p>
        </div>
<a href={data[0].download_URL}>
        <button >Download<i className="ri-download-line"></i></button>
         </a>


      </div>

      

    </div>

   <div className="track">

    <div className="trackshit">
    <h2>More Books </h2>
    <p>and More Jaaz!!</p>
    </div>

    


   <div className="horizontaltrack">

   {datashit.map((item)=>(<>
        <a  key={item} href={`/${item.title}`}>

     

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
    
</div>


</>
     







  )}
}

export default page
