"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Lenis from '@studio-freight/lenis'
import 'app/Home/Home.css'
import Menu2 from 'app/components/Menu2.js'
import './App.css'
import gsap, { Bounce, Power2, Power3 } from 'gsap';
import Image from 'next/image';









const page = () => {

  useEffect(() => {
   
/// Scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




  
  window.addEventListener("scroll",function(){
    
    let parallax = document.getElementById("books")
    var book1 = parallax.querySelector(".book1")
    var book2 = parallax.querySelector(".book2")
    var book3 = parallax.querySelector(".book3")
    
    
    var scrollpos = this.scrollY;
    //   console.log(scrollpos)
    //  parallax.animate(
      //   {transform: `translate(0%,-${scrollpos}%) `},
      //   {duration:1200,fill:"forwards"}
      //  )
      
      
      var diffrot = Math.floor(scrollpos*0.1)
      
      
      
      
      gsap.from(book1,{
        
        rotate: -diffrot,
        ease: Power3
      })
      
      gsap.from(book2,{
        rotate: diffrot,
        ease: Power3
      })
      
      gsap.from(book3,{
        rotate: -diffrot,
        ease: Power3
      })
      
      
      
      gsap.to(parallax,{
        y:`-${scrollpos}*2`,
        ease: Power3,
        
      })
    });
    
    
    
    
    
    
    
    window.onmousedown = (e) => {
      const track = document.getElementById("image-track");
      
      track.dataset.mouseDownAt = e.clientX;
    }
    
    window.onmouseup = () => {
      const track = document.getElementById("image-track");
      
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    }
    
    window.onmousemove = (e) =>{
      const track = document.getElementById("image-track");
      
      if(track.dataset.mouseDownAt === "0")return;
      
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta/maxDelta) * -100,
      nextpercentageconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
      nextpercentage = Math.max(Math.min(nextpercentageconstrained,0),-100);
      
      
      
      track.dataset.percentage = nextpercentage;
      
      Math.floor(nextpercentage)
      
      track.animate({
        transform: `translate(${Math.floor(nextpercentage)}%,-50%)`
      },{
        duration: 1200, fill: "forwards"
      });
      
      track.style.transform = `translate(${nextpercentage}%,-50%)`;
      
      for(const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextpercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    }
    
    
    window.addEventListener( "mousemove",function(dets){
      document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    })
    
    
    
    




  }, []);











return (
  <>
 <div className="main">
    <img src="/assets/Cursor.png" className='cursor' alt="" />

        <Menu2 className="bruh" />

        <div className="pehlashit">

    <div className='scrollbar'></div>
    <div className='LandingPage ' id="parallax"   >

    <div className="herotext">
    <div className='herotext1'>
    <p >"Unlock the world of endless tales,</p>
     <p>where books come to download and </p>
     <p>dreams set sail."</p>
    </div>

   
    </div>


    <div id='books' >
    <img className='book1'  src='/assets/Book1.png' draggable="false"></img>
    <img className='book2'  src='/assets/Book2.png' draggable="false"></img>
    <img className='book3'  src='/assets/Book3.png' draggable="false"></img>

   

    </div>

    

    </div>
        </div>

    <div className='showcase'  >
    {/* <div className="doodles" >
    <img className='doodle' src="/assets/Books!!.png" alt="" />
    <img className='doodle2' src="/assets/Novels!.png" alt="" />
    <img className='doodle3' src="/assets/E-books....png" alt="" />
    </div> */}
   

    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
<img className='drag' src="/assets/Arrow 10.png" alt="" />
    <img src='/assets/pullup.png' draggable="false"></img>
    <img className='image' src='/assets/tracks/bookt1.jpg' draggable="false"></img>

    <img className='image' src='/assets/tracks/bookt2.jpg' draggable="false"></img>
    <img className='image' src='/assets/tracks/bookt3.jpg' draggable="false"></img>
    <img className='image' src='/assets/tracks/bookt4.jpg' draggable="false"></img>
    <img className='image' src='/assets/tracks/bookt5 2.jpg' draggable="false"></img>

    </div>

    </div>
<div className="info">
<div className="section">
<img  className="info-img" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="" />
<div>
<h3>"Download the World,One Book at a Time!"</h3>
<p>Here you can download books for free!! <br />These pdfs are just a click away. <br />GOOOOOO!!</p>

</div>

</div>
<div className="section sec2">
<div>
<h3>"Endless Books, Countless Worlds."</h3>
<p>Books that aint similar to those cheesy self-help books. <br />Go read something. <br />We also have some boring books aligned... <br />Click that "BoringBooks" option on Nav.</p>

</div>
<img  className="info-img" src="https://plus.unsplash.com/premium_photo-1677187301444-fd793e33e8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1523&q=80" />

</div>
</div>
<div className="explore">
<h1>Here's Passport to Literary Adventures.</h1>
 <img src="/assets/Arrow 20.png" alt="" /> 


 </div>
    </div> 

    </>
)
}

export default page
