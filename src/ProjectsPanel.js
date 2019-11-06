import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class ProjectsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
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
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map(project => {
                                    let ActiveDays = moment().diff(moment(project.ProjectStartDate), 'days');
                                    return (
                                        <tr key={project._id}>
                                            <td>{project.ProjectName}</td>
                                            <td>{'Active ' + ActiveDays + ' Days'}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        )
    }
}

export default ProjectsPanel;
