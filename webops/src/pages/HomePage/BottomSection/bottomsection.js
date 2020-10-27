import React, { Component } from 'react';
import {WeddingToolsRow, BottomSectionContainer,H4,A, Span, BottomSectionH3, Col, WeddingToolsTool, WeddingToolsToolIcon, WeddingToolsToolIconImg }from './bottomsectionStyle.js';
export default function BottomSection (props){
        return(
            <BottomSectionContainer>
                <BottomSectionH3>
                    Wedding Planning is a piece of cake with Weds360.
                    <a href="/en/users/sign_in"></a>
                    We know what matters most and you can count on us every step of the way.
                </BottomSectionH3>
                <WeddingToolsRow>
                    <Col>
                        <WeddingToolsTool>
                            <WeddingToolsToolIcon>
                                <WeddingToolsToolIconImg src="https://weds360.com/assets/icons/tools-website-95bef8b478b6c85387e84ee788519776163c56e0b019ed23465792a72ca2afc4.png"/>
                            </WeddingToolsToolIcon>
                            <div className="wedding-tools-tool-info">
                                <H4>Wedding Website</H4>
                                <Span>Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you. </Span>
                                <A href="/en/build_your_website">Create your website</A>
                            </div>
                        </WeddingToolsTool>
                    </Col>
                    <Col>
                        <WeddingToolsTool>
                            <WeddingToolsToolIcon>
                                <WeddingToolsToolIconImg src="https://weds360.com/assets/icons/tools-budgeter-ec7fc844bc691fe93aedce93cd23271a5a78c914f01a9a125001be262182a4e7.png"/>
                            </WeddingToolsToolIcon>
                            <div className="wedding-tools-tool-info">
                                <H4>budgeter</H4>
                                <Span>Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of.</Span>
                                <A href="/en/budgeter">Create and manage your budget</A>
                                </div>
                        </WeddingToolsTool>
                    </Col>
                    <Col>
                        <WeddingToolsTool>
                            <WeddingToolsToolIcon>
                                <WeddingToolsToolIconImg src="https://weds360.com/assets/icons/tools-checklist-e124e29dd969e38098828647686c96804fe8369a8b09b6d9fc422f9a4e7b5e22.png"/>
                            </WeddingToolsToolIcon>
                            <div className="wedding-tools-tool-info">
                                <H4>check list</H4>
                                <Span>Set your tasks, create your priority list and never forget any wedding detail. </Span>
                                <A href="/en/checklists">Get your check list</A>
                            </div>
                        </WeddingToolsTool>
                    </Col>
                    <Col>
                        <WeddingToolsTool>
                            <WeddingToolsToolIcon>
                                <WeddingToolsToolIconImg src="https://weds360.com/assets/icons/tools-guestlist-f425f68309d1c60ecfbd742d0c23f6ac6e4c5f06112cc32c7f03cb44e76e46c4.png"/>
                            </WeddingToolsToolIcon>
                            <div className="wedding-tools-tool-info">
                                <H4>guest list</H4>
                                <Span>Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.</Span>
                                <A href="/en/guestlist">Create your guest list</A>
                            </div>
                        </WeddingToolsTool>
                    </Col>
                    <Col>
                        <WeddingToolsTool>
                            <WeddingToolsToolIcon>
                                <WeddingToolsToolIconImg src="https://weds360.com/assets/icons/tools-vendors-ed23b60c6df77090fbdd0525fa4933dc63663550ded8c05f79e46168566f20b8.png"/>
                            </WeddingToolsToolIcon>
                            <div className="wedding-tools-tool-info">
                                <H4>vendors</H4>
                                <Span>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.</Span>
                                <A href="/en/services">Start your tour</A>
                            </div>
                        </WeddingToolsTool>
                    </Col>
                    <Col>
                        <WeddingToolsTool>
                            <WeddingToolsToolIcon>
                                <WeddingToolsToolIconImg src="https://weds360.com/assets/icons/tools-registry-44ab24a86952730b44ec02ae3405b2665d61471f42a631968093d3613f4f95e8.png"/>
                            </WeddingToolsToolIcon>
                            <div className="wedding-tools-tool-info">
                                <H4>Registry List</H4>
                                <Span>Escape the awkward moments and receiving the same gift twice by listing everything you've thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents. </Span>
                                <A href="/en/registry">Create your dream list</A>
                            </div>
                        </WeddingToolsTool>
                    </Col>
                </WeddingToolsRow>
            </BottomSectionContainer>
        );
}