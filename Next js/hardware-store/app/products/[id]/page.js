"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { useCart } from "@/app/context/CartContext";

export default function ProductDetail() {
    const { addToCart } = useCart();
    const params = useParams();
    const productId = params?.id;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productId) {
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then((res) => res.json())
                .then((data) => setProduct(data));
        }
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} width="200" />
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={() => {
                addToCart(product)
                window.location.href = "/cart";
                }}>🛒 Add to Cart</button>
        </div>
    );
}
