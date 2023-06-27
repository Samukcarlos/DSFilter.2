import './styles.css';
import Filter from "../../components/Filter";
import Listing from '../../components/Listing';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../models/product';
import * as productService from '../../services/product-service';
import { ContextCount } from '../../utils/context-count';

type QueryParams = {
    min: number;
    max: number;
}

export default function ListingBody() {

    const { setContextCount } = useContext(ContextCount);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParam] = useState<QueryParams>({
        min: 0,
        max: Number.MAX_VALUE
    });

    useEffect(() => {
        const newList = productService.findByPrice(queryParams.min, queryParams.max);
        setProducts(newList);
        setContextCount(newList.length);
    }, [queryParams]);

    function handleFilter(minValue: number, maxValue: number) {
        setQueryParam({ ...queryParams, min: minValue, max: maxValue });
    }

    return (
        <main>
            <section id="listing-body" className="container">
                <Filter onFilter={handleFilter} />
                <Listing products={products} />
            </section>
        </main>
    );
}
