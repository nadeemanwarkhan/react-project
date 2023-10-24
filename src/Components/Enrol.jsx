import React from 'react'

const Enrol = () => {
  return (
  <div className=" section-padding bg-[url('../images/all-img/section-bg-16.html')] bg-cover  bg-no-repeat lg:mt-[136px]">
  <div className="container lg:-mt-[250px] xl:pb-[136px] lg:pb-20 pb-10">
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] bg-white shadow-box14 rounded-md
        divide-x-2 divide-[#E4EEED] py-20">
      <div className=" text-center ">
        <h2 className="text-secondary font-bold ">
          <span className=" counter">82</span>K+
        </h2>
        <span className="block text-black font-semibold">Enrolled Students</span>
      </div>
      {/* single counter */}
      <div className="  text-center">
        <h2 className="text-secondary font-bold ">
          <span className=" counter">348</span>+
        </h2>
        <span className="block text-black font-semibold">Academic Programs</span>
      </div>
      {/* single counter */}
      <div className=" text-center">
        <h2 className="text-secondary font-bold ">
          <span className=" counter">125</span>+
        </h2>
        <span className="block text-black font-semibold">Winning Award</span>
      </div>
      {/* single counter */}
      <div className="  text-center">
        <h2 className="text-secondary font-bold ">
          <span className=" counter">37</span>+
        </h2>
        <span className="block text-black font-semibold">Certified Students</span>
      </div>
      {/* single counter */}
    </div>
  </div>
</div>

  )
}

export default Enrol