import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
    return (
        <div className="contact marginF">
            <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/LOGO.png?alt=media&token=0d99007e-f9e1-46fb-8c4e-dcd8a78c2e31" alt="logo" />
            <div className="datos">
                <ul>
                    <h3>Contacto</h3>
                    <li>Dirección:</li>
                    <li>Horario de atención: 10hs a 20hs de lunes a sábados</li>
                    <li>
                        <Link to={'/Contact'}>Contactános</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contacto;
