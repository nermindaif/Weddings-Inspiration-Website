import styled from 'styled-components';

export const FiltersContainer=styled.div` 

    display: flex;
    flex-direction: column;
    width: 25%;
    position: relative;
    box-sizing: border-box;
    margin-right: 25px;
    @media (max-width: 767px){
        width: 100%;
    }
`
export const FiltersRadio=styled.form` 
    margin-top: 15px;
    padding-left: 6px;
    display: flex;
    flex-direction: column;
`
export const FiltersActions=styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`
export const FiltersActionsClear=styled.a`
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
    padding-right: 10px;
    padding-left: 10px;
    height: 12.5px;
    font-size:13px;
    cursor: pointer;
    text-decoration: none;
    padding-top:3px;
    padding-bottom:3px;
`
export const FiltersActionsButton= styled.button `
    vertical-align: middle;
    padding: 0;
    border: solid 1px #000;
    width: 55px;
    height: 21px;
    margin-left: 3px;
    font-size: 12px;
    text-align: center;
    background-color: #000;
    color: #fff;
    cursor: pointer;
`

export const VendorsSearchInputsPosts=styled.div`
    margin: 20px 0;
`

export const Input=styled.input`
    width: 100%;
    border: 1px solid black;
    padding: 5px;
    margin: 0;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    @media (max-width: 767px){
        width: 80%;
`

export const PhotosContainer=styled.div`
    width: 75%;
    @media (max-width: 767px){
    width: 100%;
}
`
export const Row=styled.div`
    margin: 0;
`


export const Col=styled.div`
    width: 30%;
    float: left;
    position: relative;
    min-height: 1px;
        padding: 5px;
        @media (max-width: 992px){
            width: 40%;
            float: left;
            position: relative;
            min-height: 1px;
        }
`

export const PhotoContainer=styled.div`
    height: 100%;
    margin: 0 auto;
    position: relative;
    
`
export const BgImg=styled.div `
    height: 230px;
    object-fit: contain;
    background-size: cover !important;
    background-position: center !important;
    @media (max-width: 575px){
    height: 120px;
    }
`
export const BgImgImage=styled.img`
    width: 100%;
    height: 100%;
    display: block;
    vertical-align: middle;
`
export const PhotosWrapper=styled.div`
font-family: "Lato", sans-serif;
    width: 90%;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: 30px auto 0;
    @media (max-width: 767px){
    flex-direction: column;
    margin-top: 0;
    
}
`
export const PhotoContainerH3=styled.h3`

    color: #000;
    font-family: "Lato", sans-serif;
    font-size: 17.3px;
    font-weight: bold;
    margin: 10px 0 15px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 25px;
    height: 50px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`