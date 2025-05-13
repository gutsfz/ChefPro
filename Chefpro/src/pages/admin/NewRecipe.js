import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    image: '',
    prepTime: '',
    difficulty: '',
    servings: '',
    ingredients: [''],
    instructions: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = value;
    setRecipe(prev => ({
      ...prev,
      ingredients: newIngredients
    }));
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...recipe.instructions];
    newInstructions[index] = value;
    setRecipe(prev => ({
      ...prev,
      instructions: newInstructions
    }));
  };

  const addIngredient = () => {
    setRecipe(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, '']
    }));
  };

  const addInstruction = () => {
    setRecipe(prev => ({
      ...prev,
      instructions: [...prev.instructions, '']
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para salvar a receita
    navigate('/admin/lista');
  };

  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <h1 className="mb-4">Nova Receita</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="mb-1">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="campo-entrada"
              value={recipe.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="mb-1">Descrição:</label>
            <textarea
              id="description"
              name="description"
              className="campo-entrada"
              value={recipe.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="mb-1">URL da Imagem:</label>
            <input
              type="url"
              id="image"
              name="image"
              className="campo-entrada"
              value={recipe.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-3-colunas mb-3">
            <div>
              <label htmlFor="prepTime" className="mb-1">Tempo de Preparo:</label>
              <input
                type="text"
                id="prepTime"
                name="prepTime"
                className="campo-entrada"
                value={recipe.prepTime}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="difficulty" className="mb-1">Dificuldade:</label>
              <select
                id="difficulty"
                name="difficulty"
                className="campo-entrada"
                value={recipe.difficulty}
                onChange={handleChange}
                required
              >
                <option value="">Selecione...</option>
                <option value="Fácil">Fácil</option>
                <option value="Médio">Médio</option>
                <option value="Difícil">Difícil</option>
              </select>
            </div>

            <div>
              <label htmlFor="servings" className="mb-1">Porções:</label>
              <input
                type="number"
                id="servings"
                name="servings"
                className="campo-entrada"
                value={recipe.servings}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="mb-1">Ingredientes:</label>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  className="campo-entrada"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder={`Ingrediente ${index + 1}`}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="botao botao-secundario"
            >
              + Adicionar Ingrediente
            </button>
          </div>

          <div className="mb-3">
            <label className="mb-1">Modo de Preparo:</label>
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="mb-2">
                <textarea
                  className="campo-entrada"
                  value={instruction}
                  onChange={(e) => handleInstructionChange(index, e.target.value)}
                  placeholder={`Passo ${index + 1}`}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addInstruction}
              className="botao botao-secundario"
            >
              + Adicionar Passo
            </button>
          </div>

          <div className="acoes">
            <button type="submit" className="botao botao-primario">
              Salvar Receita
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/lista')}
              className="botao botao-secundario"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
