import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllCategoriesSlider from "./AllCategoriesSlider";
import PageBreadcrumbs from "./Pagebreadcrumbs";
import dropdownOptions from '../../assets/jsonData/allCategories.json'
import Footer from "../../components/Footer";

const AllCategories = () => {
    
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
                        id: 'allCategories',
                        label: 'All categories',
                        link: `/explore-catalogue`,
                        active: true
                    }
                ]}
                filter={true}
            />
            <div className="allCategoriesWrapper pb-30">
                <Container className="customContainer">
                    <Row>
                        {dropdownOptions.map((data) => {
                            return (
                                <div>
                                    {
                                        <Col lg={12}>
                                            <div className="subjectDiv">
                                                <h3 className="subjectHeading">{data.name.replace(/&frasl;/gmi, '/')}</h3>
                                            </div>
                                            <AllCategoriesSlider id={`${data.id}`} series={data.options} />
                                        </Col>}
                                </div>
                            )
                        })}
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default AllCategories;