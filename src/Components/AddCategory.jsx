import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ( { onNewCategory }) => {

    let [inputValue, setInputValue] =  useState('');     

    const onInputChange = ({ target }) => {
        // console.log(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        // setCategories([inputValue]);
        setInputValue('');
        onNewCategory(inputValue.trim());        
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value = {inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.proptypes = {
    onNewCategory: PropTypes.func.isRequired,
}
