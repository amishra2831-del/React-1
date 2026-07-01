import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "hitesh",
    age: 21
  }

  let newarr = [1,2,3]

  return (
    <>
        <h1 className='bg-green-400  text black'>Tailwind Css </h1>
        <Card channel = "chai aur code" btntext = "click me" />
        <Card/>
        

   


    </>
  )
}

export default App
