import Bloglist from "./blogslist";
import useFetch from "./useFetch";
const Homepage = () => {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {isLoading && <div style={{textAlign: "start"}}>Loading...</div>}
            {error && <div style={{textAlign: "start", color: "red"}}>{error}</div>}
            {blogs && <Bloglist blogs = {blogs} title = {"My blog"}/>} 
        </div>
     );
}
 
export default Homepage;