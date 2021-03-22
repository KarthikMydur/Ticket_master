import axios from 'axios'
import { Redirect } from 'react-router-dom'

export const getDepartment=(department)=>{
    return{
        type: 'SET_DEPARTMENT',
        payload: department
    }
}

export const startSetDepartment =()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3030/department')
            .then((response)=>{
                const department = response.data
                dispatch(getDepartment(department))
            })
    }
}

export const addDepartment =(department)=>{
    return{
        type: 'ADD_DEPARTMENT',
        payload: department
    }
}

export const startAddDepartment = (formData) =>{
    return(dispatch)=>{
        axios.post('http://localhost:3030/department/new', formData)
        .then((response)=>{
            const dept = response.data
            dispatch(addDepartment(dept))
            
        })
    }
}

export const removeDepartment=(department)=>{
    return{
        type: 'REMOVE_DEPARTMENT',
        payload: department
    }
}

export const startRemoveDepartment =(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3030/department/${id}`)
        .then(response=>{
            const dept = response.data
            dispatch(removeDepartment(dept._id))
        })
    }
}

export const updateDepartment=(dept)=>{
    return{
        type: 'UPDATE_DEPARTMENT',
        payload: dept
    }
}

export const startUpdateDepartment=(formData, id, redirect)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3030/department/${id}`, formData)
        .then(response=>{
            const dept = response.data
            dispatch(updateDepartment(dept))
            redirect()
        })
    }
}