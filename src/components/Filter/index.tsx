import { useState } from "react";

type Props = {
    onFilter: Function;
}

type FormData = {
    min?: number;
    max?: number;
}

export default function Filter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({});

    function handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(formData.min || 0, formData.max || Number.MAX_VALUE);
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <input
                        name="min"
                        value={formData.min || ""}
                        type="text"
                        placeholder="Preço mínimo"
                        onChange={handleChange}
                    />
                    <input
                        name="max"
                        value={formData.max || ""}
                        type="text"
                        placeholder="Preço máximo"
                        onChange={handleChange}
                    />
                    <button type="submit">Filtrar</button>
                </div>
            </form>
        </div>
    );
}
