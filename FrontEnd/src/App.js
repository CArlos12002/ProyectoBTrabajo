import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Importa GoogleOAuthProvider
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import RegisterCliente from './pages/RegisterCliente';
import RegisterEmpresa from './pages/RegisterEmpresa';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import Terminos from './pages/Terminos';
import Footer from './pages/Footer';
import AvisoPri from './pages/AvisoPri';
import WhoWeAre from "./pages/WhoWeAre";
import Configuracion from './pages/Configuracion';
import Eleccion from './pages/Eleccion';
import LoopingWords from './pages/LoopingWords';
import NavBar from './pages/NavBar';

function App() {
    return (
        <GoogleOAuthProvider clientId="TU_CLIENT_ID_DE_GOOGLE"> {/* Envuelve la aplicación */}
            <Router>
                <div className="d-flex flex-column min-vh-100">
                    <NavBar />
                    <div className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/eleccion" element={<Eleccion />} />
                            <Route path="/register/cliente" element={<RegisterCliente />} />
                            <Route path="/register/empresa" element={<RegisterEmpresa />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/terminos" element={<Terminos />} />
                            <Route path="/avisopri" element={<AvisoPri />} />
                            <Route path="/whoweare" element={<WhoWeAre />} />
                            <Route path="/configuracion" element={<Configuracion />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </GoogleOAuthProvider>
    );
}

export default App;
