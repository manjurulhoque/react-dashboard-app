import React, { Component } from "react";

class StudentDashboardPage extends Component {

    componentDidMount() {
        if (
            !localStorage.studentInfo &&
            localStorage.studentInfo === undefined
        ) {
            this.props.history.push("/student-login");
        }
        document.title = "Student dashboard";
    }

    render() {
        return <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="fas fa-graduation-cap icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>Dashboard</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-xl-4">
                            <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content pt-3 pl-3 pb-1">
                                        <div className="widget-chart-flex">
                                            <div className="widget-numbers">
                                                <div className="widget-chart-flex">
                                                    <div className="fsize-4">
                                                        <span>100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="widget-subheading mb-0 opacity-5">
                                            Students
                                        </h6>
                                    </div>
                                    <div className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto row">
                                        <div className="col-md-9">
                                            <div id="dashboard-sparklines-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content pt-3 pl-3 pb-1">
                                        <div className="widget-chart-flex">
                                            <div className="widget-numbers">
                                                <div className="widget-chart-flex">
                                                    <div className="fsize-4">
                                                        <span>30</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="widget-subheading mb-0 opacity-5">
                                            Credentials
                                        </h6>
                                    </div>
                                    <div className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto row">
                                        <div className="col-md-9">
                                            <div id="dashboard-sparklines-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content pt-3 pl-3 pb-1">
                                        <div className="widget-chart-flex">
                                            <div className="widget-numbers">
                                                <div className="widget-chart-flex">
                                                    <div className="fsize-4">
                                                        <span>12</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="widget-subheading mb-0 opacity-5">
                                            Programs
                                        </h6>
                                    </div>
                                    <div className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto row">
                                        <div className="col-md-9">
                                            <div id="dashboard-sparklines-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
    }
}

export default StudentDashboardPage;
