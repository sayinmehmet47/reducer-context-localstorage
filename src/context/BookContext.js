import React, { useReducer, createContext, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [book, dispatch] = useReducer(bookReducer, [],()=>{
    const localData=localStorage.getItem("books");
    return localData?JSON.parse(localData):[]
  });
  // const [book, setBook] = useState([
  //     {author:"orhan pamuk",name:"masumiyet muzesi",id:1},
  //     {author:"ihsan oktay anar",name:"amat",id:2}
  // ])
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(book));
  }, [book]);
  return (
    <BookContext.Provider value={{ book, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
