const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/auth/login', { email, password });
        localStorage.setItem('authToken', response.data.token);
        history.push('/dashboard');
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
  
    return (
      <div>
        <h1>Вход</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  };
  
