import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
//import App from './App.jsx'
import{ createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
  import Github, {gitinfoloader} from './components/Github/github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     Element: <layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },{
//         path: "about",
//         element: <About/>
//       },

//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element= {<layout/>}>
    <Route path='' element= {<Home/>}></Route>
    <Route path='about' element= {<About/>}></Route>
    <Route path='contact' element= {<Contact/>}></Route>
    <Route path='user/:userid' element= {<User/>}></Route>
        <Route
       loader= {gitinfoloader}
         path='github' 
         element= {<Github/>}></Route>


  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
=======
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> 9dd5bde (Add React Context API project)
  </StrictMode>,
)
