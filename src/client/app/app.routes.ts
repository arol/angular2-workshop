import { provideRouter, RouterConfig } from '@angular/router';

import { PokedexRoutes } from './+pokedex/index';
import { RegistryRoutes } from './+registry/index';

const routes: RouterConfig = [
  ...RegistryRoutes,
  ...PokedexRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
