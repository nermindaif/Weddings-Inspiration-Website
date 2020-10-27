import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {
  Header,
  HeaderLogo,
  HeaderLogoA,
  HeaderLogoImg, 
  HeaderLinksLeft,
  HeaderLinkDropDownListA,
  HeaderLinkDropDownList,
  HeaderLinksLiA,
  HeaderLinksUl,
  HeaderUserContorlSticky, 
  HeaderUserContorlStickyA,
  HeaderUserContorlStickyI,
  HeaderLinksLi, 
  HeaderLinksRight,
  HeaderContainer,
  HeaderUserControls, 
  HeaderMobileButtonIconBar,
  HeaderMobileButtonSr,
  HeaderMobileButtonDiv,
  HeaderMobileButton,
  HeaderWrapper,
  HeaderLinksMobile,
  HeaderLinksMobileHalfBoarderdBottom,
  HeaderLinksMobileHalfBoarderdBottomRight,
  HeaderLinksMobileHalf,
  HeaderLinksMobileHalfRight,
  HeaderLinksMobileQuarterBoarderdBottom,
  HeaderLinksMobileQuarterBoarderdBottomRight,
  HeaderLinksMobileA,
  HeaderLinksMobileP,
  HeaderLinksMobileImgResponsiveHeaderIcon
} 
from './StyledComponentsCSS';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, far, fas);

