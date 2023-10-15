import React from 'react';
import { render } from 'test-utils';
import type { Author } from '@/src/sanity/types';
import PostPreview from './PostPreview';

describe('PostPreview', () => {
  const mockAuthor: Author = {
    _id: 'mock-author-id',
    _createdAt: 'date',
    image: {
      _type: 'image',
      asset: {
        _ref: 'image-9b6e633c9fe97cc8eadf8f62959df4b5db6fca27-6048x4024-jpg',
        _type: 'reference',
      },
    },
    name: 'John Doe',
    username: 'johndoe',
    title: 'Author',
    slug: { current: 'john-doe', _type: 'slug' },
    bio: [],
    _rev: 'as',
    _type: 'author',
    _updatedAt: 'qwd',
  };

  const mockPost = {
    title: 'Mock Post Title',
    content:
      'This is the content of the mock post. new features and cool stuff every day.',
    href: 'https://example.com/mock-post',
    imgUrl:
      'https://cdn.sanity.io/images/7qr01hja/production/9b6e633c9fe97cc8eadf8f62959df4b5db6fca27-6048x4024.jpg',
    date: new Date(),
    readTime: 5,
    author: mockAuthor,
    isBookmarked: false,
  };

  it('renders correctly', () => {
    const { getByTestId } = render(<PostPreview {...mockPost} />);
    const postPreview = getByTestId('post-preview-component-test-id');
    expect(postPreview).toBeInTheDocument();
  });

  it('renders with bookmark filled and aria-pressed true when isBookmarked is true', () => {
    const { getByLabelText } = render(
      <PostPreview {...mockPost} isBookmarked />
    );
    const bookmarkIcon = getByLabelText(`Save post ${mockPost.title}`);

    expect(bookmarkIcon).toBeInTheDocument();
    expect(bookmarkIcon.querySelector('svg')).toBeInTheDocument();
    expect(bookmarkIcon).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with bookmark outline and aria-pressed false when isBookmarked is false', () => {
    const { getByLabelText } = render(
      <PostPreview {...mockPost} isBookmarked={false} />
    );
    const bookmarkIcon = getByLabelText(`Save post ${mockPost.title}`);

    expect(bookmarkIcon).toBeInTheDocument();
    expect(bookmarkIcon.querySelector('svg')).toBeInTheDocument();
    expect(bookmarkIcon).toHaveAttribute('aria-pressed', 'false');
  });
});
