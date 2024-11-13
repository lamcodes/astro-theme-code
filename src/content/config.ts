import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { localBlogSchema } from '~/lib/loader/LocalBlogLoader.ts';
import { projectSchema } from '~/lib/loader/Project';

// 博客集合
const blog = defineCollection({
    type: 'content_layer',
    loader: glob({ pattern: '**/[^_]*.md', base: './content/blogs' }),
    schema: localBlogSchema,
});

// 项目集合
const project = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './content/project' }),
    schema: projectSchema,
});

export const collections = { blog, project };
