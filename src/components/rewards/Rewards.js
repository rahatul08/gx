import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import ImageData from '../../assets/ImageData';

const Wrapper = styled.div`
    .reward{
        height:100%;
    width:100vw;
    background-image:url(${ImageData.rewardBg});
    background-repeat:no-repeat;
    background-size: cover;
    padding: 25px 0;
    }
  
    .card-bg{
        position: relative;
        padding: 10px 20px;
        width: 70%;
        margin-bottom:15px !important;
        margin:auto;
        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: transparent linear-gradient(109deg, #FFFFFF66 0%, #33588D 0%, #A72B78 100%) 0% 0% no-repeat ;
            box-shadow: 0px 3px 12px #00000029;
            border: 0.5px solid #FFFFFF;
            border-radius: 12px;
            opacity: 0.35;
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            width: 100%;
            height: 100%;
        }

        .card-content{
            position: relative;
            z-index: 1;
            h2{
                font-weight:bold;
                font-size:20px;
                padding-bottom:15px;
                color: white;
            }
            p{
                color: white;
            }
        }

    }
    @media only screen and (max-width:600px){
        .reward{
            background-image: url(${ImageData.mobileBg}) !important;
        }
        .card-content h2 {
                font-size: 13px !important;
                padding-bottom: 15px;
                color: white;
            }
            .card-content p{
                font-size: 10px !important;
            }    
    }

`
const Rewards = () => {
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
            <div className="reward">
            <div className="px-25 md:px-20">
                <div className="flex">
                    <div className=" xl:basis-1/2 lg:basis-3/12 md:hidden lg:block sm:hidden" ></div>
                    <div className="xl:basis-1/2 lg:basis-full md:basis-full md:flex md:flex-col md:justify-center">
                        <div className="card-bg sm:p-0 md:p-0" data-aos="fade-left">
                            <div className="card-content p-3">
                                <h2 className="sm:text-md">BNB DUEL REWARDS FOR HOLDERS</h2>
                                <p>Markhor Meta is the token on Binance smart chain ( BSC ). The unique double reward reflection will be 2% BNB on every buy and sell, BNB reward on staking will be sent to your wallets.</p>
                            </div>
                        </div>   
                        <div className="card-bg" data-aos="fade-right">
                            <div className="card-content p-3">
                                <h2>NFT BLOCKCHAIN GAME</h2>
                                <p>NFT blockchain Game is the very first usecase of Markhor Meta out of 3. Which is free to play ,play to earn. Where MM holders will connect their wallets to play this game and earn cash rewards ,daily ,weekly, monthly alot more…</p>
                            </div>
                        </div> 
                        <div className="card-bg" data-aos="zoom-in-up">
                            <div className="card-content p-3">
                                <h2>NFT MARKET PLACE</h2>
                                <p>Markhor Meta will have it’s own market place within the website it’s self .where people will create,mint,buy,sell & auction their Arts, MM will be used to trade .</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            </div>
        </Wrapper>
    );
};

export default Rewards;