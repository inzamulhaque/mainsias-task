import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://github.com/inzamulhaque/mainsias-task/blob/master/public/data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return [products];
};

export default useProducts;