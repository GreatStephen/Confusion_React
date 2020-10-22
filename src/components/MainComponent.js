import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addComment, fetchDishes } from '../redux/ActionCreators';

// turn the state of the root into Main's props,
// so Main can call props.attribute now
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    };
};

// dispatch an action is a prop now
const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        this.props.fetchDishes();
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((p) => p.featured)[0]}
                    leader={this.props.leaders.filter((l) => l.featured)[0]} />
            );
        };

        const DishWithId = ({match}) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id===parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.filter(comment => comment.dishId===parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment} />
                    // give this dispatch action to DishDetail
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} /> } />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
