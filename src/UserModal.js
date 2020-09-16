import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UserModal extends Component{

    constructor(props){
        super(props);
        this.state={
            ...this.props
        }

    }

    render(){
        return (
            <div>
                <Modal style={{zIndex:500}}isOpen={this.props.isOpen} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.onClick}>Selected User Details</ModalHeader>
            {this.props.userDetails.map((user,index)=>{
                return (
                <div>
                    <ModalBody>Start time {index+1} : {user.start_time}</ModalBody>
                <ModalBody>End time {index+1}: {user.end_time}</ModalBody>
                </div>
                )
            })}
            <ModalFooter>
                <Button color="secondary" onClick={this.props.onClick}>Cancel</Button>
            </ModalFooter>
        </Modal>
            </div>
            
        )
    }
}

export default UserModal;