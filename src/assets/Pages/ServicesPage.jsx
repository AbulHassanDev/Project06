




const services = [
    {
      title: 'Express Delivery Services',
      description: 'Get your parcels delivered quickly and efficiently, right to your doorstep.',
      image: 'src/assets/1.jpg',
    },
    {
      title: 'Next-Day Delivery',
      description: 'We ensure your packages arrive the very next day, no matter the distance.',
      image: 'src/assets/2.jpg',
    },
    {
      title: 'International Shipping',
      description: 'Reliable shipping services to various international destinations.',
      image: 'src/assets/3.jpg',
    },
    {
      title: 'Track and Trace Options',
      description: 'Stay updated with real-time tracking of your shipments.',
      image: 'src/assets/4.jpg',
    },
    {
      title: 'Secure Parcel Handling',
      description: 'We handle your packages with utmost care, ensuring their safety.',
      image: 'src/assets/5.jpg',
    },
  ];
  
  const ServicesPage = () => {
    return (
      <>
      
      
     
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-4">
        <div className="max-w-4xl w-full text-center p-6">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            We offer a wide range of delivery services tailored to meet your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
                <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-t-lg" />
                <h2 className="text-xl font-semibold mt-4 text-gray-800">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      </>

    );
  };
  
  export default ServicesPage;
  