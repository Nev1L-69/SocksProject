import Product from './Product';
import './StyleForProducts.css';

const ShoppingPageProducts = ({ products }) => {
    return (
        <section className="shopping-page-products">
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default ShoppingPageProducts;