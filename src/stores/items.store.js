import { defineStore } from 'pinia'

export const useItemStore = defineStore('items', {
    state: () => ({
        _items: [
            {
                itemId: 's[pdaspd',
                itemName: 'lay',
                itemPrice: 32,
                image: 'https://f.ptcdn.info/646/053/000/owd43hl9nwbly2jz4NI-o.jpg',
            },
            {
                itemId: 's[pdaspd',
                itemName: 'water 600ml',
                itemPrice: 20,
                image: 'https://www.nestlepurelife.com/th/sites/g/files/xknfdk641/files/2018-05/Product_NestlePureLife_1.5L_Top_2.png',
            },
        ],
    }),
    getters: {
        itemData: (state) => state._items,
    },
    actions: {
        increment() {
            this.counter++
        },
    },
})
