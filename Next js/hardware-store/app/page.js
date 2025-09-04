"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products") // 🛒 FakeStore API
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h1>🛍️ Our Products</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
                        <img src={product.image} alt={product.title} width="100" />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <Link href={`/products/${product.id}`}>
                            <button>🔍 View Product</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
