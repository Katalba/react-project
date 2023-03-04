import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <>
            <div className="emptyCart">
                <h2>Tu carrito está vacío <i class="fa-solid fa-heart-crack"></i></h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark goToStore">Continuar comprando</button></Link>
            </div>
            <hr />
            <div className="categoCart">
                <h2> La catego que la rompe este verano <i className="fa-regular fa-face-smile-wink"></i></h2>
                <Link to={'/categoria/vestidos'}>
                    <div className="emptyCart-Dresses">
                        <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/emptyCart-dresses%20(2).png?alt=media&token=b179e3b1-6974-4231-9380-54829e479228" alt="vestido" />
                        <div className="title-categorieDos">
                            <h4>Vestidos</h4>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default EmptyCart;
