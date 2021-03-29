import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/about">Hakkımızda</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
                <li><Link to="/news">Haberler</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;