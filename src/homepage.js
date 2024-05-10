import Bloglist from "./blogslist";
import { useState } from "react";
import useFetch from "./useFetch";
const Homepage = () => {

    const {data: blogs} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {blogs && <Bloglist blogs = {blogs} title = {"My blog"}/>}
            
        </div>
     );
}
 
export default Homepage;