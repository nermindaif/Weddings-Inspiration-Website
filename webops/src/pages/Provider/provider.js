
import React,{ useState, useEffect} from 'react';
import axios from 'axios';

async function getImgs(){
    try{
        const response = await axios.get('imagesDB.json');
        console.log(response);
        return response;
    }
    catch(error){
        console.log(error)
    }
  }
  async function getCategories(){
    try{
        const response = await axios.get('categoriesDB.json');
        console.log(response);
        return response;
    }
    catch(error){
        console.log(error)
    }
  }
  async function getImg(){
    
        try{
            const response = await axios.get('./displayImage.json');
            console.log(response);
            return response;
        }
        catch(error){
            console.log(error);
        }
}
async function getRelatedImgs(){
    try{
        const response = await axios.get('relatedImagesDB.json');
        console.log(response);
        return response;
    }
    catch(error){
        console.log(error)
    }
}
  export const Context=React.createContext();
  export function PagesProvider(props){
      const [images, setValueImages]=useState([]);
      const [categories, setValueCategories]=useState([]);
      const [myimage, setValueImg]=useState([]);
      const [relatedImgs, setValueRelatedImgs]=useState([]);
      useEffect(()=>{
            getImgs().then(response =>{
                setValueImages(response.data.images)
                
            });  
            getCategories().then(response =>{
                setValueCategories(response.data.categories)
            }); 
            getImg().then(response =>{
                setValueImg(response.data.image);
            });
            getRelatedImgs().then(response =>{
                setValueRelatedImgs(response.data.images);
            });
            
        },[]);
    return (
       <Context.Provider value={{images,myimage,relatedImgs, categories}}>
          {props.children}
        </Context.Provider>
    );
  }
  