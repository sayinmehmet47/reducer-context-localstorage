import uuid from "uuid/dist/v1"


export const bookReducer=(state,action) => {
    
    switch (action.type) {

    case "ADD_BOOK":
        return [...state,{
            name:action.book.name,
            author:action.book.author,
            id:uuid()
        }]
    case "REMOVE_BOOK":
            return state.filter(e=>e.id!==action.id)
    default:
        return state
    }
}
console.log(bookReducer)