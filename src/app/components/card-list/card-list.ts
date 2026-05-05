import { Component, signal, effect, computed } from '@angular/core';
import { Card } from '../card/card';

@Component({
    selector: 'app-card-list',
    imports: [Card],
    templateUrl: './card-list.html',
})
export class CardList {

    cards = signal([
        {
            id: 1,
            name: 'Card 1',
            description: 'Description for Card 1',
            price: 19.99,
            qt: 0,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vyrSDRWsdKQwxQDh2o4H7fxrrHR0Qntyng&s',
        },
        {
            id: 2,
            name: 'Card 2',
            description: 'Description for Card 2',
            price: 29.99,
            qt: 0,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vyrSDRWsdKQwxQDh2o4H7fxrrHR0Qntyng&s',
        },
        {
            id: 3,
            name: 'Card 3',
            description: 'Description for Card 3',
            price: 39.99,
            qt: 0,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vyrSDRWsdKQwxQDh2o4H7fxrrHR0Qntyng&s',
        },
    ]);

    total = computed(() => {
        return this.cards().reduce((a, b) => a + (b.price * b.qt), 0);
    });

    constructor() {}
}