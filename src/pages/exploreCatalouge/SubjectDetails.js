import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from '../../components/Footer';
import PageBreadcrumbs from "./Pagebreadcrumbs";
import SubjectSlider from "./SubjectSlider";
import dropdownOptions from '../../assets/jsonData/productCatalog.json'

const SubjectDetails = () => {
    const { id, category } = useParams()
    const items = dropdownOptions.find((ids) => ids.id === id)
    const cuetItems = dropdownOptions.find((ids) => ids.options.find((idss) => idss.name === category))
    const data = items.options.filter((el) => el.options.length !== 0)

    const series = [
        {
            "id": 21,
            "name": "Assessment 1",
            "img": "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
            "title": "CUET 2023 adaptive practice",
            "price": 29950,
            "content": "Personalized practice for every learner!",
            "addonProduct": "e-book for detailed learning for ₹ 999.00"
        },
        {
            "id": 22,
            "name": "Assessment 2",
            "img": "https://olc-wordpress-assets.s3.amazonaws.com/uploads/2019/12/Assessing-Across-Modalities.jpg",
            "title": "IIT JEE - foundation & advanced",
            "price": 12000,
            "content": "Personalized practice for every learner!",
            "addonProduct": "e-book for detailed learning for ₹ 99.00"
        }, {
            "id": 23,
            "name": "Assessment 3",
            "img": "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
            "title": "CUET 2023 adaptive practice",
            "price": 29950,
            "content": "Personalized practice for every learner!",
            "addonProduct": "e-book for detailed learning for ₹ 999.00"
        },
        {
            "id": 24,
            "name": "Assessment 4",
            "img": "https://olc-wordpress-assets.s3.amazonaws.com/uploads/2019/12/Assessing-Across-Modalities.jpg",
            "title": "IIT JEE - foundation & advanced",
            "price": 12000,
            "content": "Personalized practice for every learner!",
            "addonProduct": "e-book for detailed learning for ₹ 99.00"
        }, {
            "id": 25,
            "name": "Assessment 5",
            "img": "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
            "title": "CUET 2023 adaptive practice",
            "price": 29950,
            "content": "Personalized practice for every learner!",
            "addonProduct": "e-book for detailed learning for ₹ 999.00"
        },
        {
            "id": 26,
            "name": "Assessment 6",
            "img": "https://olc-wordpress-assets.s3.amazonaws.com/uploads/2019/12/Assessing-Across-Modalities.jpg",
            "title": "IIT JEE - foundation & advanced",
            "price": 12000,
            "content": "Personalized practice for every learner!",
            "addonProduct": "e-book for detailed learning for ₹ 99.00"
        }
    ]
    console.log(888, items)
    console.log(999, data)

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
                        link: `/catalogue/${id}`
                    },
                    {
                        id: 'categoryPage',
                        label: category,
                        link: `/catalogue/${id}/${category}`,
                        active: true
                    }
                ]}
                filter={true}
            />
            <div className="subjectWrapper pb-36">
                <Container className="sliderCustomContainer">
                    <Row>
                        {data.length > 0 ?
                            data.filter((idss) => idss.name === category).map((items) => {
                                return (
                                    <div>
                                        <div>
                                            {items.options.map((items) => {
                                                return (
                                                    <div>

                                                        <Col lg={12}>
                                                            <div className="subjectDiv">
                                                                <h3 className="subjectHeading">{items.name.replace(/&frasl;/gmi, '/')}</h3>
                                                                <Link className="viewAllButton" to={`/catalogue/${id}/${category}/${items.name}`}>View all</Link>
                                                            </div>
                                                            <SubjectSlider key={id} id={id} category={category} subject={items.name} type="subjectDetails" item={items} series={series} />
                                                        </Col>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                            :
                            (items.name === category ? items.options.map((items) => {
                                console.log(777, items.name === category)

                                return (
                                    <div>
                                        {<Col lg={12}>
                                            <div className="subjectDiv">
                                                <h3 className="subjectHeading">{items.name.replace(/&frasl;/gmi, '/')}</h3>
                                                <Link className="viewAllButton" to={`/catalogue/${id}/${category}/${items.name}`}>View all</Link>
                                            </div>
                                            <SubjectSlider key={id} id={id} category={category} subject={items.name} type="subjectDetails" series={series} />
                                        </Col>}
                                    </div>
                                )
                            }) :

                                items.options.filter((ids) => ids.name === category).map((items) => {
                                    return (
                                        <div>
                                            {<Col lg={12}>
                                                <div className="subjectDiv">
                                                    <h3 className="subjectHeading">{items.name.replace(/&frasl;/gmi, '/')}</h3>
                                                    <Link className="viewAllButton" to={`/catalogue/${id}/${category}/${items.name}`}>View all</Link>
                                                </div>
                                                <SubjectSlider key={id} id={id} category={category} subject={items.name} type="subjectDetails" series={series} />
                                            </Col>}
                                        </div>
                                    )
                                }))
                        }
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default SubjectDetails;