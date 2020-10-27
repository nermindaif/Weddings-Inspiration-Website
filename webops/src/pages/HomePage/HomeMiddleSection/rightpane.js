import React,{useContext } from 'react';
import {Link} from "react-router-dom";
import {PhotosContainer, Row, Col, PhotoContainer, BgImg, BgImgImage, PhotoContainerH3} from './photosStyle.js';
import {Context} from './../../Provider/provider'


export default function RightPane(){
    const obj=useContext(Context);
    const images=obj[Object.keys(obj)[0]];
    
        return(
            <PhotosContainer>
                <Row>
                {images.map(image=>
                    <Col>
                        <a href={image.id} style={{textDecoration:"none"}}>
                        <Link to={'/page'+image.id}style={{textDecoration:"none"}}>
                             <PhotoContainer>
                                <BgImg>
                                        <BgImgImage src={image.src}/>
                                </BgImg>
                                <PhotoContainerH3>{image.tag}</PhotoContainerH3>
                            </PhotoContainer>
                        </Link>
                        </a>       
                    </Col> 
                 )}
                </Row>
            </PhotosContainer>

        );  
}