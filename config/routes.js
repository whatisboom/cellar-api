export default function drawRoutes(router) {

  router.get('/', 'index');

  router.resource('users', {
    related: true,
    only: ['list', 'create', 'destroy', 'show', 'update', 'add-related', 'remove-related', 'fetch-related']
  });
  router.resource('beers');

}