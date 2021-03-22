import React from 'react'
import {Link, BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import CustomerList from './components/customer/List'
import CustomerShow from './components/customer/Show'
import CustomerNew from './components/customer/New'
import CustomerEdit from './components/customer/Edit'
import DepartmentList from './components/department/List'
import DepartmentShow from './components/department/Show'
import DepartmentNew from './components/department/New'
import DepartmentEdit from './components/department/Edit'
import EmployeeList from './components/employee/List'
import EmployeeShow from './components/employee/Show'
import EmployeeNew from './components/employee/New'


function App(props){
  return(
    <BrowserRouter>
      <div>
        <Link to ='/'>Home</Link>
        <Link to='/customers'>Customer</Link>
        <Link to = '/departments'>Department</Link>
        <Link to = '/employees'>Employees</Link>

        <Switch>
        <Route path='/customers' component={CustomerList} exact={true}/>
        <Route path ='/customers/new' component={CustomerNew} exact={true}/>
        <Route path = '/customers/edit/:id' component={CustomerEdit} exact={true}/>
        <Route path='/customers/:id' component={CustomerShow} exact={true}/>

        <Route path = '/departments' component={DepartmentList} exact={true}/> 
        <Route path = '/departments/new' component={DepartmentNew} exact={true}/>
        <Route path = '/departments/edit/:id' component={DepartmentEdit} exact={true}/>
        <Route path = '/departments/:id' component={DepartmentShow} exact={true}/>

        <Route path ='/employees' component = {EmployeeList} exact={true}/>
        <Route path='/employees/new' component={EmployeeNew} exact={true}/>
      
        <Route path ='/employees/:id' component = {EmployeeShow} exact={true}/>
        
      
        
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App