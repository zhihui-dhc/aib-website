let _ = require('lodash')
let fs = require('fs')
let glob = require('glob')
let md = require('markdown-it')({ linkify:true })
let mda = require('markdown-it-anchor')
let mdtoc = require('markdown-it-table-of-contents')
let plan = glob.sync('../cosmos/PLAN.md')

const filepath = 'src/components/content/test_plan.vue'

function markdownToVueData (files) {
  let posts = []
  for (let i = 0; i < files.length; i++) {
    let post = {slug: '', author: '', date: '', body: ''}

    let data = fs.readFileSync(files[i], 'utf8')

    // set up the vue file
    post.filepath = filepath
    post.body += '<template>\n'
    post.body += md.use(mda, {}).use(mdtoc, {"includeLevel": [1,2,3,4]}).render(data)
    post.body += '</template>\n'
    post.body += '<script>\n'
    post.body += 'import linkifyHeadings from \'../../scripts/linkifyHeadings.js\'\n'
    post.body += 'import scrollToHash from \'../../scripts/scrollToHash.js\'\n'
    post.body += 'export default {\n'
    post.body += '  ready () {\n'
    post.body += '    linkifyHeadings()\n'
    post.body += '    scrollToHash()\n'
    post.body += '  }\n'
    post.body += '}\n'
    post.body += '</script>\n'
    posts.push(post)
  }
  return posts
}

function writeVueBlogPosts (data) {
  for (let i = 0; i < data.length; i++) {
    let file = data[i].filepath
    let content = data[i].body
    fs.writeFileSync(file, content, 'utf8')
    console.log(`  ✓ ${file}`)
  }
}


let postData = markdownToVueData(plan)
writeVueBlogPosts(postData)
