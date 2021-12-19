import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedName: null
         }
    }

    onNameSelect(staff) {
        this.setState({selectedName: staff});
    }

    renderStaff(staff) {
        if(staff != null)
            return(
                <Card>
                    <CardBody>
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {staff.dOB}</CardText>
                        <CardText>Ngày vào công ty: {staff.startDate}</CardText>
                        <CardText>Phòng ban: {staff.department}</CardText>
                        <CardText>Số ngày nghỉ ăn lương: {staff.annualLeave}</CardText>
                        <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </Card>
            )
        else
            return(
                <div></div>
            )
    }
    render() { 
        const staffList = this.props.staffs.map((staff) => {
            return (
                <div className = "col-12 col-sm-6 col-md-4">
                    <Card key={staff.id} onClick={() => this.onNameSelect(staff)}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )
        })
        return ( 
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                <div className="row">
                    <div className = "col-12 col-sm-6 col-md-4">
                        {this.renderStaff(this.state.selectedName)}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default StaffList;