import {useState} from 'react';

import { AddCategoryForm } from './components/AddCategoryForm';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['code']);

    const onAddCategory = (nueva)=>{
        if(categories.includes(nueva)) return;
        setCategories([ nueva, ...categories]);
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategoryForm onNewCategory={ valor=> onAddCategory(valor) } />
        { 
            categories.map(category =>  (
                <GifGrid key={category} category={category} />
            )) 
        }
    </>
  )
}
