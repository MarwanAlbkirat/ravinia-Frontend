import './App.css';
import { BrowserRouter,Route ,Routes ,Navigate } from 'react-router-dom';
import Register from './Pages/Authentication/Register';
import Slider from './Components/Slider/Slider';
import Header from './Components/Header/Header';
import Login from './Pages/Authentication/Login';
import ActiveEmail from './Pages/Authentication/ActiveEmail';
import { useSelector } from 'react-redux';
import ForgotPassword from './Pages/Authentication/ForgotPassword';
import ResetPassword from './Pages/Authentication/ReSetPassword';
import Exam from './Pages/Exam/Exam';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Navber from './Pages/Home/Navbar';
import JoinCourse from './Pages/JoinCourse/JoinCourse';
import Course from './Pages/Course/Course';
import CreateExam from './Pages/Course/Exam/CreateExam';
import Question from './Pages/Question/Question';
import EditExam from './Pages/Course/Exam/EditExam';
import PreviewExam from './Pages/Exam/PreviewExam/PreviewExam';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  const {user} = useSelector(state=>state.authentication);
  return (
    <BrowserRouter>
    {!user ? <><Slider/>  <Header/> </> : <Navber/>}
      <Routes>
        <Route path='/' exact  element={<Home/>} />
        <Route path='/login'                  element={!user ?  <Login/>                  : <Navigate to='/'/>} />
        <Route path='/register'               element={!user ?  <Register/>               : <Navigate to='/'/>} />
        <Route path='/ActiveEmail/:token'     element={!user ?  <ActiveEmail />           : <Navigate to='/'/>} />
        <Route path='/forgot-password'        element={!user ?  <ForgotPassword/>         : <Navigate to='/'/>} />
        <Route path='/reset-password/:token'  element={!user ?  <ResetPassword/>          : <Navigate to='/'/>} />
        <Route path='/Profile/:id'            element={!user ?  <Navigate to='/login'/>   : <Profile  /> }        />
        <Route path='/join-course'            element={!user ?  <Navigate to='/login'/>   : <JoinCourse/> }   />
        <Route path='/course/:id'             element={!user ?  <Navigate to='/login'/>   : <Course/> }   />
        <Route path='/create-exam/:id'        element={!user ?  <Navigate to='/login'/>   : <CreateExam/> }   />
        <Route path='/update-exam/:id'        element={!user ?  <Navigate to='/login'/>   : <EditExam/> }   />
        <Route path='/question/:id'           element={!user ?  <Navigate to='/login'/>   : <Question/> }   />
        <Route path='/exam/:id'               element={!user ?  <Navigate to='/login'/>   : <Exam/> }   />
        <Route path='/preview-exam/:id'       element={!user ?  <Navigate to='/login'/>   : <PreviewExam/> }   />
        <Route path='*'       element={<NotFound /> }   />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
