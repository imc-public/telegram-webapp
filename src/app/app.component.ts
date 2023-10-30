import { Component, DestroyRef, Inject, LOCALE_ID, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { IApiResponse } from './interfaces/api-response.interface';
import { PageRegularComponent } from './components/page-regular/page-regular.component';
import { ApiService } from './services/api.service';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { PageBigTitleComponent } from './components/page-big-title/page-big-title.component';
import { Title } from '@angular/platform-browser';

registerLocaleData(localeRu);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PageRegularComponent, PageBigTitleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ]
})
export class AppComponent implements OnInit {
  public $apiData = signal<IApiResponse | null>(null);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private apiService: ApiService,
    private destroyRef: DestroyRef,
    private title: Title,
  ) {
  }

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.fetchArticle();
      })
    }
  }

  private fetchArticle(): void {
    this.apiService.getArticle$()
      .pipe(
        take(1),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: async (data) => {
          this.setTitle(data?.title ?? '');
          this.$apiData.set(data);
        },
        error: (error) => console.error(error)
      });
  }

  private setTitle(title: string): void {
    this.title.setTitle(title);
  }
}
