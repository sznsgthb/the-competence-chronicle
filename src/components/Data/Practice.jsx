import { recipes } from './data.js';

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
                {recipes.map(recipe => {
                    return <Recipe {...recipe} key={recipe.id} />
                })}
        </div>
    );
}

// Here, <Recipe {...recipe} key={recipe.id} /> is a syntax shortcut saying “pass all properties of the recipe object as props to the Recipe component”.
// You could also write each prop explicitly:
//                              <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />.
// Note that the key is specified on the <Recipe> itself rather than on the root <div> returned from Recipe.
// This is because this key is needed directly within the context of the surrounding array.
// Previously, you had an array of <div>s so each of them needed a key, but now you have an array of <Recipe>s.
// In other words, when you extract a component, don’t forget to leave the key outside the JSX you copy and paste.

function Recipe({ id, name, ingredients }) {
return (
    <div>
        <h2>{name}</h2>
        <ul>
            {ingredients.map(ingredient => {
                return <li key={ingredient}>{ingredient}</li>
            })}
        </ul>
    </div>
);
}


export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe =>
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient => {
                            return <li key={ingredient}>{ingredient}</li>
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}


//mutating local objects

setPosition({
    x: e.clientX,
    y: e.clientY
  });




        <ul>
            {artists.map(artist => (
                <li key={artist.id}>
                        {artist.name}{' '}

                            <button onClick={() => {
                                setArtists(
                                    artists.filter(a =>
                                        a.id !== artist.id
                                    )
                                );
                            }}>
                                
                                Delete
                            </button>
                </li>
            ))}
        </ul>