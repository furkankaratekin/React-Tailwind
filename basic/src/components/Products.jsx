import React from "react";
import aboutImg from "../assets/mobile-icon.png";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import tesla from '../assets/tesla.png';


const Products = () => {
  return (
    <div id="product">
      {/*  about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did{" "}
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* company state */}
      <div className="px-4 lg:px-14 max-w-screen-3xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between sm:items-center justify-around">
          <div className="md:w-1/3 justify-center ml-10">
            <img src={tesla} alt="" />
          </div>

          {/*  stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralGrey mb-8">British Dragon Boat Racing Association</p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img src={company1} alt="" className="cursor-pointer " />
                  <img src={company2} alt="" className="cursor-pointer " />
                  <img src={company3} alt="" className="cursor-pointer " />
                  <img src={company4} alt="" className="cursor-pointer " />
                  <img src={company5} alt="" className="cursor-pointer " />
                  <img src={company6} alt="" className="cursor-pointer " />
                  <div className="flex items-center gap-6">
                    <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Meet all customers</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
