import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AllNews from './AllNews';
import NewsById from './NewsById';

const News = () => (
    <Switch>
            <Route exact path="/news" component={AllNews}/>
            <Route path="/news/:id" component={NewsById}/>
    </Switch>
);

export default News;