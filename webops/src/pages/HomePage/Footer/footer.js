import React, { Component } from 'react';
import {SocialMediaLinksA,Strong,UL,CenterA, FooterContainer,Li,TextRightA,TextRight,TextCenter,SocialMediaLinks,TextLeft,Logo,FooterBackground}from './footerStyle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default function Footer (props){
    return(
            <FooterContainer> 
                <FooterBackground>
                    <TextLeft>
                        <Logo>Weds360</Logo>
                        <SocialMediaLinks>
                            <span>
                                <a href="#">
                                   <FontAwesomeIcon icon={['fab', 'facebook-f']} color="white"/>
                                   <FontAwesomeIcon icon={['fab', 'instagram']} color="white" style={{marginLeft:"10px"}}/>

                                </a>
                            </span>
                            <span>
                                <SocialMediaLinksA target="_blank" href="#">
                                    <i className="fab fa-instagram"></i>
                                </SocialMediaLinksA>
                            </span>
                        </SocialMediaLinks>
                    </TextLeft>
                    <TextCenter>
                        © Copyright
                        <CenterA href="#"><Strong>Plus360</Strong>.</CenterA>
                        All Rights Reserved
                    </TextCenter>
                    <TextRight>
                        <UL>
                            <Li>
                                <TextRightA href="#">Terms & Conditions</TextRightA>
                            </Li>
                            <Li>
                                <TextRightA href="#">Privacy Policy</TextRightA>
                            </Li>
                        </UL>
                    </TextRight>
                </FooterBackground>

            </FooterContainer>
    );
}