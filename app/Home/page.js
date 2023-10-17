
import React from "react";
import Link from "next/link";

import "./Home.css"

import axios from "axios";

import Menu2 from "../components/Menu2";
import Navbar from "../components/Navbar";


// let booksArr = [["AfterTheBanquet","/assets/Home-Img/AfterTheBanquet.jpg"],
// ["The Alchemist","/assets/Home-Img/The Alchemist.jpg"],
// ["Alone","/assets/Home-Img/Alone.jpg"],
// ["Dorian Gray","/assets/Home-Img/Dorian Gray.jpg"],
// ["Dune","/assets/Home-Img/Dune.jpg"],
// ["The Subtle Art of Not Giving A Fuck","/assets/Home-Img/FuckYou.jpg"],
// ["Welcome to the Jungle","https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/12/attachment_137125302-e1670235568295.jpeg?auto=format&q=60&fit=max&w=930"]
// ]


async function getData() {
  const res = await fetch(`${process.env.URL_}/api/books`, {cache:"no-store"})

 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 






const page = async () => {
    // const [books, setbooks] = useState([])
    if(!process.env.URL_){
      return null;
    }




    else{

    
    const data = await getData()










// const booksRun2 = booksArr.map((link,i)=>{
//     return()
// })

// const booksRun = books.map((link)=>{
    
//     let thumbnail = link.volumeInfo.imageLinks && link.volumeInfo.imageLinks.thumbnail
//     let title = link.volumeInfo.title
// console.log(books)

//     return(
//         <>
//         <a href={`/${title.replaceAll(" ","-")}`}>

     

//         <div className="thumbs">
//         <div className="gradient">
       
//        <p>{title}</p>

//         </div>
//             <img src={thumbnail} alt="" />
//         </div>
//         </a>
//         </>
       

        
//     )

// })



  return (
    <>
       
<Navbar />

 <Menu2 />

 <h1 className="recommedations">Our Recommendations</h1>


    <div className="thumbpane">
    {data.map((item)=>(<>
    <a href={`/${item.title}`}>


<div className="thumbs">
  <div className="gradient">
 
 <p>{item.title}</p>

  </div>
      <img src={item.img} alt="" />
  </div>
    </a>

        </>

    ))}




    {/* {booksRun2} */}
    {/* {booksRun} */}
    
        {/* <div className="thumbs">
        <div className="gradient">
        <p>After The Banquet</p>

        </div>
            <img src="src/assets/Home-Img/AfterTheBanquet.jpg" alt="" />
        </div>
        <div className="thumbs">
        <div className="gradient">
            <p>Alone</p>
        </div>

        <img src="src/assets/Home-Img/Alone.jpg" alt="" />

        </div>
        <div className="thumbs">
        <div className="gradient">
        <p>The Alchemist</p>

        </div>

        <img src="src/assets/Home-Img/Alchemist.jpg" alt="" />
        </div>
        <div className="thumbs">
        <div className="gradient">
        <p>Dorian Gray</p>

        </div>

        <img src="src/assets/Home-Img/DorianGray.jpg" alt="" />
        </div>
        <div className="thumbs">
        <div className="gradient">
        <p>Dune</p>

        </div>

        <img src="src/assets/Home-Img/Dune.jpg" alt="" />
        </div>
        <div className="thumbs">
        <div className="gradient">
        <p>Subtle Art of Not Giving a Fuck</p>

        </div>

        <img src="src/assets/Home-Img/FuckYou.jpg" alt="" />
        </div>
        <div className="thumbs"></div>
        <div className="thumbs"></div>
        <div className="thumbs"></div>
        <div className="thumbs"></div> */}


    </div>

       </>
  )}
}

export default page
