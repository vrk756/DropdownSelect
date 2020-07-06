import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import './index.css';
import DropDownSelect from './dropDownSelect';  

function RootApp() {

    let showCount = 5;
    const [countries, updateCountries] = useState(["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","India","USA","UK"]); 
    const addCountry = (serval)=>{
        if(serval)
        {
            updateCountries([...countries, serval]);
        }       
    }

    return (
      <div className="rootApp">
        <DropDownSelect  showCount={showCount} countries={countries} addCountry={addCountry}  />
      </div>
    );

  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<RootApp />, rootElement);