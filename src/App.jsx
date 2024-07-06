import React,{ Component } from "react";
import NavBar from "./NavBar";
import Category from "./Category";
import {Routes,Route} from "react-router-dom";
import Product from "./Product";


export default class App extends Component
{
    render(){
        return <React.Fragment>
            <NavBar/>
            <Routes>   
                <Route path="/" element={<Category/>} />
                <Route path="/category" element={<Category/>} />
                <Route path="/products/:categoryName" element={<Product/>} />
            </Routes>
        </React.Fragment>
    }
}