import React from 'react';
import { Rating } from './rating/StarRating';

type RatingElementTypes = {
    productRating: number;
}

const RatingElement: React.FC<RatingElementTypes> = ({ productRating}) => {
    const [rating, setRating] = React.useState(productRating);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    return (
        <section className='d-flex align-items-center'>
            <Rating activeColor="#ffd700" count={5} size={30} onChange={handleRatingChange} value={productRating} />
            <div className='ms-2 text-secondary'>
                <pre className="mt-4 fs-4">{JSON.stringify(rating, null, 2)}</pre>
            </div>
        </section>
    );
};

export default RatingElement;