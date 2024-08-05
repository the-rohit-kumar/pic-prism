import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login" 
import SellerDashboard from "./pages/SellerDashboard"
import BuyerDashboard from "./pages/BuyerDashboard"
import Navbar from "./component/Navbar"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/seller/profile" element={<SellerDashboard/>}/>
      <Route path="/buyer/profile" element={<BuyerDashboard/>}/>
      
    </Routes>
    
    
    
    
    
    </BrowserRouter>
    </>
  )
}