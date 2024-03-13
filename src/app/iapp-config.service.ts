import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IAppConfigService {
  baseUrl: string = '';
  payloadEncryption: boolean = false;


  updateAppConfig() {
    return new Promise<void>((resolve, reject) => {
      const hostname = window.location.hostname;
      const uatFeUrl = new URL("http://192.168.1.1/")
      const stageFeUrl = new URL("http://192.168.1.4/")

      if (isDevMode()) {
        this.baseUrl = "http://localhost:8080";

      } else {
        if (uatFeUrl.hostname === hostname) {
          this.baseUrl = "https://192.168.1.2:8080";
        } else if (stageFeUrl.hostname === hostname) {
          this.baseUrl = "https://192.168.1.5:8080";
        }
      }
      resolve();
    });

  }
}
