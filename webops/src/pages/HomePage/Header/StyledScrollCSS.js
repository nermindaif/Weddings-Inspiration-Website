import React from 'react';
import styled from 'styled-components';


export const FixedHeader=styled.div`
transition: all ease 1s;
position: fixed;
top: 0;
min-width: 99%;
background-color: #fff;
justify-content: flex-start;
align-items: center;
z-index: 9999;
width: 92%;
    max-width: 1100px;
    display: flex;
    left: 0;
    right: 0;
    margin: auto;
    font-family: "Lato", sans-serif;
`
export const Header = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    position:fixed;
    margin: auto;
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;

    @media (max-width: 767px)
    {
        display:block;
        width:auto;
        padding:2% 2.5%;max-height:100%;background-color:#fff;position:relative;
    }
`
export const HeaderLinksLeft=styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    width: 43%;
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    position: relative;
    padding: 0 15px;

    @media (max-width: 767px){
        display:inline-block;
        position:absolute;
        top:0;
        left:0;
        border-top:0;
        border-bottom:0;
        
    }
    @media (max-width: 991px){}

`
export const HeaderLinksRight=styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
  width: 43%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 5px;
  @media (max-width: 767px){
    display:inline-block;
    position:absolute;
    top:0;
    left:0;
    border-top:0;
    border-bottom:0;
    
}
@media (max-width: 991px){}
`


export const HeaderUserContorlSticky=styled.div`
order: 3;
    flex-grow: 1;
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    padding-top: 15px;
    @media (max-width: 767px){
        left:10px;
        top:20px;
        padding-left:0;
        z-index:9999;
    }
`

export const HeaderUserContorlStickyA= styled.a`
padding-left: 5px;
padding-right: 5px;
font-size: 15px;
font-weight: bold;
color: #024d4c;
right: 15%;
border-right: 1px solid black;
height:20px;
  @media (max-width: 576px){
    padding-left:4px;
    padding-right:4px;
  }

  @media (max-width: 575px){
    font-size:14px;
}
`
export const HeaderUserContorlStickyI = styled.i`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
  cursor: pointer;
  top: 2px;
  right: 25%;
  font-size: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 2px;
 
`
export const HeaderLinksUl =styled.ul`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin-top:0;margin-bottom:10px;
  @media (max-width: 767px){

  }
`
export const HeaderLinkDropDownList = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    display:none;
    min-width:100%!important;
    top:44px;left:0;
    z-index:9999;
    position:absolute;
    background-color:rgba(200,200,200,0.7);
    box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);
    background-color:white;
   

`
export const HeaderLinksLi=styled.li`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    position:relative;
    padding:12px 7px;
    text-align:center;
    @media (max-width: 767px){
        display:none;
    } 
    @media (max-width: 991px){
        padding:11px 3px;
    }
    &:hover {
        ${HeaderLinkDropDownList} {
          display: block;
        }
`





export const HeaderLinksLiA=styled.a`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    text-transform:uppercase;
    font-family:"Lato", sans-serif;font-size:13.4px;
    font-weight:900;font-style:normal;
    font-stretch:normal;
    line-height:normal;
    letter-spacing:normal;
    text-align:left;
    text-decoration:none;
    color:#000;
    @media (max-width: 991px){
        font-size:8.8px!important;
    }
    @media (max-width: 1200px){
        font-size:10px;
    }
    
`
export const HeaderLinkDropDownListA = styled.a`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    text-transform:uppercase;
    display:block;
    text-decoration:none;
    font-weight:bold;
    border-top:solid 1px #fff;
    color:#fff;
    text-align:center;
    font-size:13.6px;
    padding:10px 15px;
    color:#000;
    border-top:solid 1px #000;
    color:#000;border-top:solid 1px #000;
    @media (max-width: 991px){
        font-size:10px;
    }
    @media (max-width: 1200px){
        font-size:12px;
    }

`

export const HeaderLogo = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    width:10%;
    text-align:center;  
    @media (max-width: 767px){
        width:100%;display:block;position:relative;
    }
`
export const HeaderLogoA = styled.a`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    max-height:100%;
`
export const HeaderLogoImg = styled.img`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    max-height:78px;
    border:0;
    display:block;
    max-width:100%!important;
    page-break-inside:avoid;display:block;max-width:100%;height:auto;
    max-width:100%;
    height:auto;
    vertical-align:middle;
    @media (max-width: 767px){
        max-height:40px;position:absolute;top:0;left:0;right:0;z-index:5;margin:auto;
    }

`
export const HeaderContainer = styled.div`
transition: all ease 1s;
    position: fixed;
    top: 0;
    min-width: 100%;
    background-color: #fff;
    justify-content: flex-start;
    align-items: center;
    z-index: 9999;

    @media (max-width: 767px)
    {
        padding-top:0;
        background-color:#fff;
        height:60px;
        z-index:999999;
        position:relative;
    }
`

export const HeaderUserControls = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
display:none;

`


export const HeaderMobileButtonDiv = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
display:none;
@media (max-width: 767px)
{
    display:block   ;
}

