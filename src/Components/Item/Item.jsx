import React from 'react';

const Item = ({ item }) => {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <img src={item.imagen} className="img-fluid" alt={item.title}/>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="price">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            <a href="#" className="btn btn-primary agregar-carrito">Agregar al carrito</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
