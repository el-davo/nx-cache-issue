import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CacheBustComponent } from './cache-bust.component';

describe('CacheBustComponent', () => {
  let component: CacheBustComponent;
  let fixture: ComponentFixture<CacheBustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheBustComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CacheBustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
