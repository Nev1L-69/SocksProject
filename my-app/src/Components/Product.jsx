const Product = ({ id, name, image, price }) => {
    return (
        <div className="product">
            <img style={{width: '180px'}} src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
    );
};

export default Product;