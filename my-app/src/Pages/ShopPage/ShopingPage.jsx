import React from 'react';
import ShoppingPageProducts from '../../Components/CompForShopingPage/ShopingPageProducts';
import SocksSalt from '../../Images/SocksSalt.jpg';
import './ShopPage.css';

const products = [
    {
        id: 1,
        name: 'Socks',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 2,
        name: 'Socks',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 3,
        name: 'Socks',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 4,
        name: 'Socks',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 5,
        name: 'Socks',
        image: SocksSalt,
        price: 10.0,
    },{
        id: 6,
        name: 'Socks',
        image: SocksSalt,
        price: 10.0,
    },
    // ... other products
];

const ShoppingPage = () => {
    return (
        <div className="ShoppingPage">
            <div style={{margin:'0px auto', width:'80%'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{width:'200px', border:'1px solid black', padding:'30px', marginTop:'20px'}}>
                        <h3 >Length</h3>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>PED SOCKS</p></div>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>CREW</p></div>
                        <hr/>

                        <h3 >Material</h3>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>COTTON</p></div>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>BAMBOO</p></div>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>MERINO WOOL</p></div>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>WOOL</p></div>
                        <hr/>

                        <h3 >Sizes</h3>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>WOMEN'S REGULAR</p></div>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>MEN'S REGULAR</p></div>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>SMALL/MEDIUM</p></div>
                        <div style={{display:'flex'}}><input type="checkbox" id="checkbox" name="checkbox"/> <p>LARGE/EXTRA LARGE</p></div>

                    </div>
                    <div style={{marginLeft:'20px', width:'60%'}}>
                        <h2 style={{textAlign:'center'}}>STAFF PICKS</h2>
                        <div style={{margin:'0px auto'}}>
                            <p style={{textAlign :"center"}}>If you're wondering how hard it would be to choose a favorite design when working for a sock brand with thousands of options, the answer is: very. We recently asked our team what their all-time favorite designs were. You can find them here.</p>
                        </div>
                        <hr />
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <p><input style={{border:'none', width:'100px', height:'16px'}} type="text" placeholder="Search"/></p>
                            <p>6 Products</p>
                            <p>Sort by</p>

                        </div>

                        <ShoppingPageProducts products={products} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingPage;