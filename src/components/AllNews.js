import React from 'react';
import newsData from '../api';
import {Link} from 'react-router-dom';

const AllNews = () => (
    <div>
        <ul>
            {
                newsData.all().map(item => (
                    <li key={item.id}>
                        <Link to={`/news/${item.id}`}>{item.title}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default AllNews;