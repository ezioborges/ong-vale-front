const Login = () => {
  return (
    <div className="container-fluid">
      <div
        style={{ height: '100vh' }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <form
          className="w-25 rounded shadow p-5 d-flex flex-column justify-content-center"
          data-testid="login-form-area"
        >
          <div className="row mb-2">
            <h1>Entre no VALE</h1>
          </div>
          <div className="row d-flex flex-column align-items-start m-3">
            <label
              htmlFor="login-input-email"
              data-testid="login-label-email"
              className="fs-5 fw-bold text-start"
            >
              Email:
            </label>
            <input
              className="p-2 mt-2"
              type="email"
              id="login-input-email"
              placeholder="Digite seu email"
              data-testid="login-input-email"
            />
          </div>
          <div className="row d-flex flex-column align-items-start m-3">
            <label
              className="fs-5 fw-bold text-start"
              htmlFor="login-input-password"
              data-testid="login-label-password"
            >
              Senha:
            </label>
            <input
              className="p-2 mt-2"
              type="text"
              data-testid="login-input-password"
              placeholder="Digite sua senha"
              id="login-input-password"
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              data-testid="login-btn"
              className="btn btn-primary w-50"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
