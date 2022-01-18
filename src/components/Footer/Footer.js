import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import ImageData from '../../assets/ImageData';
import { IoIosArrowForward } from "react-icons/io";
const Wrapper =styled.div`
    background-image: url(${ImageData.fBg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    .form-control{
        background: #FFFFFF3B 0% 0% no-repeat padding-box;
            border: 1px solid #707070;
            border-radius: 43px;
            opacity: 1;
            padding: 7px 20px;
            outline: none;
    }
    .btn-submit{
        position: relative;
        padding: 10px 20px;
        margin-top:2px;
        margin-right:3px;
        .icon{
            position: relative;
            z-index: 1;
       
        }
        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent linear-gradient(123deg, #FC3CAC 0%, #7250A3 48%, #3181C1 100%) 0% 0% no-repeat;
            box-shadow: inset 3px 3px 12px #0000003D, 3px 3px 12px #0000006E;
            border-radius: 43px;
            opacity: 0.6;
        }

        
    }

    @media only screen and (max-width:600px){
        .footer{
            padding:25px;
            h2{
                padding:20px 0;
            }
            form{
                padding:25px 0;
            }
            p{
                padding:25px 0;
                text-align:center;
            }
        }
    }
    @media only screen and (max-width:400px){
                .w-96 {
            width: 20rem;
        }
        
    }
`
const Footer = () => {
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
            <div className=" footer container flex justify-center mx-auto flex-col align-center items-center py-20 text-white p-5">
                    <h2 className="text-white text-2xl py-3" data-aos="fade-up"> Stay updated with us</h2>
                    <form action="#" className="py-5" data-aos="fade-up">
                        <div className="form-group relative inline-block">
                            <input type="text"  className="form-control w-96 " placeholder="Enter your Email address"/>
                            <div className="submit-button absolute right-0  top-0">
                                <button type="submit" className="btn-submit"><IoIosArrowForward className="text-white icon"/></button>
                            </div>
                        </div>
                    </form>
                    <p className="text-lg py-3" data-aos="fade-up">Subscribe now and be the first to find about our latest products.</p>
                    <p className="text-sm py-1 mt-1" data-aos="fade-up">Copyright 2019, Crypto ICO, Lorem Ipsum</p>
            </div>
        </Wrapper>
    );
};

export default Footer;