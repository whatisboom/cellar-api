export default function drawRoutes(router) {

  router.get('/', 'index');

  router.resource('users', {
    related: true
  });
  router.resource('beers');
  router.resource('roles');

}