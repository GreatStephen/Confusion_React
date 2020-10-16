import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


function RenderDish({dish}) {
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
    if (props.dish!=null) {
        // console.log(props);
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {/* {this.props.dish && this.renderComments(this.props.dish.comments)} */}
                        <RenderComments comments={props.dish.comments} />
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