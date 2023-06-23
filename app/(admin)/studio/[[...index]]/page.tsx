'use client';

import React from 'react';
import { NextStudio } from 'next-sanity/studio';

import config from '@/sanity.config';

//  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
const StudioPage = (): JSX.Element => <NextStudio config={config} />;

export default StudioPage;
