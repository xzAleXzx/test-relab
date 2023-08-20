import React from 'react';
import _ from 'lodash';


const Pagination = (props: any) => {

    const { itemsCount, pageSize, currentPage, onPageChange  } = props;

    const pageCount = Math.ceil(pageSize / itemsCount);

    if (pageCount === 1 ) return null;

    const pagesArr = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className='pagination'>
                {pagesArr.map((page: any) => (
                    <li className={'page-item' + (page === currentPage ? ' active' : '')} key={'page_' + page}>
                        <button className='page-link'  onClick={() => onPageChange(page)}>{page}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;