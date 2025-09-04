"use client";
import { useCart } from "@/app/context/CartContext";

export default function Cart() {
    const { cart } = useCart();
    console.log("Cart data: ", cart); 
    return (
        <div>
            <h1>Your Cart 🛒</h1>
            {cart.length === 0 ? <p>Cart is empty</p> : (
                <ul>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <img src={item.image} alt={item.title} width="100" />
                            <p>Price: ${item.price}</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}
