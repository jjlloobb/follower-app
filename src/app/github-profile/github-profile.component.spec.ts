import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileComponent } from './github-profile.component';

describe('GithubProfileComponent', () => {
  let component: GithubProfileComponent;
  let fixture: ComponentFixture<GithubProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
