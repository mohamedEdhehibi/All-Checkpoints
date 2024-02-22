import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "react-bootstrap/Card"
import "./PostList.css"
import {
  addDislike,
  addLike,
  deletePost,
  editArticle,
} from "../../Js/Actions/actions"
import like from "../../icons/like.png"
import dislike from "../../icons/dislike.png"
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"

/* const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: id => dispatch(deletePost(id)),
        addLike: id => dispatch(addLike(id)),
        removeLike: id => dispatch(removeLike(id))
    }
} */
const PostList = () => {
  const [show, setShow] = useState(false)
  const [titlechange, setTitlechange] = useState("")
  const [contentchange, setContentchange] = useState("")
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const [editingPostId, setEditingPostId] = useState(null)
  const handleSave=()=>{
    dispatch(editArticle(editingPostId, titlechange, contentchange))
handleClose()
  }

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} className="col-4 mx-auto">
          <Card.Header>
            <Card.Title as="h2">{post.title}</Card.Title>
          </Card.Header>

          <Card.Body>
            <Card.Title>{post.content}</Card.Title>
            <Button
              className="btn btn-danger"
              onClick={() => dispatch(deletePost(post.id))}>
              Delete
            </Button>
            <Button
              variant="warning"
              className="mx-3"
              onClick={() => {
                setTitlechange(post.title) // Set the initial value to the current title
                setContentchange(post.content) // Set the initial value to the current content
                handleShow()
                setEditingPostId(post.id) // Capture the post ID
              }}>
              Edit
            </Button>
            
            <br />
            <img
              src={like}
              width="35"
              alt="like"
              onClick={() => dispatch(addLike(post.id))}
            />
            {post.like}
            <img
              src={dislike}
              width="35"
              alt="dislike"
              onClick={() => dispatch(addDislike(post.id))}
            />
            {post.dislike}
          </Card.Body>
        </Card>
      ))}
      <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Post Editing</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>New Title</Form.Label>
                    <Form.Control
                      value={titlechange}
                      type="text"
                      autoFocus
                      onChange={(e) => setTitlechange(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label>New Article</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={contentchange}
                      onChange={(e) => setContentchange(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    contentchange === "" || titlechange === ""
                      ? alert("heeeeeeeh")
                      : handleSave()
                  }}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  )
}

// export default connect(mapStateToProps, mapDispatchToProps)(PostList)
export default PostList
