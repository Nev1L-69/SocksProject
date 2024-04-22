const Product = ({ id, name, image, price }) => {
    return (
        <div className="product">
            <img style={{width: '180px', marginLeft:'15%'}} src={image} alt={name} />
            <h3 style={{textAlign:'center'}}>{name}</h3>
            <p style={{textAlign:'center'}}>${price}</p>
        </div>
    );
};

export default Product;