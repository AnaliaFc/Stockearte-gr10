import React from 'react';
import "./Footer.css"
 
class Footer extends React.Component {
   render() {
     return (
         <footer className="footer">
            <p>&copy; {(new Date().getFullYear())} UNLa</p>
        </footer>
     )
   
  }
 
}
 
export default Footer;