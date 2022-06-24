import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSuperiorComponent } from './head-superior.component';

describe('HeadSuperiorComponent', () => {
  let component: HeadSuperiorComponent;
  let fixture: ComponentFixture<HeadSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
