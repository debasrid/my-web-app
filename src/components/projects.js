import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardMenu, CardText, CardActions, Button, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    {/*Project#2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://my-web-app.s3.eu-central-1.amazonaws.com/wij-perspectief-screenshot.png) center/cover' }}>Wij-perspectief</CardTitle>
                        <CardText>Wij Perspectief is a website about the inclusion of migrants and about sustainability and offers companies organizations evidence-based innovations to realize an inclusive and sustainable society</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/debasrid" target="_blank">Github</Button>
                            <Button colored href="http://www.wij-perspectief.nl/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#ffa' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                     {/*Project#2*/}
                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://my-web-app.s3.eu-central-1.amazonaws.com/financefit-screenshot.png) center/cover' }}>Financefit</CardTitle>
                        <CardText>FinanceFit is an application for keeping track of daily spendings and calorie consumption of users directly from the shopping bills. You just need to upload a photo of the bill, or you can add the purchase details manually.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/debasrid/financefit" target="_blank">Github</Button>
                            <Button colored href="https://financefit.herokuapp.com/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#ffa' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="project-grid">
                    {/*Project#2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://my-web-app.s3.eu-central-1.amazonaws.com/wij-perspectief-screenshot.png) center/cover' }}>Wij-perspectief</CardTitle>
                        <CardText>Wij Perspectief is a website about the inclusion of migrants and about sustainability and offers companies organizations evidence-based innovations to realize an inclusive and sustainable society</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/debasrid" target="_blank">Github</Button>
                            <Button colored href="http://www.wij-perspectief.nl/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#ffa' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                     {/*Project#2*/}
                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://my-web-app.s3.eu-central-1.amazonaws.com/fishomania-screenshot.png) center/cover' }}>Fish-o-mania</CardTitle>
                        <CardText>Fish-o-mania is a fun game to catch fish using a fishing hook. Beware, catching the wrong type will reduce your point! </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/debasrid/fishing-project" target="_blank">Github</Button>
                            <Button colored href="https://fish-o-mania.herokuapp.com/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#ffa' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="project-grid">

                     {/*Project#1*/}
                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://my-web-app.s3.eu-central-1.amazonaws.com/financefit-screenshot.png) center/cover' }}>Financefit</CardTitle>
                        <CardText>FinanceFit is an application for keeping track of daily spendings and calorie consumption of users directly from the shopping bills. You just need to upload a photo of the bill, or you can add the purchase details manually.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/debasrid/financefit" target="_blank">Github</Button>
                            <Button colored href="https://financefit.herokuapp.com/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#ffa' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }



    render() {
        return (
            <div className="project-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> UX-UI </Tab>
                    <Tab> HTML/CSS </Tab>
                    <Tab> JQuery/JS/React </Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                        <div className="content"> {this.toggleCategories()}</div>

                        </Cell>
                    </Grid>
                    

                </section>
            </div>
        )
    }
}
export default Projects;