"use client"

import Image from "next/image"
import Link from "next/link"
import {useEffect, useState} from "react"
import {Nav, Navbar, Modal} from "react-bootstrap"
import {DataSetMovie as data} from "../dataset/moviedata"
import {BiSearch, BiSolidLike, BiSolidDislike , BiDislike , BiLike} from "react-icons/bi"
import {IoIosNotificationsOutline} from "react-icons/io"
import {FaPencilAlt, FaRegUser} from "react-icons/fa"
import {PiUserSwitchFill} from "react-icons/pi"
import {BiHelpCircle} from "react-icons/bi"
import {FaPlay} from "react-icons/fa"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import {AiOutlineInfoCircle, AiOutlinePlus, AiTwotoneCloseCircle, AiOutlineCheck, AiOutlineHeart} from "react-icons/ai"
import Logo from "/public/img/logo.png"
import Logo2 from "/public/img/logo2.png"

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [addList,setAddList] = useState(false)
    const [show, setShow] = useState(false);
    const [moreMovie,setMoreMovie] = useState(false)

  
  

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
                <div className="hibars">
                    <span>take a look</span>
                    <span className="caret"></span>
                    <div className="tooltips">
                        <div className="tooltip-info">
                            <div className="tooltip-body">
                                <ul>
                                    <li>Homepage</li>
                                    <li>Movies</li>
                                    <li>New and Populer</li>
                                    <li>My List</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-web-right">
                <div className="search-movie">
                    <label htmlFor="check">
                        <input type="checkbox"  id="check" />
                        <BiSearch size={28} />
                    </label>
                    <input autoFocus  type="text" placeholder="content, person, genre" />
                </div>
                <Link href={"/"} className="child">
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
            <video src={"/movie3.mp4"} autoPlay loop muted className="centerVideo" poster="/img/poster.png"></video>
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
                    <button onClick={()=>setShow(true)}>
                        <AiOutlineInfoCircle size={36} />
                        More Informatio
                    </button>
                    <Modal show={show}>
                        <Modal.Body>
                                       
                            <div className="popup-content">           
                                <div className="popup-video">
                                    <video src={"/movie3.mp4"} autoPlay loop muted ></video>                               
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
                                        <button className="addList" onClick={()=>setAddList(!addList)}>
                                        {addList ? <AiOutlineCheck size={30}/> : <AiOutlinePlus size={34} /> }
                                            <div className="tooltips">
                                                <div className="tooltip-info">
                                                    <div className="tooltip-body">
                                                        Add to my list
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                        <button className="like">
                                        <BiSolidLike size={25} />
                                            <div className="tooltips">
                                                <div className="tooltip-info">
                                                    <div className="tooltip-body">
                                                    <div className="likee">
                                                            <BiLike size={30} />
                                                            <div className="tooltips">
                                                                <div className="tooltip-info">
                                                                    <div className="tooltip-body">
                                                                        Not for me
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <div className="dislike">
                                                            <BiDislike size={30} />
                                                            <div className="tooltips">
                                                                <div className="tooltip-info">
                                                                    <div className="tooltip-body">
                                                                        I liked it
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    <div className="veryLike">
                                                            <AiOutlineHeart size={30} />
                                                            <div className="tooltips">
                                                                <div className="tooltip-info">
                                                                    <div className="tooltip-body">
                                                                        I love this
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="close">
                                        <button   onClick={()=>setShow(false)}>
                                            <AiTwotoneCloseCircle size={40} />
                                        </button>
                                    </div>
                                </div>
                                <div className="movie-detail">
                                    <div className="left">
                                        <div className="year">
                                            <p>
                                                2003 &nbsp; 1 h.&nbsp; 27 min.
                                            </p>
                                            <span>
                                                HD
                                            </span>
                                        </div>
                                        <div className="age">
                                            13+
                                        </div>
                                        <div className="summary">
                                        A movie about the exciting adventures of fugitives who escaped  from Earth  on Mars.
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="info">
                                            <p><span>Cast: </span>Rowan Atkinson, Natalie Imbrugla, John Malkovic</p>
                                        </div>
                                        <div className="info">
                                            <p><span>Species: </span>British made, Funny movies</p>
                                        </div>
                                        <div className="info">
                                            <p><span>This movie: </span>Absurd , Pale freak</p>
                                        </div>

                                        
                                    </div>
                                </div>
                                <div className="actor-collection">
                                    <p>John English Collection</p>
                                    <div className="movies">
                                        {data.map((movie)=>(
                                          <>
                                            {movie.id < 4 
                                            ?   <div className="movies-card" key={movie.id}>
                                                   <div className="top">
                                                        <Image src={movie.img} alt="movieImg" height={140} width={250} />
                                                        <p>{movie.name}</p>
                                                        <span>{movie.duration}</span>
                                                   </div>
                                                   <div className="content">
                                                        <span>{movie.ageLimit}</span> 
                                                        <span>{movie.year}</span>
                                                        <p>{movie.summary}</p>
                                                   </div>
                                                </div>
                                            :
                                                ""}
                                          </>
                                        ))}
                                    </div>
                                </div>
                                <div className="collection">
                                    <p>John English Collection</p>
                                    <div className="movies">
                                        {data.map((movie)=>(
                                          <>
                                            {movie.id < `${moreMovie ? 10 : 7}`
                                            ?   <div className="movies-card" key={movie.id}>
                                                   <div className="top">
                                                        <Image src={movie.img} alt="movieImg" height={140} width={250} />
                                                        <p>{movie.name}</p>
                                                        <span>{movie.duration}</span>
                                                        <span className="play">
                                                            <FaPlay size={23} />
                                                        </span>
                                                   </div>
                                                   <div className="content">
                                                        <span>{movie.ageLimit}</span> 
                                                        <span>{movie.year}</span>
                                                        <p>{movie.summary}</p>
                                                   </div>
                                                </div>
                                            :
                                                ""}
                                          </>
                                        ))}
                                    </div>
                                    <div className="more-movie" data-mrgn={moreMovie ? "true" : ""}>
                                        <button onClick={()=>setMoreMovie(!moreMovie)}>
                                            {moreMovie ?<IoIosArrowUp size={28} />: <IoIosArrowDown size={28} /> }  
                                        </button>
                                    </div>
                                   
                                </div>                        
                                <div className="movie-about">
                                    <h4>About Confidential Delivery</h4>
                                    <p>
                                        <span>Director:</span>&nbsp;
                                        Oliver Parker
                                    </p>
                                    <p>
                                        <span>Cast:</span>&nbsp;
                                        Rowan Atkinson, Dominic West, Gillian Anderson,
                                        Rosamund Pike, Daniel Kaluuya, Richard Schiff
                                    </p>
                                    <p>
                                        <span>Screenplay:</span>&nbsp;
                                        William Davies, Hamish McColl
                                    </p>
                                    <p>
                                        <span>Species:</span>&nbsp;
                                        Family movies, Comedy movies
                                    </p>
                                    <p>
                                        <span>This Movie:</span>&nbsp;
                                        Unusual, Wacky
                                    </p>
                                    <p>
                                        <span>Adult Level:</span>&nbsp;
                                        <span>13+</span>
                                        Suitable for over 13 years old
                                    </p>


                                </div>
                            </div>
                           
                        </Modal.Body>
                    </Modal>
                </div>
            </div>        
        </div>
    </header>
  )
}

export default Header