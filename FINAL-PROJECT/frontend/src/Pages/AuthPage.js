import React, { useState } from 'react';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = { email, password };

        if (isLogin) {
            // Login user
            try {
                const response = await fetch('/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    // Redirect to dashboard or tasks page
                } else {
                    console.error(data.message);
                }
            } catch (err) {
                console.error(err);
            }
        } else {
            // Signup user
            try {
                const response = await fetch('/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...user, name }),
                });

                const data = await response.json();

                if (response.ok) {
                    // Redirect to login page or dashboard page
                } else {
                    console.error(data.message);
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="auth-page">
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="border p-4 rounded shadow">
                    <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success">
                                {isLogin ? 'Login' : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                    {isLogin ? (
                        <p className="text-center mt-3">
                            Don't have an account?{' '}
                            <span className="text-primary" onClick={() => setIsLogin(false)}>
                                Sign up
                            </span>
                        </p>
                    ) : (
                        <p className="text-center mt-3">
                            Already have an account?{' '}
                            <span className="text-primary" onClick={() => setIsLogin(true)}>
                                Login
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;