import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowersComponent } from './github-followers.component';

describe('GithubFollowersComponent', () => {
  let component: GithubFollowersComponent;
  let fixture: ComponentFixture<GithubFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubFollowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
