import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TeamsPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            teams: []
        }
    };

    componentDidMount(){
        fetch('https://vast-atoll-38417.herokuapp.com/teams')
        .then(res => res.json())
        .then(data =>{
            this.setState({
                teams: data
            });
        }).catch(err =>{
            console.log(err)
        });
    }

    render(){
        return(
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Teams</h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive overview-table">
                  <table className="table table-striped table-bordered">
                    <tbody>
                        {this.state.teams.map(team=>{
                           return(
                               <tr key={team._id}>
                                   <td>{team.TeamName}</td>
                                   <td>{team.Employees.length + ' Employees'}</td>
                               </tr>
                           )
                        })}
                    </tbody>
                  </table>
                </div>
                <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
              </div>
            </div>
        )
    }
}

export default TeamsPanel;