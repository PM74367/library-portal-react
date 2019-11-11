import React,{Component} from 'react';
import Navbar from './Components/navbar.jsx';
import MainPage from './Components/mainPage.jsx';
import AddBook from './Components/addBook.jsx';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Calendar from 'react-calendar'
class App extends Component{
  constructor()
    {
        super();
    this.state={
        bookList:[
          {name:"B1",author:"A1",version:"1.1"},
          {name:"B2",author:"A2",version:"1.2"},
          {name:"B3",author:"A3",version:"1.3"},
          {name:"B4",author:"A4",version:"1.4"}
        ]
        }
        this.remove=this.remove.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.saveChanges=this.saveChanges.bind(this);
        this.n=React.createRef();
        this.a=React.createRef();
        this.v=React.createRef();
    }
    remove(p)
    {
      let arr=this.state.bookList;
      arr.splice(p,1);
        this.setState(
            {
               bookList:arr
            }
        )
    }
    handleAdd(n,a,v)
    {            
      let arr=this.state.bookList;
      arr.push({name:n,author:a,version:v});
        this.setState(
          {
            bookList:arr
          }
        )
    }
    handleEdit(i)
    {
      let temp={name:<input type='text' defaultValue={this.state.bookList[i].name} ref={this.n} />,
      author:<input type='text' defaultValue={this.state.bookList[i].author} ref={this.a}/>,
      version:<div><input type='text' defaultValue={this.state.bookList[i].version} ref={this.v} /><br /><button onClick={()=>{this.saveChanges(i)}}>Save</button></div>}
      let arr=this.state.bookList;
      arr[i]=temp;
      this.setState(
        {bookList:arr}
      )
    }
    saveChanges(i){
      let nm=this.n.current.value;
      let at=this.a.current.value;
      let vr=this.v.current.value;
      let temp={name:nm,author:at,version:vr};
      let arr=this.state.bookList;
      arr[i]=temp;
      this.setState({
        bookList:arr
      })
    }
  render()
  {
    return <React.Fragment>
     
      <BrowserRouter>
      <Navbar /> 
      <Switch>
      <Route exact path='/books'>
      <MainPage bookList={this.state.bookList} rmv={this.remove} edt={this.handleEdit}/>
      </Route>
      <Route exact path='/addbook'>
        <AddBook handleSubmit={this.handleAdd}/>
        </Route>
      <Route exact path='/'>
          <h1 className='container-fluid'>Welcome to the library</h1>
        </Route>
        <Route>
          <h1>Enter valid address</h1>
        </Route>
        </Switch>
      </BrowserRouter>
     </React.Fragment>
  }
}
export default App;