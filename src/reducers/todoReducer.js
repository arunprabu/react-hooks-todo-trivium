/* 
  fn that takes in state and an action
  then returns the state
*/

const todoReducer = ( state = [], action) => {

  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: new Date(),
          text: action.data,
          completed: false
        }
      ];

    case 'GET_TODOS':
      return state;

    case 'EDIT_TODO':
      return state;
    
    case 'DELETE_TODO':
      return state;

    default: 
      return state;
  }  

}

export default todoReducer;