import React,{Component} from 'react'
import RecentBooks from './recentBooksList.jsx'
import {Link} from 'react-router-dom'
class MainPage extends Component{
    
    render(){
        return (
            <div className="col">
                <RecentBooks bookList={this.props.bookList} onEdit={this.props.edt} onDelete={this.props.rmv}/>
                <Link to='/addbook'>
                    <center><button>Add Book</button></center>
                </Link>
            </div>
        )
    }
}
export default MainPage;