import React from 'react';
import "./App.css"
class AddProduct extends React.Component{
  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
    
  }
  onSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.nameInput.value ,this.priceInput.value);
    this.nameInput.value="";
    this.priceInput.value=""
  }
  render(){
      return(
 <div >
          <h3>Add Product</h3>
<form onSubmit={this.onSubmit}>
    <input className="input" placeholder="Name"  ref={nameInput=>this.nameInput=nameInput}/>
    <input   className="input"placeholder="Price" ref={priceInput=>this.priceInput=priceInput}/>
    <button className="btn btn-primary">Add Product</button>
    </form>      
      <hr />
      </div>);
    
    }
  }
   export default AddProduct;
