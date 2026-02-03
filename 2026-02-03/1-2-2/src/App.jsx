import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <Card />
                <Footer />
            </div>
        </>
    );
}

export default App;
