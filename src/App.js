import { Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


  
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Addpost from './components/Addpost';
import Edit from './components/Edit';
import Postdetails from './components/PostDetail';
const App=()=> {
  return (
    <div className="App">

      <ToastContainer/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Addpost />} />
      <Route path='/details/:id' element={<Postdetails/>}></Route>
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
      
       
         
        
        
      
    </div>
  );
}

export default App;
  