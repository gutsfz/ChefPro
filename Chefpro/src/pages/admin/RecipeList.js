import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../../data/recipes';

const AdminRecipeList = () => {
  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <div className="cabecalho mb-4">
          <h1>Gerenciar Receitas</h1>
          <Link to="/admin/nova" className="botao botao-primario">
            Nova Receita
          </Link>
        </div>

        <div className="tabela-container">
          <table className="tabela">
            <thead>
              <tr>
                <th>Título</th>
                <th>Dificuldade</th>
                <th>Tempo de Preparo</th>
                <th>Porções</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe.id}>
                  <td>{recipe.title}</td>
                  <td>
                    <span className={`dificuldade-${recipe.difficulty.toLowerCase()}`}>
                      {recipe.difficulty}
                    </span>
                  </td>
                  <td>{recipe.prepTime}</td>
                  <td>{recipe.servings}</td>
                  <td>
                    <div className="acoes">
                      <button className="botao botao-secundario">
                        Editar
                      </button>
                      <button className="botao botao-perigo">
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminRecipeList;
