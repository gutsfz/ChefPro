import { Link } from 'react-router-dom';

export default function PaginaInicio() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="hero min-h-[80vh] flex items-center justify-center text-center px-4">
                <div className="hero-content">
                    <div>
                        <h1 className="text-5xl font-bold mb-4">Bem-vindo ao ChefPro</h1>
                        <p className="text-xl mb-8 opacity-90">
                            Sua plataforma profissional de gerenciamento de receitas
                        </p>
                        <Link 
                            to="/login" 
                            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            Acessar Sistema
                        </Link>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-white text-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Recursos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                            <i className="fas fa-book-open text-4xl text-red-500 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Receitas</h3>
                            <p className="text-gray-600">Gerencie suas receitas de forma profissional</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                            <i className="fas fa-tags text-4xl text-red-500 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Categorias</h3>
                            <p className="text-gray-600">Organize suas receitas por categorias</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                            <i className="fas fa-users text-4xl text-red-500 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Usuários</h3>
                            <p className="text-gray-600">Controle de acesso e permissões</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
