import { Component } from 'angular2/core';
import { windstorm } from 'Hero';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})

class AppComponent {
  title = 'Tour of Heroes';
  hero = windstorm;
}

module.exports = AppComponent