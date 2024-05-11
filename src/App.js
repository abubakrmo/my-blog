import './App.css';
import Navbar from './navbar';
import Homepage from './homepage';
import CreateBlog from './createblog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <div className="content">
          <Routes>
            <Route exact path='/' element = {<Homepage/>}></Route>
            <Route path='/createblog' element = {<CreateBlog/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
