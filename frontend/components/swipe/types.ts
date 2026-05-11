export interface SwipeCardData {
  id: number;
  type: "destination" | "activity";

  name: string;
  location: string;

  image: string;

  rating: number;

  price: string;

  tags: string[];

  description: string;
}