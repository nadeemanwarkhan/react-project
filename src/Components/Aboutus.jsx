import React from 'react'

const Aboutus = () => {
  return (
   <div className="container">
  <div className="grid grid-cols-12 lg:gap-10 gap-6 ">
    <div className="xl:col-span-7 lg:col-span-6 col-span-12">
      <img src="assets/images/all-img/testi-left.png" alt draggable="false" />
    </div>
    <div className="xl:col-span-5 lg:col-span-6 col-span-12 flex flex-col justify-center ">
      <div className="mini-title">Testimonial</div>
      <h4 className="column-title ">
        What Says Our
        <span className="shape-bg">
          Students</span>
        About Us
      </h4>
      <div>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There are many
        variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
        humour.
      </div>
      <div className="mt-12">
        <a href="#" className="btn btn-primary">View All Reviews</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Aboutus