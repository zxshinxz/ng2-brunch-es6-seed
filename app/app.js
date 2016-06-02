import shim from 'core-js/shim';
import reflectMetadata from 'reflect-metadata';
import { enableProdMode } from 'angular2/core';
import zone from 'zone.js';
import rxjs from 'rxjs';
import { bootstrap }  from 'angular2/platform/browser';

import AppComponent from 'AppComponent';

if (window.location.hostname !== 'localhost') enableProdMode();

bootstrap(AppComponent);