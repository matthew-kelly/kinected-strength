import createImageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./sanityConfig";

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format").fit("max").dpr(2);
