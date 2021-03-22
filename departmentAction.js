import axios from 'axios'

export const getDepartment = (data) =>{
    return { type: 'GET_DEPARTMENT', payload: data}
}

export const startGetDepartment = () =>{
    return(dispatch)=>{
        axios.get('http://localhost:3030/department')
            .then(response=>{
                const dept = response.data
                dispatch(getDepartment(dept))
            })
    }
}

