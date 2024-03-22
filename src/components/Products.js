import Pagination from "./Pagination";
import ProductsHeader from "./Productshead";
import Questions from "./Questions";
import QuestionsProvider from "../context/questions.context";

function Products() {
    return (
        <main className="w-fit mx-4 md:mx-auto my-3">
            <QuestionsProvider>
                <ProductsHeader />
                <Questions />
                <Pagination />
            </QuestionsProvider>

        </main>
    )
}
export default Products;