import React from 'react';
import ProductBlock from '../components/ProductBlock';

const items = [
    {
        id: '1',
        title: 'Смартфон Vivo X50 8/128GB Blue (2004)',
        price: '44 990',
        imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/613/966/312/710/34/100026886787b0.jpg',
        types: [0, 1],
        rating: 1,
    },
    {
        id: '2',
        title: 'Смартфон Vivo X50 8/128GB Blue',
        price: '44 990',
        imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/613/966/312/710/34/100026886787b0.jpg',
        types: [0, 1],
        rating: 2,
    },
    {
        id: '3',
        title: 'Смартфон Vivo X50 8/128GB Blue (2004)',
        price: '44 990',
        imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/613/966/312/710/34/100026886787b0.jpg',
        types: [0, 1],
        rating: 3,
    },
    {
        id: '4',
        title: 'Смартфон Vivo X50 8/128GB Blue (2004)',
        price: '44 990',
        imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/613/966/312/710/34/100026886787b0.jpg',
        types: [0, 1],
        rating: 4,
    }
]


const StorePage: React.FC = () => {
    const products = items.map((product: any) => <ProductBlock key={product.id} {...product} />);
    return (
        <div className="container">
            <div className="row">{products}</div>
        </div>
    )
}

export default StorePage;