import React from 'react';
import {FiltersContainer, FiltersRadio, FiltersActions,FiltersActionsClear, FiltersActionsButton, VendorsSearchInputsPosts,Input}from'./photosStyle.js'
export default function LeftPane(props){
        return(
            <FiltersContainer>
                <FiltersRadio>

                    <FiltersActions>
                        <FiltersActionsClear href="#">Clear</FiltersActionsClear>
                        <FiltersActionsButton href="#">Apply</FiltersActionsButton>
                    </FiltersActions>
                    <VendorsSearchInputsPosts>
                        <Input type="text" placeholder="Search" name="name"/>
                    </VendorsSearchInputsPosts>
                </FiltersRadio>
            </FiltersContainer>
        );
    }