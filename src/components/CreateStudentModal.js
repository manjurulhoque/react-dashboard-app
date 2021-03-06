import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import toastr from 'toastr';
import { setStudent } from '../actions/studentActions';
import { setModal } from '../actions/modalActions';
import { connect } from 'react-redux';
import axios from 'axios';

class CreateStudentModal extends Component {

    state = {
        createModal: false,
        firstname: "",
        lastname: "",
        birthdate: "",
        nationality: "",
        email: "",
        postaladress: "",
        nic: ""
    };

    toggle = () => {
        this.setState({
            createModal: !this.props.modal.modal.createModal
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "birthdate": this.state.birthdate,
            "nationality": this.state.nationality,
            "email": this.state.email,
            "postaladress": this.state.postaladress,
            "nic": this.state.nic
        };

        if(Object.values(data).every(x => x !== '')) {

            axios.post("http://d24w27cd80vt93.cloudfront.net/api/student/addStudent", data)
                .then(res => {
                    toastr.success("Student successfully created");
                    this.props.setStudent(res.data);
                    this.setState({ createModal: false });
                    this.props.setModal({
                        createModal: false,
                        searchModal: false,
                    });
                })
                .catch(err => console.log(err));
        } else {
            toastr.warning("All fields are mandatory");
        }
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.student.student !== null) {
            this.setState({
                "firstname": nextProps.student.student.firstname,
                "lastname": nextProps.student.student.lastname,
                "birthdate": nextProps.student.student.birthdate,
            })
        };

        this.setState({
            createModal: nextProps.modal.modal.createModal
        });
    }

    render() {
        return (
            <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={this.state.createModal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Create student form</ModalHeader>
                    <ModalBody>
                        <form className="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">First Name</label>
                                        <input name="firstname" value={this.state.firstname} onChange={this.onChange} placeholder="First Name" type="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">Last Name</label>
                                        <input name="lastname" value={this.state.lastname} onChange={this.onChange} placeholder="Last Name" type="email" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">Bith date</label>
                                        <input name="birthdate" value={this.state.birthdate} onChange={this.onChange} placeholder="dd/mm/yyyy" type="date" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">Email</label>
                                        <input name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" type="email" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">Postal Address</label>
                                        <input name="postaladress" value={this.state.postaladress} onChange={this.onChange} placeholder="Postal Address" type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">Nationality</label>
                                        <input name="nationality" value={this.state.nationality} onChange={this.onChange} placeholder="Nationality" type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">NIC</label>
                                        <input name="nic" value={this.state.nic} onChange={this.onChange} placeholder="NIC" type="email" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={this.toggle}>Cancel</Button>
                        <button className="mt-1 btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
};

const mapStateToProps = state => ({
    student: state.student,
    modal: state.modal,
});

export default connect(mapStateToProps, { setStudent, setModal })(CreateStudentModal);