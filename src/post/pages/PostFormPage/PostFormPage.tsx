import PostForm from "../../components/PostForm/PostForm";

const PostFormPage: React.FC = () => {
  return (
    <>
      <h2 className="page-title">Write a new recipe</h2>
      <PostForm />
    </>
  );
};

export default PostFormPage;
