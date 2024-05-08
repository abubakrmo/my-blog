import Bloglist from "./blogslist";
const Homepage = () => {
    const blogs = [
        {title: "Running home", author: "Chinua Achebe", id: 1},
        {title: "The sun is falling", author: "Brahim Diaz", id: 2},
        {title: "Save Nigeria", author: "David Hundeyin", id: 3},
    ]
    return ( 
        <div className="home">
            <Bloglist blogs = {blogs}/>
        </div>
     );
}
 
export default Homepage;