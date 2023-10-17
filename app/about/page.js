import React from 'react'
import "app/Home/Home.css"
import "app/about/about.css"

import Menu2 from '../components/Menu2'

const page = () => {
  return (
    <div>
    <>
      <div className="cover">
<h1  className='recommedations'>About</h1>
<p>This is a Online Library Management Web App. This was made by SE CSD 2026 Students as Mini Project. This is powered by Next.js and MongoDB. You can download books from this site for free. We know that piracy is wrong and should not be practiced or promoted. This website was made for just educational purposes and we stand against piract and illegal downloading of books. <br />
Thank you.</p>

      </div>
    </>
      <Menu2 />
    </div>
  )
}

export default page
