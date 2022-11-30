import './Catagory.css' 
import {Link} from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';


function Catagory() {
  return (
    <section id="Cat">
        <div class="gory">
            <p>Choose Language</p>
            <Emg to="/english"class="eng">English</Emg>
            <Mal to="/malayala" class="mal" >മലയാളം</Mal>
        </div>
    </section>
  )
}

export default Catagory

const Emg = styled(Link)`
    background: rgb(214, 23, 198);
    padding: 40px 15px;
    font-size: 30px;
    border-radius: 14px;
    margin-right: 15px;
    text-decoration: none;
`;
const Mal = styled(Link)`
     background: rebeccapurple;
    padding: 40px 15px;
    font-size: 30px;
    border-radius: 14px;
    text-decoration: none;

`;