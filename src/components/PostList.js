import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderlist = () => {
    return this.props.posts.map((post) => (
      <div key={post.id} className="item">
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderlist()}</div>;
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts[0],
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
