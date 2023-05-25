import React,{useState} from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Filter from '../../assets/images/home/icons/Filter.svg';
import BreadcrumbComponent from "../../components/breadcrumb";
import FilterCatalog from "./FilterCatalog";
const PageBreadcrumbs=(props)=>{

    const activeElm = props.item.find(item => item.active);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    return(
        <div className="BreadcrumbsHeader">
            <Container className="customContainer">
                <Row>
                    <Col lg={6}>
                        <BreadcrumbComponent item={props.item} />
                        <h2 className="catalogPageTitle">{activeElm.label.replace(/&frasl;/gmi, '/')}</h2>
                    </Col>
                    <Col lg={6} className={`${props.filter ? '': 'd-none'}`}>
                        <div className="filterBtnBox">
                    <button className="filterBtn btn" onClick={handleShow}><Image src={Filter} className="filterIcon"/>Filter</button>
                    <FilterCatalog show={show} hideFilter={handleClose}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageBreadcrumbs;