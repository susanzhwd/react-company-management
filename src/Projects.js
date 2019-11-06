import React, { Component } from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state=({
            projects: []
        });
    }

    componentDidMount() {
        fetch('https://vast-atoll-38417.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    projects: data
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <MainContainer sidebar="Projects">
              <h1 className="page-header">Projects</h1>
              <table className="table table-striped table-bordered">
              <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.projects.map(project => {
                    return (
                        <tr key={project._id}>
                            <td>{project.ProjectName}</td>
                            <td>{project.ProjectDescription}</td>                            
                            <td>{moment(project.ProjectStartDate).utc().format('LL')}</td>
                            <td>{(project.ProjectEndDate==null?'n/a':moment(project.ProjectEndDate).utc().format('LL'))}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
      </MainContainer>
        )
    }
}

export default Projects;
