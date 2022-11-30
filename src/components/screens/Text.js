// // // import './English.css';
// // import React, { useEffect, useState } from 'react'
// // import styled from 'styled-components';
// // import {Link} from 'react-router-dom';

// // import axios from "axios";
// // export default function English() {
// //     const [english, setEnglish] = useState([]);
// //     useEffect(() => {
// //       axios
// //       .get("http://127.0.0.1:8000/tasks/r/Quiz 1/")
// //       .then(function (response) {
// //           // handle success
// //           console.log(response.data);
// //           setEnglish(response.data);
// //       })
// //       .catch(function (error) {
// //           // handle error
// //           console.log(error);
// //       });
// //   }, []);
// // const render=(item)=>{
// //     return item.answer.map((i)=>{
// //         return <div>{i.answer_text}</div>
// //     })
// // }

// //   return (
// //     <>
// //     {english.map((item)=>{
// //         return(
// //             <div>
// //             <h1>{item.title}</h1>
// //             <div>
// //                 {render(item)}
// //             </div>
// //             </div>
// //         )
// //     })}
    
// //     </>
// //   )
// // }







// import './English.css';
// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components';
// import {Link} from 'react-router-dom';

// import axios from "axios";


// function English() {
  
//   const [english, setEnglish] = useState([]);
//   useEffect(() => {
//     axios
//     .get("http://127.0.0.1:8000/tasks/r/Quiz 1/")
//     .then(function (response) {
//         // handle success
//         console.log(response.data.data);
//         setEnglish(response.data.data);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     });
// }, []);

//   const data = [
//     {
//       id : 0,
//       qus :"The Paithan (Jayakwadi) Hydro-electric , com",
//       subarray: [
// 				{
// 					id: 11,
// 					option: "popppiefoejfojforj",
// 				},
//         {
// 					id: 12,
// 					option: "asdfjejoew",
// 				},
//       ]
//     },
//     {
//       id : 1,
//       qus :"The Paithan (Jayakwadi) Hydrgiiiiiiiiiii",
//       subarray: [
// 				{
// 					id: 21,
// 					option: "adkekdekdnde",
// 				},
//         {
// 					id: 22,
// 					option: "mdfejffref",
// 				},
//       ]
//     }
//   ]

//   const [num, setNum] = useState(0)

//   return (
    
//     <section id="Quiss">
//       {data.map((data,index)=>(
//         index === num &&
//         <div class="main" key={index} >
//             <p>{data.qus}</p>
//             <form>
//             <input type="radio" value="1850s" name="colors" id="red"/>
//             {
//               data.subarray.map((option)=>(<label for="">{option.option}</label>))
//             }
            
//             {/* <input type="radio" value="1840s" name="colors" id="blue"/>
//              <label for="">B.	Cauvery</label>
//              <input type="radio" name="colors" id="blue"/>
//             <label for="">C.	Narmada</label>
//             <input type="radio" name="colors" id="blue"/>
//             <label for="">D.	Godavari</label>  */}
//             </form>
//             <Button
//             onClick={(e)=>{setNum(num + 1)}}
//             >NEXT</Button>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default English
// const Button = styled(Link)`
  
//   padding: 10px 50px;
//     font-size: 15px;
//     font-weight: bold;
//     background: darkgoldenrod;
//     margin-bottom: 40px;
// `;