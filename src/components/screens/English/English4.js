// import './English.css';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import './English.css'

import axios from "axios";
export default function English() {
    const [english, setEnglish] = useState([]);
    useEffect(() => {
      axios
      .get("http://127.0.0.1:8000/tasks/r/Quiz 4/")
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
        <input type="radio" name="colors"  value={i.id} id="red"/>
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
            <Button to="/english5">NEXT</Button>
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
    text-decoration: none;
    margin-right: 57px;

`;