export default function NewHeader(){
  const [displayState, setDisplayState] = useState({display: 'none'});

  return(
    
    <HeaderContainer>
        <Header>  
          <HeaderLinksLeft>
                <HeaderUserContorlSticky>
                  <HeaderUserContorlStickyA href="#">
                      <HeaderUserContorlStickyI className="fa fa-user-plus" aria-hidden="true"></HeaderUserContorlStickyI>
                      <FontAwesomeIcon icon={['fas','user-plus']} color="#024d4c"/>
                  </HeaderUserContorlStickyA>
                  <HeaderUserContorlStickyA href="#" style={{textDecoration:"none"}}>العربية</HeaderUserContorlStickyA>
                </HeaderUserContorlSticky>
          <HeaderLinksUl>
            <HeaderLinksLi >
              <HeaderLinksLiA href="#">360 Planner</HeaderLinksLiA>
              <HeaderLinkDropDownList >
                <HeaderLinkDropDownListA href="#">Check list</HeaderLinkDropDownListA>
                <HeaderLinkDropDownListA href="#">Budgeter</HeaderLinkDropDownListA>
                <HeaderLinkDropDownListA href="#">Registry list</HeaderLinkDropDownListA>
                <HeaderLinkDropDownListA href="#">Guest list</HeaderLinkDropDownListA>
                <HeaderLinkDropDownListA href="#">Wedding Website</HeaderLinkDropDownListA>
                <HeaderLinkDropDownListA href="#">Couple Website</HeaderLinkDropDownListA>
                <HeaderLinkDropDownListA href="#">More</HeaderLinkDropDownListA>
              </HeaderLinkDropDownList>
            </HeaderLinksLi>
            <HeaderLinksLi >
              <HeaderLinksLiA href="#" >Her</HeaderLinksLiA>
              <HeaderLinkDropDownList >
                  <HeaderLinkDropDownListA href="#"> Designers</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Bridal Boutique </HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Wedding Dresses</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Rings</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Makeup Artists</HeaderLinkDropDownListA>
                <HeaderLinkDropDownListA href="#">More</HeaderLinkDropDownListA>
              </HeaderLinkDropDownList>
            </HeaderLinksLi>
            <HeaderLinksLi >
              <HeaderLinksLiA href="#" >Him</HeaderLinksLiA>
              <HeaderLinkDropDownList>
                  <HeaderLinkDropDownListA href="#">Suits</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Health</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Men's Grooming</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Fitness</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">More</HeaderLinkDropDownListA>
              </HeaderLinkDropDownList>
            </HeaderLinksLi>
            <HeaderLinksLi >
              <HeaderLinksLiA href="#" >The Wedding</HeaderLinksLiA>
              <HeaderLinkDropDownList>
                  <HeaderLinkDropDownListA href="#">Venues</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Outdoor Wedding Venues</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Videographers</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">Photographers</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">DJs</HeaderLinkDropDownListA>
                  <HeaderLinkDropDownListA href="#">More</HeaderLinkDropDownListA>
              </HeaderLinkDropDownList>
            </HeaderLinksLi>
          </HeaderLinksUl>
        {/* </div> */}
        </HeaderLinksLeft>
         
          <HeaderLogo>
            <HeaderLogoA href="#">
              {/* El soora mesh betezahar hena */}
              <HeaderLogoImg  src={'https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png'} alt="Image not found" />
            </HeaderLogoA>
          </HeaderLogo>

          <HeaderLinksRight>
            <HeaderLinksUl>
              <HeaderLinksLi >
                <HeaderLinksLiA href="#" >Vendors</HeaderLinksLiA>
                <HeaderLinkDropDownList>
                  <HeaderLinkDropDownListA href="#">Create your profile</HeaderLinkDropDownListA>
                </HeaderLinkDropDownList>
              </HeaderLinksLi>
              
              <HeaderLinksLi >
                <HeaderLinksLiA href="#">Gallery</HeaderLinksLiA>
                <HeaderLinkDropDownList>
                    <Link to={"/"}style={{textDecoration:"none"}}>    
                    <HeaderLinkDropDownListA href="/en/photos?category=4">Wedding Ideas</HeaderLinkDropDownListA>
                   </Link>  
                    <Link to={"/category/gallery/more"}style={{textDecoration:"none"}}>    
                      <HeaderLinkDropDownListA href="/gallery/more">More</HeaderLinkDropDownListA>                    
                    </Link>
                </HeaderLinkDropDownList>
              </HeaderLinksLi>

              <HeaderLinksLi>
                <HeaderLinksLiA href="#" >Ideas &amp; More</HeaderLinksLiA>
                <HeaderLinkDropDownList>
                    <HeaderLinkDropDownListA href="#">Tips &amp; Etiquette</HeaderLinkDropDownListA>
                    <HeaderLinkDropDownListA href="#">Wedding Of The Week</HeaderLinkDropDownListA>
                    <HeaderLinkDropDownListA href="#">More</HeaderLinkDropDownListA>
                </HeaderLinkDropDownList>
              </HeaderLinksLi>

            </HeaderLinksUl>
          </HeaderLinksRight>
          
          <HeaderUserControls>
              <a href="#" aria-hidden="true">
                <i className="button--sign__in fa fa-user-plus" aria-hidden="false"></i>
              </a>
              <a href="#">العربية</a>
          </HeaderUserControls>

          <HeaderMobileButtonDiv>
            <HeaderMobileButton data-toggle="collapse" data-target=".navbar-collapse" onClick={()=>{
              displayState.display === 'none' ?
                setDisplayState({display: 'block'}):
                setDisplayState({display: 'none'});
              console.log('display is set to: ' , displayState.display);
            }}>
              <HeaderMobileButtonSr>Toggle navigation</HeaderMobileButtonSr>
              <HeaderMobileButtonIconBar></HeaderMobileButtonIconBar>
              <HeaderMobileButtonIconBar></HeaderMobileButtonIconBar>
              <HeaderMobileButtonIconBar></HeaderMobileButtonIconBar>
            </HeaderMobileButton>
          </HeaderMobileButtonDiv>
        {/* </div> */}
       
        </Header>
       
       
        <HeaderLinksMobile style={displayState}>
          <HeaderWrapper>
            <HeaderLinksMobileHalfBoarderdBottomRight>
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon src="https://weds360.com/assets/forthewedding-9ba500f0c747d8a3a8797fe57cc23bdbe79d6936b3454ed882e228246a159f4b.png" />
                <HeaderLinksMobileP>360 planner</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileHalfBoarderdBottomRight>
            <HeaderLinksMobileHalfBoarderdBottom>
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon src={"https://weds360.com/assets/forthewedding-9ba500f0c747d8a3a8797fe57cc23bdbe79d6936b3454ed882e228246a159f4b.png"} alt="Forthewedding"/>
                <HeaderLinksMobileP>For The Wedding</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileHalfBoarderdBottom>
            <HeaderLinksMobileHalfBoarderdBottomRight >
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon  src={"https://weds360.com/assets/forhim-324ecab024ce482c643fb18d3d12b9b46af42ba54aeb69f671e3c81da199a89a.png"} alt="Forhim"/>
                <HeaderLinksMobileP>Him</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileHalfBoarderdBottomRight>
            <HeaderLinksMobileHalfBoarderdBottom>
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon  src={"https://weds360.com/assets/forher-d8d7d812387503e4873e09de527e25fb7b0835192923cdacf2528c5a00a997b8.png"} alt="Forher"/>
                <HeaderLinksMobileP>Her</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileHalfBoarderdBottom>
            <HeaderLinksMobileQuarterBoarderdBottomRight >
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon src={"https://weds360.com/assets/checklist-e2bd8988d69f03031a18b466eb01f4d63b1679dfb5b8f505992e0828c17ca0cc.png"} alt="Checklist"/>
                <HeaderLinksMobileP>Check list</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileQuarterBoarderdBottomRight>
            <HeaderLinksMobileQuarterBoarderdBottomRight >
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon src={"https://weds360.com/assets/guestlist-b990534b68681a3b18c91c6d8dd7291530296b4ccd8d74a7777902546a7f8d1b.png"} alt="Guestlist"/>
                <HeaderLinksMobileP>Guest list</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileQuarterBoarderdBottomRight>
            <HeaderLinksMobileQuarterBoarderdBottomRight>
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon  src={"https://weds360.com/assets/registry-87ef274209be2a9aecbd2f710150ba8b117639e2f7dbbdd5ad46dd8c91a0135e.png"} alt="Registry"/>
                <HeaderLinksMobileP>Registry list</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileQuarterBoarderdBottomRight>
            <HeaderLinksMobileQuarterBoarderdBottom>
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon src={"https://weds360.com/assets/budgeter-27e2c6b8ba6c84b111d99659d3c6269e9c3b650df4c14685abcac121e67d81ee.png"} alt="Budgeter"/>
                <HeaderLinksMobileP>Budgeter</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileQuarterBoarderdBottom>
            <HeaderLinksMobileHalfRight>
            <Link to={"/category/gallery/more"}style={{textDecoration:"none"}}>
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon src={"https://weds360.com/assets/icons/tools-vision-white-28d34c7bf940dca78a1217508870e3d1c64fed89add64751e7180c9d78b868e5.png"} alt="Tools vision white"/>
                <HeaderLinksMobileP>Gallery</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </Link>
            </HeaderLinksMobileHalfRight>
            <HeaderLinksMobileHalf>
              <HeaderLinksMobileA href="#">
                <HeaderLinksMobileImgResponsiveHeaderIcon src={"https://weds360.com/assets/white-articles-125ba54add212fb3367c3645bbc571e277a9a2f34086b87ab27570f08acef80f.png"} alt="White articles"/>
                <HeaderLinksMobileP>Ideas &amp; More</HeaderLinksMobileP>
              </HeaderLinksMobileA>
            </HeaderLinksMobileHalf>
          </HeaderWrapper>
        </HeaderLinksMobile>
      </HeaderContainer>
    );
}
    