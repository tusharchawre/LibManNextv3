import './globals.css'

import 'remixicon/fonts/remixicon.css'




export const metadata = {
  title: 'Library Management',

}

export default function RootLayout({ children }) {
  if(!process.env.URL_){
    return null
  }
  else{
    return (
      <html lang="en">
        <body >{children}</body>
      </html>
    )
  }
  }
 
