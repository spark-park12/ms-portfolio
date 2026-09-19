import GalleryPage from "../components/WorksGallery";

const works = [
  {
    title: "“Still Life” – 3D Modeling & Lighting Projecy",
    type: "3D Rendering · Texture · Modeling (Maya)",
    year: "2025",
    image: "/images/3d3.jpg",
    size: "large",
  },
  {
    title: "Character Study",
    type: "Character Modeling (Maya · ZBrush)",
    year: "2025",
    image: "/images/3d4.jpg",
    size: "portrait",
  },
  {
    title: "Party Tonight” (2024) – Remake",
    type: "3D Modeling (Blender)",
    year: "2023",
    image: "/images/3d1.jpg",
    size: "large",
  },
  {
    title: "Untitled",
    type: "3D Modeling (Blender)",
    year: "2023",
    image: "/images/3dart2.jpg",
    size: "portrait",
  },
];

export default function ThreeDPage() {
  return (
    <GalleryPage
      eyebrow="Maya · ZBrush · 3D Production"
      title="3D Art"
      introduction="Studies in character modeling, digital sculpting, texturing, lighting, and rendering."
      works={works}
    />
  );
}
