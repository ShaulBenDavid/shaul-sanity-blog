import React from 'react';
import Image from 'next/image';
import type { PortableTextReactComponents } from '@portabletext/react';
import forUrl from '@/lib/urlFor';

const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <div style={{ width: '90px', height: '90px', position: 'relative' }}>
        <Image src={forUrl(value.imageUrl).url()} alt="" />
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
  },
  block: {
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
};

export default RichTextComponents;
