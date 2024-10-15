// src/pages/HomePage.js
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ServicesPage from "./ServicesPage";

const HomePage = () => {
  return (
    <> 
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-4xl text-center p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-800"> <strong>Welcome </strong> to Our Delivery Service</h1>
          <p className="text-lg text-gray-600 mb-8">
            Reliable, fast, and secure deliveries. Track your shipment or register to start sending your items!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/signup" className="bg-blue-500 text-white px-6 py-2 rounded shadow">
              Submit Items
            </a>
            <a href="/tracking" className="bg-green-500 text-white px-6 py-2 rounded shadow">
              Track Shipment
            </a>
          </div>
        </div>
      </section>
      <ServicesPage/>
      <Footer/>
    </>
  );
};

export default HomePage;
