import React,{ useState, useEffect, useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {VendorsSearch,Img,Span,A,VendorsSearchCategory,VendorsSearchCategoryContainer,VendorsSearchInputs,VendorsSearchDropdown,H5,VendorsSearchCategoriesContainer}from'./categoriesStyle.js'
import {Context} from './../Provider/provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, far, fas);



export default function Categories(){

    const [flag, setValueFlag]=useState( false);
    const [temp, setValueTemp]=useState('none');
    const obj=useContext(Context);
    console.log(typeof obj);
    const categoriesCon=obj[Object.keys(obj)[3]];
    console.log("categoriesCon",categoriesCon)
    function showCategories(e){
        setValueFlag(prevFlag => !prevFlag );
        if(flag==true){
            setValueTemp("block");
          }
          else{
            setValueTemp("none");
        }
    }

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
    
    
    useEffect(()=>{
        window.addEventListener('load', showCategories());
        function handleResize() {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
    },[]);
    
    var topp=0;
    if(windowSize.width< 575){
          topp=50
    }
    else{
        topp=68;
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black",position: "absolute", right: "5px", top: topp,color: "white",
            zindex: "9998",
            fontsize: "20px",
            transition: "all ease 0.3s"}}
            onClick={onClick}
          />
        );
      }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "black",position: "absolute", left: "9px", top: topp,color: "white",
            zindex: "9998",
            fontsize: "20px",
            transition: "all ease 0.3s"}}
            onClick={onClick}
            />
        );
    }
    var settings={}
    if(windowSize.width < 575){
            settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
    }
    else if(windowSize.width > 575 && windowSize.width < 1068){
        settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
            };
    }
    else{
        settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        };
    }
        return(
            <VendorsSearch>
                <VendorsSearchInputs>
                    <VendorsSearchDropdown onClick={showCategories}>
                        <H5>Find categories here</H5>
                        <FontAwesomeIcon icon={['fas', 'angle-down']} color="#202020"style={{marginLeft:"5px",width:"20px", fontSize:"25px", paddingTop:"5.7px", fontWeight:"20px"}}/>
                    </VendorsSearchDropdown>
                </VendorsSearchInputs>

                <VendorsSearchCategoriesContainer style={{display :temp}}>
                    <Slider {...settings} >
                        {categoriesCon.map(category=>
                        <A href="#" style={{textDecoration:'none'}}>
                            <VendorsSearchCategoryContainer>
                                <VendorsSearchCategory>
                                    <Img src={category.src}/>
                                    <Span>{category.tag}</Span>
                                </VendorsSearchCategory>
                            </VendorsSearchCategoryContainer>
                        </A>
                        )}          
                    </Slider>
                    
                </VendorsSearchCategoriesContainer>
                        
            </VendorsSearch> 

    );
}