import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngImgComponent } from './ang-img.component';

describe('AngImgComponent', () => {
  let component: AngImgComponent;
  let fixture: ComponentFixture<AngImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
