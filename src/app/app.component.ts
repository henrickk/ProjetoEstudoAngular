import { Component } from '@angular/core';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [MenuComponent, RouterOutlet, FooterComponent],
  selector: 'app-root',
  styles: [],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'MeuProjeto';
}
