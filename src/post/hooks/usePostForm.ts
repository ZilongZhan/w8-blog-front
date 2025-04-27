import { useState } from "react";
import { UsePostForm } from "./types";
import { PostFormData } from "../types";

const usePostForm = (): UsePostForm => {
  const initialPostFormData = {
    author: "",
    content: "",
    imageAlt: "",
    imageUrl: "",
    tags: [],
    title: "",
  };

  const [postFormData, setPostFormData] =
    useState<PostFormData>(initialPostFormData);
  const [tag, setTag] = useState<string>("");

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const property = event.target.id;
    const value = event.target.value;

    setPostFormData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  };

  const handleNewTag = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    setTag(value);
  };

  const addTag = (): void => {
    const trimmedTag = tag.replace(" ", "");

    if (trimmedTag !== "") {
      setPostFormData(({ tags, ...postFormData }) => ({
        ...postFormData,
        tags: [...tags, trimmedTag],
      }));

      setTag("");
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === "Enter" && event.target === event.currentTarget) {
      addTag();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const deleteTag = (thisTag: string): void => {
    const updatedTags = postFormData.tags.filter((tag) => tag !== thisTag);

    setPostFormData((postFormData) => ({
      ...postFormData,
      tags: updatedTags,
    }));
  };

  const isValidData =
    postFormData.author !== "" &&
    postFormData.content !== "" &&
    postFormData.imageAlt !== "" &&
    postFormData.imageUrl !== "" &&
    postFormData.title !== "";

  return {
    tag,
    postFormData,
    handleNewTag,
    handleOnChange,
    handleKeyDown,
    deleteTag,
    handleSubmit,
    isValidData,
  };
};

export default usePostForm;
