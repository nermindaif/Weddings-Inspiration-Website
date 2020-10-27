import styled from 'styled-components'

export const WeddingToolsRow=styled.div`
    margin: 30px auto 25px;
    @media (max-width: 575px){
    padding: 0px 13px;
}
`

export const WeddingToolsTool=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const WeddingToolsToolIcon=styled.div`
    margin-right: 52px;
    width: 90px;
`
export const WeddingToolsToolIconImg=styled.img`
    width: 90px;
    margin: 30px;
    display: block;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
`
export const Col=styled.div`
    
    display: inline-block;
    float: none;
    width: 30%;
    padding: 35px 13px;
    position: relative;
    min-height: 1px;
    @media (max-width: 768px){
    width: 95%;
}
`

export const BottomSectionH3=styled.h3`
    font-size: 24px;
    line-height: 1.25;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
    font-weight: 900;
    font-family: "Lato", sans-serif;
    @media (max-width: 767px){
    font-size: 19px;
    max-width: 90%;
    margin: 0 auto;
}
`
export const BottomSectionContainer=styled.div`
    padding: 0;
    margin-top: 100px;
    max-width: 1100px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 992px){
    width: 970px;
}
    
`
export const H4=styled.h4`
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 7px;
    font-size: 18px;
    line-height: 1.39;
    letter-spacing: 0.7px;
    color: inherit;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    @media (max-width: 1200px){
    font-size: 16px;
}
`
export const Span = styled.span`
    font-weight: normal;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.5px;
    text-align: left;
`
export const A=styled.a`
    display: block;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.5px;
    text-align: left;
    color: #024d4c;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
`