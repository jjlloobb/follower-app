import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacFormComponent } from './contac-form.component';

describe('ContacFormComponent', () => {
  let component: ContacFormComponent;
  let fixture: ComponentFixture<ContacFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
