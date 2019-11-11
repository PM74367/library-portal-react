import React,{Component} from 'react';
class RecentBooksList extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            bookList:[
            { author:"1",name:"hii",version:3.122,id:0 },
            { author:"2",name:"hello",version:3.221,id:1 },
            { author:"3",name:"byy",version:9.87,id:2 }

            ]
        }
        this.remove=this.remove.bind(this);
    }
   remove(p)
   {
       this.setState(
           {
               booklist : delete this.state.bookList[p],
           }
       )
   }
      
    render()
    {

        return(
        <table className="table">
            <thead>
                <tr>
                    <th>Book Id</th>
                    <th>Book Name</th>
                </tr>
            </thead>
            <tbody>
                {this.state.bookList.map(book =>
                {
                    return  <tr>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.version}</td>
                    <td><button onClick={() => this.remove(book.id)}>Delete</button></td>
                </tr>

                 } )}
            </tbody>
        </table>
        )
    }
}
export default RecentBooksList;