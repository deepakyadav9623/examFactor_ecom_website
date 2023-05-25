import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import PageBreadcrumbs from "./Pagebreadcrumbs";
import SubjectSlider from "./SubjectSlider";
import Footer from '../../components/Footer';
import dropdownOptions from '../../assets/jsonData/productCatalog.json'
import { Link } from "react-router-dom";

const ExploreCatalog = () => {
    const { id } = useParams()
  const navigateData = useNavigate();
    const items = dropdownOptions.find((ids) => ids.id === id)
    console.log(123, items);
    const data = items.options.filter((el) => el.options.length !== 0)

    return (
        <div>
            <PageBreadcrumbs 
                item={[
                    {
                        id: 'homePage',
                        label: 'Home',
                        link: '/'
                    },
                    {
                        id: 'catalougePage',
                        label: 'Explore catalogue',
                        link: '/explore-catalogue'
                    },
                    {
                        id: 'subjectPage',
                        label: id,
                        link: `/catalogue/${id}`,
                        active: true
                    }
                ]}
                filter={true}
            />
            <div className="catalogWrapper pb-30">
                <Container className="sliderCustomContainer">
                    <Row>
                        {data.length > 0 ? items.options.map((data) => {
                            // console.log(444,data)
                            return (
                                <div>
                                    {data.options.length > 0 &&
                                        <Col lg={12}>
                                            <div className="subjectDiv">
                                                <h3 className="subjectHeading">{data.name.replace(/&frasl;/gmi, '/')}</h3>
                                                <button onClick={() => navigateData(`/catalogue/${id}/${data.name}`)} className="viewAllButton bg-body">View all</button>
                                            </div>
                                            <SubjectSlider key={`${id}/${data.name}`} id={`${id}/${data.name}`} items={data.options} series={[1, 2, 3, 4, 5, 6]} />

                                        </Col>}
                                </div>
                            )
                        }) : <Col lg={12}>
                            <div className="subjectDiv">
                                <h3 className="subjectHeading">{items.name.replace(/&frasl;/gmi, '/')}</h3>
                                <button onClick={() => navigateData(`/catalogue/${id}/${items.name}`)} className="viewAllButton">View all</button>
                            </div>
                            <SubjectSlider  key={`${id}/${items.name}`} id={`${id}/${items.name}`} items={items.options} series={[1, 2, 3, 4, 5, 6]} />
                        </Col>}
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default ExploreCatalog;