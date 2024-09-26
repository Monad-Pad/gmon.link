import { supportedImages } from "../info/supported-images";

type ImageName = typeof supportedImages[number]['name'];

export default function getImageUrl(imageName: ImageName): string | undefined {
    const image = supportedImages.find((image) => image.name === imageName);

    return image?.url;
}