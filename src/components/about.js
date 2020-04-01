import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'; 
import Experience from './experience';

class About extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://icon-library.net/images/avatar-png-icon/avatar-png-icon-23.jpg"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Fulano de Tal</h2>
                        <h4 style={{color: 'grey'}}>Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        
                        <p>
                            Alguma coisa sobre o perfil
                        </p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                        <h5>Address</h5>
                        <p>Por aí, 666</p>
                        <h5>Phone</h5>
                        <p>(66) 66 6 66-66</p>
                        <h5>Email</h5>
                        <p>fulano@email.com</p>
                        <h5>Web</h5>
                        <p>fulano.com.br</p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    <Cell className="aboutme-right-col" col={6}>
                        <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2016}
                            schoolName="Univerty Central"
                            schoolDrescription="Aprender alguma coisa."
                        />
                        
                        <Education
                            startYear={2017}
                            endYear={2019}
                            schoolName="Univerty Zona Norte"
                            schoolDrescription="Aprender alguma coisa. "
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2012}
                            endYear={2013}
                            jobName="Dev Jr"
                            jobDescription="De tudo um pouco"
                        />

                        <Experience
                            startYear={2014}
                            endYear={2016}
                            jobName="Dev Senior"
                            jobDescription="Fez mais"
                        />

                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName="Dev Pleno"
                            jobDescription="Fez muito mais"
                        />

                    </Cell>
                    
                </Grid>
            </div>
        )
    }
}

export default About;