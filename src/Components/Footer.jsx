import React from 'react';


const Footer = () => {
  return (
    <div className="bg-black py-4 text-center text-gray-300 relative" style={{paddingBottom: "0"}}>
      <div className="container mx-auto">
      <div className="pt-5 sm:pt-30 pb-0 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-row justify-center items-center mb-0 sm:mb-0">
          <p className="max-sm:text-sm max-md:mx-10 text-primary-dark dark:text-primary-light mb-5">
          &copy; {new Date().getFullYear()} AOU Samson Clement "Artificial Intelligence: A Knowledge Hub"
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
