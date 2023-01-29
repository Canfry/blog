# Astro Personal blog

```
yarn create astro@latest
```

## 🚀 Project Structure

This my personal Blog.

I've used only astro components, no other frameworks needed.

I´ve structured the website with 2 layouts:

- BaseLayout
- MarkdownPostLayout

For the markdow layout I've used the [tailwind/typography plugin](https://tailwindcss.com/docs/typography-plugin) which is amazing to style your markdown files, and so easy to use.

```
<article
    class='prose prose-custom lg:prose-xl prose-a:text-cyan-500 prose-headings:text-white prose-p:text-gray-300 hover:prose-a:text-cyan-600 prose-strong:bg-cyan-100 prose-strong:text-gray-900 my-24 prose-pre:bg-white'
  >
    <slot />
  </article>
```

I´ve just added some js files:

- For the animation of the hamburger menu (script/menu.js)

```
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  console.log('clicked');
});

close.addEventListener('click', () => {
  menu.style.display = 'none';
  console.log('clicked');
});
```

- Function to sort my articles by date (utils/index.js)

```
export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `yarn install`      | Installs dependencies                            |
| `yarn dev`          | Starts local dev server at `localhost:3000`      |
| `yarn build`        | Build your production site to `./dist/`          |
| `yarn preview`      | Preview your build locally, before deploying     |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [the documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

Follow me on [Twitter](https://www.twitter.com/design_fry)
