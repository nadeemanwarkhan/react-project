import React from 'react'

const Blogs = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-5.html')] bg-cover bg-no-repeat bg-center">
  <div className="container">
    <div className="lg:flex justify-between items-center ">
      <div className="mb-3">
        <div className="mini-title">Team Member</div>
        <div className="column-title ">
          Our Latest
          <span className="shape-bg">Blogs</span>
        </div>
      </div>
      <div className="mb-3">
        <a href="#" className=" btn btn-primary">Read All Blogs</a>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-7">
      <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
        <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
          <img src="assets/images/all-img/blog-1.png" alt className=" w-full h-full object-cover rounded-t-[8px]" />
          <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education</span>
        </div>
        <div className="course-content p-8">
          <div className="flex   lg:space-x-10 space-x-5 mb-5">
            <a className=" flex items-center space-x-2" href="blog-single.html">
              <img src="assets/images/svg/admin.svg" alt />
              <span>Admin</span>
            </a>
            <a className=" flex items-center space-x-2" href="blog-single.html">
              <img src="assets/images/svg/calender.svg" alt />
              <span>Jan 29, 2022</span>
            </a>
          </div>
          <h4 className=" text-xl mb-5 font-bold">
            <a href="blog-single.html" className=" hover:text-primary transition duration-150">
              Professional Mobile Painting and Sculpting
            </a>
          </h4>
          <a href="blog-single.html" className=" text-black font-semibold hover:underline transition duration-150">Read More</a>
        </div>
      </div>
      <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
        <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
          <img src="assets/images/all-img/blog-2.png" alt className=" w-full h-full object-cover rounded-t-[8px]" />
          <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education</span>
        </div>
        <div className="course-content p-8">
          <div className="flex   lg:space-x-10 space-x-5 mb-5">
            <a className=" flex items-center space-x-2" href="blog-single.html">
              <img src="assets/images/svg/admin.svg" alt />
              <span>Admin</span>
            </a>
            <a className=" flex items-center space-x-2" href="blog-single.html">
              <img src="assets/images/svg/calender.svg" alt />
              <span>Jan 29, 2022</span>
            </a>
          </div>
          <h4 className=" text-xl mb-5 font-bold">
            <a href="blog-single.html" className=" hover:text-primary transition duration-150">
              Professional Ceramic Moulding for Beginners
            </a>
          </h4>
          <a href="blog-single.html" className=" text-black font-semibold hover:underline transition duration-150">Read More</a>
        </div>
      </div>
      <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
        <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
          <img src="assets/images/all-img/blog-3.png" alt className=" w-full h-full object-cover rounded-t-[8px]" />
          <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education</span>
        </div>
        <div className="course-content p-8">
          <div className="flex   lg:space-x-10 space-x-5 mb-5">
            <a className=" flex items-center space-x-2" href="blog-single.html">
              <img src="assets/images/svg/admin.svg" alt />
              <span>Admin</span>
            </a>
            <a className=" flex items-center space-x-2" href="blog-single.html">
              <img src="assets/images/svg/calender.svg" alt />
              <span>Jan 29, 2022</span>
            </a>
          </div>
          <h4 className=" text-xl mb-5 font-bold">
            <a href="blog-single.html" className=" hover:text-primary transition duration-150">
              Education Is About Create Leaders For Tomorrow
            </a>
          </h4>
          <a href="blog-single.html" className=" text-black font-semibold hover:underline transition duration-150">Read More</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blogs