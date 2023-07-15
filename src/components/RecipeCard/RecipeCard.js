// eslint-disable-next-line no-unused-vars
import { DeleteRecipeBtn, LinkStyled, RecipeCardStyled} from "./RecipeCardStylred";
import { useState} from "react";
// import useRecipeStore from '../../zustand/RecipesStore';

export default function RecipeCard({ recipe,activeRecipe}) { 
    const [isActive, setIsActive] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [recipeItem, setRecipeItem] = useState([recipe])
    // const { deleteRecipe } = useRecipeStore();

function toggleClass () {
    setIsActive(prevState => !prevState);
  };

    function handleClick(event) {
        if (event.button === 2) {
        event.preventDefault();
        const activeRecipes = document.querySelectorAll('.active');
        activeRecipe(activeRecipes);
        toggleClass();
        }
    }


    
 

    const isActiveClass = isActive ? 'active' : ' ';
    
    return (
        <RecipeCardStyled className={isActiveClass} onContextMenu={handleClick} id={recipe.id}>
            <LinkStyled to={`/beer`} state={{recipeItem}} >
                <img style={{padding:5}} src={recipe.image_url} alt={recipe.name} width={50} height={120} />
                <div style={{paddingLeft:15}}>
                <h4>Name: {recipe.name}</h4>
                <p title={recipe.description} style={{ overflow: "hidden", display:'block', height: 55}}>Title: {recipe.description} </p>
                </div>
                {/* {isActive && <DeleteRecipeBtn type="button" id={recipe.id} onClick={deleteBtn}>delete</DeleteRecipeBtn>} */}
            </LinkStyled>
        </RecipeCardStyled>
    )
}