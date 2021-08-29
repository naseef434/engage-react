import React, { Component } from 'react'

export default class CourtList extends Component {
    render() {
        return (
  <div>
  <div className="main_content_iner overly_inner ">
    <div className="container-fluid p-0 ">   
      {/* main content goes here */}
      <div className="col-lg-12">
        <div className="white_card card_height_100 mb_30">
          <div className="white_card_header">
            <div className="box_header m-0">
              <div className="main-title">
                <h3 className="m-0" />
              </div>
            </div>
          </div>
          <div className="white_card_body">
            <div className="QA_section">
              <div className="white_box_tittle list_header">
                <h4>Courts</h4>
                <div className="box_right d-flex lms_block">
                  <div className="serach_field_2">
                    <div className="search_inner">
                      <form active="#">
                        <div className="search_field">
                          <input type="text" placeholder="Search court here..." />
                        </div>
                        <button type="submit"> <i className="ti-search" /> </button>
                      </form>
                    </div>
                  </div>
                  <div className="add_button ml-10">
                    <a href="add_court.html" className="btn_1">Add New</a>
                  </div>
                </div>
              </div>
              <div className="QA_table mb_30">
                {/* table-responsive */}
                <table className="table lms_table_active ">
                  <thead>
                    <tr>
                      <th scope="col">SN</th>
                      <th scope="col">Venue</th>
                      <th scope="col">Court name</th>
                      <th scope="col">Court ID</th>
                      <th scope="col">Image </th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"> <a href="#" className="question_content">  1</a></th>
                      <td>Dubai </td>
                      <td>Badminton 1</td>
                      <td>BMC-1</td>
                      <td> <img className="img-fluid radius_10" src="img/crm/court.jpg" alt width="70px;" height="50px;" /></td>
                      <td>25 AED</td>
                      <td><a href="#" className="status_btn">Active</a></td>
                      <td><a href="#" className="action_btn mr_10"> <i className="far fa-edit" /> </a><a href="#" className="action_btn mr_10"> <i className="fas fa-trash" /> </a></td>
                    </tr>
                    <tr>
                      <th scope="row"> <a href="#" className="question_content">  2</a></th>
                      <td>Dubai </td>
                      <td>Badminton 1</td>
                      <td>BMC-1</td>
                      <td> <img className="img-fluid radius_10" src="img/crm/court.jpg" alt width="70px;" height="50px;" /></td>
                      <td>25 AED</td>
                      <td><a href="#" className="status_btn">Active</a></td>
                      <td><a href="#" className="action_btn mr_10"> <i className="far fa-edit" /> </a><a href="#" className="action_btn mr_10"> <i className="fas fa-trash" /> </a></td>
                    </tr>
                    <tr>
                      <th scope="row"> <a href="#" className="question_content">  3</a></th>
                      <td>Dubai </td>
                      <td>Badminton 1</td>
                      <td>BMC-1</td>
                      <td> <img className="img-fluid radius_10" src="img/crm/court.jpg" alt width="70px;" height="50px;" /></td>
                      <td>25 AED</td>
                      <td><a href="#" className="status_btn">Active</a></td>
                      <td><a href="#" className="action_btn mr_10"> <i className="far fa-edit" /> </a><a href="#" className="action_btn mr_10"> <i className="fas fa-trash" /> </a></td>
                    </tr>
                    <tr>
                      <th scope="row"> <a href="#" className="question_content">  4</a></th>
                      <td>Dubai </td>
                      <td>Badminton 1</td>
                      <td>BMC-1</td>
                      <td> <img className="img-fluid radius_10" src="img/crm/court.jpg" alt width="70px;" height="50px;" /></td>
                      <td>25 AED</td>
                      <td><a href="#" className="status_btn">Active</a></td>
                      <td><a href="#" className="action_btn mr_10"> <i className="far fa-edit" /> </a><a href="#" className="action_btn mr_10"> <i className="fas fa-trash" /> </a></td>
                    </tr>
                    <tr>
                      <th scope="row"> <a href="#" className="question_content">  5</a></th>
                      <td>Dubai </td>
                      <td>Badminton 1</td>
                      <td>BMC-1</td>
                      <td> <img className="img-fluid radius_10" src="img/crm/court.jpg" alt width="70px;" height="50px;" /></td>
                      <td>25 AED</td>
                      <td><a href="#" className="status_btn">Active</a></td>
                      <td><a href="#" className="action_btn mr_10"> <i className="far fa-edit" /> </a><a href="#" className="action_btn mr_10"> <i className="fas fa-trash" /> </a></td>
                    </tr>
                    <tr>
                      <th scope="row"> <a href="#" className="question_content">  6</a></th>
                      <td>Dubai </td>
                      <td>Badminton 1</td>
                      <td>BMC-1</td>
                      <td> <img className="img-fluid radius_10" src="img/crm/court.jpg" alt width="70px;" height="50px;" /></td>
                      <td>25 AED</td>
                      <td><a href="#" className="status_btn">Active</a></td>
                      <td><a href="#" className="action_btn mr_10"> <i className="far fa-edit" /> </a><a href="#" className="action_btn mr_10"> <i className="fas fa-trash" /> </a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main content end here*/}
    </div>
  </div></div>

    </div>

            </div>
        )
    }
}
