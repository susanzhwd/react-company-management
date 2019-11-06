import React, { Component } from 'react';
import MainContainer from './MainContainer';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            teams: []
        });
    }

    componentDidMount() {
        fetch('https://vast-atoll-38417.herokuapp.com/teams')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    teams: data
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map(team => {
                            return (
                                <tr key={team._id}>
                                    <td>{team.TeamName}</td>
                                    <td>{team.Projects.map(project => {
                                        return (
                                            <li key={project._id}>{project.ProjectName}</li>
                                        )
                                    })}</td>
                                    <td>{team.Employees.length + ' Employees'}</td>
                                    <td>{team.TeamLead.FirstName + ' ' + team.TeamLead.LastName}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Teams;
