import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">

                <img src="https://images.livemint.com/img/2022/04/22/600x338/india_covid_vaccine_1650548441899_1650637974603.jpg" alt="" />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <img src="https://wiki.meramaal.com/wp-content/uploads/2018/04/aarogyasri-scheme-696x304.jpg" alt="" style={{width:'600px',height:'143px'}}/>
              </div>
              
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
               
                <img src="https://assets.thehansindia.com/h-upload/2022/03/27/1283951-free-health-camp.webp" alt="" style={{ width: '600px', height: '143px' }} />

              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">

                <img src="https://purijankari.in/wp-content/uploads/2021/03/special-checkup9816-1.jpg" alt="" style={{ width: '600px', height: '143px' }} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
