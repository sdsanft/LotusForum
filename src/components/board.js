import React from 'react';

import threads from '../data/threads';

import '../style/board.css'

class Board extends React.Component {
    render() {
        var thr = []

        threads.forEach((thread) => {
            var posts = []

            thread.posts.forEach((post) => {
                var time = new Date(post.time)

                posts.push(
                    <div id="post-cont">
                        <p id="post">{post.text}</p>
                        <p id="small">{post.author} {time.toLocaleString()}</p>
                    </div>
                )
            })

            thr.push(
                <div>
                    <p id="thread">{thread._id}</p>
                    {posts}
                </div>
            )
        })

        return (
            <div>
                {thr}
            </div>
        )
    }
}

export default Board