import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitPage } from './abilit-page';

describe('AbilitPage', () => {
  let component: AbilitPage;
  let fixture: ComponentFixture<AbilitPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
