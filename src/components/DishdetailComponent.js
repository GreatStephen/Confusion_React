import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { postComment } from '../redux/ActionCreators';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderDish({dish}) {
    if (dish!=null) {
        return (
            <Card>
                <CardImg width='100%' object src={baseUrl+dish.image} alt={dish.name}></CardImg>
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

function RenderComments({comments}) {
    let comm = comments.map(c => {
        const date = new Date(Date.parse(c.date));
        return (
            <li key={c.id}>{c.comment}<p>-- {c.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(date) }</p></li>
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

const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish!=null) {
        // console.log(props);
        return (
            <div className='container'>
                <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderComments comments={props.comments} />
                        <CommentForm dishId={props.dish.id} postComment={props.postComment}/>
                        {/* props.addComment is a dispatch action passed from Main */}
                        {/* props.addComment will be called to add a comment to COMMENTS, this is done py dispatch() */}
                    </div>
                </div>

            </div>
        );

    }
    else {
        return (
            <div></div>
        )
    }
}



export default DishDetail;