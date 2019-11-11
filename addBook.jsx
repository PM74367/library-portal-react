import React,{Component} from 'react';
import { Form, Button } from 'react-bootstrap';
class AddPhoto extends Component{
  constructor()
  {
    super();
    this.nameinput=React.createRef();
    this.author=React.createRef();
    this.version=React.createRef();
  }

    render(){
        return <div className='container-fluid'>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Book Name</Form.Label>
    <Form.Control type="text" ref={this.nameinput} placeholder="Enter name of book" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Author</Form.Label>
    <Form.Control type="text" ref={this.author} placeholder="Enter name of author" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Book Version</Form.Label>
    <Form.Control type="text" ref={this.version} placeholder="Enter version of book" />
  </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="All details are correct" />
  </Form.Group>
  <Button variant="primary" onClick={()=>this.props.handleSubmit(this.nameinput.current.value,this.author.current.value,this.version.current.value)} className='col'>
    Add
  </Button>
</Form>
        </div>
    }
}
export default AddPhoto;