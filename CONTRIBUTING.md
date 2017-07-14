# Contributing

## 5-Second Editing Guide

``` bash
# Edit Documenation
ls ./content/en-US/
yarn run docs

# Edit Team
./src/store/modules/people.js
```

## Edit Documentation (Detailed Guide)

### New Documentation Page
This is not supported yet. Contact @nylira and get him to add this feature.

### Include Images

(Images are not supported yet.)

### Build
Please run the following command to build all documentation.

    yarn run build

## Editing Tips

### Include Images

To include an image in a blog post or documentation page, place the image in the `./src/assets/images/` directory. Link to the image in the following format:

    <img alt="Application Architecture" src="../static/images/tm-app-example.png">

The `../assets/images/` portion of the imgsrc is immutable because all markdown posts are built into Vue components located in `./src/content/`

### Link to the Site
If you want to link to other pages in the Tendermint site, please use the full path. This will prevent the user's browser from reloading the entire website. For example:

    # won't work
    [block hash](./tendermint-types#block-hash)

    # will work
    [block hash](/docs/internals/tendermint-types#block-hash)

### Link to Headings (e.g. `<h1><h2><h3>`)
HTML IDs are automatically generated for headings. You can link to them, but please remember to use the slug case format. 'this-is-slug-case'

    # won't work
    [block hash](./tendermint-types#Block.Hash)

    # will work
    [block hash](/docs/internals/tendermint-types#block-hash)
