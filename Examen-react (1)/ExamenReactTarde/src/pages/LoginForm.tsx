import { useActionState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate()

  const formAction = async (
    _prev: { error: string | null },
    formData: FormData,
  ) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email || !password) {
      return { error: "Email y password son requeridos" };
    }

    const success = await login({ email, password });
    if (!success) {
      return { error: "Credenciales incorrectas" };
    }
    navigate('/')
    return { error: null };
  };

  const [state, handleSubmit, isPending] = useActionState(formAction, {
    error: null,
  });

  return (
    <div>
      <h1 className="page-title">Iniciar sesión</h1>
      <form action={handleSubmit} className="form form-login">
        {state.error && (
          <div className="alert-error">{state.error}</div>
        )}
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="form-input"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-primary"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
          <p style={{marginTop:'0.5rem', fontSize:'0.85rem', color:'#64748b'}}>
            Demo: admin@admin.com / admin123
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
