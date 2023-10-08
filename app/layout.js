import './globals.css'

import 'remixicon/fonts/remixicon.css'




export const metadata = {
  title: 'Library Management',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
