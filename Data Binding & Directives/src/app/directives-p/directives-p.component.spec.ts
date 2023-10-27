import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPComponent } from './directives-p.component';

describe('DirectivesPComponent', () => {
  let component: DirectivesPComponent;
  let fixture: ComponentFixture<DirectivesPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
