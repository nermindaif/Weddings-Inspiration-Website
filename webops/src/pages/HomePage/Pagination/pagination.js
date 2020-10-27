import React  from 'react';
import {Li,PaginationContainer,PaginationS, UL, FirstChild, SecondChild, PaginationLiA, LastChild}from'./paginationStyle.js';

export default function Pagination (props){
        return(
            <PaginationContainer>
                <PaginationS>
                    <UL>
                        <Li >
                            <FirstChild href="#">← Previous</FirstChild>
                        </Li>
                        <Li>
                            <SecondChild href="#">1</SecondChild>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">2</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">3</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">4</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">5</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">6</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">7</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">8</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">9</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">...</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">43</PaginationLiA>
                        </Li>
                        <Li>
                            <PaginationLiA href="#">44</PaginationLiA>
                        </Li>
                        <Li>
                            <LastChild href="#">Next →</LastChild>
                        </Li>
                    </UL>
                </PaginationS>
            </PaginationContainer>
        );
}