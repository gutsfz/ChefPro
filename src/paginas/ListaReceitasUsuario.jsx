import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexto/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ListaReceitasUsuario() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [selectedReceita, setSelectedReceita] = useState(null);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const receitas = [
        { 
            id: 1, 
            nome: "Bolo de Chocolate", 
            categoria: "Sobremesas", 
            status: "Favorita",
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
            nome: "Pizza Caseira", 
            categoria: "Massas", 
            status: "Normal",
            descricao: "Pizza feita em casa com ingredientes frescos.",
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
            status: "Favorita",
            descricao: "Salada clássica Caesar com molho especial.",
            ingredientes: [
                "Alface romana",
                "Croutons",
                "Queijo parmesão",
                "Molho Caesar"
            ],
            preparo: "1. Lave e corte a alface\n2. Prepare o molho\n3. Misture os ingredientes"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-semibold">
                        <i className="fas fa-utensils text-red-500 mr-2"></i>
                        ChefPro
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handleLogout}
                        className="text-gray-600 hover:text-red-500 flex items-center gap-2"
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        Sair
                    </button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Minhas Receitas</h2>

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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Categoria</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {receitas.map(receita => (
                                <tr key={receita.id}>
                                    <td className="px-6 py-4">{receita.nome}</td>
                                    <td className="px-6 py-4">{receita.categoria}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                            receita.status === 'Favorita' 
                                                ? 'bg-yellow-100 text-yellow-800' 
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {receita.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button 
                                            onClick={() => setSelectedReceita(receita)}
                                            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                                        >
                                            <i className="fas fa-eye"></i>
                                            Ver Receita
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {selectedReceita && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold">{selectedReceita.nome}</h3>
                            <button 
                                onClick={() => setSelectedReceita(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Descrição</h4>
                                <p className="text-gray-600">{selectedReceita.descricao}</p>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Ingredientes</h4>
                                <ul className="list-disc pl-5 text-gray-600">
                                    {selectedReceita.ingredientes.map((ingrediente, index) => (
                                        <li key={index}>{ingrediente}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Modo de Preparo</h4>
                                <pre className="whitespace-pre-line text-gray-600">{selectedReceita.preparo}</pre>
                            </div>
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                            <button 
                                onClick={() => setSelectedReceita(null)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
