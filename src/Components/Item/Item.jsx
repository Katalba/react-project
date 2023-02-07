import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="col-4">
        <Link style={{ textDecoration: 'none' }} to={`/Item/${item.id}`}>
          <div className="card">
            <img src={item.imagen} className="img-fluid" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="price">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Item;
