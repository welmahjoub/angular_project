import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePokemonComponent } from './affiche-pokemon.component';

describe('AffichePokemonComponent', () => {
  let component: AffichePokemonComponent;
  let fixture: ComponentFixture<AffichePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
