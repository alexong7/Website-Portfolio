import { Photography } from "../typings";

export const fetchPhotos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPhotos`);

  const data = await res.json();
  const photos: Photography = data.photos;

  return photos;
};
