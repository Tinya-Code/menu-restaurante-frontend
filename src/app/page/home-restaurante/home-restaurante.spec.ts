import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { HomeRestaurante } from './home-restaurante';

describe('HomeRestaurante', () => {
  let component: HomeRestaurante;
  let fixture: ComponentFixture<HomeRestaurante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRestaurante],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRestaurante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
