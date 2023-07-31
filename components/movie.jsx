"use client"
import Image from "next/image"
import Link from "next/link"
import { useState} from "react"
import { Modal } from "react-bootstrap"
import {DataSetMovie as data} from "../dataset/moviedata"
import { BiSolidLike, BiSolidDislike , BiDislike , BiLike} from "react-icons/bi"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import {SlArrowRight, SlArrowLeft} from "react-icons/sl"
import {FaPlay} from "react-icons/fa"
import {AiOutlineInfoCircle, AiOutlinePlus, AiTwotoneCloseCircle, AiOutlineCheck, AiOutlineHeart} from "react-icons/ai"
import Logo2 from "/public/img/logo2.png"

const Movies = () => {

    const [show,setShow] = useState(false)
    const [addList,setAddList] = useState(false)
    const [nextMovie,setNextMovie] = useState(false)
    const [previousMovie,setPreviousMovie] = useState(false)
    const [moreMovie,setMoreMovie] = useState(false)
    const [movieDetail,setMovieDetail] = useState()

 

  return (
    <div className='moviess'>
        <div className="title">Popular on Netflix</div>
        <div className="movie-slider-previous"   style={{display : previousMovie ? "flex" : "none"}}    onClick={()=>setNextMovie(!nextMovie)}>
            <SlArrowLeft size={32}  />
        </div>
        <div className="movie-slider-next" onClick={()=>{setNextMovie(!nextMovie);setPreviousMovie(true)}}>
            <SlArrowRight size={32} />
        </div>
       
        <div className="movie-list" style={{left : nextMovie ? "-915px" : "0"}}>    
        {data.map(movie=>(
            <div className="movie " key={movie.id}>
                <Image src={movie.img} alt="movieImg" width={297} height={164} />
                <span className="movie-name">{movie.name}</span>
                <div className="movie-detail">
                    <Image src={movie.img} alt="movieImg" width={400} height={250} />
                    <span className="movie-name">{movie.name}</span>
                    <div className="movie-buttons">
                            <Link href={"/"}>
                                <FaPlay size={22} />                             
                            </Link>
                           
                            {addList 
                                ?<button className="addList" onClick={()=>setAddList(!addList)}>
                                    <AiOutlineCheck size={30} />
                                    <div className="tooltips">
                                        <div className="tooltip-info">
                                            <div className="tooltip-body">
                                                Remove to my list
                                            </div>
                                        </div>
                                    </div>
                                </button> 
                               
                                :<button className="addList" onClick={()=>setAddList(!addList)}>
                                    <AiOutlinePlus size={30} />
                                    <div className="tooltips">
                                        <div className="tooltip-info">
                                            <div className="tooltip-body">
                                                Add to my list
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            }

                            

                            <button className="like">
                            <BiSolidLike size={23} />
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
                            <button onClick={()=>{setShow(true);setMovieDetail(movie)}}>
                                <IoIosArrowDown size={28} />
                            </button>
                    </div>
                    <div className="movie-time">
                        <span className="ageLimit">{movie.ageLimit}</span>
                        <span className="hours">{movie.duration}.</span>
                        <span className="quality">HD</span>
                    </div>
                    <div className="subject">
                        <span>Violent</span>
                        <span>Period movie</span>
                        <span>Visually impressive</span>
                    </div>
                </div>
            
            </div>
        ))}
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
                                <h2>{movieDetail?.name}</h2>
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
                                        {movieDetail?.duration}
                                    </p>
                                    <span>
                                        HD
                                    </span>
                                </div>
                                <div className="age">
                                    {movieDetail?.ageLimit}
                                </div>
                                <div className="summary">
                                A movie about the exciting adventures of fugitives who escaped  from Earth <br /> on Mars.
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
                                <span>{movieDetail?.ageLimit}</span>
                                Suitable for over 13 years old
                            </p>


                        </div>
                    </div>
                    
                </Modal.Body>
            </Modal>
        </div>
    </div>
  
   
  )
}

export default Movies