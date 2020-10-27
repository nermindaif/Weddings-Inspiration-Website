import styled from 'styled-components'

export const VendorsSearch=styled.div `
    width: 90%;
    max-width: 1070px;
    margin: 35px auto 10px;
    margin-top: 10%;
    font-family: "Lato", sans-serif;
    @media (max-width: 767px){
    margin-top: 0px;
    width: 97%;

}
`
export const VendorsSearchInputs=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const VendorsSearchDropdown=styled.div`
    border: solid 2px #000;
    width: 49%;
    height: 43px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    @media (max-width: 767px){
    padding-top: 3px;
}
`
export const H5=styled.h5`
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 4.1px;
    text-transform: uppercase;
    padding-top: 2px;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.1;
    @media (max-width: 767px){
    font-size: 9px !important;
    letter-spacing: 1px !important;
    font-weight: normal;

}
`
export const VendorsSearchCategoriesContainer =styled.div`
    position: relative;
    height: 140px;
    /* display: none; */
    margin-top: 10px;
    background-color: #000;
    color: #fff;
    @media (max-width: 575px){
    height: 100px;
}
`


export const VendorsSearchCategoryContainer=styled.div`
    height: 140px;
`
export const VendorsSearchCategory=styled.div`
    height: 85%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    

    @media (max-width: 575px){
    height: 75%;
}
`

export const Img =styled.img`
    cursor: pointer;
    height: 30px;
    width: 30px;
    margin: 10px 0;
    display: block;
    max-width: 100%;
    vertical-align: middle;
`
export const Span=styled.span`
    font-size: 12px;
    color: #fff;
    text-align: center;
    display: block;
    text-decoration:none;
`



export const A=styled.a`
    width: 10%;
    display: inline-block;
    text-decoration:none;

`