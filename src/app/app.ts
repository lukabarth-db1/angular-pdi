import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { FormBuscaPassagens } from "./form-busca-passagens/form-busca-passagens";
import { Banner } from "./banner/banner";

@Component({
  selector: 'app-root',
  imports: [Header, FormBuscaPassagens, Banner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jornada-milhas');
}
