import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 text-right rounded border-2">
            <div className="container mx-auto flex flex-col items-center justify-center text-center">
                <div className="flex flex-col items-center justify-center">
                    <Link to="/" className="text-2xl font-bold mb-4">Urban Harvest Hub</Link>
                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <Link to="/" className="text-lg mb-2">Home</Link>
                    <Link to="/categories" className="text-lg mb-2">Categories</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;