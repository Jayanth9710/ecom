import React from 'react'

function ProductCard(props) {
    return (
        <div className="col-lg-4">
                <div className="card">
                  <img src="http://placehold.it/200x100" class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <p>Rs.{props.data.price}</p>
                    <a href="#" className="btn btn-primary" onClick={() => {props.handleCart(props.data.id)}}>Add to Cart</a>
                  </div>
                </div>
              </div>
    )
}

export default ProductCard