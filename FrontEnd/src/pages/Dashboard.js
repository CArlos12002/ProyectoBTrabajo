import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Bienvenido al Dashboard</h2>
            <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>Cerrar Sesión</button>
        </div>
    );
};

export default Dashboard;
