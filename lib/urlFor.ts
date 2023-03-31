import createImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

const builder = createImageUrlBuilder(client);

const forUrl = (source: any) => builder.image(source);

export default forUrl;
