import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ExamFactorOnlineTest from '../../assets/images/home/images/examFactorOnlineTest.svg';
import AssessmentsIcon from '../../assets/images/home/icons/AssessmentsIcon.svg';
import RightArrow from '../../assets/images/home/icons/RightArrow.svg';
import LeftArrow from '../../assets/images/home/icons/LeftArrow.svg';


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


const AllCategoriesSlider = (props) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true ,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    // console.log(4444, props.series)
    return (
        <div className="subjectSliderWrapper">
            <Slider {...settings}>
                {props.series.map((data) => {

                    return (

                        <Card className="subjectSlide">
                            <Card.Img variant="top" src={ExamFactorOnlineTest} />
                            <Card.Body>
                            <Link to={`/catalogue/${props.id}/${data.name}`}> <Card.Title>{data.name.replace(/&frasl;/gmi, '/')}</Card.Title></Link>
                                <p className="assessmentDetail">
                                    <Image src={AssessmentsIcon} className="assessmentIcon" />
                                    {data?.assessments?.length} Assessments
                                </p>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, constetur adipiscing elit. Nulla ut condimentum nibhed congue efficitur.
                                </Card.Text>
                                <Link to={`/catalogue/${props.id}/${data.name}`}><Button className="subjectExploreBtn">Explore <span>&gt;</span></Button></Link>
                            </Card.Body>

                        </Card>
                    )
                })}

            </Slider>
        </div>
    )
}

export default AllCategoriesSlider;