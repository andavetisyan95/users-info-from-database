import { Route, Routes } from 'react-router';
//components
import Users from "./components/Users"
import './App.css';



function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
