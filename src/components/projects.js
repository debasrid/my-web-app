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
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png) center/cover' }}>html2</CardTitle>
                        <CardText>description</CardText>
                        <CardActions border>
                            <Button colored>gitjub</Button>
                            <Button colored>Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#ffa' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                     {/*Project#2*/}
                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png) center/cover' }}>html2</CardTitle>
                        <CardText>description</CardText>
                        <CardActions border>
                            <Button colored>gitjub</Button>
                            <Button colored>Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#ffa' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                     {/*Project#3*/}
                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png) center/cover' }}>html3</CardTitle>
                        <CardText>description</CardText>
                        <CardActions border>
                            <Button colored>gitjub</Button>
                            <Button colored>Demo</Button>
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
                <div><h1> HTML</h1></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1> react</h1></div>
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