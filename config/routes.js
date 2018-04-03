export default function drawRoutes(router) {

  router.get('/', 'index');

  router.get('/users', 'users/list');
  router.post('/users', 'users/create');

  router.get('/users/:id', 'users/show');
  router.delete('/users/:id', 'users/destroy');
  router.patch('/users/:id', 'users/update');

}
