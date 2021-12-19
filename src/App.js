//import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import React, { Component } from "react";
import StaffList from './components/StaffListComponent';
import './App.css';
import {STAFFS} from './shared/staffs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      staffs: STAFFS
     }
  }
  render() { 
    return (
      <div className='App'>
        <Navbar dark color='primary'>
          <div className = 'container'>
            <NavbarBrand href="#">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs}/>
        <div className='MoreInfo'>
          <p>Bấm vào tên nhân viên để xem thông tin</p>
        </div>
      </div>
    );
  }
}
 
export default App;


