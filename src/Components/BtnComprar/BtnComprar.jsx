
import { Link } from "react-router-dom";

const BtnComprar = ({ shop }) => {
  return (
    <Link style={{ textDecoration: 'none' }} to='/products'>
      <button className="button-header" >
        <p className="button-compra">{shop}</p>
      </button>
    </Link>

  );
}

export default BtnComprar;
