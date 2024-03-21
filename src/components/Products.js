import Pagination from "./Pagination";
import ProductsHeader from "./Productshead";
import Questions from "./Questions";

function Products() {
    return (
        <main className="w-fit mx-auto my-3">
        <ProductsHeader/>
        <Questions/>
        <Pagination/>
        </main>
    )
}
export default Products;