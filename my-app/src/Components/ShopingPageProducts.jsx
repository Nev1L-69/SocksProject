import Product from './Product'; // Assuming you have a Product functional component

const ShoppingPageProducts = ({ products }) => {
    return (
        <section className="shopping-page-products">
            {products.map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                />
            ))}
        </section>
    );
};

export default ShoppingPageProducts;