import "./App.css";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  );
}

export default App;