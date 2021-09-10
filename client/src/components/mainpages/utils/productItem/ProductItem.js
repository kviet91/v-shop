import React from 'react'
import BtnRender from './btnRender'

const ProductItem = ({ product, isAdmin, deleteProduct, handleCheck }) => {
    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked} onClick={() => { handleCheck(product._id) }}
                />
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem
