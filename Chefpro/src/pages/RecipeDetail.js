import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="container">
        <div className="mt-4 mb-4">
          <h1>Receita não encontrada</h1>
          <Link to="/receitas" className="botao botao-primario">
            Voltar para Receitas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <div className="recipe-detail">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="recipe-detail-image mb-4"
          />
          
          <h1 className="mb-2">{recipe.title}</h1>
          <p className="mb-4">{recipe.description}</p>
          
          <div className="recipe-meta mb-4">
            <span>⏱ {recipe.prepTime}</span>
            <span className={`dificuldade-${recipe.difficulty.toLowerCase()}`}>
              {recipe.difficulty}
            </span>
            <span>👥 Serve {recipe.servings} pessoas</span>
          </div>

          <div className="mb-4">
            <h2 className="mb-2">Ingredientes</h2>
            <ul className="lista-ingredientes">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="mb-2">Modo de Preparo</h2>
            <ol className="lista-instrucoes">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          <Link to="/receitas" className="botao botao-secundario">
            Voltar para Receitas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
