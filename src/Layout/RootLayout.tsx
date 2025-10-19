import Navbar from "../Components/Navbar"
import Home from "../Pages/Home"

const RootLayout = () => {
  return (
    <div>
     <Navbar/>
     <div>
        <Home/>
     </div>
    </div>
  )
}

export default RootLayout
