export interface PortofolioItem {
    id: number;
    name: string;
    image: string;
    description: string;
    category: string;
    github: string
 }
 
 export const arrayPorto: PortofolioItem[] = [
    {
      id: 1,
    name: "Online School Library",
    image: "/image/libraryonline.png", // 👈 path lokal
    description: "An Online School Library that provides students with quick and easy access to digital resources, making learning more engaging and accessible anytime, anywhere.",
    category: "Website",
    github: "https://github.com/F1karu/library-project",
    },

    
  ]
 