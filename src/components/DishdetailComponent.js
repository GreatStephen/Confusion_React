import { Form } from "reactstrap";
import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish!=null) {
            return (
                <Card>
                    <CardImg width='100%' object src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        let comm = comments.map(c => {
            const date = new Date(Date.parse(c.date));
            return (
                <li>{c.comment}<p>-- {c.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(date) }</p></li>
            );
        });
        return (
            <div className='container'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {comm}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.props.dish && this.renderComments(this.props.dish.comments)}
                    </div>

                </div>

            </div>
        );
    }
}


export default DishDetail;