import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setProducts } from "../store/slices/products.slice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then(res => setProduct(res.data))
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <div className="rute p-5 pb-0 text-left d-flex gap-2 align-items-center"><Link to={'/'} >Home</Link><div className="separator"></div> <h6 className="m-0">{product.title}</h6></div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-5">
            <Carousel className="p-5 m-5" style={{ width: '100%' }} activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item
                className="imgs-carousel"
              >
                <img
                  src={product.images?.[0].url}
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                className="imgs-carousel"
              >
                <img
                  src={product.images?.[1].url}
                  alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                className="imgs-carousel"
              >
                <img
                  className="imgs-carousel"
                  src={product.images?.[2].url}
                  alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-5 offset-1">
            <div className="row">
              <h4 className="text-muted">{product.brand}</h4>
              <div className="title row p-3 py-0">
                <h3>{product.title}</h3>
              </div>
            </div>
            <div className="description row">
              <p>{product.description}</p>
            </div>
            <div className="row">
              <div className="col-6">
                <h4 className="text-muted">Price</h4>
                <div className="title row p-3 py-0">
                  <h3>${product.price}</h3>
                </div>
              </div>
              <div className="col-6">
                <h4 className="text-muted">Quantity</h4>
                <div className="quantity">
                  <button onClick={() => parseInt(quantity) >= 2 ? (setQuantity(parseInt(parseInt(quantity) - 1))) : 0}>-</button>
                  <input type="text" value={quantity} onChange={e => parseInt(e.target.value) >= 1 ? setQuantity(parseInt(e.target.value)) : setQuantity(0)} />
                  <button onClick={() => setQuantity(parseInt(parseInt(quantity) + 1))}>+</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 add-to-cart">
                <button>Add to Cart
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;