import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
class Navbar extends Component{

  
render(){
    return <div className="container-fluid">
      <br />
      <nav className="navbar navbar-expand 1g navbar-dark bg-dark">
      <Link className='navbar-brand' to='/'>Home</Link>
      <Link className='navbar-brand' to='/books'>Books</Link>
      <Link className='navbar-brand' to='/addbook'>AddBook</Link>
      </nav>
      <br />
    </div>
}

    
}
export default Navbar;