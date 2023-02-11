import { useState } from "react";
import CreateBook from "./createBook"; 
import BookList from "./bookList";
function App(){
    const [books,setbooks] = useState([{ id : 1,title :'book1'}]);
    const updateBooks = (title)=>{
        const updatedArray = [...books,{id:Math.round(Math.random()*9999),title : title}];
        setbooks(updatedArray);

    }
    const deleteBookByid = (id)=>{
        const updatedbook = books.filter((book)=>{
            return book.id !==id;
        }
        );
        setbooks(updatedbook);

    }
    
    return(
        <div className="app">
        <BookList ArrayOfBooks = {books} deleteBook = {deleteBookByid}/>
        <CreateBook propUpdateBooks = {updateBooks}/>
        
        
        </div>
        
    )
};

export default App;