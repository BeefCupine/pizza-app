import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"

function Header() {
    return (
    <div className="header">
        <h1>pizzers</h1>
    </div>
    )
}


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Menu() {
    return(
        <div className="menu">
            <h2>Our Menu</h2>
            <Pizza 
            name="Focaccia" 
            description="A classic Italian flatbread. Known for its dimpled surface, it is drizzled with olive oil and often topped with rosemary and coarse salt."
            picture="/pizzas/focaccia.jpg"
            />
            <Pizza 
            name="Funghi" 
            description="A funghi pizza is a mushroom pizza. It's typically topped with tomato sauce, mozzarella, and sautéed mushrooms, often with a hint of garlic or herbs."
            picture="/pizzas/funghi.jpg"
            />
            <Pizza 
            name="Margherita" 
            description="The classic Neapolitan pizza. It's famously simple, featuring tomato sauce, fresh mozzarella cheese, fresh basil, and a drizzle of olive oil, representing the colors of the Italian flag."
            picture="/pizzas/margherita.jpg"
            />
            <Pizza 
            name="Prosciutto" 
            description="A Margherita base (tomato and mozzarella) topped with thin slices of salty, cured prosciutto crudo (ham), often added after baking to keep its delicate texture."
            picture="/pizzas/prosciutto.jpg"
            />          
            <Pizza 
            name="Salamino" 
            description="A pizza topped with spicy salami or pepperoni. The Salamino provides a savory, slightly spicy kick that pairs well with the melted cheese and tomato sauce."
            picture="/pizzas/salamino.jpg"
            />
            <Pizza 
            name="Spinaci" 
            description="A Spinaci is a spinach pizza. It's commonly topped with tomato sauce, mozzarella, and fresh or sautéed spinach, sometimes accompanied by garlic or ricotta cheese."
            picture="/pizzas/spinaci.jpg"
            />                          
        </div>
    )
}

function Pizza(props) {
    return <>
        <p>{props.name}</p>
        <img src={props.picture} alt={props.name}></img>
        <p>{props.description}</p>
    </>;
}


function Footer(){
    const currHour= new Date().getHours();
    const OpenHours=   currHour >= 10 && currHour < 22;

    return(
        <footer className="footer">
            {OpenHours ? "We're Open!" : "Sorry, we're Closed." } 
        </footer>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />); 
