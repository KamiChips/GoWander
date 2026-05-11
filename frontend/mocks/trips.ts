// mocks/trips.ts

export interface Trip {
  id: string;
  destination: string;
  image: string;
  dates: string;
  status:
    | "completed"
    | "upcoming"
    | "planning";
  likes?: number;
  isPublic?: boolean;
  description?: string;
}

export const trips: Trip[] = [
  {
    id: "1",
    destination: "Grecia",
    image:
      "https://images.unsplash.com/photo-1689347510152-27f43ff7bfdf?q=80&w=1080",
    dates: "Mayo 2026",
    status: "upcoming",
    likes: 0,
    isPublic: false,
    description:
      "Descubre Santorini y las increíbles vistas del mar Egeo.",
  },

  {
    id: "2",
    destination: "Japón",
    image:
      "https://images.unsplash.com/photo-1583915223588-7d88ebf23414?q=80&w=1080",
    dates: "Marzo 2026",
    status: "completed",
    likes: 24,
    isPublic: true,
    description:
      "Explora Tokyo, Kyoto y la mezcla perfecta entre tradición y modernidad.",
  },

  {
    id: "3",
    destination: "Bali",
    image:
      "https://images.unsplash.com/photo-1698466632744-f79b37b88ffd?q=80&w=1080",
    dates: "Enero 2026",
    status: "completed",
    likes: 42,
    isPublic: true,
    description:
      "Playas paradisíacas, templos y experiencias espirituales inolvidables.",
  },

  {
    id: "4",
    destination: "París",
    image:
      "https://images.unsplash.com/photo-1642947392578-b37fbd9a4d45?q=80&w=1080",
    dates: "Julio 2025",
    status: "completed",
    likes: 18,
    isPublic: true,
    description:
      "La ciudad del amor llena de arte, cultura y gastronomía.",
  },

  {
    id: "5",
    destination: "Nueva York",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1080",
    dates: "Diciembre 2026",
    status: "planning",
    likes: 9,
    isPublic: false,
    description:
      "Descubre la energía única de Manhattan y Brooklyn.",
  },
];