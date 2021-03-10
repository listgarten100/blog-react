import React from 'react';
import CategoriesList from '../../Aside/Categories/CategoriesList';



const CategoriesPage = ({category, getFilterCategory, showPost}) => {
    return (
        <CategoriesList
            category = {category}
            getFilterCategory = {getFilterCategory}
            showPost = {showPost}
        />
    )
}


export default CategoriesPage