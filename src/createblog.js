import { useState } from "react";
import { json } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Oclad Ochino')
    const [isLoading, setisLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        const createdBlog = {title, body, author}
        setisLoading(true)

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(createdBlog)
        })
        .then(()=>{
            console.log('blog created')
            setisLoading(false)
        })
    }

    return ( 
        <div className="create-blog">
            <h2 style={{textAlign: 'start'}}>Create new blog</h2>
            <form className="createform" onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange = {e => setTitle(e.target.value)}
                />

                <label>Body:</label>
                <textarea
                    required
                    value={body}
                    onChange= {e => setBody(e.target.value)}
                ></textarea>

                <label>Author:</label>
                <select
                    required
                    value={author}
                    onChange= {e => setAuthor(e.target.value)}
                >
                    <option value="Oclad Ochino">Oclad Ochino</option>
                    <option value="Belarus Canning">Belarus Canning</option>
                    <option value="Saint Posh">Saint Posh</option>
                </select>
               {!isLoading && <button type="submit">Create</button>}
               {isLoading && <button type="submit">Creating blog...</button>}
            </form>
        </div>
     );
}
 
export default CreateBlog;