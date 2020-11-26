import { ADD_TODO, DELETE_TODO, FILTER_TODO, UPDATE_TODO } from "./Actions";
import { todos } from "./states";



 let reducer = (state = todos, action) => {
 let newTodos;
  switch (action.type) {
    case FILTER_TODO:

    
    
    
    
    
    
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      console.log(newTodos)
      return newTodos;
    case UPDATE_TODO:
      newTodos = [...state];
      let index = -1;
      
     for (let i = 0; i < newTodos.length; i++) {
      index++;   
      if(newTodos[i].id == action.payload.id){
     break;
   }
   
  }
  if(index != -1) {
    newTodos[index] = action.payload;
    return newTodos;
  }
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter(todo=> todo.id != action.payload)
      return newTodos;
    default:
      
  }
  return state;
};

export default reducer;