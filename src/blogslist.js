import { Link } from "react-router-dom";
const Bloglist = ({blogs, title}) => {

    return ( 
        <div className="blogslist">
            <h1 style={{textAlign: "start"}}>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blogs" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="blog-link">
                    <h2 className="blogTitle">{blog.title}</h2>
                    <h4>By {blog.author}</h4>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;