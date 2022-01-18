import React,{useState} from 'react';
import HeroSection from '../Hero/Hero';
import styled from 'styled-components'
import ImageData from '../../assets/ImageData';
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import MobileMenu from './Mobile-menu';

const Wrapper = styled.div`
    overflow: hidden;
    .button{
        background: yellow;
        padding:10px 20px ;
        color: black;
    }
    .nav-logo{
        position: relative;
        display: inline-block;
       &::after{
         content: "";  
        position: absolute;
        top: 0;
        background-image: url(${ImageData.logoP});
        height: 9px;
        width: 100%;
        left: 10px;
        background-size:cover;

       } 
    }
    .menu-items{
        position: relative;
        
        li{
            padding:0 20px;
            margin:0 5px;
        }
        a{
            font-size: 12px;
            color: #FFFFFF;
            position: relative;
            z-index: 1;
            padding:2px 0;
            &::after{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                background: transparent linear-gradient(90deg, #FF3CAC 0%, #784BA0 52%, #2B86C5 100%) 0% 0% no-repeat padding-box;
                height: 2px;
                width: 0;
                transition: all 0.3s;
            }
            &:hover::after{
                width:100%;
            }
        }
    }
    .menu-items::before{
        content: "";
        background: transparent linear-gradient(180deg, #FFFFFF66 0%, #FFFFFF66 0%, #FFFFFF0D 100%) 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 12px #00000029;
        border: 0.5px solid #FFFFFF;
        border-radius: 12px;
        opacity: 0.35;
        position: absolute;
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .select-button{
        padding:7px 25px;
        position: relative;
        color: #FFFFFF;
        font-size:13px;
        p{
            position: relative;
            z-index: 1;
        }
        .ml-1{
            position: relative;
            z-index: 1;
        }
        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
             background: transparent linear-gradient(180deg, #FFFFFF66 0%, #FFFFFF66 0%, #FFFFFF0D 100%) 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 12px #00000029;
            border: 0.5px solid #FFFFFF;
            border-radius: 12px;
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            width: 100%;
            height: 100%;
            opacity: 0.3;
        }

    }
    .Connect-button{
        padding:7px 25px;
        position: relative;
        color: #FFFFFF;
        font-size:13px;
        p{
            position: relative;
            z-index: 1;
        }
        &::before{
            content:"";
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            left: 0;
            background: transparent linear-gradient(107deg, #FC3CAC 0%, #7250A3 48%, #3181C1 100%) 0% 0% no-repeat padding-box;
            box-shadow: inset 3px 3px 12px #0000003D, 3px 3px 12px #0000006E;
            border-radius: 12px;
            opacity: 0.6;
        }
    }
    .drop-down{
        transition:all 0.3s;
    }
    .dop-btn:hover .drop-down{
        display:block !important;
    }
    .mobile-menu{
        z-index:11111 !important;
        position:relative;
        .nav-logo::after{
            display:none !important;
        }
        .mobile-menu-item{
            background-color:#0C0C0C;
            width:100% !important;
            li{
                padding:10px 0;
                border-bottom:1px solid #707070;
                .nav-item{
                    padding-left:10px
                }
            }
        }
    }
    

    @media (max-width: 1168px){
        .menu-area {
            display:none;
        }
        .mobile-menu{
            display:block;
        }
    }

`
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [isLanguage, setLanguage] = useState(false);
    const languageToggle = () => setLanguage(!isLanguage);

    return (
        <Wrapper>
        {/* menu area */}
        <div className="absolute  top-0 w-full">
            <div className=" mx-auto  w-10/12 md:w-11/12 ">
                {/* desktop menu */}
                <div className="menu-area  flex items-center  flex-row justify-between w-full ">
                    <div className="logo-area basis-1/4 md:basis-4/3  ">
                        <Link to="/" className="nav-logo"><img src={ImageData.logo} alt="" className="pt-3  w-10/12" /></Link>
                    </div>
                    <div className="menu basis-2/2 md:basis-2/1 lg:basis-2/1 flex items-center justify-center px-2 relative">
                        <ul className="flex items-center justify-center flex-inline menu-items font-Ral px-6 py-1">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/" >Play</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/" >Audit</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/" >NFT Marketplace</Link>
                            </li>
                            <li className="nav-item px-2 ">
                                <Link to="/" className="flex items-center" onClick={toggling}>
                                    <p>More</p>
                                    <IoIosArrowDown className=" ml-1 " />
                                </Link>
                            </li>
                        </ul>
    
                        {isOpen &&(
                                <div className="drop-down absolute right-14 top-8">
                                    <ul className=" menu-items font-Ral px-6 py-1">
                                        <li className="nav-item">
                                            <Link to="/">more 1</Link>
                                        </li>
                                        <li className="nav-item px-2">
                                            <Link to="/" >more 2</Link>
                                            </li>
                                        <li className="nav-item px-2">
                                            <Link to="/" >more 3</Link>
                                        </li>
                                        <li className="nav-item px-2">
                                            <Link to="/" >more5</Link>
                                        </li>
                                    </ul>
                                </div>
                        )}
                    </div>
                    <div className="menu-button md:basis-1/4 lg:basis-1/4 xl:basis-1/5 flex items-center justify-between   relative">
                        <div className="language-select" onClick={languageToggle}>
                            <button type="button" className="select-button flex items-center">
                                <p>En English</p>
                                <IoIosArrowDown className=" ml-1 " />
                            </button>
                        </div>
                        <div className="language-select">
                            <button type="button" className="Connect-button"><p>Connect</p></button>
                        </div>
                        {isLanguage &&(
                        <div className=" absolute  top-8">
                            <ul className=" menu-items font-Ral px-6 py-1">
                                <li className="nav-item">
                                    <Link to="/">English</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="/" >Bengali</Link>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
             <MobileMenu/>               
        <HeroSection />
    </Wrapper>
    
    );
};

export default Header;