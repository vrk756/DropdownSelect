import React, { useState,useEffect,Component } from 'react';  
import { Dropdown } from 'react-bootstrap';  
 
const DropDownSearchSelect = (props) => { 
   
  const {
    showCount 
  } = props;

  const [searchValue, setSearchValue] = useState('');
  const [countries, updateCountries] = useState(["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","India","USA","UK"]); 
  const [selCountry, updateSelCountry] = useState('Select a Country');
  const [dCount, updateCount] = useState(showCount);
  let   showMoreNum = countries.length - dCount;
 
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  
  const handleToChange = (data) => {
  updateSelCountry(data);

  //onClick(dData);      
  };

  const addCountry = () =>{

    updateCountries([...countries, searchValue]);
    updateSelCountry(searchValue);
    setSearchValue("");
    
  }
  const updateCountfun = () =>{
    updateCount(999);
  }
   return (  
    <div style={{textAlign:"center",padding:30}}> 
      <Dropdown className="custom-dropdown-wrap custom-dropdown"  >
       <Dropdown.Toggle className="btn btn-light custom-dropdown-btn" variant="none" bsSize="large" >        
   <span className="text ellipsis-100">{selCountry}</span>
       </Dropdown.Toggle>
     <Dropdown.Menu  style={{height:320,overflow:"auto"}}  >
     <div className="list-header-wrap">
            <div className="search-control">
              <div className="input-group input-group-sm">
              <input 
                    type="text"
                    onChange={(e)=>handleSearch(e)}
                    placeholder="Search"
                    value={searchValue}
                  />
              </div>
            </div>
          </div>
          {countries.filter((con) => con.toLowerCase().includes(searchValue)).map((item, index) =>
               (index < dCount ) && (
                    <>
                    <Dropdown.Item   bsPrefix="list-group-item" key={index} eventKey={item} onClick={()=>handleToChange(item)} style={{border:0}} >
                    {item}                   
                    </Dropdown.Item>
                   </>
                  )
              )} 
              {countries.filter((con) => con.toLowerCase().includes(searchValue)).length <= 0 && 
              <Dropdown.Item   bsPrefix="list-group-item"  style={{border:0}} >
                  " {searchValue} " Not Found <button onClick={addCountry} >Add & Select </button>               
              </Dropdown.Item>
              }
              {countries.filter((con) => con.toLowerCase().includes(searchValue)).length - dCount > 0 &&
                <div style={{textAlign:"right",fontWeight:"bold",cursor:'pointer'}} onClick={updateCountfun}>
                   {countries.filter((con) => con.toLowerCase().includes(searchValue)).length - dCount} More...
                </div>
              }
     </Dropdown.Menu>
   </Dropdown>
   </div>
    );   
  }  
export default DropDownSearchSelect;  