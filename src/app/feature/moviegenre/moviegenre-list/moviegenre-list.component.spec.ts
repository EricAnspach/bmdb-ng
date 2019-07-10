import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviegenreListComponent } from './moviegenre-list.component';

describe('MoviegenreListComponent', () => {
  let component: MoviegenreListComponent;
  let fixture: ComponentFixture<MoviegenreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviegenreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviegenreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
