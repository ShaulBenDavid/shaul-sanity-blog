import { DefaultDocumentNodeResolver } from 'sanity/desk';

const defaultDocumentNode: DefaultDocumentNodeResolver = (S) =>
  S.document().views([S.view.form()]);

export default defaultDocumentNode;
