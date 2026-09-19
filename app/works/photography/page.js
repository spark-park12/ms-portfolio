import GalleryPage from "../components/WorksGallery";

const works = [
  {
    image: "/images/photo1_1.jpg",
    size: "large",
  },
  {
    image: "/images/photo1_2.jpg",
    size: "portrait",
  },
  {
    image: "/images/photo1_3.jpg",
    size: "portrait",
  },
  {
    image: "/images/photo1_4.jpg",
    size: "large",
  },
  {
    image: "/images/trace1.jpg",
    size: "wide",
  },
  {
    image: "/images/trace2.jpg",
    size: "portrait",
  },
  {
    image: "/images/trace3.jpg",
    size: "large",
  },
  {
    image: "/images/trace4.jpg",
    size: "portrait",
  },
  {
    image: "/images/trace5.jpg",
    size: "portrait",
  },
  {
    image: "/images/tw1.jpg",
    size: "portrait",
  },
  {
    image: "/images/tw2.jpg",
    size: "portrait",
  },
  {
    image: "/images/L1.jpg",
    size: "large",
  },
  {
    image: "/images/L2.jpg",
    size: "portrait",
  },
];

export default function PhotographyPage() {
  return (
    <GalleryPage
      eyebrow="Photography · Light · Observation"
      title="Photography"
      introduction="Photographic studies exploring light, atmosphere, architecture, and everyday observation."
      works={works}
    />
  );
}
