import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
<div>
  {/* sidebar  */}
  <nav className="sidebar dark_sidebar">
    <div className="logo d-flex justify-content-between" style={{backgroundColor: '#f6f7fb', fontSize: 20, fontStyle: 'bold', fontWeight: 'bolder'}}>
      <div className="profile_info">
        <a href="#" style={{color: '#000'}}><img src="img/engage-logo.png" alt />&nbsp;&nbsp;&nbsp;Engage Admin</a>
      </div>
      <div className="sidebar_close_icon d-lg-none">
        <i className="ti-close" />
      </div>
    </div>
    <ul id="sidebar_menu">
      <li className>
        <a href="dashboard.html">
          <div className="nav_icon_small">
            <img src="img/menu-icon/dashboard.svg" alt />
          </div>
          <div className="nav_title">
            <span>Dashboard</span>
          </div>
        </a>
      </li>  
      <li className>
        <a href="court_list.html">
          <div className="nav_icon_small">
            <img src="img/menu-icon/19.svg" alt />
          </div>
          <div className="nav_title">
            <span>Courts</span>
          </div>
        </a>
      </li>  
      <li className>
        <a className="has-arrow" href="#" aria-expanded="false">
          <div className="nav_icon_small">
            <img src="img/menu-icon/6.svg" alt />
          </div>
          <div className="nav_title">
            <span>Schedule </span>
          </div>
        </a>
        <ul>
          <li><a href="error_400.html">Regular Booking</a></li>
          <li><a href="error_400.html">blocking</a></li>
          <li><a href="error_400.html">Search</a></li>
        </ul>
      </li>
      <li className>
        <a className="has-arrow" href="#" aria-expanded="false">
          <div className="nav_icon_small">
            <img src="img/menu-icon/5.svg" alt />
          </div>
          <div className="nav_title">
            <span>Manage </span>
          </div>
        </a>
        <ul>
          <li><a href="error_400.html">User</a></li>
          <li><a href="error_400.html">Prepaid Credit</a></li>
          <li><a href="error_400.html">Memebership Package</a></li>
        </ul>
      </li>
      <li className>
        <a className="has-arrow" href="#" aria-expanded="false">
          <div className="nav_icon_small">
            <img src="img/menu-icon/12.svg" alt />
          </div>
          <div className="nav_title">
            <span>Promote </span>
          </div>
        </a>
        <ul>
          <li><a href="error_400.html">Generate Coupon</a></li>
        </ul>
      </li>
      <li className>
        <a className="has-arrow" href="#" aria-expanded="false">
          <div className="nav_icon_small">
            <img src="img/menu-icon/21.svg" alt />
          </div>
          <div className="nav_title">
            <span>Messure</span>
          </div>
        </a>
        <ul>
          <li><a href="error_400.html">Rreports</a></li>
          <li><a href="error_400.html">Analatic</a></li>
        </ul>
      </li>
      <li className>
        <a className="has-arrow" href="#" aria-expanded="true">
          <div className="nav_icon_small">
            <img src="img/menu-icon/9.svg" alt />
          </div>
          <div className="nav_title">
            <span>Settings</span>
          </div>
        </a>
        <ul>
          <li><a href="error_400.html">Pricing</a></li>
          <li><a href="error_400.html">Extra Pricing</a></li>
          <li><a href="error_400.html">Holidays</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</div>

        )
    }
}
