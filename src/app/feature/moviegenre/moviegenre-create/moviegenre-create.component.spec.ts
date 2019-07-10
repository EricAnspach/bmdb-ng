import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviegenreCreateComponent } from './moviegenre-create.component';

describe('MoviegenreCreateComponent', () => {
  let component: MoviegenreCreateComponent;
  let fixture: ComponentFixture<MoviegenreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviegenreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviegenreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
