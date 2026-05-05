import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';

describe('Card Component', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card]
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;

    // Set up mock input data
    component.product = {
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price: 10,
      qt: 0
    };

    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Verifies that the component is correctly instantiated
    expect(component).toBeTruthy();
  });

  it('should display the product name', () => {
    // Checks if the product name input is rendered in the H1 tag
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Test Product');
  });

  it('should increment quantity when "Add to Cart" is clicked', () => {
    // Simulates a button click and verifies the component logic updates the quantity
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.product?.qt).toBe(1);
  });
});