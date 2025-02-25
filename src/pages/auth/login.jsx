import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const BASE_URL = "https://adrian.informaticamajada.es";
  const navigate = useNavigate();

  // 🔹 Función para guardar y recuperar el token desde localStorage
  const saveToken = (token) => localStorage.setItem("authToken", token);
  const getToken = () => localStorage.getItem("authToken");

  // 🔹 Función para hacer login y guardar el token
  const login = async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `Error ${response.status}: ${response.statusText}`;

        // Intentar parsear el error como JSON
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // Si no es JSON, usar el texto plano
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("✅ Login exitoso, token recibido:", data.token);

      // Guardar el token en localStorage
      saveToken(data.token);

      return data;
    } catch (error) {
      console.error("❌ Error en login:", error.message);
      throw new Error("Error de conexión. Por favor, intenta de nuevo más tarde.");
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    setErrors([]); // Limpiar errores anteriores
    setStatus(null); // Limpiar estado anterior

    // Validación básica
    if (!email || !password) {
      setErrors(["Por favor, completa todos los campos."]);
      return;
    }

    setIsLoading(true); // Activar el indicador de carga

    try {
      const data = await login(email, password);
      setStatus("Login exitoso! Redirigiendo...");

      // Redirigir al dashboard después de 2 segundos
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      setErrors([error.message]); // Mostrar el mensaje de error
    } finally {
      setIsLoading(false); // Desactivar el indicador de carga
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          className="block mt-1 w-full"
          onChange={(event) => setEmail(event.target.value)}
          required
          autoFocus
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">{errors.email}</div>
        )}
      </div>
      <div className="mt-4">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          className="block mt-1 w-full"
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="current-password"
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">{errors.password}</div>
        )}
      </div>

      <div className="block mt-4">
        <label htmlFor="remember_me" className="inline-flex items-center">
          <input
            id="remember_me"
            type="checkbox"
            name="remember"
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
      </div>

      {status && (
        <div className="text-green-500 text-sm mt-2">
          {status}
        </div>
      )}

      <div className="flex items-center justify-end mt-4">
        <button type="submit" className="ml-3" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Login"}
        </button>
      </div>

      {errors.length > 0 && (
        <div className="text-red-500 text-sm mt-2">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </form>
  );
};

export default Login;