import React from 'react';

import threads from '../data/threads'

class Board extends React.Component {
    render() {
        var thr = []

        threads.forEach((thread) => {
            var posts = []

            thread.posts.forEach((post) => {
                var time = new Date(post.time)

                posts.push(
                    <div>
                        <p>{post.text}</p>
                        <p>{post.author} {time.toLocaleString()}</p>
                    </div>
                )
            })

            thr.push(
                <div>
                    <h3>{thread._id}</h3>
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