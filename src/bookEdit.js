import { useState } from "react";
import BookShow from "./bookShow";

function BookEdit({book,handleEditClick}){
    const [t,setT] =useState(book.title);
    const handleChange = (event) =>{
        setT(event.target.value);
        //book.title = t;
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('new title',t)
        book.title = t;
        handleEditClick();
    }
    const handleClick= ()=>{
        handleSubmit();

    }
    
    return(
        
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Edit Title</label>
                <input className="input" value={t} onChange={handleChange} />
                <button className="button is-primary" >Save</button>
            </form>
        
    )
};
export default BookEdit;