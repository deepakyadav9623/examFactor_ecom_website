import React from "react";
import AboutUSImage from "../../assets/images/exploreCatalouge/images/neetkinematics.svg";

function AboutUS({ aboutUS }) {
  console.log(aboutUS.content.description);
  return (
    <>
      <div className="h-700 d-flex" id="aboutUS">
        <div className="container my-auto">
          <div className="row">
            <div className="my-auto col-md-6 ps-md-0 pe-md-5 d-md-flex">
              <img className="w-100" src={`${AboutUSImage}`} alt="desktop" />
            </div>
            <div className="my-auto py-3 py-md-0 col-md-6 ps-md-5 d-md-flex flex-md-column justify-content-md-center">
              <h3 className="font-style-normal primary-blue m-0 line-height-51 fs-48 font-weight-500">
                {aboutUS.heading}
              </h3>
              <div className="mt-39 dark-black font-weight-400">
                <h6 className="fw-bold">{aboutUS.content.heading}</h6>
                {aboutUS.content.description.split("\n\n").map((item, i) => (
                  <p className={`${i === 3 && "text-center"}`}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(AboutUS);
