import React, {useState} from "react";

export default function HookList() {
    const [items, setItems] = useState([])
    return (
        <div>
            <button onClick={() => {
                setItems([...items, {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }])
            }}> Add a number </button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}