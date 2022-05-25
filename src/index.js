import React from 'react';
import ReactDOM from 'react-dom';
import PostDetail from './PostDetails';

const App = () => {
    return (
        <div classname="ui container comments">
            <PostDetail name="Jovic" time="2:00 PM" post_text="Lorem" />
            <PostDetail name="Mica" time="2:15 PM" post_text="Ipsum" />
            <PostDetail name="Seicca" time="12:23 PM" post_text="D O L O R" />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);