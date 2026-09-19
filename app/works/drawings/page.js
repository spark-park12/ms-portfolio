import GalleryPage from "../components/WorksGallery";

const works = [
  {
    title: "Together, Apart",
    type: "Pencil on Paper",
    year: "2022",
    image: "/images/pencil1.jpg",
    size: "large",
  },
  {
    title: "Shattered Self",
    type: "Drawing",
    year: "2022",
    image: "/images/pencil4.jpg",
    size: "portrait",
  },
  {
    title: "Comfort Woman",
    type: "Drawing",
    year: "2022",
    image: "/images/pencil2.jpg",
    size: "portrait",
  },
  {
    title: "Childhood",
    type: "Drawing",
    year: "2022",
    image: "/images/pencil3.jpg",
    size: "large",
  },
  {
    title: "Sensory World",
    type: "Drawing",
    year: "2022",
    image: "/images/paint1.jpg",
    size: "portrait",
  },
  {
    title: "A Moving Shelter",
    type: "Drawing",
    year: "2023",
    image: "/images/paint2.jpg",
    size: "large",
  },
  {
    title: "Scratch Art",
    type: "Drawing",
    year: "2022",
    image: "/images/scratchart.jpg",
    size: "portrait",
  },
];

export default function DrawingsPage() {
  return (
    <GalleryPage
      eyebrow="Drawing · Painting · Observation"
      title="Drawings"
      introduction="A collection of pencil drawings, paintings, sketches, and observational studies."
      works={works}
    />
  );
}
