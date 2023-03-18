import { client } from "./sanity.client";
import createImageUrlBuilder from "@sanity/image-url";

const builder = createImageUrlBuilder(client);

const forUrl = (source: any) => {
  return builder.image(source);
};

export default forUrl;
