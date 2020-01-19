import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
// Componente: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  return (
    <div id="app"> 
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
           <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
          
        </form>
      </aside>
      <main>
        <ul>
        <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/30483193?s=460&v=4" alt="Renan Caldeira"/>
              <div className="user-info">
                <strong>Renan Caldeira</strong>
                <span>ReacJS, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Portfolio: http://renancn.github.io/</p>
            <a href="http://github.com/renancn">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/30483193?s=460&v=4" alt="Renan Caldeira"/>
              <div className="user-info">
                <strong>Renan Caldeira</strong>
                <span>ReacJS, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Portfolio: http://renancn.github.io/</p>
            <a href="http://github.com/renancn">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/30483193?s=460&v=4" alt="Renan Caldeira"/>
              <div className="user-info">
                <strong>Renan Caldeira</strong>
                <span>ReacJS, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Portfolio: http://renancn.github.io/</p>
            <a href="http://github.com/renancn">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/30483193?s=460&v=4" alt="Renan Caldeira"/>
              <div className="user-info">
                <strong>Renan Caldeira</strong>
                <span>ReacJS, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Portfolio: http://renancn.github.io/</p>
            <a href="http://github.com/renancn">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
