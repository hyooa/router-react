import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                <li><NavLink to="/" className={({isActive})=>isActive? "okay": ""}>메인페이지</NavLink></li>
                {/* a태그로 작성하면 페이지가 새로고침되는 것을 알 수 있다~!! */}
                                                                        {/* 띄어주기 */}
                <li><NavLink to='/product/*/*' className={({isActive})=> "green " + (isActive? "okay": "")}>상품페이지</NavLink></li>
                <li><NavLink to='/detail' className={({isActive})=>isActive? "okay": ""}>상품 자세히보기</NavLink></li>
                <li><NavLink to='/info' className={({isActive})=>isActive? "okay": ""}>info 정보보기</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;