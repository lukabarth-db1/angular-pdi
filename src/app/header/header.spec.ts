import { TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  it('should create', () => {
        TestBed.configureTestingModule({imports: [Header]});
        const fixture = TestBed.createComponent(Header);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
      });
});
