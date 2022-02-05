import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundContainerComponent } from './not-found-container.component';

describe('NotFoundContainerComponent', () => {
  let component: NotFoundContainerComponent;
  let fixture: ComponentFixture<NotFoundContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
