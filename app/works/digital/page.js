import GalleryPage from "../components/WorksGallery";

const works = [
{
    title: "Love Potion",
    type: "Digital Illustration",
    year: "2024",
    image: "/images/digital2.jpg",
    size: "square",
},
{
    title: "Party Tonight",
    type: "Album Cover Illustration",
    year: "2024",
    image: "/images/digitalparty.jpg",
    size: "square",
    href: "https://open.spotify.com/album/1gg2VFnC30uWiORhZ1csSb?si=LGB_MkLUTfOo7KujaVQBCw",
  },
  {
    title: "Coke",
    type: "Album Cover Illustration",
    year: "2024",
    image: "/images/digitalcoke.jpg",
    size: "portrait",
    href: "https://open.spotify.com/album/51JMblvLFHulg1s75n4L3L?si=ncKfS2MRTpKyyXjBYhZYYA",
  },
  {
    title: "hope you remember",
    type: "Album Cover Illustration",
    year: "2025",
    image: "/images/hope.jpg",
    size: "wide",
    href: "https://open.spotify.com/album/2X0rE0xVjwa2yMPbVvZz6c?si=TQ8Kh8CuTxuekcQEabnXTg",
  },
];

export default function DigitalWorksPage() {
  return (
    <GalleryPage
      eyebrow="Illustration · Graphic Design · Digital Media"
      title="Album Cover + Digital Works"
      introduction="A collection of album artwork, digital illustrations, graphic experiments, and collaborative visual projects."
      works={works}
    />
  );
}
