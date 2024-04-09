import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function CommentItem({comment, index, removeComment}){
    return <div>{comment.text} <button onClick={() => removeComment(index)}>삭제</button></div>
}

function CommentList({comments, removeComment}){
    return <div>
        {
            comments.map((comment, index) => {
                return <CommentItem comment={comment} index={index} removeComment={removeComment}/>
            })

        }
    </div>
}

function CommentAdder({addComment}){
    const [text, setText] = useState("")
    return <div>
        <input type='text'value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => {
            addComment({text})
            setText("")
        }}>게시</button>
    </div>
}


function CommentApp(props){

    const [comments, setComments] = useState([
       
    ])

    

    return <div>
        <CommentAdder addComment={addComment} />
        <CommentList comments={comments} removeComment={removeComment}/>
    </div>


}

function PostAdder({addPost}){
    const [text, setText] = useState("")

    return <div>
        <input type='text' value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={() => {
            addPost({text})
            setText("")
        }}>게시</button>
    </div>
}
function PostApp(props){
    const [ post, setPost ] = useState([
        {title: "제목 1", 
        content: "내용 1", 
        comments: [ 
            { text: "댓글1" },
            { text: "댓글2" },
        ]}
    ]) 

    const addPost = newPost => setPost(post.concat(newPost))
    const removePost = index => setPost(post.filter((_, pIdx) => index !== pIdx))
    const addComment = newComment => setComments(comments.concat(newComment))
    const removeComment = index => setComments(comments.filter((_, cIdx) => index !== cIdx))

    return <div>
        <PostAdder addPost={addPost}/>
        <PostList post={post} removePost={removePost} />
    </div>

}

root.render( <PostApp /> )