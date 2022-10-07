import { Photography } from "../typings";

export const fetchPhotos = async () => {
  console.log('inside of fetch photos')

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPhotos`,
    );
  
    console.log(res)
    const data = await res.json();


    console.log('Error in fetchPhotos')

  const photos: Photography = data.photos;

  return photos;
};
