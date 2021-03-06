import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                 <Grid className='home-grid'>
                     <Cell col={12}>
                         <img 
                            src="https://icon-library.net/images/avatar-png-icon/avatar-png-icon-23.jpg"
                            // src="https://avatars0.githubusercontent.com/u/6723882?s=400&v=4"
                            alt="avatar"
                            className="avatar-img"
                         />
                         
                         <div className="banner-text">
                             <h1>Fulano de Tal </h1>

                             <hr/>

                             <p>| Angular | React | View |</p>

                             <div className="social-links">
                                 <a href="http://www.twitter.com/moisesabraao" rel="noopener noreferrer" _target="blank">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                 </a>
                                 <a href="http://www.github.com/moisesabraao" _target="blank">
                                    <i class="fa fa-github" aria-hidden="true"></i>
                                 </a>
                                 <a href="http://www.instagram.com/moisesabraao" _target="blank">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                 </a>
                                 
                             </div>

                         </div>
                     </Cell>

                 </Grid>
            </div>
        )
    }
}

export default Home;