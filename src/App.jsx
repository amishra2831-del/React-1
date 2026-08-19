
<<<<<<< HEAD


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

   </>
=======
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
        <UserContextProvider>
          <h1>React Chai aur code</h1>
          < Login/>
          <Profile/>
        </UserContextProvider>
    </>
>>>>>>> 9dd5bde (Add React Context API project)
  )
}

export default App
