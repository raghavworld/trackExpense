import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Homepage from './components/Homepage'
import PrivateNavbar from './components/PrivateNavbar'
import PublicNavbar from './components/PublicNavbar'
import Register from './components/Register'
import Login from './components/Login'
import store from './redux/store/store'
import { useSelector } from 'react-redux'
import AddCategory from './components/Category/AddCategory'
import CategoriesList from './components/Category/CategoriesList'
export default function App() {

  //! useSelector to get currect states from store
const userToken=useSelector((state)=>state?.auth)
// console.log(userToken);
  return (

 <BrowserRouter>

 {userToken.user?<PrivateNavbar/>:<PublicNavbar/>}

<Routes >

<Route path="/" element={<Homepage/>} />
<Route path="/register" element={<Register/>} />
<Route path="/login" element={<Login/>} /> 
<Route path='/add-category' element={<AddCategory/>}/>
<Route path='/categories' element={<CategoriesList/>}/>

 
 </Routes>
 </BrowserRouter>
 )  
}
