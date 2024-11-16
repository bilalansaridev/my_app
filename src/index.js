import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Navbar from './Navbar';
// import Carousel from './Carousel';
// import Pricing from './Component/Pricing';
// import Marksheet from './Component/Marksheet';
// import Contactus from './Contactus';
// import Footer from './Footer';
// import Form from './Component/Form';
//import MarksheetNew from './Component/MarksheetNew';
import PassWord from './Component/PassWord';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    {/* <App />
    <Navbar/>
    <Carousel/>
    <div className='container'>
      <Pricing/>
    </div>
    <Contactus/>
    <Marksheet />
    <Footer/>
    <Form/>
    <MarksheetNew/>
 */}
 <PassWord/>
 
 



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


