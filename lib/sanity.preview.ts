import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.client';

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}
if (!dataset || !projectId) {
  throw new Error(`Missing dataset or projectId`);
}
const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
export default usePreview;
