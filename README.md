## Remote Inertia SPA
The idea behind this project is to have standalone frontends that communicate with one Laravel install.
Think of multiple storefronts that communicate to a central Orders CRM, etc etc.
Maybe this idea is completely stupid, but it seems to be working ... so here is how you can do it yourself.

# Laravel Setup
1) Your site should be using Laravel and Inertia JS, for this I used [PingCRM](https://github.com/inertiajs/pingcrm)
2) Install [Ziggy](https://github.com/tighten/ziggy) with Composer
3) Create an endpoint to [retrieve Ziggy's routes](https://github.com/tighten/ziggy#retrieving-ziggys-routes-and-config-from-an-api-endpoint), in `/routes/api.php`:
```php
Route::get('routes', fn () => response()->json(new Ziggy));
```
4) In `app/Http/Middleware/HandleInertiaRequests.php` we must disable the Inertia Version that is included in the response:
```php
public function version(Request $request) {
  return null; // parent::version($request);
}
```
5) ... TODO ... The original idea used cross-site cookies but that seems to be disabled, so WIP to use Auth Tokens instead (or just completely disable CSRF)
6) Here is an example of a simple route, notice the component query - this allows you to pass a custom copmonent name to be returned
```php
Route::any('/', function(Request $request) {
    return Inertia::render($request->query('component','Home'));
})->name('index');
```

# SPA Setup
All of this is already done for you inside the main.js file, but here it is again anyways...
1) For this project I used [Vite Vue3 Tailwind Starterkit](https://github.com/web2033/vite-vue3-tailwind-starter), which was pretty awesome and provides everything I'd already want in my project.
2) You'll need to install Ziggy: `npm install ziggy-js` and add it to your project:
```js
import route from 'ziggy-js'
const ZiggyRoutes = await fetch('https://pingcrm.test/api/routes').then(x => x.json())
const ZiggyRouter = (name, params) => route(name, params, true, ZiggyRoutes)
```
3) Before creating your Inertia Vue app, you'll need to fill the `data-page` attribute with the first load page data:
```js
fetch('https://pingcrm.test' + window.location.pathname + window.location.search)
```
Maybe both of these can be done in the same request, as the Routes can be included in the Inertia Request, since ideally there won't be that many routes for your project.
