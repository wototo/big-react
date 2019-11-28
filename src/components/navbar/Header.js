import React from 'react';
import { BrowserRouter as Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { FaUserAlt, FaSearch } from "react-icons/fa";
import logo from '../../logo.svg';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
        // this.selectIndex = this.selectIndex.bind(this);
        // this.selectBuy = this.selectBuy.bind(this);
        // this.selectCourse = this.selectCourse.bind(this);
        // this.selectSite = this.selectSite.bind(this);
        // this.selectRecruit = this.selectRecruit.bind(this);
        // this.selectForum = this.selectForum.bind(this);
        this.state = {
            Buy: '',
            Course: '',
            Site: '',
            Recruit: '',
            Forum: '',
            logined: false,
            isAuthenticated: props.isAuthenticated,
            isntAuthenticated: props.isntAuthenticated,
        }
    }

    // selectIndex(event) {
    //     this.setState({
    //         Buy: '',
    //         Course: '',
    //         Site: '',
    //         Recruit: '',
    //         Forum: ''
    //     })
    // }
    // selectBuy(event) {
    //     this.setState({
    //         Buy: 'showLine',
    //         Course: '',
    //         Site: '',
    //         Recruit: '',
    //         Forum: ''
    //     })
    // }
    // selectCourse(event) {
    //     this.setState({
    //         Buy: '',
    //         Course: 'showLine',
    //         Site: '',
    //         Recruit: '',
    //         Forum: ''
    //     })
    // }
    // selectSite(event) {
    //     this.setState({
    //         Buy: '',
    //         Course: '',
    //         Site: 'showLine',
    //         Recruit: '',
    //         Forum: ''
    //     })
    // }
    // selectRecruit(event) {
    //     this.setState({
    //         Buy: '',
    //         Course: '',
    //         Site: '',
    //         Recruit: 'showLine',
    //         Forum: ''
    //     })
    // }
    // selectForum(event) {
    //     this.setState({
    //         Buy: '',
    //         Course: '',
    //         Site: '',
    //         Recruit: '',
    //         Forum: 'showLine'
    //     })
    // }

    componentWillMount() {  // 一進入網站(render前)就判斷是否登入
        const mem_account = localStorage.getItem("mem_account")
        if (mem_account) {
            this.setState({ logined: true })
        }
    }

    componentWillReceiveProps(nextProps) { // componentWillReceiveProps方法中第一個參數代表即將傳入的新的Props
        if (nextProps.isAuthenticated !== this.props.isAuthenticated) { // 新傳進來的props不等於第一次render的props
            if (nextProps.isAuthenticated) { // 如果從父元件新傳進來的props表示已登入，改變這個元件的狀態
                this.setState({ logined: true })
            }
        }
        if (nextProps.isntAuthenticated !== this.props.isntAuthenticated) {
            if (nextProps.isntAuthenticated) { // 如果從父元件新傳進來的props表示已登出，改變這個元件的狀態
                this.setState({ logined: false })
            }
        }
    }

    renderMemberAvatar = () => {
        const mem_avatar = localStorage.getItem("mem_avatar")

        return (
            <li className="d-flex align-items-center logout border-0">
                <NavLink exact className="nav-link py-1" to="/Member">
                    <figure className="header_avatar m-0">
                        <img src={"../../" + mem_avatar} alt="" />
                    </figure>
                </NavLink>
                <button className="btn btn-outline-grass p-0 ">
                    <NavLink className="nav-link grass" to="/Logout">登出</NavLink>
                </button>
            </li>
        )
    }

    renderLoginButton = () => {
        return (
            <li className="login border-0">
                <button className="btn btn-outline-grass p-0">
                    <NavLink className="nav-link grass" to="/Login"><FaUserAlt />&nbsp;登入/註冊</NavLink>
                </button>
            </li>
        )
    }

    renderAvatarRWD = () => {
        const mem_avatar = localStorage.getItem("mem_avatar")
        const mem_account = localStorage.getItem("mem_account")
        const mem_name = localStorage.getItem("mem_name")

        return (
            <div className="d-flex align-items-center logout border-0">
                <figure className="header_avatar m-0 p-0 my-1">
                    <img src={"../../" + mem_avatar} alt="" />
                </figure>
                <p className="m-0">&nbsp;&nbsp;{mem_account} / {mem_name}</p>
            </div>
        )
    }

    renderMemberRWD = () => {
        return (
            <>
                <p className="m-0 fs-18 border-bottom">
                    <Nav.Link className="nav-link" href="/Member">會員中心</Nav.Link>
                </p>
                <NavDropdown title="&nbsp;&nbsp;訂單管理" id="basic-nav-dropdown" className="">
                    <NavDropdown.Item href="/">吉他訂單</NavDropdown.Item>
                    <NavDropdown.Item href="">課程訂單</NavDropdown.Item>
                    <NavDropdown.Item href="">場地訂單</NavDropdown.Item>
                </NavDropdown>
                <div>
                    <Nav.Link className="nav-link" href="">&nbsp;&nbsp;我的折價券</Nav.Link>
                </div>
                <div>
                    <Nav.Link className="nav-link" href="">&nbsp;&nbsp;我的最愛</Nav.Link>
                </div>
                {/* <NavDropdown title="&nbsp;&nbsp;文章管理" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Member/MyPostEditor">新增文章</NavDropdown.Item>
                    <NavDropdown.Item href="/Member/MyPostList">文章列表</NavDropdown.Item>
                </NavDropdown>
                <div>
                    <Nav.Link className="nav-link" href="/Member/MemberLevel">&nbsp;&nbsp;會員等級</Nav.Link>
                </div>
                <div className="border-bottom">
                    <Nav.Link className="nav-link" href="/Member/MyInfoEditor">&nbsp;&nbsp;編輯會員資料</Nav.Link>
                </div> */}
                <div>
                    <p className="m-0 fs-18">
                        <Nav.Link className="nav-link" href="/Logout">登出</Nav.Link>
                    </p>
                </div>
            </>
        )
    }

    renderLoginRWD = () => {
        return (
            <div>
                <p className="m-0 fs-18">
                    <Nav.Link className="nav-link" href="/Login">登入/註冊</Nav.Link>
                </p>
            </div>
        )
    }

    render() {
        return (
            <>
                <div className="fixed-top">
                    <nav className="grass web_navbar">
                        <div className="container">
                            <ul className="list-unstyled row justify-content-between align-items-center">
                                <li className="align-items-center" onClick={this.selectIndex}>
                                    <NavLink className="navbar-brand logo_box" to="/"><img src={logo} alt="" /> </NavLink>
                                </li>

                                <li className="row justify-content-end maxWidth header_middle" style={{ flexGrow: '2' }}>
                                    {/* <form className="form-inline searchBar">
                                        <input className="form-control" type="search" placeholder="找營地…" aria-label="Search" />
                                        <button className="btn text-light bg-grass fs-18 border-0" type="submit"><FaSearch /></button>
                                    </form> */}

                                    <ul className="list-unstyled row nav_menu fw-medium">
                                        <li className={"nav-item position-relative " + this.state.Buy}>
                                            <NavLink className="nav-link grass" to="/Buy" onClick={this.selectBuy}>購買吉他</NavLink>
                                        </li>
                                        <li className={"nav-item position-relative " + this.state.Course}>
                                            <NavLink className="nav-link grass" to="/" onClick={this.selectCourse}>學習吉他</NavLink>
                                        </li>
                                        <li className={"nav-item position-relative " + this.state.Site}>
                                            <NavLink className="nav-link grass" to="/" onClick={this.selectSite}>場地租借</NavLink>
                                        </li>
                                        <li className={"nav-item position-relative " + this.state.Recruit}>
                                            <NavLink className="nav-link grass" to="/" onClick={this.selectRecruit}>人才招募</NavLink>
                                        </li>
                                        <li className={"nav-item position-relative " + this.state.Forum}>
                                            <NavLink className="nav-link grass" to="/" onClick={this.selectForum}>討論區</NavLink>
                                        </li>
                                    </ul>
                                </li>

                                {/* 登入沒 ? 是(會員頭像+登出按鈕) : 否(登入/註冊按鈕) */}
                                {this.state.logined ? (this.renderMemberAvatar()) : (this.renderLoginButton())}

                            </ul>
                        </div>
                    </nav>
                </div>

                {/* <div className="fixed-top"> */}
                <Navbar bg="light" expand="lg" className="mobile_navbar fixed-top">
                    
                    <NavLink className="navbar-brand logo_box" to="/"><img src={logo} alt="" /> </NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                    
                        {/* <form className="form-inline searchBar my-1">
                            <input className="form-control" type="search" placeholder="找營地…" aria-label="Search" />
                            <button className="btn text-light bg-grass fs-18 border-0" type="submit"><FaSearch /></button>
                        </form> */}
                        <Nav>

                            {this.state.logined ? (this.renderAvatarRWD()) : ('')}

                            <p className="m-0 border-bottom fs-18">
                                <Nav.Link className="nav-link" href="/Buy" onClick={this.selectBuy}>購買吉他</Nav.Link>
                            </p>
                            <p className="m-0 border-bottom fs-18">
                                <Nav.Link className="nav-link" href="/" onClick={this.selectCourse}>學習吉他</Nav.Link>
                            </p>
                            <p className="m-0 border-bottom fs-18">
                                <Nav.Link className="nav-link" href="/" onClick={this.selectSite}>場地租借</Nav.Link>
                            </p>
                            <p className="m-0 border-bottom fs-18">
                                <Nav.Link className="nav-link" href="/" onClick={this.selectRecruit}>人才招募</Nav.Link>
                            </p>
                            <p className="m-0 border-bottom fs-18">
                                <Nav.Link className="nav-link" href="/" onClick={this.selectForum}>討論區</Nav.Link>
                            </p>

                            {this.state.logined ? (this.renderMemberRWD()) : (this.renderLoginRWD())}

                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
                {/* </div> */}
            </>
        )
    }
}

export default Header;