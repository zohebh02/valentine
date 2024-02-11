import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCompComponent } from './no-comp.component';

describe('NoCompComponent', () => {
  let component: NoCompComponent;
  let fixture: ComponentFixture<NoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
