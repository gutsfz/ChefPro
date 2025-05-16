import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexto/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PaginaInicio from './paginas/PaginaInicio';
import PaginaLogin from './paginas/PaginaLogin';
import ListaReceitasAdmin from './paginas/admin/ListaReceitasAdmin';
import ListaReceitasUsuario from './paginas/ListaReceitasUsuario';

function RotaPrivada({ children }) {
    const { autenticado, tipoUsuario } = useContext(AuthContext);
    
    if (!autenticado) {
        return <Navigate to="/login" />;
    }

    // Se tentar acessar rota de admin sendo usuário comum
    if (window.location.pathname.startsWith('/admin') && tipoUsuario !== 'admin') {
        return <Navigate to="/receitas" />;
    }

    return children;
}

function RotaPublica({ children }) {
    const { autenticado, tipoUsuario } = useContext(AuthContext);
    
    if (autenticado) {
        return tipoUsuario === 'admin' ? 
            <Navigate to="/admin/receitas" /> : 
            <Navigate to="/receitas" />;
    }
    
    return children;
}

function AdminLayout({ children }) {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="layout-admin">
            <header className="cabecalho-admin">
                <div className="cabecalho-esquerda">
                    <h1><i className="fas fa-utensils"></i> ChefPro</h1>
                </div>
                <div className="cabecalho-direita">
                    <button 
                        onClick={handleLogout}
                        className="botao botao-sair"
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        Sair
                    </button>
                </div>
            </header>
            <div className="conteudo-admin">
                <nav className="barra-lateral">
                    <ul>
                        <li>
                            <a href="/admin/receitas">
                                <i className="fas fa-utensils"></i>
                                <span>Receitas</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <main className="conteudo-principal">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <RotaPublica>
                                <PaginaInicio />
                            </RotaPublica>
                        } 
                    />
                    <Route 
                        path="/login" 
                        element={
                            <RotaPublica>
                                <PaginaLogin />
                            </RotaPublica>
                        } 
                    />
                    <Route 
                        path="/admin/receitas" 
                        element={
                            <RotaPrivada>
                                <AdminLayout>
                                    <ListaReceitasAdmin />
                                </AdminLayout>
                            </RotaPrivada>
                        } 
                    />
                    <Route 
                        path="/receitas" 
                        element={
                            <RotaPrivada>
                                <ListaReceitasUsuario />
                            </RotaPrivada>
                        } 
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
