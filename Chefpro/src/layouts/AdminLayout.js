import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLayout = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white fixed h-full">
        <div className="p-6">
          <Link to="/" className="flex items-center mb-8">
            <span className="font-heading text-2xl">ChefPro</span>
          </Link>
          
          <nav className="space-y-4">
            <Link
              to="/admin/lista"
              className={`block py-2 px-4 rounded transition-colors ${
                location.pathname === '/admin/lista'
                  ? 'bg-white text-primary'
                  : 'hover:bg-white/10'
              }`}
            >
              Lista de Receitas
            </Link>
            <Link
              to="/admin/nova"
              className={`block py-2 px-4 rounded transition-colors ${
                location.pathname === '/admin/nova'
                  ? 'bg-white text-primary'
                  : 'hover:bg-white/10'
              }`}
            >
              Nova Receita
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container-custom py-4">
            <div className="flex justify-end">
              <button
                onClick={handleLogout}
                className="btn-secondary"
              >
                Sair
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="container-custom py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
