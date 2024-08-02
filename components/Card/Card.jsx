const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white px-8 py-4 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 m-4 flex-1">
      <div className="p-6 text-center flex flex-col justify-center items-center">
        <img src={image} alt={title} className="w-1/2"/>
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
