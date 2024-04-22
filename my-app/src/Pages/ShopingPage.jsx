import React from 'react';
import ShoppingPageProducts from '../Components/ShopingPageProducts';
import SocksSalt from '../Images/SocksSalt.jpg';

const products = [
    {
        id: 1,
        name: 'Socks And Sandals',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 2,
        name: 'Socks And Sandals',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 3,
        name: 'Socks And Sandals',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 4,
        name: 'Socks And Sandals',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 5,
        name: 'Socks And Sandals',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 6,
        name: 'Socks And Sandals',
        image: SocksSalt,
        price: 10.0,
    },
    // ... other products
];

const ShoppingPage = () => {
    return (
        <div className="shopping-page">
            <ShoppingPageProducts products={products} />
        </div>
    );
};

export default ShoppingPage;