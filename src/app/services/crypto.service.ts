import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private readonly secretKey = environment.key;

  public decryptString(base64: string): string {
    const ciphertext = atob(base64);
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);

    return bytes.toString(CryptoJS.enc.Utf8);
  }

  public encryptString(text: string): string {
    return btoa(CryptoJS.AES.encrypt(text, this.secretKey).toString());
  }
}
