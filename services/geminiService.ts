
import { Recipe } from "../types";

const CHEF_NOTES = [
  "This dish is a fantastic way to master basic Indian flavors.",
  "A perfect choice for a cozy dinner—don't forget to taste for salt at the end!",
  "This is one of our most popular beginner-friendly recipes!",
  "Classic, comforting, and guaranteed to impress your family.",
  "The secret to this dish is letting the onions get properly golden brown.",
  "A great meal that pairs perfectly with some fresh basmati rice.",
  "Simple, healthy, and incredibly flavorful. You're going to love this one!",
  "Don't rush the simmering step; that's where the magic happens.",
  "This recipe is a masterclass in balancing spices. Take your time!",
  "A staple in many Indian households for a reason—it's pure comfort food."
];

export const getChefCommentary = async (recipe: Recipe): Promise<string> => {
  // Return a random supportive note from our local library
  // No external API calls needed
  const randomIndex = Math.floor(Math.random() * CHEF_NOTES.length);
  return CHEF_NOTES[randomIndex];
};
