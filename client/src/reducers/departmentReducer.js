const initialState = []

const departmentReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'SET_DEPARTMENT': {
            return [...action.payload]
        }
        case 'ADD_DEPARTMENT':{
            return [...state, action.payload]
        }
        case 'UPDATE_DEPARTMENT':{
            return state.map(department=>{
                if(department._id == action.payload._id){
                    return { ...department, ...action.payload}
                } else {
                    return {...department}
                }
            })
        }
        case 'REMOVE_DEPARTMENT': {
            return state.filter(dept=>dept._id !== action.payload)
        }
        default:
            return [...state]
    }
}
export default departmentReducer