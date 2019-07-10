import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviegenreEditComponent } from './moviegenre-edit.component';

describe('MoviegenreEditComponent', () => {
  let component: MoviegenreEditComponent;
  let fixture: ComponentFixture<MoviegenreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviegenreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviegenreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
