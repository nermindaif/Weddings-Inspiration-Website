import styled from 'styled-components';

export const PaginationContainer=styled.div`
    display: block;
    text-align: center;
`
export const PaginationS=styled.div`
    margin-bottom: 0;
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
`

export const UL=styled.ul`
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`
export const Li=styled.li`
    display: inline;
    text-align: -webkit-match-parent;
`
export const PaginationLiA=styled.a`
color: #024d4c;
position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.428571429;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px;
    &:hover{
        background-color:#F8F8F8;
    }
`
export const LastChild=styled.a`
border-bottom-right-radius: 4px;
border-top-right-radius: 4px;
color: #024d4c;
position: relative;
float: left;
padding: 6px 12px;
line-height: 1.428571429;
text-decoration: none;
background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px;
    &:hover{
        background-color:#F8F8F8;
    }
    `

    export const FirstChild=styled.a`
    margin-left: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    background-color: #fff;
    border-color: #ddd;
    cursor: not-allowed;
    color: #024d4c;
    position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.428571429;
    text-decoration: none;
    border: 1px solid #ddd;
    font-family: "Lato", sans-serif;
    `
    export const SecondChild=styled.a`
    background-color: #024d4c;
    border-color: #024d4c;
    z-index: 3;
    color: #fff;
    cursor: default;
    position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.428571429;
    text-decoration: none;
    border: 1px solid #ddd;
    margin-left: -1px;
    `