import { Guid } from 'js-guid'
export function ItemApi() {
    async function get() {
        return await fetch('http://localhost:3000/item').then((e) => e.json())
    }
    async function insert(body) {
        return await fetch('http://localhost:3000/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                itemId: new Guid().toString(),
                itemName: body.itemName,
                price: body.price,
                image: body.image,
            }),
        }).then((e) => e.json())
    }
    return {
        get,
        insert,
    }
}
