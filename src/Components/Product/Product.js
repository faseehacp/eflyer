import React from 'react';
import { Spin } from 'antd';

const Product = (props) => {
  return (
    <div className="products">
        {props.products.length > 0 ? props.products.map((product) => {
            return (
                <div className='product-card'>
                    <h3 className='product-title' title={product.title}>{product.title.slice(0, 18) + ".."}</h3>
                    <h3 className='product-title-mobile' title={product.title}>{product.title}</h3>
                    <p>Price <span>$ {product.price}</span></p>
                    <img src={product.image} alt="Product Image" />
                </div>
            )
        }) : 
            <Spin spinning={props.loading}>
                <p>No Products Found!</p>
            </Spin>
        }
    </div>
  )
}

export default Product