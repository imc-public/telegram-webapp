import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IApiResponse } from '../../interfaces/api-response.interface';
import { PageWrapperComponent } from '../page-wrapper/page-wrapper.component';
import { SanitizeHtmlPipe } from '../../pipes/sanitize-html.pipe';

@Component({
  selector: 'app-page-big-title',
  standalone: true,
  imports: [CommonModule, PageWrapperComponent, SanitizeHtmlPipe],
  templateUrl: './page-big-title.component.html',
  styleUrls: ['./page-big-title.component.scss']
})
export class PageBigTitleComponent {
  @Input({ required: true }) data!: IApiResponse;
}
