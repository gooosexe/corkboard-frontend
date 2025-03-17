import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentData } from "./types/commentdata";
import { PostData } from "./types/postdata";
import axios from "axios";

export default function PostPage() {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    axios
      .get(`/posts/${postId}`)
      .then((res) => res.data)
      .then((data: PostData) => setPost(data));

    axios
      .get(`/posts/${postId}/comments`)
      .then((res) => res.data)
      .then((data: CommentData[]) => setComments(data));
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}
