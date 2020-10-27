import React from 'react';
import { WeddingBreadCrumb,WeddingBreadCrumbLinkH3, WeddingBreadCrumbLinkA, H2 }from './homeStyle.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, far, fas);

export default function Wedding(props){
        return(
                <WeddingBreadCrumb>
                        <WeddingBreadCrumbLinkH3>
                                <WeddingBreadCrumbLinkA href="#">Gallery</WeddingBreadCrumbLinkA>
                        </WeddingBreadCrumbLinkH3>
                        <FontAwesomeIcon icon={['fas', 'angle-right']} color="#202020"style={{width:"25px", fontSize:"25px"}}/>
                        <H2 >WEDDING IDEAS</H2>
                </WeddingBreadCrumb>
        );
}