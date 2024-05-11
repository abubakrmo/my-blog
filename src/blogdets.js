import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id)
    return ( 
        <div className="blog-details">
            {isLoading && <div style={{textAlign: "start"}}>Loading...</div>}
            {error && <div style={{textAlign: "start", color: "red"}}>{error}</div>}

            {blog && (
                <article className="detsContent" style={{textAlign: "start"}}>
                   <h2>{blog.title}</h2>
                   <h4>{blog.author}</h4>
                   <p>{blog.body}</p>
                </article>

            )} 

        </div>
     );
}
 
export default BlogDetails;