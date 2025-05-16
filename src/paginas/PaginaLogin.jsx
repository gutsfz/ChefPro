import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexto/AuthContext';

export default function PaginaLogin() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (usuario === 'admin' && senha === 'admin123') {
            login('admin');
            navigate('/admin/receitas');
        } else if (usuario === 'user' && senha === 'user123') {
            login('user');
            navigate('/receitas');
        } else {
            setErro('Usuário ou senha inválidos');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        <i className="fas fa-utensils text-red-500 mr-2"></i>
                        ChefPro
                    </h1>
                    <h2 className="text-xl text-gray-600">Login</h2>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-700">
                            <div className="relative">
                                <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
                                <input
                                    type="text"
                                    placeholder="Usuário"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                                    required
                                />
                            </div>
                        </label>
                    </div>

                    <div>
                        <label className="block text-gray-700">
                            <div className="relative">
                                <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                                    required
                                />
                            </div>
                        </label>
                    </div>

                    {erro && (
                        <p className="text-red-500 text-sm text-center">{erro}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                        Entrar
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Credenciais de teste:</p>
                    <p>Admin: admin / admin123</p>
                    <p>Usuário: user / user123</p>
                </div>
            </div>
        </div>
    );
}
