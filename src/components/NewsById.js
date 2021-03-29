import React from 'react';
import newsData from '../api';
import {Link} from 'react-router-dom';

const NewsById = (props) => {
    const news = newsData.get(parseInt(props.match.params.id, 0));

    if(!news){
        return <div>Böyle bir haber bulunamadı!</div>
    }

    return (
        <div>
            <h1>{news.title}</h1>
            <p>{news.content}</p>
            <Link to="/news">Tüm Haberler</Link>
        </div>
    )
}

export default NewsById;