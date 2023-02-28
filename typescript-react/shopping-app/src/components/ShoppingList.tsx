import React from "react";
import Item from "../models/Item";

interface ShoppingListProps 
{
    items: Item[];
}

export default function ShoppingList({ items }: ShoppingListProps) : JSX.Element {
    return (
    <div>
        <h1>Shopping List</h1>
        <ul>
            {items.map((items) => (
                <li key={items.id}>{items.product} - {items.quantity}</li>
            ))}
        </ul>
    </div>
    );
}