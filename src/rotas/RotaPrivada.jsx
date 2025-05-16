import { Navigate } from 'react-router-dom';

export default function RotaPrivada({ children }) {
    const autenticado = localStorage.getItem('autenticado') === 'true';
    const tipoUsuario = localStorage.getItem('tipoUsuario');

    if (!autenticado) {
        return <Navigate to="/login" />;
    }

    // Se tentar acessar rota de admin sendo usuário comum
    if (window.location.pathname.startsWith('/admin') && tipoUsuario !== 'admin') {
        return <Navigate to="/receitas" />;
    }

    return children;
}
