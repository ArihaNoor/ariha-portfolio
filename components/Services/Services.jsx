import Card from '../Card/Card';

const Services = () => {
  const services = [
    {
      image: "/responsive.png",
      title: "Responsive Web Design",
      description: "Creating visually appealing and fully responsive websites that work seamlessly across all devices to provide a consistent user experience."
    },
    {
      image: "/spa.png",
      title: "Single Page Applications (SPA)",
      description: "Developing dynamic and highly interactive SPAs using modern frameworks like React.js to deliver fast and responsive user experiences."
    },
    {
      image: "/API.png",
      title: "API Development and Integration",
      description: "Building robust and scalable APIs to enable seamless integration and communication between different parts of your application."
    },
    {
      image: "/SD.png",
      title: "Custom Software Development",
      description: "Providing tailored software solutions to meet your unique business requirements and drive your success."
    },
    {
      image: "/ecommerce.png",
      title: "E-commerce Solutions",
      description: "Developing comprehensive e-commerce platforms with features like shopping carts, payment gateways, and inventory management."
    }
  ];

  return (
    <div id='services' className="bg-lightGolden py-20 w-full">
      <h1 className="text-5xl font-bold mb-12 uppercase text-center text-gray-800">Services - <span className='text-golden'>I Enjoy</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full md:w-[90%] mx-auto">
        {services.map((service, index) => (
          <Card 
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
