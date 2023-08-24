import type { Meta, StoryObj } from '@storybook/react';
import { Author } from '@/src/sanity/types';
import PostPreview from './PostPreview';

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
};

/**
 * # The PostPreview component
 * The PostPreview component is a React functional component that
 * displays a Post's preview information in a styled layout.
 * It takes in several props to customize the preview:
 */

const meta: Meta<typeof PostPreview> = {
  title: 'Components/Post/PostPreview',
  component: PostPreview,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Post title',
    },
    content: {
      control: 'text',
      description: 'Post content',
    },
    href: {
      control: 'text',
      description: 'Post URL',
    },
    imgUrl: {
      control: 'text',
      description: 'Post image URL',
    },
    date: {
      control: 'date',
      description: 'Post date',
    },
    readTime: {
      control: 'number',
      description: 'Post read time',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PostPreview>;

export const Preview: Story = {
  args: mockPost,
};
