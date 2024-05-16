import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Oglos Danielle')


    return ( 
        <div className="create-blog">
            <h2 style={{textAlign: 'start'}}>Create new blog</h2>
            <form action="">
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
                onChange = {e => setBody(e.target.value)}
                ></textarea>

                <label>Author:</label>
                <select
                required
                value={author}
                onChange={e => setAuthor(e.target.value)}
                >
                    <option value="Benjamin Pavard">Benjamin Pavard</option>
                    <option value="Oglos Danielle">Oglos Danielle</option>
                </select>
                <button type="submit">Create</button>
            </form>
        </div>
     );
}
 
export default CreateBlog;