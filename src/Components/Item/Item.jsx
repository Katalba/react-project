import React from 'react';

const Item = ({item}) => {
    return (
        <section>
        <div id="title">
          <h2>Vestidos</h2>
        </div>
        <div className="small-container">
          <div className="d-flex flex-wrap">
            <div className="col-4">
              <div className="card">
                <img src={item.imagen} className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="price">{item.precio}</p>
                  <a href="#" className="btn btn-primary agregar-carrito">Agregar al carrito</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Item;
