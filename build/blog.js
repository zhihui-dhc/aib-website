let _ = require('lodash')
let fs = require('fs')
let glob = require('glob')
let hljs = require('highlight.js')
let moment = require('moment')
let toPascalCase = require('to-pascal-case')
let yaml = require('js-yaml')

let md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try { return hljs.highlight(lang, str).value }
      catch (__) {}
    }
    return ''
  }
}).use(require('markdown-it-anchor'))

const postsJsonFile = './src/store/json/posts.json'
const rssTemplate = require('./blog-rss.js')

function postsToObjs (files) {
  let posts = []
  for (let i = 0; i < files.length; i++) {
    let post = {title: '', slug: '', author: '', date: '', body: ''}

    let data = fs.readFileSync(files[i], 'utf8')
    let metaData = yaml.load(data.split('~~~')[1])
    let markdownData = data.split('~~~')[2]

    // set the post metadata
    post.title = metaData.title
    post.slug = metaData.slug
    post.author = metaData.author
    post.excerpt = metaData.excerpt
    post.date = moment(metaData.date).valueOf() // ms since epoch
    post.description = metaData.description
    // post.dateFriendly = moment(post.date, 'x').format('LL')
    post.dateFriendly = moment(post.date, 'x').format('YYYY-MM-DD')
    post.body = md.render(markdownData)

    posts.push(post)
  }
  // order posts by newest first
  posts = _.orderBy(posts, ['date'], ['desc'])
  return posts
}

function writePostsJson (data) {
  let f = JSON.stringify(data, null, 2)
  fs.writeFileSync(postsJsonFile, f, 'utf8')
  console.log(`  ✓ ${postsJsonFile}`)
}

function writeRssFile (directory, data) {
  let blogRssFile = './src/assets/rss/' + directory + '.xml'
  let rss = rssTemplate(data)
  fs.writeFileSync(blogRssFile, rss, 'utf8')
  console.log(`  ✓ ${blogRssFile}`)
}

let postsData = {
  en: glob.sync('./content/en-US/blog/*.md'),
  ko: glob.sync('./content/ko/blog/*.md')
}

function postsToNestedPosts (postsData) {
  let nested = {}
  _.forOwn(postsData, function (posts, key) {
    let postObjs = postsToObjs(posts)
    writeRssFile(key, postObjs)
    nested[key] = postObjs
  })
  return nested
}

let nestedPosts = postsToNestedPosts(postsData)
writePostsJson(nestedPosts)
