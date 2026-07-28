import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  readonly storeName = 'Mohamad Ibrahim Store';
  readonly products = PRODUCTS;
  readonly categories: readonly ('All' | ProductCategory)[] = [
    'All',
    'Electronics',
    'Accessories',
    'Home',
    'Wearables',
    'Clothing'
  ];

  selectedCategory: 'All' | ProductCategory = 'All';
  searchTerm = '';
  cartCount = 0;
  lastAddedProduct = '';

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const routeCategory = (params.get('category') ?? 'all').toLowerCase();
        const matchingCategory = this.categories.find(
          category => category.toLowerCase() === routeCategory
        );
        this.selectedCategory = matchingCategory ?? 'All';
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get filteredProducts(): readonly Product[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.products.filter(product => {
      const matchesCategory =
        this.selectedCategory === 'All' || product.category === this.selectedCategory;
      const searchableText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      const matchesSearch = term.length === 0 || searchableText.includes(term);
      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: 'All' | ProductCategory): void {
    void this.router.navigate(['/products', category.toLowerCase()]);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  addToCart(product: Product): void {
    if (!product.inStock) {
      return;
    }

    this.cartCount += 1;
    this.lastAddedProduct = `${product.name} added to cart.`;
  }

  categoryCount(category: 'All' | ProductCategory): number {
    return category === 'All'
      ? this.products.length
      : this.products.filter(product => product.category === category).length;
  }

  trackByProductId(_index: number, product: Product): string {
    return product.id;
  }
}
