# [cosmos.network](https://cosmos.network)

> The homepage for Cosmos, the Internet of Blockchains.

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

Make sure you're running Node 6 LTS or higher.

``` bash
# install dependencies
npm install

# write some required files
npm run build

# serve with hot reload at localhost:8700
npm run dev
```

## Edit Content

``` bash

# Edit site interface text
./content/interface.json

# Edit FAQ, Plan, or Whitepaper 
./content/en-US/
npm run build

```
## Edit Blog Posts

Edit blog posts in the `./content/en-US/blog/` directory. Include YAML metadata for each post. Here's a full example post:

    ~~~
    title: "TACO: The tastiest food"
    slug: taco-the-tastiest-food
    date: 2017-01-01
    author: Peng Zhong
    excerpt: Many people have rallied against the edibility of tacos, claiming it is impossible to eat. But that is simply not true.
    ~~~

    Here is some markdown data. This is **just** a *test*.

    * Onion
    * Tomato
    * Avocado

    1. Lettuce
    2. Ground beef
    3. Chili sauce

After you're done editing the post, rebuild the blog files with `npm run blog`. Build the entire site with with `npm run build`.
