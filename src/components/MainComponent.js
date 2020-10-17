import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
            // selectedDish: null
        };
    }
    // onDishSelect(dishId) {
    //     this.setState({selectedDish: dishId});
    // }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((p) => p.featured)[0]}
                    leader={this.state.leaders.filter((l) => l.featured)[0]} />
            );
        };
        return (
            <div>
                <Header />
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/> */}
                {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id===this.state.selectedDish)[0]} /> */}
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} /> } />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

    }
}

export default Main;
