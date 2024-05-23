import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
    const { id } = useParams()

    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate();

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div style={{textAlign: "start"}}>Loading...</div>}
            {error && <div style={{textAlign: "start", color: "red"}}>{error}</div>}

            {blog && (
                <article className="detsContent" style={{textAlign: "start"}}>
                   <h2>{blog.title}</h2>
                   <h4>{blog.author}</h4>
                   <p>{blog.body}</p>
                   <button onClick={handleDelete}>Delete</button>
                </article>

            )} 

        </div>
     );
}
 
export default BlogDetails;