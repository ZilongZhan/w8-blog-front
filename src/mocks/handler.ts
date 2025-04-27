import { http, HttpResponse } from "msw";
import {
  costillitasLekuePostDto,
  microwaveRecipiesPostsDto,
} from "../post/dto/fixturesDto";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("URL not found for the test");
}

export const handlers = [
  http.get(`${apiUrl}/posts`, () => {
    return HttpResponse.json({
      posts: microwaveRecipiesPostsDto,
      postsTotal: microwaveRecipiesPostsDto.length,
    });
  }),

  http.post(`${apiUrl}/posts`, () => {
    return HttpResponse.json(costillitasLekuePostDto);
  }),
];
