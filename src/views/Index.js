/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import ChatBot from "react-simple-chatbot";
export default function Index() {
  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our website We Hope you are fine",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "Maps",

          label: "Maps",

          trigger: "Maps",

        },

        { value: "data", label: "data", trigger: "data" },

      ],

    },

    {

      id: "Maps",

      message:

        "thanks for choosing maps we will guide you through your nearby services",

      end: true,

    },

    {

      id: "data",

      message:

        "Thanks for data option we will guide you through your personal information",

      end: true,

    },

  ];
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Health Care in INDIA
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                About 4,300 deaths occur every day due to poor treatment. Out of 86 lakh deaths globally from conditions treatable by health care, poor quality care is responsible for an estimated 50 lakh deaths while the remaining 36 lakh deaths are due to poor 
                treatment. Its an inititaive to make the use of technology to improve health care conditions.
              </p>
              <div className="mt-12">
                {/* <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  More About NGO
                </a> */}
                {/* <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Their Contribution
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-400px "
          src="https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Free-Global-Health-Care-PSD-Logo-Template-PNG-Transparent.png"
          alt="..."
        />
      </section>







      <ChatBot steps={steps} />
      <Footer />
    </>
  );
}
