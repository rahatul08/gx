import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import ImageData from '../../assets/ImageData';
const Wrapper =styled.div`
        background-image: url(${ImageData.tokenBg});
        width: 100vw;
        height:100%;
        .token-bg{
        }
        .item{
            img{
                width:20px;
                height:20px;
            }
            p{
                font-weight: bold;
                font-size:14px;
            }
            h2{
                font-size:22px;
                font-weight: bold;
            }
        }

        .Distribution {
            .content-box{
                h2{
                    font-size:18px;
                }
                p{
                    font-size:12px;
                }
            }
        }
        @media only screen and (max-width: 768px){
            .cardBg{
                display: none;
            }
            .title{
                text-align: center;
                font-size:22px;
                padding-bottom:20px;
            }
            .btm{
                padding-bottom:35px;
            }
            .card-component{
                padding-left:0;
                padding-right:0;
                width:100%;
            }
        } 
        @media only screen and (max-width: 768px){
            .cardBg{
                display: none;
            }
            .title{
                text-align: center;
                font-size:22px;
                padding-bottom:20px;
            }
            .btm{
                padding-bottom:35px;
            }
            .card-component{
                padding-left:0;
                padding-right:0;
                width:100%;
            }
        }
        @media only screen and (max-width:600px){
            .item p {
                        font-weight: bold;
                        font-size: 10px;
                    }
                    .item h2{
                        font-size: 16px;
                        padding-bottom:50px;
                    }     
            .Distribution{
                padding:20px  25px;
                .basis-1\/5 {
                    flex-basis: 30%;
                }
            }
            .content-box h2{
                font-size:12px !important;

            }
            .content-box p{
                font-size:8px !important;
                line-height:0.7rem;
                padding:0;
                margin:0
            }
            .box-1{
                top: -37px;
                left: 13px;

            }
            .box-2{
                top: -36px;
                left: -8px;
            }
            .box-3{
                top:-25px;
            }
            .box-4{
                top:-36px;
            }
            .box-6{
                top: -77px;
                left: -15px;
            }

        }
        @media only screen and (max-width:390px){
            .left,.right{
                        flex-basis: 40% !important;
                 }
                 .box-6 {
                            top: -115px;
                            left: -15px;
                        }
                  .box-1 {
                        top: -43px;
                        left: 15px;
                    }
                     .box-2 {
                        top: -46px;
                        left: 11px;
                    }
                    .box-3 {
                            top: -47px;
                        }

                        .box-4 {
                                    top: -57px;
                                    left: 33px;
                                }   
        }

`
const Token = () => {
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
        <Wrapper >
                <div className="token-omi">
                    <div className="xl:w-8/12 lg:w-10/12 2xl:w-3/5 mx-auto pt-10 md:4/5">
                        <div className="token-bg inline-block relative" data-aos="fade-in">
                            <img src={ImageData.cardBg} alt="" className="w-full  cardBg" />
                            <div className="content-token md:absolute top-0 left-0 p-8 text-white">
                                <h2 className="text-xl pb-3 sm:text-center title" data-aos="zoom-in">TOKENOMICS</h2>
                                <p className="text-sm xl:pr-5 lg:pt-8" data-aos="fade-right">Galaxy SpaceX is a token on Binance Smart Chain Network it has two big use cases NFT Market Place and P2E blockchain game ,Galaxy SpaceX team is so dedicated due to their hard work and sincerity that is why of one its first  use case is already  live before token launched which is NFT MARKET PLACE.(GSX) Token holders will be able to create accounts on NFT MARKET PLACE ,they can create mint ,buy, sell , audio , their arts. second use case will be delivered in the 2nd phase
                                Galaxy spaceX smart contract applies a 7% fee on all transactions 
                                </p>
                                <br />
                                <p className="text-sm xl:pr-5 lg:pt-3 btm" data-aos="fade-right">The total supply of Galaxy spaceX  tokens is 1 billion. No more will ever exist and after launch, the total supply will decrease due to the 2% burn tax on all transactions.
Total $GSX supply: 1,000,000,000</p>
                                 <div className="card-component flex flex-row w-4/5 mx-auto xl:p-3 xl:pt-8 lg:pt-8">
                                     <div className="item basis-2/6">
                                            <div className="flex flex-col items-center justify-center" data-aos="flip-left">
                                                <img src={ImageData.moneyCheck} alt="" />
                                                <p className="text-sm py-1 mt-1">Auto Liquidity</p>
                                                <h2 className="text-lg font-bold">1%</h2>
                                            </div>
                                     </div>
                                     <div className="item basis-2/6">
                                            <div className="flex flex-col items-center justify-center" data-aos="flip-right">
                                                <img src={ImageData.coins} alt="" />
                                                <p className="text-sm py-1 mt-1 ">Reflections</p>
                                                <h2 className="text-lg font-bold">2%</h2>
                                            </div>
                                     </div>
                                     <div className="item basis-2/6">
                                            <div className="flex flex-col items-center justify-center" data-aos="flip-up">
                                                <img src={ImageData.megaphone} alt="" />
                                                <p className="text-sm py-1 mt-1">Marketing</p>
                                                <h2 className="text-lg font-bold">2%</h2>
                                            </div>
                                     </div>
                                     <div className="item basis-2/6">
                                            <div className="flex flex-col items-center justify-center" data-aos="flip-down">
                                                <img src={ImageData.fire} alt="" />
                                                <p className="text-sm py-1 mt-1">Burn</p>
                                                <h2 className="text-lg text-bold">2%</h2>
                                            </div>
                                     </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="Distribution 2xl:w-3/5 xl:w-4/5 lg:w-4/5 mx-auto pt-20 pb-24 sm:5 ">
                        <div className="flex flex-row pb-10">
                            <div className="left basis-1/5">
                                <div className="content-box  lg:top-0 lg:-right-8 md:-top-5 text-right relative 2xl:-top-3 2xl:-right-8 text-white box-1" data-aos="fade-up-right">
                                     <h2 className="text-xl font-bold">10%</h2>
                                    <p className="text-sm py-1 mt-1">supply will be burned right after launched</p>
                                </div>
                                <div className="xl:top-14 content-box box-2 text-right relative 2xl:top-2 lg:top-10 text-white" data-aos="fade-up-right">
                                     <h2 className="text-xl font-bold">10%</h2>
                                    <p className="text-sm py-1 mt-1">Team wallet locked for 1 year to release on monthly bases</p>
                                </div> 
                                <div className="content-box xl:top-52 2xl:top-36 lg:top-40 lg:-right-4 text-right relative top-20 text-white box-3" data-aos="fade-up-right">
                                     <h2 className="text-xl font-bold">14%</h2>
                                    <p className="text-sm py-1 mt-1">Liquidity locked for exchange listing</p>
                                </div>                                
                                <div className="xl:top-64 content-box text-right relative 2xl:-right-20 2xl:top-48 top-24 -right-14 lg:top-56 text-white  pt box-4" data-aos="fade-up-right">
                                     <h2 className="text-xl font-bold">15%</h2>
                                    <p className="text-sm py-1 mt-1">development wallet locked for 1 year release on monthly bases</p>
                                </div>
                            </div>
                            <div className="middle basis-4/5">
                                <img src={ImageData.circle} alt="" className="w-full"  data-aos="flip-up"/>
                            </div>
                            <div className="right basis-1/5 flex flex-col   justify-between">
                            <div className="content-box text-left relative -top-5 2xl:-top text-white box-5" data-aos="fade-up-left">
                                     <h2 className="text-xl font-bold">30%</h2>
                                    <p className="text-sm py-1 mt-1">Pesale ( whitelisting & public )</p>
                                </div>
                                <div className="box-6 content-box text-left relative -top-10 2xl:-top-12 text-white" data-aos="fade-up-left">
                                     <h2 className="text-xl font-bold">21%</h2>
                                    <p className="text-sm py-1 mt-1">liquidity pancakeswap</p>
                                </div> 

                            </div>
                        </div>
                      
                    </div>
                </div>
        </Wrapper>
    );
};

export default Token;