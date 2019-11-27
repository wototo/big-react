import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaCampground } from "react-icons/fa";

const Footer = (props) =>{
    return(
        <>
        <footer className="mt-5">
            <div className="container maxWidth text-white">
                <ul className="row list-unstyled paddingX">
                    {/* <li className="col-md-4 d-flex">
                        <h5>聯絡我們</h5>
                        <ul className="list-unstyled ml-5">
                            <li><i className="fas fa-phone"></i> <span>(02)1234-5678</span></li>
                            <li className="pointer"><i className="fas fa-envelope"></i> <span>guitartist@mail.com</span></li>
                            <li className="pointer"><i className="fab fa-facebook-square"></i> <span>FACEBOOK</span></li>
                            <li className="pointer"><i className="fab fa-line"></i> <span>LINE官方帳號</span></li>
                            <li className="pointer"><i className="fab fa-instagram"></i> <span>Instagram</span></li>
                        </ul>
                    </li> */}
                    <li className="col-md-4 d-flex">
                        <h5>網站地圖</h5>
                        <ul className="list-unstyled ml-5">
                            <li className="pointer">吉他商城</li>
                            <li className="pointer">課程資訊</li>
                            <li className="pointer">場地租借</li>
                            <li className="pointer">人才招募</li>
                            <li className="pointer">會員中心</li>
                        </ul>
                    </li>
                    <li className="col-md-4 d-flex py-2">
                        <h5>更多資訊</h5>
                        <ul className="list-unstyled ml-5">
                            <li className="pointer">關於我們</li>
                            <li className="pointer">常見問題集</li>
                            {/* <li className="pointer">訂購流程</li> */}
                            <li className="pointer">隱私權條款</li>
                        </ul>
                    </li>
                </ul>
                <h6 className="text-center">©Guitartist 2019</h6>
            </div>

        </footer>
        </>
    )
}
export default Footer;