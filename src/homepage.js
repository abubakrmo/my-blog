import Bloglist from "./blogslist";
import { useState } from "react";
const Homepage = () => {
    const [blogs, setBlogs] = useState([
        {title: "Running home", author: "Chinua Achebe", id: 1},
        {title: "The sun is falling", author: "Brahim Diaz", id: 2},
        {title: "Save Nigeria", author: "David Hundeyin", id: 3},
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id !== id)
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            <Bloglist blogs = {blogs} title = {"My blog"} handleDelete = {handleDelete}/>
        </div>
     );
}
 
export default Homepage;