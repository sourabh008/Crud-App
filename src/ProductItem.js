import React,{ Component } from 'react';
import "./App.css"

class ProductItem extends React.Component{
  constructor(props){
    super(props);
    this.onDelete=this.onDelete.bind(this);
    this.onEdit=this.onEdit.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
    this.state={
      onEdit:false
    }
  }
  onDelete(){
    const {onDelete,name} =this.props;
    onDelete(name);
  }
  onEdit(){
    this.setState({onEdit:true})
  }
  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value ,this.priceInput.value,this.props.name);
    this.setState({onEdit:false})
  }
  render(){
      const { name ,price}=this.props
  return(
<div>
  {this.state.onEdit ? (
   <form onSubmit={this.onEditSubmit}>
   <input className="input" placeholder="Name" defaultValue={name} ref={nameInput=>this.nameInput=nameInput}/>
   <input className="input" placeholder="Price"  defaultValue={price}ref={priceInput=>this.priceInput=priceInput}/>
   <button className="btn btn-primary">Save</button>
   </form> 
  ):( 
<div>
  <ul>
    <li> Product Name:{" "}{name} <br/> Price:{" "}{price}  <br/> <button onClick={this.onEdit} className="btn btn-primary">Edit</button> {" "}
    <button  onClick={this.onDelete}className="btn btn-primary">Delete</button></li>
  </ul>
  </div>
  )}
</div>); 
    }
  }
export default ProductItem;
