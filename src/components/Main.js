import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
    return (
        <div>
            메인페이지입니다
            <ul>
                <li><Link to="/product/1/shoes?search=productName&q=demo#test">1번 상품</Link></li>
                <li><Link to="/product/2/notebook?search=greengreen&q=abc#2번test">2번 상품</Link></li>
            </ul>
        </div>
    );
};

export default Main;