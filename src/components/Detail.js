import React from 'react';
import { Outlet } from 'react-router-dom';

const Detail = (props) => {
    return (
        <div>
            상품 자세히 보기입니다.
            <Outlet/>
        </div>
    );
};

export default Detail;