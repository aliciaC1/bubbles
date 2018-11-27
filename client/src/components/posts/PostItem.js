import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import classnames from 'classnames' ; 
import { Feed, Icon, Button } from 'semantic-ui-react';
import { deletePost, like } from '../../actions/postActions';

class PostItem extends Component {

    onDeleteClick(id) {
        this.props.deletePost(id);
    }

    onLikeClick(id) {
        this.props.like(id);
    }

    // findUserLike(likes) {
    //     const{ auth } = this.props;
    //     if(likes.filter(like => like.user === auth.user.id).length > 0){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    render() {
        const { post, auth } = this.props;

        return (
            <div>
                <Feed>
                <Feed.Event>
                <Feed.Label image={post.avatar} />
                <Feed.Content>
                    <Feed.Date>3 days ago</Feed.Date>
                    <Feed.Summary>
                    <a>{post.name}</a> created a post
                    </Feed.Summary>
                    <Feed.Extra text>{post.text}</Feed.Extra>
                        <Feed.Meta>
                    <Feed.Like onClick ={this.onLikeClick.bind(this, post._id)}>
                        <Icon name='like' />
                        {post.likes.length} Likes
                    </Feed.Like>
                    {post.user === auth.user.id ? (
                        <Button onClick={this.onDeleteClick.bind(this, post._id)}>
                        <Icon name='delete' />
                        </Button>
                    ): null}
                    </Feed.Meta>
                </Feed.Content>
                </Feed.Event>
            </Feed>
            </div>
        )
    }
}


PostItem.propTypes = {
    deletePost: PropTypes.func.isRequired,
    like: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired, 
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {deletePost, like}) (PostItem);