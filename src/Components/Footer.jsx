import React from 'react';


const Footer = () => {
  return (
    <div className="bg-black py-4 text-center text-gray-300 relative" style={{paddingBottom: "0"}}>
      <div className="container mx-auto">
      <div className="pt-5 sm:pt-30 pb-0 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-row justify-center items-center mb-12 sm:mb-28">
          <p className="max-sm:text-sm max-md:mx-10 text-primary-dark dark:text-primary-light mb-5">
          &copy; {new Date().getFullYear()} AOU Samson Clement "Artificial Intelligence: A Knowledge Hub"
          </p>
          {/* <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-l sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
