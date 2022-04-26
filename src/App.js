import { Route, Routes } from 'react-router';
//components
import Users from "./components/Users";
import AboutUsers from "./components/AboutUsers"
//styles
import './App.css';



function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/aboutUsers' element={<AboutUsers />} />
      </Routes>
    </div>
  );
}

export default App;
