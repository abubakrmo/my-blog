import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Oglos Danielle')


    return ( 
        <div className="create-blog">
            <h2 style={{textAlign: 'start'}}>Create new blog</h2>
            <form action="">
                <input 
                type="text" 
                required
                value={title}
                onChange = {e => setTitle(e.target.value)}
                />
                <textarea
                required
                value={body}
                onChange = {e => setBody(e.target.value)}
                ></textarea>
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
            <p>{author}</p>
        </div>
     );
}
 
export default CreateBlog;