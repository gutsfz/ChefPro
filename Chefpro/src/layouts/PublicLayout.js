import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicLayout = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="layout-publico">
      {/* Navegação */}
      <nav className="navegacao">
        <div className="container">
          <div className="cabecalho">
            <div className="links-navegacao">
              <Link to="/" className={`link-nav ${location.pathname === '/' ? 'ativo' : ''}`}>
                Início
              </Link>
              <Link to="/receitas" className={`link-nav ${location.pathname === '/receitas' ? 'ativo' : ''}`}>
                Receitas
              </Link>
              {isAuthenticated() ? (
                <>
                  <Link to="/admin/lista" className="link-nav">
                    Admin
                  </Link>
                  <button onClick={logout} className="link-nav">
                    Sair
                  </button>
                </>
              ) : (
                <Link to="/login" className="link-nav">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="conteudo-principal">
        <Outlet />
      </main>

      {/* Rodapé */}
      <footer className="rodape">
        <div className="container">
          <div className="texto-rodape">
            <p>© 2024 ChefPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
