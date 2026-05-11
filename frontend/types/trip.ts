export interface Trip {
  id: string;
  destination: string;
  image: string;
  dates: string;
  status: "completed" | "upcoming" | "planning";
  likes?: number;
  isPublic?: boolean;
}