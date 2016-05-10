import reflectMetadata from 'reflect-metadata';
import { Component } from 'angular2/core';
import zone from 'zone.js';
import rxjs from 'rxjs';
import { bootstrap }  from 'angular2/platform/browser';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})
class AppComponent { }

bootstrap(AppComponent);