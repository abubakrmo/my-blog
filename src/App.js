import './App.css';
import Navbar from './navbar';
import Homepage from './homepage';
import CreateBlog from './createblog';
import BlogDetails from './blogdets';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './notfound';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <div className="content">
          <Routes>
            <Route exact path='/' element = {<Homepage/>}></Route>
            <Route path='/createblog' element = {<CreateBlog/>}></Route>
            <Route path='/blogs/:id' element = {<BlogDetails/>}></Route>
            <Route path='*' element = {<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
