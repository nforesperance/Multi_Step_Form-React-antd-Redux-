  const initState ={
      data:[{id:'0',content:'This is the first element'}],
      chosenIds:[]
  }
 
  const rootReducer = (state = initState,action) =>{
      switch (action.type) {
          case 'ADD':{
           let idAlready = state.chosenIds.indexOf(action.payload.id)>-1;
          //making a copy of the sta chosenIds and data
          let data =state.data.slice();
          if(idAlready){
              // chosenIds = chosenIds.filter(id=>id!==action.payload.id);
              data = data.filter(el=>el.id!==action.payload.id);
              return{
                ...state,
                data:[...data,action.payload]
              };
          }
          else{
            return{
                ...state,
              data:[...state.data,action.payload],
              chosenIds:[...state.chosenIds,action.payload.id]
          } 
        
          }
          }
          case 'UPDATE':{
             return{
               ...state,
               data:[...action.payload]
             }
          }            
      
          default:{
            return state
          }
               
        }
  }
 
  export default rootReducer