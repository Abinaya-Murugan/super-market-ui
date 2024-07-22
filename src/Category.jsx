import { render } from "@testing-library/react";
import axios from "axios";
import { error } from "jquery";
import React,{useState,useEffect,Component} from "react";
import B2 from './images/image.png';
import B3 from './images/ingredients-healthy-foods-selection-white-wooden-background_35641-3000.jpg';
import './index.css';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

function Category()
{
    const[data, setData] = useState();
    const navigate = useNavigate();
    

    const handleCategoryClick = (categoryName) => {
        var url="/products/"+categoryName;
        navigate(url);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/productCategory').then(
            response => {
                setData(response.data);
            }
        ).catch(error => {
            console.error(error);
        })
    }, [])
    return (
        <div className="mt-6">
            <img src={B3} className="banner-img" width="1519" height="450"/>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginRight:'70' }}>
            {
                data?.map((data) => 
                (
                   <div>
                    <div key={data.catId} className="text-center">
                        <img src={data.image} className="category-img"/>
                        <h3 className="h4 uppercase mt-4 mb-4">{data.name}</h3>
                        <div className="mb-4">
                        <p className="text-wrap">
                            {data.description}
                        </p>
                        <button class="btn btn-secondary" onClick={()=>handleCategoryClick(data.catId)}>Browse Products</button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    
}


export default Category;
