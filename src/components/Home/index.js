import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Pagina de inicio</h1>
    <p>La Página de Inicio es accesible por cada usuario que inicie sesión..</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);