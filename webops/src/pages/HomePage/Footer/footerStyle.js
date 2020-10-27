import styled from'styled-components'


export const FooterBackground=styled.div`
    background-color: #000000;
    direction: ltr !important;
    width: 100%;
`
export const FooterContainer=styled.footer`
    display: block;
    font-family: "Lato", sans-serif;
    position: static;
    bottom: 0;
`
export const TextLeft =styled.div`
    display: inline-block;
    width: 33%;
    font-size: 8px;
    color: white;
    margin-left: 1%;
    @media (max-width: 575px){
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 6px;
`
export const Logo=styled.h1`
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    margin: 0.67em 0;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
`

export const SocialMediaLinks =styled.div`
    font-size: 15px;
    letter-spacing: 3px;
    @media (max-width: 575px){
    font-size: 10px;
}
`
export const  SocialMediaLinksA=styled.a `
    color: white;
`
export const TextCenter=styled.div`
    display: inline-block;
    width: 33%;
    font-size: 10px;
    font-weight: 100;
    color: #ffffff;
    position: relative;
    margin: auto;
    text-align: center;
    @media (max-width: 575px){
        width: 100%;
        display: inline-block;
        margin: 0;
        font-size: 8px;
    }

`
export const  CenterA=styled.a`
color: #337ab7;
text-decoration: none;
`
export const Strong=styled.strong `
    font-weight: bold;
    cursor: pointer;
    color: #337ab7;
    text-decoration: none;
    padding:4px;
`
export const TextRight =styled.div`
    display: inline-block;
    width: 30%;
    color: #ffffff;
    font-size: 10px;
    text-decoration: none;
    @media (max-width: 575px){
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 6px;
}
`

export const UL=styled.ul`
    text-align: right;
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    @media (max-width: 575px){
    text-align: center;
    padding: 0;
    width: 100%;
}
`
export const TextRightA=styled.a`
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;

`
export const Li=styled.li`
    padding-bottom: 4px;
    display: list-item;
    text-align: -webkit-match-parent;
`