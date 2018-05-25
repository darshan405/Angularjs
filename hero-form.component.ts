import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {
  powers = ['', '',
  '', ''];
  name = '';
  language = '';
  values: any = [];
// onSubmit() { this.submitted = true; }
onSubmit(form) { 
  if(form.valid) {
    this.values.push({name: this.name,language: this.language});
    form.reset()
  }
}
}
