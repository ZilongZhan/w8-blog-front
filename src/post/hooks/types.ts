import { PostFormData } from "../types";

export interface UsePostForm {
  tag: string;
  postFormData: PostFormData;
  handleNewTag: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  deleteTag: (thisTag: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isValidData: boolean;
}
