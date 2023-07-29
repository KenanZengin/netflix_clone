"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {DataSetMovie as data} from "../dataset/moviedata"
import { BiSolidLike, BiSolidDislike , BiDislike , BiLike} from "react-icons/bi"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import {SlArrowRight, SlArrowLeft} from "react-icons/sl"
import {FaPlay} from "react-icons/fa"
import {AiOutlinePlus, AiOutlineCheck, AiOutlineHeart} from "react-icons/ai"

const Movies = () => {
    

    const [addList,setAddList] = useState(false)
    const [nextMovie,setNextMovie] = useState(false)

  return (
    <div className='moviess'>
        
        <div className="movie-slider-previous" style={{"display" : nextMovie ? "flex" : "none"}} onClick={()=>setNextMovie(!nextMovie)}>
            <SlArrowLeft size={32}  />
        </div>
        <div className="movie-slider-next" onClick={()=>setNextMovie(!nextMovie)}>
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
                            <button className="addList" onClick={()=>setAddList(!addList)}>
                            {addList ? <AiOutlineCheck size={30}/> : <AiOutlinePlus size={30} /> }
                                <div className="tooltips">
                                    <div className="tooltip-info">
                                        <div className="tooltip-body">
                                            Add to my list
                                        </div>
                                    </div>
                                </div>
                            </button>
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
                            <button>
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
      
        </div>
    </div>
  )
}

export default Movies