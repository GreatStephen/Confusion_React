import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { InitialFeedback } from './forms';
import { Feedback } from './forms';

export const ConfigureStore = () => {
    // combine all the reducers into a single one, and use
    // this reducer to config the store. Return the store
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: Feedback
            })
            // feedback: Feedback
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};