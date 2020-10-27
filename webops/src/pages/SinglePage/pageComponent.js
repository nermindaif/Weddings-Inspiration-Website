import React,{ useState, useEffect, useContext } from 'react'
import {Context} from './../Provider/provider'
import {Row,H5,PhotoContainerH3,ImgResponsive2,Col,BgImg,PhotoContainer,SinglePhotoPhotosContainer,RH2,PhotoDescriptionLinks,WeddingBreadCrumb,PhotoContainerSingle ,WeddingBreadCrumbLinkA,A, WeddingBreadCrumbLinkH3, H2,PhotoWrapper,ImgResponsive,PhotoDescription,PhotoDescriptionH2,PhotoDescriptionLinksSocialI}from './pageStyle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas);

export default function PageC(props){

    const obj=useContext(Context);
    console.log(typeof obj);
    const image=obj[Object.keys(obj)[1]];
    const imgs=obj[Object.keys(obj)[2]];

    const [imageToShow, getImg]=useState({})
    useEffect(()=>{
        const link=window.location.href
        var id=link.search('/page')
        id+=5
        id=link.substring(id,link.length)
        console.log("eshtaghalet",id)
        var i=0
        for(i; i<image.length; i++){
            if(image[i].id==id){     
                break;
            }
        }   
        getImg(image[i])
    },[]);
    return(
        <div>
            <WeddingBreadCrumb>
                <WeddingBreadCrumbLinkH3>
                        <WeddingBreadCrumbLinkA href="#">Gallery</WeddingBreadCrumbLinkA>
                        <FontAwesomeIcon icon={['fas', 'angle-right']} color="#202020"style={{width:"25px", fontSize:"25px"}}/>                        
                </WeddingBreadCrumbLinkH3>
                <WeddingBreadCrumbLinkH3><A href="#">Wedding Ideas</A></WeddingBreadCrumbLinkH3>
                <FontAwesomeIcon icon={['fas', 'angle-right']} color="#202020"style={{width:"25px", fontSize:"25px"}}/>
                                                            
                <H2 className="wedding-bread-crumb-link">{imageToShow.tag1}</H2>
            </WeddingBreadCrumb>
            
            
                <PhotoWrapper>
                    <PhotoContainerSingle>
                    
                        <ImgResponsive src={imageToShow.src} alt="Large"/>
                    </PhotoContainerSingle>
                    
                    <PhotoDescription>
                        <PhotoDescriptionH2>{imageToShow.tag1}</PhotoDescriptionH2>
                        <H5>{imageToShow.tag2}</H5>
                        <H5><a href="#" style={{color: "#337ab7", textDecoration: "none"}}>{imageToShow.tag3}</a></H5>
                        <PhotoDescriptionLinks>
                            <div className="photo-description-links-social">
                                <a href="#">
                                    <PhotoDescriptionLinksSocialI >
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} color="white" style={{paddingBottom:"2px",paddingRight:"10px", paddingLeft:"10px"}}/>
                                    </PhotoDescriptionLinksSocialI>
                                </a>
                                <a href="#">
                                    <PhotoDescriptionLinksSocialI>  
                                    <FontAwesomeIcon icon={['fab', 'twitter']} color="white" style={{paddingBottom:"3px",paddingRight:"6px", paddingLeft:"6px"}}/>
                                    </PhotoDescriptionLinksSocialI>
                                </a>
                            </div>
                        </PhotoDescriptionLinks>    
                    </PhotoDescription> 
                </PhotoWrapper>
            

            <SinglePhotoPhotosContainer>
                <RH2>Related Photos</RH2>
                <Row>
                    {imgs.map(image=>
                        <Col>
                            <a href="#" style={{textDecoration:"none"}}>
                                <PhotoContainer >
                                    <BgImg>
                                        <ImgResponsive2 src={image.src}/>
                                    </BgImg>
                                    <PhotoContainerH3>{image.tag}</PhotoContainerH3>
                                </PhotoContainer>
                            </a>
                        </Col>
                    )}    
                </Row>
            </SinglePhotoPhotosContainer>    
        </div>

    );
}