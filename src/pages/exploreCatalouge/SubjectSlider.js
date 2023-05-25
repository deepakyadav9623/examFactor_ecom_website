import React from "react";
import { Button, Card, Col, Dropdown, DropdownButton, Image, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ExamFactorOnlineTest from '../../assets/images/home/images/examFactorOnlineTest.svg';
import AssessmentsIcon from '../../assets/images/home/icons/AssessmentsIcon.svg';
import RightArrow from '../../assets/images/home/icons/RightArrow.svg';
import LeftArrow from '../../assets/images/home/icons/LeftArrow.svg';
import shareMenu from '../../assets/images/home/icons/menus.svg';
import shareIcon from '../../assets/images/home/icons/share-icon.svg';
import freeTrail from '../../assets/images/home/icons/free-trial.svg';
import cartIcon from '../../assets/images/home/icons/cart-icon.svg';
import { handleAddToCart } from '../../redux/reducers/cartSlice';
import { useDispatch } from 'react-redux';





function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><Image src={RightArrow} className="assessmentIcon" /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><Image src={RightArrow} className="assessmentIcon" /></div>
  );
}


const SubjectSlider = (props) => {
  const dispatch=useDispatch();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    arrows: props.type === "subjectDetails" ? true : props.items.length < 4 ? false : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // console.log(4444,props.items)
  function numberFormatter(num) {
    let numFormatter = new Intl.NumberFormat('en-IN');
    return numFormatter.format(num);
  }
  return (
    <div className="subjectSliderWrapper">
      {props.type === "subjectDetails" ?
        <Slider {...settings}>
          {props.series.map((data) => {
            // console.log(3333,data)
            return (

              <Card className="subjectSlide assessmentSlider">
                <Card.Img variant="top" src={ExamFactorOnlineTest} />
                <Card.Body className="p-20">
                  <div className="d-flex justify-content-between assessmentTitle">
                  <Link to={`/catalogue/${props.id}/${props.category}/${props.subject}/${data.name}`}>
                    <h4>{data.name} </h4></Link>
                    <DropdownButton
                      drop="start"
                      variant="transparent"
                      title={<Image src={shareMenu} className="img-fluid" />}
                    >
                      <Dropdown.Item eventKey="1"><Image src={shareIcon} className="img-fluid shareIcon" /> Share</Dropdown.Item>
                    </DropdownButton>
                  </div>

                  <Card.Text className='text-secondary'>
                    Lorem ipsum dolor sit amet, constetur adipiscing elit. Nulla ut condimentum nibhed congue efficitur.                 
                     </Card.Text>
                  <div className='d-flex justify-content-between subjectPrice'>
                    <p className="mb-0 subjectFees">₹ {numberFormatter(129950)}</p>
                    <Image src={freeTrail} className="img-fluid" />
                  </div>
                  {/* <div className="d-flex"> */}
                  <div className="d-flex justify-content-between">
                    <button  onClick={()=>dispatch(handleAddToCart(data))} className="btn justify-content-center fs-14 cartBtn font-weight-600 me-2  py-13 d-flex align-items-center">
                      <Image src={cartIcon} className="img-fluid me-2" /> Add to cart</button>

                    <button className="btn btn-primary text-center fs-14 font-weight-600 py-13 buyBtn">Buy Now</button>
                  </div>


                  {/* </div> */}
                </Card.Body>

              </Card>
            )
          })}

        </Slider>
        :
        <Slider {...settings}>
          {props.items.map((data) => {
            return (

              <Card className="subjectSlide">
                <Card.Img variant="top" src={ExamFactorOnlineTest} />
                <Card.Body>
                <Link to={`/catalogue/${props.id}/${data.name}`}> <Card.Title>{data.name.replace(/&frasl;/gmi, '/')}</Card.Title></Link>
                  <p className="assessmentDetail">
                    <Image src={AssessmentsIcon} className="assessmentIcon" />
                    {data.assessments.length} Assessments
                  </p>
                  <Card.Text>
                    {/* {data.description} */}
                    Lorem ipsum dolor sit amet, constetur adipiscing elit. Nulla ut condimentum nibhed congue efficitur.                  </Card.Text>
                  <Link to={`/catalogue/${props.id}/${data.name}`}><Button className="subjectExploreBtn">Explore <span>&gt;</span></Button></Link>
                </Card.Body>

              </Card>
            )
          })}

        </Slider>}
    </div>
  )
}

export default SubjectSlider;