`


export const HeaderMobileButtonIconBar = styled.span`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
background-color:#000;
display:block;
width:22px;
height:2px;
margin-top:3px;
margin-bottom:3px;

border-radius:1px;
@media (max-width: 767px)
{
    background-color:#000;
}

`
export const HeaderMobileButtonSr = styled.span`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
position:absolute;
width:1px;
height:1px;
margin:-1px;
padding:0;
overflow:hidden;
clip:rect(0, 0, 0, 0);
border:0;

`
export const HeaderMobileButton = styled.button`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    position:relative;
    float:right;
    margin-right:15px;padding:9px 10px;
    margin-top:8px;margin-bottom:8px;
    background-color:transparent;
    background-image:none;
    border:1px solid transparent;
    border-radius:4px;
    display: block;
    &focus{
        outline:0;
    }
    @media (min-width: 768px){
        display:none;
    }

`
export const HeaderLinksMobile = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    overflow:hidden;display:none;
    transition:all ease-out;
    @media (max-width: 767px){
        top:100%;
        position:absolute;
        height:485px;
        width:100%;
    }
`


export const HeaderWrapper = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;

@media (max-width: 767px){
    background-image:url(https://weds360.com/assets/background-d404a4fb1237176e7b697a2783a3f77c397aa528d3c8cb0447917be451240bdb.jpg);
    width:100%;
    background-repeat:no-repeat;
    background-size:cover;
    color:#fff;
    font-family:monospace;
    position:relative;
    height:100%;
    width:100%;
    display:-webkit-flex;
    display:-ms-flex;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    z-index:9999;
}
`




export const HeaderLinksMobileHalfBoarderdBottom = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    @media (max-width: 767px){
        display:-webkit-flex;
        display:-ms-flex;
        display:flex;
        justify-content: center;
        align-items:center;
        height:25%;
        position:relative;
        width: 50%;
        &:before{
            content:"";
            width:100%;
            height:3px;
            background:white;
            position:absolute;
            bottom:-3px;
        }
    }
`
export const HeaderLinksMobileHalfBoarderdBottomRight = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    @media (max-width: 767px){
        display:-webkit-flex;
        display:-ms-flex;
        display:flex;
        justify-content: center;
        align-items:center;
        height:25%;
        position:relative;
        width: 50%;
        &:after{
            content:"";
            height:100%;
            width:3px;
            background:white;
            position:absolute;
            right:-3px;
        }
        &:before{
            content:"";
            width:100%;
            height:3px;
            background:white;
            position:absolute;
            bottom:-3px;
        }
    }
`

export const HeaderLinksMobileQuarterBoarderdBottomRight = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    @media (max-width: 767px){
        display:-webkit-flex;
        display:-ms-flex;
        display:flex;
        justify-content: center;
        align-items:center;
        height:25%;
        position:relative;
        width: 25%;
        &:after{
            content:"";
            height:100%;
            width:3px;
            background:white;
            position:absolute;
            right:-3px;
        }
        &:before{
            content:"";
            width:100%;
            height:3px;
            background:white;
            position:absolute;
            bottom:-3px;
        }
    }
`
export const HeaderLinksMobileQuarterBoarderdBottom = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    @media (max-width: 767px){
        display:-webkit-flex;
        display:-ms-flex;
        display:flex;
        justify-content: center;
        align-items:center;
        height:25%;
        position:relative;
        width: 25%;
        &:before{
            content:"";
            width:100%;
            height:3px;
            background:white;
            position:absolute;
            bottom:-3px;
        }
    }
`
export const HeaderLinksMobileHalfRight = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    @media (max-width: 767px){
        display:-webkit-flex;
        display:-ms-flex;
        display:flex;
        justify-content: center;
        align-items:center;
        height:25%;
        position:relative;
        width: 50%;
        &:after{
            content:"";
            height:100%;
            width:3px;
            background:white;
            position:absolute;
            right:-3px;
        }
    }
`

export const HeaderLinksMobileHalf = styled.div`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    @media (max-width: 767px){
        display:-webkit-flex;
        display:-ms-flex;
        display:flex;
        justify-content: center;
        align-items:center;
        height:25%;
        position:relative;
        width: 50%;
    }
`




export const HeaderLinksMobileImgResponsiveHeaderIcon = styled.img`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    display:block;
    max-width:100%;
    height:auto;
    padding:25px;
    page-break-inside:avoid;
    @media (max-width: 767px){
        
        max-width:90px;
        max-height:90px;
        display:inline-block;

    }
    @media (max-width: 576px){
    
        max-width:80px!important;
        max-height:80px!important;
    }

`

export const HeaderLinksMobileP = styled.p`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    @media (max-width: 767px){
        font-size:15px;
    
    }
`

export const HeaderLinksMobileA = styled.a`
-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;
    background-color:transparent;
    text-decoration:none;
    font-weight:bold;
    outline:0;
    &:visited
    {
        text-decoration:underline;
    }
    
    @media (max-width: 767px){
        text-align:center;
        color:white;
        &:active{
        color:white;

        }
        &:focus{
        color:white;
            
        }
        &:hover{
        color:white;
            
        }
    }
`
