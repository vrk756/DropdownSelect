import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './index.css';
import { Dropdown } from 'react-bootstrap';
import _ from "lodash";

const DropDownSelect = (props) => {

const { showCount, countries, addCountry } = props;
const [searchValue, setSearchValue] = useState('');
const [selCountry, updateSelCountry] = useState('Select a Country');
const [dCount, updateCount] = useState(showCount);
const [dCount2, updateCount2] = useState(showCount);
//const [countryList, updateCountryList ] = useState(countries);
let showMoreNum = countries.length - dCount;

// const  searchVal = useRef(_.debounce( (q) => { 
//      filList = countries.filter((con) => con.toLowerCase().includes(q.toLowerCase()));
//      updateCountryList(filList)
// }, 500));

const onChange = e => {
let serVal = e.target.value;
setSearchValue(serVal);
}


const handleToChange = (data) => {
    updateSelCountry(data);   
};

const addNewCountry = () =>{  
     updateSelCountry(searchValue);
     setSearchValue("");
     addCountry(searchValue);        
}

const updateCountfun = () =>{
    updateCount(999);
  }


  return (
      <>
    <div style={{textAlign:"center",padding:30}}> 
      <Dropdown className="custom-dropdown-wrap custom-dropdown"  >
       <Dropdown.Toggle className="btn btn-outline-secondary custom-dropdown-btn" variant="none" >        
        <span className="text ellipsis-100">{selCountry}</span><span className="caret"></span>
       </Dropdown.Toggle>
     <Dropdown.Menu  style={{height:300,overflow:"auto"}}  >
        <input placeholder="Search" onChange={onChange} value={searchValue} />    
        {countries.filter((con) => con.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) =>
            (index < dCount ) && (
                <>
                <Dropdown.Item   bsPrefix="list-group-item" key={index} eventKey={item} onClick={()=>handleToChange(item)} style={{border:0}} >
                {item}                   
                </Dropdown.Item>
                </>
                )
            )} 
            {countries.filter((con) => con.toLowerCase().includes(searchValue.toLowerCase())).length <= 0 && 
            <Dropdown.Item   bsPrefix="list-group-item"  style={{border:0}} >
                " {searchValue} " Not Found <button onClick={addNewCountry} >Add & Select </button>               
            </Dropdown.Item>
            }
            {countries.filter((con) => con.toLowerCase().includes(searchValue.toLowerCase())).length - dCount > 0 &&
            <div style={{textAlign:"right",fontWeight:"bold",cursor:'pointer'}} onClick={updateCountfun}>
                {countries.filter((con) => con.toLowerCase().includes(searchValue.toLowerCase())).length - dCount} More...
            </div>
        }
     </Dropdown.Menu>
   </Dropdown>
   </div>
      </>
  );
};
export default DropDownSelect;