import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Product = (props) => {
    //useParms() 파라미터값을 가지고 있는 객체를 반환
    const {productId,productName} = useParams();
    
    //useLoction() 쿼리스트링 값을 가지고 있는 객체를 반환
    const location = useLocation();
    console.log(location);

    return (
        <div>
            {productId}상품페이지입니다.
            <div>{productName}페이지입니다.</div>
            <ul>
                <li>hash: {location.hash}</li>
                <li>pathname: {location.pathname}</li>
                <li>search: {location.search}</li>
                <li>key: {location.key}</li>
            </ul>
        </div>
    );
};

export default Product;