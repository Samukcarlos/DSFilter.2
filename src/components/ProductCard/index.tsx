import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export default function ProductCard({ product }: Props) {

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
        </div>
    )
}
