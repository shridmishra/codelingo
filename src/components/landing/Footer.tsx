
import Yt from "@/assets/social-youtube.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import Xlogo from "@/assets/social-x.svg";
export const Footer = () => {



  return <footer className="py-20 bg-black text-white text-base">
    <div className="container">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          practice<span className="text-yellow-300">JS</span>
        </h1>

        {/* <nav className="flex flex-col lg:flex-row mt-6 gap-6">
          <a href="/">About</a>
          <a href="/">Features</a>
          <a href="/">Customers</a>
          <a href="/">Updates</a>
          <a href="/">Help</a>
        </nav> */}

        <div className="flex mt-6 gap-6 justify-center">
          <Yt />
          <Pin />
          <Xlogo />
          <Linkedin />
          <Insta />


        </div>
        <p className="mt-6">
          Developed By{' '}
          <a href="https://shrid.in/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">
            Shrid Mishra
          </a>
        </p>


      </div>


    </div>
  </footer>;
};
