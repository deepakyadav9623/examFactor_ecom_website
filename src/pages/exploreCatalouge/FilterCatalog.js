import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from '../../components/select/SimpleSelect';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import classData from '../../assets/jsonData/filterData.json';

function FilterCatalog(props) {
      const [selected, setSelected] = useState("");
      const [selectedGrade, setGrade] = useState("");
      const [subject,setSubject] = useState("");

      const changeSelectOptionHandler = (e) => {
        setSelected(e.target.value);
      };

      const changeGradeHandler = (e) =>{
        setGrade(e.target.value);
      }

      const changeSubjectHandler = (e) => {
        setSubject(e.target.value);
      }

      const cbseGrade = ["Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"];
      const ntseGrade = ["Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"];
      const iitGrade = ["NA"];
      const cbseGradeDD =["General"]; 
      const cbseGrade11 = ["Science","Commerce","Arts"];
      const cbseGrade12 = ["Science","Commerce","Arts"];
      const iitProduct = ["JEE Foundation","JEE Mains","JEE Advanced","JEE Mains + Advanced"];
      const neetProducts = ["NEET Foundation","NEET Advanced"];
      const CUETProducts = ["Compulsory","Science","Commerce","Humanities"];
      const ndaProducts = ["NDA"];
      const scienceSubjects = ["Physics",
      "Chemistry",
      "Mathematics",
      "Biology"];

      const jeeMaths = ["Physics","Chemistry","Mathematics"];


      const class6Subjects = ["Science",
      "Social Studies",
      "Mathematics",
      ,"English"]


      const commerceSubjects = [
        "Accounts",
        ,"Business Studies",
        "Economics"
      ];

      const artsSubjects = [
        "Geography",
        "Political Science",
        "History",
        "Psychology"
      ];

      const ndaSubjects = ["General Test",
      "Physics",
      "Chemistry",
      "Geography"];

      const cuetCompulsorySubs= ["English","General Test"]

      const neetFoundationSubs = ["Physics","Chemistry","Biology"];
      
      let type = null;
      let productType = null;
      let productOptions = null;
      let subjectOptions = null;
      let subjectType = null;
      let options = null;
      
     if (selected === "CBSE") {
        type = cbseGrade;

      }
      else if (selected === "NTSE") {
        type = ntseGrade;
      }
      else if (selected === "IIT" || selected === "NEET" ||  selected === "CUET" || selected === "NDA") {
        type = iitGrade;
      }    
      

       if(selectedGrade === "Class 6" || selectedGrade === "Class 7" || selectedGrade === "Class 8" || selectedGrade === "Class 9"
      || selectedGrade === "Class 10"){
          productType = cbseGradeDD;
      }
      else if(selectedGrade === "Class 11"){
        productType = cbseGrade11;
      }
      else if(selectedGrade === "Class 12"){
        productType = cbseGrade12;
      }
      else if(selected  === "IIT" && selectedGrade === "NA"){
        productType = iitProduct;
      }

      else if(selected === "NEET" && selectedGrade === "NA")
    {
        productType = neetProducts;        
    }

    else if(selected === "CUET" && selectedGrade === "NA")
    {
        productType = CUETProducts;        
    }

    else if(selected === "NDA" && selectedGrade === "NA")
    {
        productType = ndaProducts;        
    }
    

    if(selected === "CBSE" || selected === "NTSE" && (selectedGrade === "Class 6" || selectedGrade === "Class 7" || selectedGrade === "Class 8" || selectedGrade === "Class 9"
    || selectedGrade === "Class 10") && subject === "General"){
        subjectType = class6Subjects;
    }


    else if((selectedGrade === "Class 11" || selectedGrade === "Class 12") && subject === "Science"){
        subjectType = scienceSubjects;
    }
    else if((selectedGrade === "Class 11" || selectedGrade === "Class 12") && subject === "Commerce"){
        subjectType = commerceSubjects;
    }

    else if((selectedGrade === "Class 11" || selectedGrade === "Class 12") && subject === "Arts"){
        subjectType = artsSubjects;
    }

    else if(selectedGrade === "NA"  && (subject === "JEE Foundation" || subject === "JEE Mains" || subject === "JEE Advanced"
    || subject === "JEE Mains + Advanced")){
        subjectType = jeeMaths;
    }


    else if(selectedGrade === "NA"  && (subject === "NEET Foundation" || subject === "NEET Advanced")){
        subjectType = neetFoundationSubs;
    }

    else if(selectedGrade === "NA"  && subject === "Compulsory"){
        subjectType = cuetCompulsorySubs;
    }

    else if(selectedGrade === "NA"  && subject === "Science"){
        subjectType = scienceSubjects;
    }

    else if(selectedGrade === "NA"  && subject === "Commerce"){
        subjectType = commerceSubjects;
    }

    else if(selectedGrade === "NA"  && subject === "Humanities"){
        subjectType = artsSubjects;
    }

    
    else if(selectedGrade === "NA"  && subject === "NDA"){
        subjectType = ndaSubjects;
    }


      if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
      }

      if (productType) {
        productOptions = productType.map((el) => <option key={el}>{el}</option>);
      }


      if (subjectType) {
        subjectOptions = subjectType.map((el) => <option key={el}>{el}</option>);
      }

  return (
    <>
      <Offcanvas show={props.show} onHide={props.hideFilter} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container>
       
       



         <Row className='filter-row'>
            <label>Exam</label>
            <select onChange={changeSelectOptionHandler}>
            <option>Select</option>
            <option>CBSE</option>  
            <option>NTSE</option>
            <option>IIT</option>
            <option>NEET</option>
            <option>CUET</option>
            <option>NDA</option>
          </select>

        </Row>

        <Row className='filter-row'>
            <label>Grades</label>
            <select onChange={changeGradeHandler} className={options === null && "disable-select-option"}>
            <option>Select</option>
            {
              /** This is where we have used our options variable */
              options
            }
          </select>
         </Row>

         <Row className='filter-row'>
                <label>Products</label>
                <select  onChange={changeSubjectHandler}  className={productOptions === null && "disable-select-option"}>
          <option>Select</option>
            {
              productOptions
            }
          </select>

            </Row>

            <Row className='filter-row'>
                <label>Subjects</label>
                <select  className={subjectOptions === null && "disable-select-option"}>
          <option>Select</option>
            {
              /** This is where we have used our options variable */
              subjectOptions
            }
          </select>

            </Row>

            <Row className='filter-row button-row'>
                {console.log(selected)}
            <Button variant="primary" className={(selected == "Select" || subject === "Select" || subjectOptions === null || selectedGrade === "Select" || productOptions === null ||selected === "Select" || options === null) && "disable-select-option" }>Apply</Button>
            <Button variant="light" onClick={props.hideFilter}>Cancel</Button>
            </Row>
         </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FilterCatalog;