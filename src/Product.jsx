import { render } from "@testing-library/react";
import axios from "axios";
import { error } from "jquery";
import React,{useState,useEffect,Component} from "react";
import { useParams } from 'react-router-dom';


const Product = ({ product }) => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        var url="http://localhost:8080/products/"+categoryName;
        axios.get(url)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [categoryName]);

    return (
        <div className="text-center">
            <h2>Products List</h2>
            <div>
            {products?.map(product => (
                    <div className="text-center">

                        <img src={product.image} className="category-img"/>
                        <div className="mb-4">
                        <h3 className="h4 uppercase mt-4 mb-4">{product.name}</h3>
                        
                        <p>
                            {product.description}
                        </p>
                        <p>$ {product.price}</p>
                        <button className="btn btn-secondary">Buy Now</button>
                        </div>
                        </div>
                 ))}
            </div>
        </div>
    );
};


export default Product;