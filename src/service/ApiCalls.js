import api from './Api'

function getTiendas() {
  return api.get('/tienda')
}

function getProductos() {
  return api.get('/producto')
}
function getUsuarios() {
    return api.get('/usuarios')
  }

export const ApiCalls = {
  getTiendas,
  getProductos,
  getUsuarios
}