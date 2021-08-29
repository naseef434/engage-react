import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
<div>
  {/*/ menu  */}
  <div className="main_content_iner overly_inner ">
    <div className="container-fluid p-0 ">
      {/* page title  */}
      <div className="row">
        <div className="col-12">
          <h4 className="page-title">Dashboard</h4>
        </div>   
      </div>        
      <div className="white_card card_height_100 mb_30 user_crm_wrapper">
        <div className="row">
          <div className="col-lg-3">
            <div className="single_crm">
              <div className="crm_head d-flex align-items-center justify-content-between" style={{backgroundColor: '#474784'}}>
              </div>
              <div className="crm_body">
                <img src="img/crm/court.jpg" alt width="70px;" height="50px;" className="float-right" />  
                <p>Courts</p>
                <h4>2455</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="single_crm ">
              <div className="crm_head  d-flex align-items-center justify-content-between">
              </div>
              <div className="crm_body">
                <img src="img/crm/bulk-booking.png" alt width="70px;" height="70px;" className="float-right" />  
                <p>Bulk Booking</p>
                <h4>2455</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="single_crm">
              <div className="crm_head crm_bg_1 d-flex align-items-center justify-content-between">
              </div>
              <div className="crm_body">
                <img src="img/crm/enquiry.png" alt width="70px;" height="70px;" className="float-right" />  
                <p>Bulk Enqiry</p>
                <h4>2455</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="single_crm">
              <div className="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
              </div>
              <div className="crm_body">
                <img src="img/crm/block.png" alt width="70px;" height="70px;" className="float-right" />  
                <p>Block/Unblock</p>
                <h4>2455</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="single_crm">
              <div className="crm_head  d-flex align-items-center justify-content-between" style={{backgroundColor: '#474784'}}>
              </div>
              <div className="crm_body">
                <img src="img/crm/expense.png" alt width="70px;" height="70px;" className="float-right" />  
                <p>Expense Management</p>
                <h4>2455</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="single_crm">
              <div className="crm_head d-flex align-items-center justify-content-between">
              </div>
              <div className="crm_body">
                <img src="img/crm/holiday.png" alt width="70px;" height="70px;" className="float-right" />  
                <p>Holiday Management</p>
                <h4>2455</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}
