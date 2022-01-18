import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import ImageData from '../../assets/ImageData';
const Wrapper = styled.div`
.phasse-area{
    width: 100vw;
        background-image: url(${ImageData.paBg});
        height: 100%;
        padding-bottom:50px;
}
   .line-image{
    width: 100%;
    height: 16px;
    filter: sepia(62);

   }
        .item{
            img{
                width:100px;
                height:auto;
            }
        }
        .mobile{
                    display:none ;}


        @media only screen and (max-width:600px){
                .desktop{
                    display:none;
                }
                .mobile{
                    display:block !important;
                }
                .phasse-area{
                    padding-bottom:0;
                }
        }
        .v-line{
            width:16px;height:100%;
                 filter: sepia(62);
        }


`
const Phases = () => {
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
            <div className="phasse-area">
                            {/* desktop */}
                            <div className="desktop">
                 <div className="w-10/12 mx-auto">
                 <div className="flex  flex-row py-5">
                    <div className="basis-3/12 text-white" data-aos="fade-up">
                        <h2>Phase 1</h2>
                            <p>Project planning <br />  Team building <br />  Smart contract <br />   development 5000 <br /> telegram members <br />  Website (beta) launch <br />  Social media presence <br />  Detailed White paper <br />  Social media marketing push <br />  Target crypto community <br />  Aggressive marketing</p>
                    </div>
                    <div className="basis-3/12 ">
                    
                    </div>
                    <div className="basis-3/12 text-white" data-aos="fade-up">
                    <h2>Phase 1</h2>
                            <p>Project planning <br />  Team building <br />  Smart contract <br />   development 5000 <br /> telegram members <br />  Website (beta) launch <br />  Social media presence <br />  Detailed White paper <br />  Social media marketing push <br />  Target crypto community <br />  Aggressive marketing</p>
                    </div>
                    <div className="basis-3/12  ">
                    
                        </div>
                </div>
                <div className="flex  flex-row py-8">
                    <div className="basis-1/5">
                    </div>
                    <div className="basis-4/5">
                        <img src={ImageData.line} alt="" className="w-full relative -right-24 line-image"/>
                    </div>
                </div>
                <div className="flex  flex-row">
                    <div className="basis-3/12 ">
                    </div>
                    <div className="basis-3/12 text-white" data-aos="fade-up-right">
                    <h2>Phase 1</h2>
                        <p>Project planning <br />  Team building <br />  Smart contract <br />   development 5000 <br /> telegram members <br />  Website (beta) launch <br />  Social media presence <br />  Detailed White paper <br />  Social media marketing push <br />  Target crypto community <br />  Aggressive marketing</p>
                    </div>
                    <div className="basis-3/12 "></div>
                    <div className="basis-3/12 text-white" data-aos="fade-up-left">
                        <h2>Phase 1</h2>
                            <p>Project planning <br />  Team building <br />  Smart contract <br />   development 5000 <br /> telegram members <br />  Website (beta) launch <br />  Social media presence <br />  Detailed White paper <br />  Social media marketing push <br />  Target crypto community <br />  Aggressive marketing</p>
                        </div>
                </div>
            </div>
                 </div>
            {/* mobile */}
                    <div className="mobile overflow-hidden">
                    <div className="w-10/12 mx-auto">
                 <div className="flex  flex-row py-5 pb-0">
                    <div className="basis-2/5  text-white " >
                            <div data-aos="fade-up">
                                     <h2>Phase 1</h2>
                                    <p>Project planning <br />  Team building <br />  Smart contract <br />   development 5000 <br /> telegram members <br />  Website (beta) launch <br />  Social media presence <br />  Detailed White paper <br />  Social media marketing push <br />  Target crypto community <br />  Aggressive marketing</p>
                            </div>
                            <div className="pt-56" data-aos="fade-up">
                                     <h2>Phase 1</h2>
                                    <p>Project planning <br />  Team building <br />  Smart contract <br />   development 5000 <br /> telegram members <br />  Website (beta) launch <br />  Social media presence <br />  Detailed White paper <br />  Social media marketing push <br />  Target crypto community <br />  Aggressive marketing</p>
                            </div>
                    </div>
                    <div className="basis-1/5 text-center">
                         <img src={ImageData.vLine} alt="" className="w-1/2 mx-auto v-line "/>
                    </div>
                    <div className="basis-2/5 text-white ">
                        <div className="pt-56" data-aos="fade-up-right"><h2>Phase 1</h2>
                                <p>Project planning <br />  Team building <br />  Smart contract <br />   development 5000 <br /> telegram members <br />  Website (beta) launch <br />  Social media presence <br />  Detailed White paper <br />  Social media marketing push <br />  Target crypto community <br />  Aggressive marketing</p></div>

                                <div className="pt-56 pb-2" data-aos="fade-up-left">
                                    <h2>Phase 1</h2>
                                <p>Project planning <br />  Team building <br />  Smart contract <br />   development 5000 <br /> telegram members <br />  Website (beta) launch <br />  Social media presence <br />  Detailed White paper <br />  Social media marketing push <br />  Target crypto community <br />  Aggressive marketing</p></div>
                    </div>
                </div>

            </div>
                    </div>
            </div>
        </Wrapper>
    );
};

export default Phases;