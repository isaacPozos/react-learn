import {useState} from 'react';
import { AddCategoryForm } from './components/AddCategoryForm';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (nueva)=>{
        setCategories([ nueva, ...categories]);
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategoryForm onNewCategory={ valor=> onAddCategory(valor) } />
        <ol>
            { categories.map(category => {
                return <li key={category}>{ category }</li>
            }) }
        </ol>
    </>
  )
}
