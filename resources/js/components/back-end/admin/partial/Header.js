import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
const navigate = useNavigate();
function handleLogout(){
    axios.post('/logout');
    navigate("/login");
}
  return (
    <div className="header_iner d-flex justify-content-between align-items-center">
                <div className="sidebar_icon d-lg-none">
                    <i className="ti-menu"></i>
                </div>
                <label className="form-label switch_toggle d-none d-lg-block" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round open_miniSide"></div>
                </label>
                <div className="header_right d-flex justify-content-between align-items-center">
                    <div className="header_notification_warp d-flex align-items-center">
                        <li>
                            <div className="serach_button">
                                <i className="ti-search"></i>
                                <div className="serach_field-area d-flex align-items-center">
                                    <div className="search_inner">
                                        <form action="#">
                                            <div className="search_field">
                                                <input type="text" placeholder="Search here..." />
                                            </div>
                                            <button className="close_search"><i className="ti-search"></i></button>
                                        </form>
                                    </div>
                                    <span className="f_s_14 f_w_400 ml_25 white_text text_white">Apps</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a className="bell_notification_clicker" href="#">
                                <img src="back-end/img/icon/bell.svg" alt="" />
                                <span>2</span>
                            </a>

                            <div className="Menu_NOtification_Wrap">
                                <div className="notification_Header">
                                    <h4>Notifications</h4>
                                </div>
                                <div className="Notification_body">
                                    <div className="single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#"><img src="back-end/img/staf/2.png" alt="" /></a>
                                        </div>
                                        <div className="notify_content">
                                            <a href="#"><h5>Cool Marketing</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>

                                    <div className="single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#"><img src="back-end/img/staf/4.png" alt="" /></a>
                                        </div>
                                        <div className="notify_content">
                                            <a href="#"><h5>Awesome packages</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>

                                    <div className="single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#"><img src="back-end/img/staf/3.png" alt="" /></a>
                                        </div>
                                        <div className="notify_content">
                                            <a href="#"><h5>what a packages</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>

                                    <div className="single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#"><img src="back-end/img/staf/2.png" alt="" /></a>
                                        </div>
                                        <div className="notify_content">
                                            <a href="#"><h5>Cool Marketing</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>

                                    <div className="single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#"><img src="back-end/img/staf/4.png" alt="" /></a>
                                        </div>
                                        <div className="notify_content">
                                            <a href="#"><h5>Awesome packages</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>

                                    <div className="single_notify d-flex align-items-center">
                                        <div className="notify_thumb">
                                            <a href="#"><img src="back-end/img/staf/3.png" alt="" /></a>
                                        </div>
                                        <div className="notify_content">
                                            <a href="#"><h5>what a packages</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nofity_footer">
                                    <div className="submit_button text-center pt_20">
                                        <a href="#" className="btn_1">See More</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a className="CHATBOX_open" href="#"> <img src="back-end/img/icon/msg.svg" alt="" /> <span>2</span> </a>
                        </li>
                    </div>
                    <div className="profile_info">
                        <img src="back-end/img/client_img.png" alt="#" />
                        <div className="profile_info_iner">
                            <div className="profile_author_name">
                                <p>Neurologist</p>
                                <h5>Dr. Robar Smith</h5>
                            </div>
                            <div className="profile_info_details">
                                <a href="#">My Profile </a>
                                <a href="#">Settings</a>
                                <button onClick={handleLogout}> Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Header
