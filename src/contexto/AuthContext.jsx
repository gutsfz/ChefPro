import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState(null);

    useEffect(() => {
        const autenticadoStorage = localStorage.getItem('autenticado');
        const tipoStorage = localStorage.getItem('tipoUsuario');
        if (autenticadoStorage === 'true') {
            setAutenticado(true);
            setTipoUsuario(tipoStorage);
        }
    }, []);

    const login = (tipo) => {
        localStorage.setItem('autenticado', 'true');
        localStorage.setItem('tipoUsuario', tipo);
        setAutenticado(true);
        setTipoUsuario(tipo);
    };

    const logout = () => {
        localStorage.removeItem('autenticado');
        localStorage.removeItem('tipoUsuario');
        setAutenticado(false);
        setTipoUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ autenticado, tipoUsuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
