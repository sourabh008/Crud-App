import React, { Component } from 'react';

import './App.css';
import ProductItem from "./ProductItem";
import AddProduct from "./addProduct";

const products = []

if(!localStorage.getItem('products')){
  localStorage.setItem('products', JSON.stringify(products))}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:  JSON.parse(localStorage.getItem('products'))
    }
    this.onDelete = this.onDelete.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this)
  }
  componentWillMount() {
    const products = this.getProduct();
    this.setState({
      products
    })
  }
  getProduct() {
    return this.state.products;
    ;
  }
  onAdd(name, price) {
    const products = this.getProduct(); 
    products.push({
      'name': name,
      'price': price
    });
    this.setState({
      products
    });
   
     localStorage.setItem('products', JSON.stringify(products))
     
  }
  
  onEditSubmit(name,price,orignalName){
    const products=this.getProduct();
   let products1=products.map(product => {
      if(product.name===orignalName){
        product.name=name;
        product.price=price;
      }
      return products;
    });
    this.setState({products1})
  }
  onDelete(name) {
    
    const products = this.getProduct();
    const filterProduct = products.filter(product => {
      return product.name !== name;
    })
    this.setState({
      products: filterProduct
    });
    localStorage.setItem('products', JSON.stringify(filterProduct))
  }
  render() {
    return (
      <div className="product-manager">
        <h1>Product Manager</h1>
        <AddProduct onAdd={this.onAdd} />
        {this.state.products.map(product => {
          return (
            <ProductItem key={product.name}
              {...product}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />);
        })}
        <div className="footer"> <p>Design by: {" "}Sourabh Kamboj</p></div>
      </div>
    );
  }
}
export default App;
