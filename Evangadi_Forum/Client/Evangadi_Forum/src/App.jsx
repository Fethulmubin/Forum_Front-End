import Home from '../src/Pages/Home/Home'
import Sign_up from './Pages/sign_up/sign_up'
import Log_in from './Pages/log_in/log_in.jsx'
import Add_question from './Pages/Add_question/Add_question.jsx'
// import Answer from './Pages/Answer/Answer.jsx'
import Navbar from './Pages/Navbar/Navbar.jsx'
import { useEffect,useState, createContext } from 'react'
import axios from './Utility/axios_config.js'
import { Route, Routes ,useNavigate} from 'react-router-dom'
import Que_Ans from './Pages/Ans/Que_Ans.jsx'


export const client = createContext();

function App() {
  const token = localStorage.getItem('token')
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const {data}  = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setUser(data);
      // console.log(data)
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  }
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
    <Navbar/>
    <client.Provider value={{ user, setUser }}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Sign_up/>}/>
      <Route path='/login' element={<Log_in/>}/>
      <Route path='/ask' element={<Add_question/>}/>
      <Route path='/qs/:question_id' element={<Que_Ans/>}/>
    </Routes>
    </client.Provider> 
    </>
  )
}

export default App
