import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header className="App-header text-center">
                <h1>
                    Login</h1>
            </header>
            <div className='container mt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-3'>
                        <form>
                            <div className='mb-3'>
                                <label className='form-label'>Username:</label>
                                <input type="text" name="username" className='form-control' placeholder='Username'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Password:</label>
                                <input type="password" name="password" className='form-control' placeholder='Password'/>
                            </div>
                            <button type="submit" className='btn btn-primary w-100'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
