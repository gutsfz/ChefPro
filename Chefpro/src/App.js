import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Layouts
import AdminLayout from './layouts/AdminLayout';
import PublicLayout from './layouts/PublicLayout';

// Public Pages
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import Login from './pages/Login';

// Admin Pages
import AdminRecipeList from './pages/admin/RecipeList';
import AdminNewRecipe from './pages/admin/NewRecipe';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <div className="aplicacao">
      <Router>
        <Routes>
          {/* Rotas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<RecipeList />} />
          <Route path="/receita/:id" element={<RecipeDetail />} />
          <Route path="/login" element={<Login />} />
        </Route>

          {/* Rotas administrativas */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/admin/lista" replace />} />
            <Route path="lista" element={<AdminRecipeList />} />
            <Route path="nova" element={<AdminNewRecipe />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
