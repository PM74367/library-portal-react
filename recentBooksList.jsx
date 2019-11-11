import React,{Component} from 'react';
class RecentBooksList extends Component{
    

    render()
    {
        return(
            <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Version</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.bookList.map((book,index) =>
                        {
                            return <tr key={index}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.version}</td>
                                <td>
                                <button onClick={()=>this.props.onEdit(index)}>Edit</button>
                                    <button onClick={()=>this.props.onDelete(index)}>Delete</button>
                                    </td>
                            </tr>;
                        }   
                    )}    
            
                </tbody>
            </table>
            </div>
        )
    }
}
export default RecentBooksList;