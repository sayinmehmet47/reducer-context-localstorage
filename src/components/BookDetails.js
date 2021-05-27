import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = (props) => {
  const {dispatch} = useContext(BookContext);
  return (
    <div>
      <li onClick={()=>dispatch({type:"REMOVE_BOOK",id:props.book.id
    })}>
        <div className="author">{props.book.author}</div>
        <div className="name">{props.book.name}</div>
      </li>
    </div>
  );
};

export default BookDetails;
