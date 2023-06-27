import './styles.css';
import ProductCard from "../ProductCard";
import { ProductDTO } from '../../models/product';

type Props = {
    products: ProductDTO[];
}

export default function Listing({ products }: Props) {

    return (
        <div className="card product-listing-container">
            {
                products.map(item => <ProductCard key={item.id} product={item} />)
            }
        </div>
    )
}
