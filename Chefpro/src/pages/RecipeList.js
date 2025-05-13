import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficulty ? recipe.difficulty === difficulty : true;
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyClass = (difficulty) => {
    switch(difficulty) {
      case 'Fácil':
        return 'dificuldade-facil';
      case 'Médio':
        return 'dificuldade-medio';
      case 'Difícil':
        return 'dificuldade-dificil';
      default:
        return '';
    }
  };

  return (
    <div className="mt-4 mb-4">
      <div className="container">
        {/* Header */}
        <div className="mb-4">
          <h1 className="mb-2">Nossas Receitas</h1>
          <p>Explore nossa coleção completa de receitas deliciosas</p>
        </div>

        {/* Filters */}
        <div className="grid grid-2-colunas mb-4">
          <div>
            <input
              type="text"
              placeholder="Buscar receitas..."
              className="campo-entrada"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="campo-entrada"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">Todas as dificuldades</option>
              <option value="Fácil">Fácil</option>
              <option value="Médio">Médio</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-3-colunas">
          {filteredRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/receita/${recipe.id}`}
              className="card"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="card-imagem"
              />
              <div className="card-conteudo">
                <h3 className="mb-2">{recipe.title}</h3>
                <p className="mb-3">{recipe.description}</p>
                <div className="recipe-meta">
                  <span>⏱ {recipe.prepTime}</span>
                  <span className={getDifficultyClass(recipe.difficulty)}>
                    {recipe.difficulty}
                  </span>
                  <span>👥 Serve {recipe.servings}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <div className="texto-centro mt-4">
            <p>Nenhuma receita encontrada com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
