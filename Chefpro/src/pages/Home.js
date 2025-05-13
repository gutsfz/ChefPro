import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';

const Home = () => {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="mb-3">
              Descubra o Chef que Existe em Você
            </h1>
            <p className="mb-4">
              Explore nossa coleção de receitas exclusivas e transforme sua cozinha em um espaço de criatividade e sabor.
            </p>
            <Link to="/receitas" className="botao botao-primario">
              Explorar Receitas
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="mt-4 mb-4">
        <div className="container">
          <h2 className="texto-centro mb-4">Receitas em Destaque</h2>
          
          <div className="grid grid-3-colunas">
            {featuredRecipes.map((recipe) => (
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
                    <span className="mr-2">⏱ {recipe.prepTime}</span>
                    <span>👥 Serve {recipe.servings}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="texto-centro mt-4">
            <Link to="/receitas" className="botao botao-secundario">
              Ver Todas as Receitas
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-4">
        <div className="container">
          <div className="grid grid-3-colunas">
            <div className="texto-centro">
              <div className="feature-icon mb-2">🌟</div>
              <h3 className="mb-2">Receitas Exclusivas</h3>
              <p>Criadas e testadas por chefs profissionais</p>
            </div>
            <div className="texto-centro">
              <div className="feature-icon mb-2">📝</div>
              <h3 className="mb-2">Instruções Detalhadas</h3>
              <p>Passo a passo para resultados perfeitos</p>
            </div>
            <div className="texto-centro">
              <div className="feature-icon mb-2">💡</div>
              <h3 className="mb-2">Dicas de Profissionais</h3>
              <p>Segredos e técnicas especiais</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
