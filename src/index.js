import React from "react";
import ReactDom from "react-dom/client";

function App() {

    return (
        <div>
            <h1>Pizzers</h1>
            <Pizzafocaccia />
            <HeaderFocaccia />
            <Pizzafunghi />
            <HeaderFunghi/>
        </div>
    )
}

function HeaderFocaccia() {
    return (
        <div>
            <h2>Focaccia</h2>
            <h4>Focaccia is a flat, oven-baked Italian bread made from flour, water, yeast, and salt, and typically flavored with olive oil</h4>
        </div>
    )
} 

function HeaderFunghi() {
    return (
        <div>
            <h2>Funghi</h2>
            <h4>Funghi pizza is Italian for "mushroom pizza," typically made with a tomato sauce base, mozzarella cheese, and mushrooms as the main topping. </h4>
        </div>
    )
} 

function Pizzafocaccia() {
    return (
      <img src="/pizzas/focaccia.jpg" alt="Focaccia" />
    )
}

function Pizzafunghi() {
    return (
        <img src="/pizzas/funghi.jpg" alt="Funghi" />
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />); 
