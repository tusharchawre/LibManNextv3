import Link from 'next/link'
import React from 'react'


const Menu = () => {
  return (
    <div>
      
<div className="menu">
<Link href="/Home"><p>Home</p></Link>
  
<Link href="/Boringbooks"><p>BoringBooks</p></Link>
<Link href="/about"><p>About</p></Link>

</div>
    </div>
  )
}

export default Menu




