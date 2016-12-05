# cosmos-foundation

> The homepage for Cosmos.

## Production

Please ask the team for deployment privileges.

``` bash
# add the production server if you haven't already
git remote add production ubuntu@cosmos.network:~/cosmos.git
```

``` bash
# deploy it!
git checkout master
git merge develop
git push production master
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8700
npm run dev
```

## Blogging

Create and edit posts with Markdown in the `./blog/posts/` directory.

Be sure to include YAML meta data for each Markdown file. Here's an example post:

    ---
    title: Just a Test
    date: 2016-04-04
    author: Peng Zhong
    excerpt: Just a short introductory excerpt.
    ---

    Here is some markdown data. This is **just** a *test*.

    * One
    * Two
    * Three

    1. Four
    2. Five
    3. Six

Build the blog files with `npm run blog`. Build the entire site with with `npm run build`.
