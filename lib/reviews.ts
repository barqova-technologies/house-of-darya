import data from "./reviews.json";

export type Review = {
  quote: string;
  name: string;
  location: string;
  piece?: string;
  image?: string;
  alt?: string;
  focus?: string;
};

export const reviews: Review[] = data;
