import React, { Component } from 'react';
import Wedding from './wedding.js';
import MiddlePane from './HomeMiddleSection/allpane.js';
import Pagination from './Pagination/pagination.js';
export default function Home (props){
        return(
            <div>
                <Wedding/>         
                <MiddlePane/>
                <Pagination/>
            </div>

        );
}