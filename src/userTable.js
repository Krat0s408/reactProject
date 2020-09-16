import React, { Component } from 'react';
import UserModal from './UserModal';

class UserTable extends UserModal {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showModal: false,
            temp: {
                id: null
            },
            activity_periods:[]
        }
    }

    getUserDetailsFromMockApi = () => {
        fetch('./Test.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
            .then(res => res.json())
            .then(data => {
                this.setState({ users: data.members })
            });
    }

    componentDidMount() {
        this.getUserDetailsFromMockApi();
    }

    toggleModal = (id) => {
        if (this.state.showModal === false)
            this.setState({ showModal: true });
        else if (this.state.showModal === true)
            this.setState({ showModal: false });

      this.showSelectedUserActivity(id);
    }

    renderTd = () => {
        let tdDiv = this.state.users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td><a href="#" onClick={() => { this.toggleModal(user.id); this.state.temp.id = user.id ; this.state.activity_periods = user.activity_periods}}>{user.real_name}</a></td>
                    <td>{user.tz}</td>
                </tr>
            )
        });

        return tdDiv;
    }

    showSelectedUserActivity = (id) => {        
        return <UserModal
            isOpen={this.state.showModal}
            toggle={this.toggleModal}
            userDetails={this.state.activity_periods}
            onClick={this.toggleModal}
        />
    }

    render() {
       
         let userId = this.state.users.map((user, index) => user.id);

        return (
            <>
                <div className="main-div container">
                    <h2 className="text-center">User Details</h2>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Time Zone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTd()}
                        </tbody>
                    </table>

                </div>

                {this.showSelectedUserActivity(userId)}

            </>
        )

    }
}
export default UserTable;