import React from 'react';
import LeftPane from './leftpane.js';
import {PhotosWrapper} from './photosStyle.js';
import RightPane from './rightpane.js';

export default function MiddlePane(props){
        return(
            <PhotosWrapper>
                <LeftPane/>
                <RightPane/>
            </PhotosWrapper>
    );
}