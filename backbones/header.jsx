"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect,useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import {BiSearch,BiSolidLike} from "react-icons/bi"
import {IoIosNotificationsOutline} from "react-icons/io"
import {FaPencilAlt,FaRegUser} from "react-icons/fa"
import {PiUserSwitchFill} from "react-icons/pi"
import {BiHelpCircle} from "react-icons/bi"
import {FaPlay} from "react-icons/fa"
import {AiOutlineInfoCircle, AiOutlinePlus, AiTwotoneCloseCircle} from "react-icons/ai"
import Logo from "/public/img/logo.png"
import Logo2 from "/public/img/logo2.png"

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [show, setShow] = useState(false);


    useEffect(()=>{

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();
    window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])

   
  return (
    <header className='header'>
        
        <div className="header-web-wrapper" style={{backgroundColor: scrollY >=90 ? "#0c0c0c" : ""}}>
            <div className="header-web-left">
                <Image src={Logo} alt="mainLogo"/>
                <Navbar >
                    <Nav variant="pills" defaultActiveKey="http://localhost:3001/">
                        <Nav.Item>
                            <Link className="active" href={"http://localhost:3001/"}>
                                Home Page
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href={"#"}>
                                Series
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link  href={"#"}>
                                Movies
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link  href={"#"}>
                                New and Popular
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link  href={"#"}>
                                My List
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link  href={"#"}>
                                Browse By Language
                            </Link>
                        </Nav.Item>
                        
                    </Nav>
                </Navbar>
            </div>
            <div className="header-web-right">
                <div className="search-movie">
                    <label htmlFor="check">
                        <input type="checkbox"  id="check" />
                        <BiSearch size={28} />
                    </label>
                    <input autoFocus  type="text" placeholder="content, person, genre" />
                </div>
                <Link href={"/"}>
                    Child
                </Link>
                <div className="notification">
                    <IoIosNotificationsOutline size={28} />
                    <div className="tooltips">
                        <div className="tooltip-info">
                            <div className="tooltip-body">
                                no new notifications
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-profile">
                   <div className="info">
                    <img src="https://occ-0-7293-3934.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="user" width={32} height={32} />
                        <span className="caret"></span>
                    <div className="tooltips">
                        <div className="tooltip-info">
                            <div className="tooltip-body">
                                <ul>
                                    <li>
                                       <Link href={"/"}>
                                        <img src="https://occ-0-7293-3934.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTXy4urEIKD_9qEo1knbgNlDkqHgUQEJLytycZ3rPFmvqiXd_fQUhKvxBDF-oiL-861qBvulDwHV8feopsWEjrhVyrs9FBg.png?r=98e" alt="user"  />
                                            <span>User 1</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href={"/"}>
                                        <img src="https://occ-0-7293-3934.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4" alt="user"  />
                                            <span>User 2</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href={"/"}>
                                            <FaPencilAlt size={20} />
                                            <span>Profile Management</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href={"/"}>
                                            <PiUserSwitchFill size={20} />
                                            <span>Transfer Profile</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href={"/"}>
                                            <FaRegUser size={20} />
                                            <span>Account</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href={"/"}>
                                            <BiHelpCircle size={20} />
                                            <span>Help Center</span>
                                       </Link>
                                    </li>
                                </ul>
                                <button>
                                    sign out of netflix
                                </button>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        <div className="movie">
            <video src={"/mo.mp4"} autoPlay loop muted className="centerVideo" ></video>
            <div className="movie-content">
                <div className="top">
                    <Image src={Logo2} width={40} alt="movieLogo" />
                    <span>MOVIE</span>
                </div>
                <div className="movie-name">
                   <h2> Confidential <br /> Delivery</h2>
                </div>
                <div className="movie-p">
                    <p>It is a movie where you will feel  how international <br /> illegal trade is done and the  excitement experienced <br /> while doing it.</p>
                </div>
                <div className="movie-buttons">
                <Link href={"/"}>
                    <FaPlay size={30} />
                    Play
                </Link>
                <label className="movieInfo" htmlFor="checkMovie">
                    <AiOutlineInfoCircle size={36} />
                    More Informatio
                </label>
                <input type="checkbox" id="checkMovie" />
               
                <div className="popup">
                   
                    <div className="popup-content">
                      
                        <div className="popup-video">
                         <video src={"/mo.mp4"} autoPlay loop muted ></video>
                        </div>
                      
                        <div className="movie-info">
                            <div className="top">
                                <Image src={Logo2} width={25} alt="movieLogo" />
                                <span>MOVIE</span>
                            </div>
                            <div className="movie-name">
                                <h2> Confidential  Delivery</h2>
                            </div>
                            <div className="movie-buttons">
                                <Link href={"/"}>
                                    <FaPlay size={25} />
                                    Play
                                </Link>
                                <button>
                                   <AiOutlinePlus size={37} />
                                </button>
                                <button>
                                   <BiSolidLike size={25} />
                                </button>
                            </div>
                            <div className="close">
                            <label   htmlFor="checkMovie">
                                <AiTwotoneCloseCircle size={36} />
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>        
        </div>
    </header>
  )
}

export default Header