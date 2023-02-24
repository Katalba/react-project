import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contacto = () => {
    return (
        <div className="contact">
            <img src="./img/LOGO.png" alt="logo" />
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
