import React from 'react';
import RatingElement from './common/RatingElement';
const typeNames = [128, 256];


type ProductBlockProps  = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    types: string[];
    rating: number;
};

const ProductBlock: React.FC<ProductBlockProps> = ({ title, price, imageUrl, types, rating }) => {
    const [activeType, setActiveType] = React.useState(0);

    return (
        <div className="col shadow w-100 d-flex justify-content-center m-2 p-3 border border-success rounded-4">
            <div className="product-block">
                <img className="w-100" src={imageUrl} alt="Product" />
                <h4 className="position-sticky fw-bold mb-5">{title}</h4>
                <div className="product-block__selector">
                    <ul className="list-group" style={{ cursor: 'pointer'}}>
                        {types.map((typeId, i) => {
                            return (
                                <li
                                    key={typeId}
                                    className={'list-group-item list-unstyled w-5' + (activeType === i ? ' active' : '')}
                                    onClick={() => setActiveType(i)}>
                                    {typeNames[Number(typeId)]} Гб
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="product-block__bottom">
                    <RatingElement productRating={rating} />
                    <div className="mb-3 fs-4 text-success">{price} ₽</div>
                    <button onClick={() => {}} className="btn btn-success">
                        <span>Купить</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductBlock;
