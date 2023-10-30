import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWrapperComponent } from '../page-wrapper/page-wrapper.component';
import { IApiResponse } from '../../interfaces/api-response.interface';
import { SanitizeHtmlPipe } from '../../pipes/sanitize-html.pipe';

@Component({
  selector: 'app-page-regular',
  standalone: true,
  imports: [CommonModule, PageWrapperComponent, SanitizeHtmlPipe],
  templateUrl: './page-regular.component.html',
  styleUrls: ['./page-regular.component.scss']
})
export class PageRegularComponent {
  @Input({ required: true }) data!: IApiResponse;
}
