import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) // Inicia el módulo de la aplicación
  .catch(err => console.error(err));

  // Preparar el entorno de ejecución