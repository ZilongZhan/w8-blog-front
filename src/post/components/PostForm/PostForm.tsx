import { v4 as uuid } from "uuid";
import "./PostForm.css";
import Button from "../../../components/Button/Button";
import usePostForm from "../../hooks/usePostForm";

const PostForm: React.FC = () => {
  const {
    postFormData: { author, content, imageAlt, imageUrl, tags, title },
    tag,
    deleteTag,
    handleKeyDown,
    handleNewTag,
    handleOnChange,
    handleSubmit,
    isValidData,
  } = usePostForm();

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h3>Recipe info</h3>
      <div className="post-form__group">
        <label className="post-form__label" htmlFor="title">
          Title:
        </label>
        <input
          id="title"
          type="text"
          className="post-form__input"
          required
          value={title}
          onChange={handleOnChange}
        />
      </div>
      <div className="post-form__group">
        <label htmlFor="author" className="post-form__label">
          Author:
        </label>
        <input
          id="author"
          type="text"
          className="post-form__input"
          required
          value={author}
          onChange={handleOnChange}
        />
      </div>
      <div className="post-form__group">
        <label htmlFor="imageUrl" className="post-form__label">
          Cover image:
        </label>
        <input
          id="imageUrl"
          type="url"
          className="post-form__input"
          required
          value={imageUrl}
          onChange={handleOnChange}
        />
      </div>
      <div className="post-form__group">
        <label htmlFor="imageAlt" className="post-form__label">
          Image description:
        </label>
        <input
          id="imageAlt"
          type="text"
          className="post-form__input"
          required
          value={imageAlt}
          onChange={handleOnChange}
        />
      </div>
      <div className="post-form__group">
        <label htmlFor="content" className="post-form__label">
          Content:
        </label>
        <div>
          <textarea
            id="content"
            className="post-form__input"
            rows={8}
            value={content}
            required
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="post-form__group">
        <label htmlFor="tags" className="post-form__label">
          Tags:
        </label>
        <span>*press enter after each tag</span>
        <div className="tags-input-container">
          <ul className="tags-list">
            {tags.map((tag) => (
              <li key={uuid()} className="tag">
                <span>#{tag}</span>
                <Button
                  modifier="tag"
                  action={() => deleteTag(tag)}
                  children="✖"
                />
              </li>
            ))}
          </ul>
          <input
            id="tags"
            className="post-form__input post-form__input--tags"
            value={tag}
            onChange={handleNewTag}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <Button
        modifier="submit"
        type="submit"
        children="Add recipe"
        disabled={!isValidData}
      />
    </form>
  );
};

export default PostForm;
