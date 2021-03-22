const initialState = []

const employeeReducer = (state= initialState, action) =>{
    
    switch(action.type){
        case 'SET_EMPLOYEE':{
           
            return [...action.payload]
        }
        case 'REMOVE_EMPLOYEE':{
            return state.filter(emp=>emp._id !==action.payload )
        }
        default:
            return [...state]
    }
}

export default employeeReducer