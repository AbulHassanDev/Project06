
import {Link} from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const AboutPage = () => {
  return (
    <> 
    <Navbar/>
       <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full text-center p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We are a global delivery service providing fast and reliable shipping solutions for businesses and individuals.
          With years of experience, we ensure your packages reach their destination safely and on time.
        </p>
        
        {/* Mission Statement */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To provide exceptional delivery services that exceed customer expectations through reliability, efficiency, and innovative solutions.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
            <li>Customer Commitment: We develop relationships that make a positive difference in our customers lives.</li>
            <li>Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
            <li>Teamwork: We work together to meet the needs of our customers and to help the company win.</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-4">
            Our team consists of dedicated professionals committed to delivering the best service. We are passionate about what we do and strive for excellence.
          </p>
          {/* Team Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="rounded-full shadow-lg border-2 " />
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="rounded-full shadow-lg" />
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="rounded-full shadow-lg" />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 italic mb-2">Absolutely fantastic service! Highly recommended.</p>
          <p className="text-gray-600 font-semibold">- John Doe, Business Owner</p>
          <p className="text-gray-600 italic mb-2">My packages always arrive on time. Great job!</p>
          <p className="text-gray-600 font-semibold">- Jane Smith, Regular Customer</p>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Join Us Today!</h2>
          <p className="text-gray-600 mb-4">Experience our top-notch delivery services and see the difference for yourself.</p>
          <div className='bg-blue-500 p-4 text-white font-sans text-bold rounded-lg shadow-lg hover:bg-blue-950 transition duration-200 cursor-pointer'>
          <Link to="/signup">Sign Up Now</Link>
          </div>
          
        </div>
      </div>
    </section>
    <Footer/>

    </>

  );
};

export default AboutPage;
