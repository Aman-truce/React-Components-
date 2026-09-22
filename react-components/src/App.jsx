import React ,{ createContext, useContext, useState } from 'react'
import './App.css'
import Practice from './Practice';

const ThemeContext = createContext();
function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("light")
  const promise = new Promise((resolve,reject)=>{
    resolve("here value")
  })

  console.log( promise.then(value=>{
    return value
  }),'checking_here_0012')
 

  return (
    <Practice/>
  )
}

const Layout = React.memo(function () {
  console.log("layout_rerender")
  return <Navbar />   // Layout doesn't USE theme, just passes it
})

const Navbar = React.memo(()=>{
   console.log("Navbar_rerender")

  return <Avatar /> 
})

function Avatar() {
  const { theme } = useContext(ThemeContext)
  console.log("Avatar_rerender")
  return <div>Avatar with {theme} theme</div>
}

export default App
