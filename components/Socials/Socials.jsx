import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="w-full mt-10 md:mt-0 flex flex-col items-start bg-golden p-12">
      <h3 className="text-2xl font-bold mb-4 text-white">Follow Me</h3>
      <div className="flex items-center space-x-4">
        <a href="https://www.instagram.com/_arihanoor/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full hover:bg-lightGolden transition duration-300">
          <FaInstagram className="text-black text-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/arihanoor/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full hover:bg-lightGolden transition duration-300">
          <FaLinkedin className="text-black text-3xl" />
        </a>
        <a href="https://github.com/ArihaNoor" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full hover:bg-lightGolden transition duration-300">
          <FaGithub className="text-black text-3xl" />
        </a>
      </div>
      <p className='mt-8 font-bold text-lg text-black'>Developed By: Ariha Noor🌸</p>
    </div>
  );
};

export default Socials;
