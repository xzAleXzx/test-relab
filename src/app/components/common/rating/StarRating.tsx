import React from 'react';
import ReactStars from 'react-rating-stars-component';

type TProps = {
    activeColor?: string;
    count?: number;
    dataTestId?: string;
    onChange?: (newRating: number) => void;
    size?: number;
    value?: number;
};

const RatingComponent: React.FC<TProps> = ({
         activeColor,
         count,
         dataTestId = 'uikit__rating',
         onChange,
         size,
         value
     }) => {
    return (
        <ReactStars
            activeColor={activeColor}
            count={count}
            data-testid={dataTestId}
            onChange={onChange}
            size={size}
            value={value}
        />
    );
};

export const Rating = React.memo(RatingComponent);