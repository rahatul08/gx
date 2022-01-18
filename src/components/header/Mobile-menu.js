import React,{useState} from 'react';
import styled from 'styled-components'
import ImageData from '../../assets/ImageData';
import { Link } from 'react-router-dom'

import { RiMenu3Line } from "react-icons/ri";
const Wrapper = styled.div`
    .mobile-menu{
        z-index: 1111;
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
const MobileMenu = () => {
    const[ isMobile, setMobile] = useState(false);
    const OpenMenu = () =>setMobile(!isMobile);
    return (
        <Wrapper>
                    {/* mobile - menu */}
        <div className="mobile-menu hidden">
            <div className="flex justify-between items-center bg-black px-5 relative ">
                <div className="logo-area  ">
                    <Link to="/" className="nav-logo"><img src={ImageData.logo} alt="" className="pt-3 w-1/2" /></Link> 
                </div>
                <div className="menubar-toggle">
                    <button type="button " className="text-white text-3xl" onClick={OpenMenu}><RiMenu3Line /></button>
                </div>
                {isMobile &&(
                <div className="mobile-menu-item  absolute  top-14  left-0 px-3 py-3 text-white animate-fade transition duration-700 ease-in-out">
                    <ul className="flex flex-col">
                        <li><Link to="/" className="nav-item"> Home</Link> </li>
                        <li><Link to="/" className="nav-item">Play</Link> </li>
                        <li><Link to="/" className="nav-item"> NFT Marketplace</Link></li>
                        <li><Link to="/" className="nav-item" >Buy</Link></li>
                        <li><Link to="/" className="nav-item" >Live Chart</Link></li>
                        <li><Link to="/" className="nav-item" >BSC Scan</Link></li>
                        <li><Link to="/" className="nav-item" >White Paper</Link></li>
                        <li><Link to="/" className="nav-item" >Join Whitelist Competition</Link></li>
                        <li><Link to="/" className="nav-item" >Connect</Link></li>
                    </ul>
                </div>
                )}
            </div>
        </div>
        </Wrapper>
    );
};

export default MobileMenu