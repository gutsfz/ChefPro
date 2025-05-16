import React, { useState } from 'react';

export default function ListaReceitasAdmin() {
    const [receitas, setReceitas] = useState([
        { 
            id: 1, 
            nome: "Bolo de Chocolate", 
            categoria: "Sobremesas", 
            status: "Publicada",
            descricao: "Delicioso bolo de chocolate com cobertura cremosa.",
            ingredientes: [
                "2 xícaras de farinha de trigo",
                "1 xícara de chocolate em pó",
                "2 ovos",
                "1 xícara de leite"
            ],
            preparo: "1. Misture os ingredientes secos\n2. Adicione os ovos e o leite\n3. Asse por 40 minutos"
        },
        { 
            id: 2, 
            nome: "Pizza Margherita", 
            categoria: "Massas", 
            status: "Rascunho",
            descricao: "Pizza tradicional italiana com molho de tomate, mussarela e manjericão.",
            ingredientes: [
                "3 xícaras de farinha",
                "1 colher de fermento",
                "Molho de tomate",
                "Queijo mussarela"
            ],
            preparo: "1. Prepare a massa\n2. Deixe descansar\n3. Abra a massa e adicione os ingredientes"
        },
        { 
            id: 3, 
            nome: "Salada Caesar", 
            categoria: "Saladas", 
            status: "Publicada",
            descricao: "Salada clássica Caesar com molho especial.",
            ingredientes: [
                "Alface romana",
                "Croutons",
                "Queijo parmesão",
                "Molho Caesar"
            ],
            preparo: "1. Lave e corte a alface\n2. Prepare o molho\n3. Misture os ingredientes"
        }
    ]);

    const [selectedReceita, setSelectedReceita] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('view'); // 'view', 'edit', 'add'

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta receita?')) {
            setReceitas(receitas.filter(receita => receita.id !== id));
        }
    };

    const handleEdit = (receita) => {
        setSelectedReceita(receita);
        setModalMode('edit');
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedReceita({
            id: receitas.length + 1,
            nome: '',
            categoria: '',
            status: 'Rascunho',
            descricao: '',
            ingredientes: [],
            preparo: ''
        });
        setModalMode('add');
        setIsModalOpen(true);
    };

    const handleSave = (editedReceita) => {
        if (modalMode === 'add') {
            setReceitas([...receitas, editedReceita]);
        } else {
            setReceitas(receitas.map(r => r.id === editedReceita.id ? editedReceita : r));
        }
        setIsModalOpen(false);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Gerenciar Receitas</h2>
                <button 
                    onClick={handleAdd}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <i className="fas fa-plus"></i>
                    Nova Receita
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b flex gap-4">
                    <input
                        type="text"
                        placeholder="Buscar receitas..."
                        className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <select className="px-4 py-2 border rounded-lg">
                        <option value="">Todas as categorias</option>
                        <option value="sobremesas">Sobremesas</option>
                        <option value="massas">Massas</option>
                        <option value="saladas">Saladas</option>
                    </select>
                </div>

                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Categoria</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {receitas.map(receita => (
                            <tr key={receita.id}>
                                <td className="px-6 py-4">{receita.id}</td>
                                <td className="px-6 py-4">{receita.nome}</td>
                                <td className="px-6 py-4">{receita.categoria}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        receita.status === 'Publicada' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {receita.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleEdit(receita)}
                                            className="text-blue-600 hover:text-blue-800"
                                            title="Editar"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(receita.id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Excluir"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold">
                                {modalMode === 'add' ? 'Nova Receita' : 'Editar Receita'}
                            </h3>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSave(selectedReceita);
                        }}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        value={selectedReceita.nome}
                                        onChange={(e) => setSelectedReceita({
                                            ...selectedReceita,
                                            nome: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded-lg"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Categoria
                                    </label>
                                    <select
                                        value={selectedReceita.categoria}
                                        onChange={(e) => setSelectedReceita({
                                            ...selectedReceita,
                                            categoria: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded-lg"
                                        required
                                    >
                                        <option value="">Selecione uma categoria</option>
                                        <option value="Sobremesas">Sobremesas</option>
                                        <option value="Massas">Massas</option>
                                        <option value="Saladas">Saladas</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Status
                                    </label>
                                    <select
                                        value={selectedReceita.status}
                                        onChange={(e) => setSelectedReceita({
                                            ...selectedReceita,
                                            status: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded-lg"
                                        required
                                    >
                                        <option value="Rascunho">Rascunho</option>
                                        <option value="Publicada">Publicada</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Descrição
                                    </label>
                                    <textarea
                                        value={selectedReceita.descricao}
                                        onChange={(e) => setSelectedReceita({
                                            ...selectedReceita,
                                            descricao: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded-lg"
                                        rows="3"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Ingredientes (um por linha)
                                    </label>
                                    <textarea
                                        value={selectedReceita.ingredientes.join('\n')}
                                        onChange={(e) => setSelectedReceita({
                                            ...selectedReceita,
                                            ingredientes: e.target.value.split('\n').filter(i => i.trim())
                                        })}
                                        className="w-full px-3 py-2 border rounded-lg"
                                        rows="5"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Modo de Preparo
                                    </label>
                                    <textarea
                                        value={selectedReceita.preparo}
                                        onChange={(e) => setSelectedReceita({
                                            ...selectedReceita,
                                            preparo: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded-lg"
                                        rows="5"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
