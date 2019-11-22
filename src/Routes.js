import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Login from './Login.js'
import Home from './Home.js'
import Productos from './Containers/ProductosScreen'
import Tiendas from './Containers/TiendasScreen'
import Perfil from './Containers/PerfilScreen'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" hideNavBar component = {Login} title = "Login" initial = {true} />
         <Scene key = "home" hideNavBar component = {Home} title = "Home" />
         <Scene key = "productos" hideNavBar component = {Productos} title = "Productos" />
         <Scene key = "tiendas" hideNavBar component = {Tiendas} title = "tiendas" />
         <Scene key = "perfil" hideNavBar component = {Perfil} title = "perfil" />
      </Scene>
   </Router>
)
export default Routes