import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, switchMap, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../environments/environment';
import { IApiResponse } from '../interfaces/api-response.interface';
import { JsonService } from './json.service';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiHost = environment.apiHost;

  constructor(
    private httpClient: HttpClient,
    private jsonService: JsonService,
    private cryptoService: CryptoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  public getArticle$(): Observable<IApiResponse | null> {
    // TODO: change to url
    const url = `${this.apiHost}/getpubdatatelegram/${this.url}`;

    return this.httpClient.get(url, { responseType: 'text' })
      .pipe(
        map(response => this.cryptoService.decryptString(response)),
        map((response) => this.jsonService.parseJson<IApiResponse>(response)),
        switchMap((response) => {
          return response ? of(response) : throwError(() => new Error('Cannot parse json'));
        })
      )
  }

  private get url(): string {
    return this.activatedRoute.snapshot.queryParams['hash'] ?? '';
  }
}
