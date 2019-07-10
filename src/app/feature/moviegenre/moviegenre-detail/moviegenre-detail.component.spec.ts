import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviegenreDetailComponent } from './moviegenre-detail.component';

describe('MoviegenreDetailComponent', () => {
  let component: MoviegenreDetailComponent;
  let fixture: ComponentFixture<MoviegenreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviegenreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviegenreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
