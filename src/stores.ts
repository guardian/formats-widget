import type { ArticleFormat } from '@guardian/libs';
import { writable } from 'svelte/store';

export const defaultValues: ArticleFormat = {design: 0, display: 0, theme: 0}

export const format = writable(defaultValues);