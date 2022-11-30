// import './English.css';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import './Malayalam.css'

import axios from "axios";
export default function English() {
    const [english, setEnglish] = useState([]);
    useEffect(() => {
      axios
      .get("http://127.0.0.1:8000/tasks/r/Quiz 9/")
      .then(function (response) {
          // handle success
          console.log(response.data);
          setEnglish(response.data);
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      });
  }, []);
const render=(item)=>{
    return item.answer.map((i)=>{

        return (
          <div>
        <input type="radio" name="colors" id="red"/>
        <label for="">{i.answer_text}</label>
        </div>
        )
    })
}

  return (
    <>
     <section id="Quiss">
    
     {english.map((item)=>{
        return(
            <div class="main">
            <h1>{item.title}</h1>
            <form>{render(item)}</form>
            <Button to="/malayala5">NEXT</Button>
            </div>
        )
    })}
</section>

    
    </>
  )
}
// export default English

const Button = styled(Link)`
   padding: 10px 50px;
    font-size: 15px;
    font-weight: bold;
    background: darkgoldenrod;
    margin-bottom: 40px;
`;