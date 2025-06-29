export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Array<string>;
  videos: Array<string>;
}

export const courses: Course[] = [
  {
    id: "math101",
    title: "Basic Mathematics",
    description:
      "Learn the fundamentals of math including algebra, geometry, and arithmetic.",
    modules: ["Algebra", "Trigonometry", "Linear equations"],
    videos: [
      "https://www.youtube.com/embed/NybHckSEQBI?si=DxSMm8Ej9mfpXy0r",
      "https://www.youtube.com/embed/PUB0TaZ7bhA?si=_AM0nIEB9nSu4uVx",
      "https://www.youtube.com/embed/Ft2_QtXAnh8?si=Ghc8jdQqfXfnZTvE",
    ],
  },
  {
    id: "sci101",
    title: "Science Foundations",
    description:
      "Explore the basic principles of biology, chemistry, and physics.",
    modules: ["Biology", "Physics", "Chemistry"],
    videos: [
      "https://www.youtube.com/embed/HaS0xNcAaWo?si=U84QI2ILElZG5H2s",
      "https://www.youtube.com/embed/b1t41Q3xRM8?si=5CHw0ik0fWkaHKnv",
      "https://www.youtube.com/embed/bka20Q9TN6M?si=sbjDq9TJQY_4TXXx",
    ],
  },
  {
    id: "eng101",
    title: "English Grammar & Writing",
    description:
      "Master sentence structure, vocabulary, and effective writing techniques.",
    modules: ["Vocabulary", "Writing", "Structure"],
    videos: [
      "https://www.youtube.com/embed/oKNRTz3140s?si=6svuaf0-9jPpI1VT",
      "https://www.youtube.com/embed/s56wvtEu8cQ?si=QM9M-iZuPv7kUbje",
      "https://www.youtube.com/embed/7P4fzbzwwAg?si=L5MvYxbEHPX0d-_q",
    ],
  },
  {
    id: "hist101",
    title: "World History",
    description:
      "Travel through time to learn about ancient to modern world civilizations.",
    modules: ["World history", "India History", "Karnataka History"],
    videos: [
      "https://www.youtube.com/embed/C0X0JX2hXVk?si=AtRDjldeCrHCHv0L",
      "https://www.youtube.com/embed/ofgIDZHTjTQ?si=_28GjhK2Dc2CbgAT",
      "https://www.youtube.com/embed/LA7VQSzgVAg?si=akTZgp0pci24PdRB",
    ],
  },
];
