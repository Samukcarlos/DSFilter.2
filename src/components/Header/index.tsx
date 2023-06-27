import { useContext } from 'react';
import { ContextCount, ContextCountType } from '../../utils/context-count';
import './styles.css';

export default function Header() {

    const { contextCount } = useContext(ContextCount);

    return (
        <header>
            <div className="container header-content">
                <h1>DSFilter</h1>
                <p>{contextCount} produto(s)</p>
            </div>
        </header>
    );
}
