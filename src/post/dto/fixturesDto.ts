import { PostDto } from "./types";

export const fiveMinuteMicrowaveMugCakePostDto: PostDto = {
  _id: "1",
  title: "5-Minute Microwave Mug Cake",
  imageUrl: "https://example.com/mug-cake.jpg",
  imageAlt: "A chocolate mug cake fresh out of the microwave",
  tags: ["dessert", "quick", "microwave"],
  content:
    "Mix flour, sugar, cocoa powder, and milk in a mug. Microwave for 1-2 minutes. Enjoy your instant cake!",
  publishDate: "2025-04-25T10:00:00Z",
  author: "Tom & Jerry,",
};

export const microwaveScrambledEggsPostDto: PostDto = {
  _id: "2",
  title: "Microwave Scrambled Eggs",
  imageUrl: "https://example.com/microwave-eggs.jpg",
  imageAlt: "Scrambled eggs cooked in a bowl using a microwave",
  tags: ["breakfast", "eggs", "microwave"],
  content:
    "Whisk eggs with a splash of milk, season with salt and pepper, and microwave in 30-second bursts, stirring in between.",
  publishDate: "2025-04-24T08:30:00Z",
  author: "Bonnie & Clyde",
};

export const microwaveMacAndCheesePostDto: PostDto = {
  _id: "3",
  title: "Microwave Mac and Cheese",
  imageUrl: "https://example.com/microwave-mac-cheese.jpg",
  imageAlt: "Creamy mac and cheese in a bowl",
  tags: ["lunch", "comfort food", "microwave"],
  content:
    "Combine macaroni, water, and salt in a mug. Microwave until pasta is cooked. Stir in cheese and a splash of milk, microwave again until creamy.",
  publishDate: "2025-04-23T12:00:00Z",
  author: "Sonny & Cher",
};

export const microwaveRecipiesPostsDto = [
  fiveMinuteMicrowaveMugCakePostDto,
  microwaveScrambledEggsPostDto,
  microwaveMacAndCheesePostDto,
];
