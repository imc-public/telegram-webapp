import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegularComponent } from './page-regular.component';

describe('PageRegularComponent', () => {
  let component: PageRegularComponent;
  let fixture: ComponentFixture<PageRegularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageRegularComponent]
    });
    fixture = TestBed.createComponent(PageRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
