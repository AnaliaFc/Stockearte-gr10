import React from 'react';
import Menu from '../fragments/Menu';
import Footer from '../fragments/Footer';
import "../css/Home.css"
import { Helmet } from 'react-helmet';

 
const Home = () => {
 
		return(
			
            <div className="container-home">
				<Helmet>
            		<title>Inicio | Stockearte</title>
          		</Helmet>
				<Menu />
 			<main role="main" className="flex-shrink-0 mt-5">
 		            <div className="container">
 		            </div>
 	  		</main>
            	<Footer />
            </div>
          
 
		)
 
	}
 
 
export default Home;