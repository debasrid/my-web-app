import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class ContactMe extends Component {
    render() {
        return (
            <div className="contact-body">

                <Grid className="contact-grid">
                    <Cell col={6} >
                        <h2>Debasri (Debby) Dasgupta</h2>
                        <img src="images/me.png" alt ="" style={{ width: '150px', height: '150px' }}></img>
                        <p>Hello all, you can reach me either by mail or whatsapp</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                                +31-685704728
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-whatsapp" aria-hidden="true" />
                                                +31-685704728
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                                debasri_dasgupta@rediffmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                                debasri.dasgupta1
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}
export default ContactMe;