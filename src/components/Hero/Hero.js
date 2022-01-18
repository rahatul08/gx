import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import ImageData from '../../assets/ImageData';
import {Link} from'react-router-dom'

import { IoIosArrowDown } from "react-icons/io";
import { BsYoutube , BsTelegram ,BsDiscord} from "react-icons/bs";
import {AiOutlineFile} from 'react-icons/ai'
import {FaFacebook,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa'

const Wrapper =styled.div`
    overflow: hidden;
    .bg{
        background-image: url(${ImageData.slider1});
        background-repeat:no-repeat;
        background-size: cover;
        width: 100%;
        align-content:space-between;
        height: 100%;
    }
    .shape{
        background: transparent linear-gradient(127deg, #D73393 0%, #6E52A4 49%, #317EBD 100%) 0% 0% no-repeat padding-box;
        box-shadow: 7px 7px 5px #00000059;
        opacity: 1;
        width: 39px;
        height: 36px;
    }
    .copy-button{
        background: #7161BB 0% 0%;
        padding: 10px 20px;
        border-radius: 16px;
        margin-left:5px;
    }
    .buy-button{
        position: relative;
        padding: 10px 20px;
        color: #FFFFFF;
        p{
            position: relative;
            z-index: 1;
        }
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: transparent linear-gradient(107deg, #FC3CAC 0%, #7250A3 48%, #3181C1 100%) 0% 0% no-repeat ;
            box-shadow: inset 3px 3px 12px #0000003D, 3px 3px 12px #0000006E;
            border-radius: 12px;
            opacity: 0.75;
            width: 100%;
            height: 100%;
        }
    }
    .btn{
        padding: 10px 20px;
        position: relative;
        margin-left:8px;
        color: #FFFFFF;

        p{
            position: relative;
            z-index: 1;
        }
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: #38326263 0% 0% no-repeat padding-box;
             box-shadow: inset 3px 3px 12px #0000003D, 3px 3px 12px #0000006E;
            border: 0.4000000059604645px solid #A331818F;
             border-radius: 12px;
             opacity: 0.75;
            width: 100%;
            height: 100%;
        }
    }
    .social{
        ul{
            overflow: hidden;
        background-image: url(${ImageData.socialBg});
        background-repeat: no-repeat;
        background-size: cover;
        align-items: center;
        justify-content: center;
        display: flex;
        width: 47px;
        height: 228px;
        li{
            text-align: right;
            width: 100%;
            a{
                display: flex;
                justify-content: right;
                padding:7px 8px;
                font-size: 18px;
            }
        }
    }
    }
    .sp1{
        width:150px;
    }
    .mobile-design{
                display:none;
            }
      
    @media (max-width: 768px){
            .sp1{
                width:150px;
            }
            .mobile-design{
                display:block;
            }
            .desktop-design{
                display: none;
            }  
            .bg{
                height: 100% !important;
                background-position-x: -201px;
            }
    }
    @media (max-width:500px){
        .bg {
                height: 530px !important;
                background-position-x: -421px;
            }
            .text-4xl{
                font-size:20px;
                font-weight: bold;
                line-height:1.7rem;
            }
            .pr-0.pt-2{
                font-size:14px;
                font-weight: bold;
            }
            .buy-button{
                    font-size:14px;
            }
            .connect{
                font-size:14px;
                left:-10px;
            }
            .bg-transparent.absolute.text-sm.flex.items-center.left-3.top-2{
                padding:3px;
                font-size:13px;
            }
            .bg-transparent.border-2.py-2.pl-16.rounded-xl.w-full{
                font-size:13px;
            }
    }
    @media only screen and (max-width:600px){
        .buy-button{
                    font-size:10px;
            }
    }
    @media (max-width:400px){
        .buy-button{
                    font-size:10px;
            }
    }

`
const HeroSection = () => {
    useEffect(() => {
        AOS.init(
            {
                offset:100,
                duration:1000,
                easing:'ease-in'

            }
        )
    })

    return (
        <Wrapper>
            {/* desktop design */}
                <div className="desktop-design">
                <div className="bg w-full flex flex-col ">
                <div className="relative pt-24 pb-28">
                <div className="container mx-auto ">
                    <div className="flex flex-row pt-40 h-full justify-start md:pt-10">
                        <div className="left-side-content basis-3/5 lg:basis-3/4 md:basis-full sm:basis-full">
                            <div className="top-line flex">
                                <div className="">
                                    <img src={ImageData.sp1} alt=""  className="sp1"/>
                                </div>
                                <div className="content text-white" data-aos="fade-up">
                                    <h2 className="pb-5 text-4xl">Welcome To <br />
                                        Galaxy SpaceX (GSX)
                                     </h2>
                                     <p className="pr-44 pt-2 pb-4"> The Metaverse technology It’s a combination of multiple elements of technology, including virtual reality, augmented reality and video where users “live” within a digital universe. Markhor Meta NFT block gaming free to play , play to earn, NFT market place ,staking pool.</p>
                                     <div className="input-box pt-5 flex pb-3">
                                         <div className="left-input-box relative w-4/5">
                                            <input type="text"  className=" bg-transparent border-2 py-2 pl-16 rounded-xl w-full" placeholder="0xbB19Ac7AFCd532B13158810FF66c16f17635De87" />
                                            <button className="bg-transparent absolute  flex items-center left-3 top-2" type="button"><p>BTC</p><IoIosArrowDown className="mt-1"/> </button>
                                         </div>
                                         <div className="right-input-box">
                                             <button type="button" className="copy-button" >COPY LINK </button>
                                         </div>
                                     </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="right-side-content basis-2/5 md:hidden">
                        </div>
                    </div>
                    <div className="flex md:flex-col lg:flex-row">
                        <div className="left w-1/2 md:basis-11/12 md:w-full ">
                        <div className="button-gallery pt-10 pl-10 pb-20 flex justify-content-start items-center md:py-2 " data-aos="zoom-in"> 
                                         <button type="button" className="buy-button ml-30"><p>BUY</p></button> 
                                         <button type="button" className="btn"><p>Live Chart</p></button>  
                                         <button type="button" className="btn"><p>BSC Scan</p>
                                         </button>                              
                                          <button type="button" className="btn"><p>White Paper</p></button>
                                     </div>
                        </div>
                        <div className="right w-1/2 text-right flex items-center justify-end md:basis-11/12" >
                            <button className="file-button buy-button mt-2 mr-14" data-aos="fade-right">  <p className="flex items-center"> <AiOutlineFile className="mr-1"/> <span>JOIN WHITELIST COMPETITION</span></p></button>
                        </div>
                    </div>

                </div>
                <div className="social  right-0 absolute bottom-20">
                        <ul className=" flex-col text-slate-200">
                            <li>
                                <Link  to=""><BsYoutube/></Link>
                            </li>
                            <li>
                                <Link to=""><BsTelegram/></Link>
                            </li>
                            <li>
                                <Link  to=""><FaFacebook/></Link>
                            </li>                            
                            <li>
                                <Link  to=""><FaTwitterSquare/></Link>
                            </li>                            
                            <li>
                                <Link  to=""><FaInstagramSquare/></Link>
                            </li> 
                            <li>
                                <Link  to=""><BsDiscord/></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
                </div>
            {/* mobile design */}

            <div className="mobile-design">
            <div className="bg w-full flex flex-col pt-5">
                <div className="relative">
                <div className="container mx-auto ">
                    <div className="flex  justify-start">
                        <div className="left-side-content basis-4/5	py-5 ">
                            <div className="top-line flex">
                                <div className="">
                                    <img src={ImageData.sp1} alt=""  className="sp1"/>
                                </div>
                                <div className="content text-white" data-aos="fade-in">
                                    <h2 className="pb-3 text-4xl">Welcome To <br />
                                        Galaxy SpaceX (GSX)
                                     </h2>
                                     <p className="pr-0 pt-2"> The Metaverse technology It’s a combination of multiple elements of technology, including virtual reality, augmented reality and video where users “live” within a digital universe. Markhor Meta NFT block gaming free to play , play to earn, NFT market place ,staking pool.</p>

                                     <button type="button" className="buy-button text-sm mt-5"><p>BUY</p></button> 

                                     <div className="input-box pt-5 flex">
                                         <div className="left-input-box relative w-full">
                                            <input type="text"  className=" bg-transparent border-2 py-2 pl-16 rounded-xl w-full" placeholder="0xbB19Ac7AFCd532B13158810FF66c16f17635De87" />
                                            <button className="bg-transparent absolute text-sm  flex items-center left-3 top-2" type="button"><p>BTC</p><IoIosArrowDown className="mt-1"/> </button>
                                         </div>
                                     </div>
                                     <button className="file-button buy-button mt-2 mr-14">  <p className="flex items-center"> <AiOutlineFile className="mr-1"/> <span>JOIN WHITELIST COMPETITION</span></p></button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="right-side-content basis-1/5 py-5 sm:pb-3" data-aos="zoom-in">
                        <button type="button" className="buy-button text-sm connect"><p>connect</p></button> 
                        </div>
                    </div>


                </div>
                <div className="social  right-0 absolute bottom-0">
                        <ul className=" flex-col text-slate-200" data-aos="zoom-in">
                            <li>
                                <Link  to=""><BsYoutube/></Link>
                            </li>
                            <li>
                                <Link to=""><BsTelegram/></Link>
                            </li>
                            <li>
                                <Link  to=""><FaFacebook/></Link>
                            </li>                            
                            <li>
                                <Link  to=""><FaTwitterSquare/></Link>
                            </li>                            
                            <li>
                                <Link  to=""><FaInstagramSquare/></Link>
                            </li> 
                            <li>
                                <Link  to=""><BsDiscord/></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        </Wrapper>
    );
};

export default HeroSection;