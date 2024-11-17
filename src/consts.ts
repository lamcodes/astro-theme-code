// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

import { pluginTextMarkers as esTextMarkersPlugin } from '@expressive-code/plugin-text-markers';
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code';

type Config = {
    title: string;
    description: string;
    lang: string;
    helloworld: string;
    profile: {
        author: string;
        description?: string;
    };
};

type SocialLink = {
    icon: string;
    friendlyName: string; // for accessibility
    link: string;
};

export const siteConfig: Config = {
    title: 'Zane的博客',
    description: '我的博客空间，记录生活的惊喜。',
    lang: 'zh-CN',
    helloworld: `生活总是充满惊喜，记录是最好的礼物。<br/>希望你能在这里找到一些惊喜。`,
    profile: {
        author: 'Zane',
        description: '美人赠我金错刀，何以报之英琼瑶。',
    },
};

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
    {
        icon: 'mdi:github',
        friendlyName: 'Github',
        link: 'https://github.com/ticks-tan',
    },
    {
        icon: 'mdi:email',
        friendlyName: 'email',
        link: 'mailto:Zane@gmail.com',
    },
    {
        icon: 'mdi:rss',
        friendlyName: 'rss',
        link: '/rss.xml',
    },
];

export const NAV_LINKS: Array<{ title: string; path: string }> = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Archive',
        path: '/archive',
    },
    {
        title: 'Friends',
        path: '/friends',
    },
    {
        title: 'About',
        path: '/about',
    },
];

/**
 * expressive 代码高亮配置
 * See More : https://expressive-code.com/reference/configuration/
 */
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
    plugins: [esTextMarkersPlugin],
    styleOverrides: {
        borderRadius: '0rem',
        codeFontFamily: "JetBrainsMono, 'Noto Sans SC', monospace",
        codeFontWeight: '400',
        codeFontSize: '0.9rem',
        codeLineHeight: '1.5rem',
        borderColor: 'var(--theme-text)',
        codeBackground: 'var(--theme-surface)',
        frames: {
            editorTabBarBackground: 'transparent',
            editorTabBarBorderBottomColor: 'var(--theme-text)',
            editorActiveTabBackground: 'var(--theme-accent)',
            editorActiveTabForeground: 'var(--theme-bg)',
            editorTabBarBorderColor: 'var(--theme-text)',
            editorActiveTabBorderColor: 'var(--theme-text)',
            editorActiveTabIndicatorHeight: '2px',
            editorActiveTabIndicatorTopColor: 'none',
            editorActiveTabIndicatorBottomColor: 'var(--theme-text)',
            terminalBackground: 'var(--theme-surface)',
            terminalTitlebarBackground: 'transparent',
            terminalTitlebarBorderBottomColor: 'var(--theme-text)',
            terminalTitlebarDotsForeground: 'var(--theme-accent)',
            terminalTitlebarDotsOpacity: '0.5',
            frameBoxShadowCssValue: '0.15rem 0.18rem',
            shadowColor: 'var(--theme-text)',
        },
    },
    themeCssSelector(theme, { styleVariants }) {
        // If one dark and one light theme are available
        // generate theme CSS selectors compatible with cactus-theme dark mode switch
        if (styleVariants.length >= 2) {
            const baseTheme = styleVariants[0]?.theme;
            const altTheme = styleVariants.find(
                (v) => v.theme.type !== baseTheme?.type,
            )?.theme;
            if (theme === baseTheme || theme === altTheme)
                return `[data-theme='${theme.type}']`;
        }
        // return default selector
        return `[data-theme="${theme.name}"]`;
    },
    themes: ['github-dark', 'github-light'],
    emitExternalStylesheet: true,
};

// 主页网站技术块
export const homeTech: Array<{ title: string; desc: string; href: string }> = [
    {
        title: 'Astro',
        desc: 'Build fast websites, faster.',
        href: 'https://astro.build',
    },
    {
        title: 'Astro Assets',
        desc: 'Built-in optimized asset support.',
        href: 'https://docs.astro.build/en/guides/assets/',
    },
    {
        title: 'Astro Icon',
        desc: 'An easy to use Icon component for Astro.',
        href: 'https://github.com/natemoo-re/astro-icon#readme',
    },
    {
        title: 'Tailwind CSS',
        desc: 'Rapidly build modern websites without ever leaving your HTML.',
        href: 'https://tailwindcss.com',
    },
    {
        title: 'Markdown',
        desc: 'Simple and easy-to-use markup language.',
        href: 'https://www.markdownguide.org/',
    },
];
