import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')


    return ( 
        <div className="create-blog">
            <h2 style={{textAlign: 'start'}}>Create new blog</h2>
            <form action="">
                <input 

                />
                <textarea
                ></textarea>
                <select>
                    <option value="Benjamin Pavard">Benjamin Pavard</option>
                    <option value="Oglos Danielle">Oglos Danielle</option>
                </select>
                <button type="submit">Create</button>
            </form>
        </div>
     );
}
 
export default CreateBlog;