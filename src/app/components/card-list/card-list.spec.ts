import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardList } from './card-list';

describe('CardList Component', () => {
  let component: CardList;
  let fixture: ComponentFixture<CardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardList]
    }).compileComponents();

    fixture = TestBed.createComponent(CardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Ensures the list container component starts correctly
    expect(component).toBeTruthy();
  });

  it('should render all initial product cards', () => {
    // Checks if the @for loop renders the correct number of child components
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('app-card');
    expect(cards.length).toBe(3);
  });

  it('should calculate the initial total as zero', () => {
    // Verifies that the computed signal correctly processes the initial signals data
    expect(component.total()).toBe(0);
  });
});