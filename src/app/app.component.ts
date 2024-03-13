import { Component, inject } from '@angular/core';
import { IAppConfigService } from './iapp-config.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'manage-env-angular'
  iAppConfigService = inject(IAppConfigService);
  baseUrl: string= this.iAppConfigService.baseUrl
  constructor() {
    console.log(this.baseUrl);
  }
}


