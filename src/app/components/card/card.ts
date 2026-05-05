import { Component, Input } from '@angular/core';

@Component({
selector: 'app-card',
standalone: true,
imports: [],
templateUrl: './card.html',
})

export class Card {
    @Input() product: {
        name: string,
        description: string,
        price: number,
        imageUrl?: string,
        qt: number,
        id: number
    } | null = null;

    @Input() addToCart?: (id: number) => void;

    constructor() {}

    handleAddCart() {
        if (this.product) {
            this.product.qt = this.product.qt + 1;
        }
    }
}