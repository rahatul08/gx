import React from 'react';
import styled from 'styled-components'
import ImageData from '../../assets/ImageData';
import { AiFillHeart,AiOutlineHistory } from 'react-icons/ai';
const Wrapper = styled.div`

.card__item {
    background: #fff;
    border: 1px solid #e2eef1;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 17px 13px 0 rgba(25,44,75,.0196078431372549);
    margin: auto auto 30px;
    max-width: 25rem;
    overflow: hidden;
    transition: all .4s cubic-bezier(.4,0,.2,1);
}





 .card_head .likes .heart {
    transition: all .25s cubic-bezier(.4,0,.2,1);
    color: #ff6871;
    font-weight: 700;
    position: relative;
}
    .box.in__wallet:hover {
    -webkit-transform: translateY(-0.8rem);
    transform: translateY(-0.8rem);
    border: 1px solid rgba(86, 111, 254, 0.26);
}
.avatars .avatar.avatar-sm {
    width: 2rem;
    height: 2rem;
}
.avatars .avatars_name {
    font-weight: 700;
    transition: .3s;
}
p.avatars_name.txt_xs {
    color: #606c82;
    font-size:14px !important;
}
h6.card_title{
    color: #183b56;
    font-weight: 700;
    font-size:18px
}

.avatars .avatars_name:hover {
    color: #5691fe;
}
.avatars .avatar {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%!important;
    border: 3px solid #fff;
    object-fit: cover;
    transition: all .35s cubic-bezier(.4,0,.2,1);
}
.card__item {
    background: #fff;
    border: 1px solid #e2eef1;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 17px 13px 0 rgba(25, 44, 75, 0.0196078431372549);
    margin: auto auto 30px;
    max-width: 30rem;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.creators p{
    color: #606c82;
    line-height: 1.6;
    font-size: 18px;
}
.card_footer a > p{
    color: #606c82;
    line-height: 1.6;
}
.color_green {
    color: #36b37e;
}
.btn-primary {
    color: #fff;
    border: none!important;
    transition: all .4s ease-in-out!important;
    background-color: #5691fe!important;
    position: relative;
}
.btn-sm {
    padding: 6px 16px;
    border-radius: 28px;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
}
.card__item.has_style2 {
    background: transparent;
    padding: 0;
    overflow: visible;
    margin: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
}
.card__item .view_history {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.card__item .view_history:hover {
    color: #183b56;
}
.card__item.is_gaming {
    margin-top: 25px;
    overflow: visible !important;
}
.card__item.is_gaming .avatar {
    margin-top: -60px;
    height: 60px;
    width: 60px;
}
.card__item.is_gaming .creators {
    overflow: visible !important;
}
.card__item.in__popup {
    margin: 0 !important;
    max-width: 100% !important;
}
.card__item.is__hero {
    padding: 0;
    border: none;
    box-shadow: none;
    margin-bottom: 0;
}
@media screen and (max-width: 991px) {
    .card__item.is__hero {
        margin-bottom: 30px;
    }
}
.card__item .card_title a {
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    display: block ruby;
}
.card__item .card_head {
    border-radius: 20px;
    background-color: #ecf1f9;
    height: 22rem;
    overflow: hidden;
    position: relative;
    z-index: 0;
}
.card__item .card_head img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.card__item:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
}
.card__item:hover .card_head img {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
}
.card__item .card_footer .ri-history-line {
    font-size: 20px;
}
.card__item .bid,
.card__item .card_footer,
.card__item .creators,
.card__item .likes {
    display: flex;
    align-items: center;
}
.card__item.one .card_head,
.card__item .card_head {
    max-height: 300px;
}
.card__item.one .card_head .details,
.card__item .card_head .details {
    position: absolute;
    background: hsla(0, 0%, 100%, 0.93);
    padding: 10px 18px;
    z-index: 1;
    bottom: 14px;
    left: 14px;
    right: 14px;
    border-radius: 10px;
}
.card__item.one .card_head .details .icon img,
.card__item .card_head .details .icon img {
    width: 2rem;
}
.card__item.one .card_head .details .fire-icon,
.card__item .card_head .details .fire-icon {
    position: absolute;
    top: -16px;
    left: 46%;
    width: 30px;
    height: 30px;
    background: #eb5757;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #fff;
    border: 2px solid #fff;
}
.card__item.one .bid,
.card__item.one .card_footer,
.card__item.one .creators,
.card__item.one .likes,
.card__item .bid,
.card__item .card_footer,
.card__item .creators,
.card__item .likes {
    display: flex;
    align-items: center;
}
.card__item.one .likes,
.card__item .likes {
    color: #183b56;
}
.card__item.one .likes i,
.card__item .likes i {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: #b8bdd1;
    position: relative;
}
.card__item.one .likes i:after,
.card__item .likes i:after {
    content: "";
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    left: 45%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%) scale(0);
    transform: translate(-50%, -50%) scale(0);
    border-radius: 100%;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.card__item.one .likes i:hover,
.card__item .likes i:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    color: #eb5757;
    position: relative;
}
.card__item.one .likes i:hover:after,
.card__item .likes i:hover:after {
    content: "";
    position: absolute;
    -webkit-transform: translate(-50%, -50%) scale(1.5);
    transform: translate(-50%, -50%) scale(1.5);
}
.card__item.two .card_head {
    max-height: 300px;
    border-radius: 20px;
    background-color: #ecf1f9;
    height: 22rem;
    overflow: hidden;
    position: relative;
    z-index: 0;
}
.card__item.two .card_head img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card__item.two .card_head .block_timer {
    position: absolute;
    z-index: 1;
    top: 14px;
    left: 14px;
}
.card__item.two .card_head .block_timer .item {
    display: flex;
    align-items: center;
    justify-content: center;
    background: hsla(0, 0%, 100%, 0.966);
    width: 33px;
    height: 33px;
    border-radius: 20px;
}
.card__item.two .card_head .block_timer .item .number {
    color: #183b56;
}
.card__item.two .card_head .block_timer .dots {
    color: #fff;
    padding: 0 5px;
    height: auto !important;
    margin-top: 0;
}
.card__item.two .card_head .progress {
    position: absolute;
    z-index: 1;
    bottom: 14px;
    left: 14px;
    right: 14px;
    background-color: hsla(0, 0%, 100%, 0.8);
    border-radius: 20px;
}
.card__item.two .card_head .progress .progress-bar {
    height: 50%;
    align-self: center;
    margin-left: 5px;
    color: #fff;
    background: radial-gradient(100% 100% at 53.13% 0, #31e7fa 0, #47f 52.6%, #74cdff 100%);
    border-radius: 20px;
}
.card__item.four .creators,
.card__item.three .creators {
    justify-content: space-between;
    overflow: hidden;
}
.card__item.four .card_head,
.card__item.three .card_head {
    max-height: 300px;
    position: relative;
}
.card__item.four .card_head .action,
.card__item.three .card_head .action {
    position: absolute;
    width: 100%;
    padding: 0 14px;
    z-index: 1;
    bottom: 14px;
    display: flex;
    justify-content: center;
}
.card__item.four .card_head .action .btn,
.card__item.three .card_head .action .btn {
    width: 100%;
}
.card__item.four .card_head .likes,
.card__item.three .card_head .likes {
    position: absolute;
    background: hsla(0, 0%, 100%, 0.966);
    padding: 3px 12px;
    border-radius: 20px;
    box-shadow: 0 17px 13px 0 rgba(25, 44, 75, 0.0196078431372549);
    z-index: 1;
    top: 14px;
    right: 14px;
    color: #183b56;
}
.card__item.four .card_head .likes i,
.card__item.three .card_head .likes i {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: #ff6871;
    font-weight: 700;
    position: relative;
}
.card__item.four .card_head .likes i:after,
.card__item.three .card_head .likes i:after {
    content: "";
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    left: 45%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%) scale(0);
    transform: translate(-50%, -50%) scale(0);
    border-radius: 100%;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.card__item.four .card_head .likes i:hover,
.card__item.three .card_head .likes i:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    color: #eb5757;
    position: relative;
}
.card__item.four .card_head .likes i:hover:after,
.card__item.three .card_head .likes i:hover:after {
    content: "";
    position: absolute;
    -webkit-transform: translate(-50%, -50%) scale(1.5);
    transform: translate(-50%, -50%) scale(1.5);
}
.card__item.five .card_head {
    max-height: 300px;
    border-radius: 20px;
    background-color: #ecf1f9;
    height: auto;
    width: 80%;
    overflow: hidden;
    position: relative;
    z-index: 0;
}
.card__item.five .card_head img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card__item.five .card_head .progress {
    position: absolute;
    z-index: 1;
    bottom: 14px;
    left: 14px;
    right: 14px;
    background-color: hsla(0, 0%, 100%, 0.8);
    border-radius: 20px;
}
.card__item.five .card_head .progress .progress-bar {
    height: 50%;
    align-self: center;
    margin-left: 5px;
    color: #fff;
    background: radial-gradient(100% 100% at 53.13% 0, #31e7fa 0, #47f 52.6%, #74cdff 100%);
    border-radius: 20px;
}
.card__item {
    max-width: 400px;
    margin: 0 auto;
}
.card__item .card_body .card_head {
    max-width: none;
    max-height: none;
    height: auto;
}
.card__item .card_body .card_footer {
    position: relative;
}
.card__item .card_body .card_footer .details {
    width: 90%;
    background: #fff;
    padding: 10px 18px;
    z-index: 1;
    margin-top: -50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
}
.card__item .card_body .card_footer .details .card_title {
    font-size: 19px;
}
@media screen and (max-width: 576px) {
    .card__item .card_body .card_footer .details .card_title {
        font-size: 17px;
    }
}
.card__item .card_body .card_footer .details .card_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -10px;
    flex-wrap: wrap;
}
.card__item .card_body .card_footer .details .card_wrap .auction_end,
.card__item .card_body .card_footer .details .card_wrap .bid {
    margin-right: 20px;
}
.card__item .card_body .card_footer .details .card_wrap .auction_end,
.card__item .card_body .card_footer .details .card_wrap .bid,
.card__item .card_body .card_footer .details .card_wrap .bid_btn {
    display: block;
    margin-bottom: 10px;
}
.card__item .card_body .card_footer .details .card_wrap .auction_end .counter {
    color: #eb5757;
}
.card__item .card_body .card_footer .details .card_wrap .bid_btn {
    margin-left: auto;
    margin-right: auto;
}
.item_details .item_img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item_details .likes {
    background: #fff;
    padding: 7px 14px;
    border-radius: 20px;
    box-shadow: 0 17px 13px 0 rgba(25, 44, 75, 0.0196078431372549);
    color: #183b56;
    display: flex;
}
.item_details .likes i {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: #ff6871;
    font-weight: 700;
    position: relative;
    margin-right: 5px;
}
.card_home4 .icon-shadow {
    border-radius: 100%;
    box-shadow: 0 10px 11px rgba(25, 44, 75, 0.13);
    max-width: 48px;
}
.creator_card {
    background: #fff;
    border: 1px solid #e2eef1;
    border-radius: 20px;
    box-shadow: 0 17px 13px 0 rgba(25, 44, 75, 0.0196078431372549);
    max-width: 30rem;
}
.creator_card.is_big {
    padding: 30px 20px !important;
}
.creator_card.rounded_border {
    border-radius: 200px;
}
@media screen and (max-width: 992px) {
    .creators_items {
        margin-bottom: -20px;
    }
}
.creator_item {
    padding: 10px 15px;
    border-radius: 20px;
    max-width: 30rem;
}
@media screen and (max-width: 992px) {
    .creator_item {
        margin-bottom: 20px;
    }
}
@media screen and (max-width: 768px) {
    .creator_item {
        margin-left: auto;
        margin-right: auto;
    }
}
.creator_item .cover {
    width: 100%;
    background: #183b56;
    height: 100px;
    border-radius: 10px 10px 0 0;
    margin-bottom: -50px;
    overflow: hidden;
}
.creator_item .cover img {
    width: 100%;
}


`
const SliderItem = () => {
  
    return (
        <Wrapper>
                        <div className="card__item four">
                             <div className="card_body ">
                            <div className="creators py-3 mb-3">
                                <div className="avatars  flex">
                                    <a href="/profile"><img src={ImageData.Item} alt="Avatar" className="avatar avatar-sm" /></a><a href="/profile"><p className="avatars_name txt_xs">@mickel_fenn</p></a>
                                </div>
                                <div className="avatars flex">
                                    <a href="/profile"><img src={ImageData.Item} alt="Avatar" className="avatar avatar-sm" /></a><a href="/profile"><p className="avatars_name txt_xs">@danil_pannini</p></a>
                                </div>
                            </div>
                            <div className="card_head">
                                <a href="#"><img src={ImageData.Item} alt="nftimage" /></a><a className="likes space-x-3" href="/marketplace"><i ></i> <AiFillHeart className="heart" /><span className="txt_sm">1.2k</span></a>
                            </div>
                            <h6 className="card_title py-3">Colorful Abstract Painting</h6>
                            <div className="card_footer d-block ">
                                <div className="card_footer justify-content-between">
                                    <div className="creators"><p className="txt_sm">4 in stock</p></div>
                                    <a href="/marketplace">
                                        <p className="txt_sm">Price:<span className="color_green txt_sm">2.45 ETH</span></p>
                                    </a>
                                </div>
                                <div className="hr"></div>
                                <div className="d-flex align-items-center justify-content-between pt-3 pb-5">
                                    <div className="d-flex align-items-center ">
                                       <button className="popup_btn flex  items-center justify-center" ><AiOutlineHistory classNameName=" pt-2"/> <p className="color_text txt_sm view_history pl-2"> View History</p></button>
                                    </div>
                                    <button className="btn btn-sm btn-primary" >Place Bid</button>
                                </div>
                            </div>
                          </div>
                        </div>
        </Wrapper>
    );
};

export default SliderItem;