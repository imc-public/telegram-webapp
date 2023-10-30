import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBigTitleComponent } from './page-big-title.component';

describe('PageBigTitleComponent', () => {
  let component: PageBigTitleComponent;
  let fixture: ComponentFixture<PageBigTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageBigTitleComponent]
    });
    fixture = TestBed.createComponent(PageBigTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
