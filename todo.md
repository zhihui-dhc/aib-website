# 2016-09-01
## General
* Plan/FAQ/Whitepaper pages no longer resets the page position when you return to them via the header navigation buttons.
* Added a 'link' button next to h2 & h3 headings in the Plan/FAQ/Whitepaper. Clicking on it instantly adds the url to your clipboard for easy sharing.
* Fixed an issue where visiting e.g. `http://localhost:8080/whitepaper#federated-name-resolution-system` wouldn't animate the page scroll to the right place. Also removes the hash from the url  to not mess with the browser history.
## Table of Contents
* Increased the clickable area for Table of Contents for easier mobile browsing.
* Hiding the ToC now centers the main page content.
## Whitepaper
* Under "Cosmos Overview", added "Tendermint-BFT DPoS" and "Governance" to the Whitepaper ToC.
* Fixed the `Merkle tree & proof specification` ToC link.
* Linked to the website version of the the Plan under the "Roadmap" section.

Todo: Design improvements for the Crowdfund page. A progress indicator for the Whitepaper and FAQ. Blog RSS Feed. 

# 2016-08-31
Added a script to generate Vue-compatible HTML posts (and associated page routing) from Markdown files.
* Edit the blog posts in `./src/posts/`
* Build the blog only with `npm run blog`, or everything with `npm run build`
* The generated Vue/HTML files are stored in `./src/components/blog/`

I've re-enabled the `Blog` link on the site header for easy testing. Feel free to delete the Markdown files and start putting in blog posts. Be sure to add the YAML meta data to each `.md` file or the script won't work correctly. I've added more info to the readme too.

Regarding the `app.js` size issue: the file is much smaller when it's minified. With `npm run build` and serving the `./dist` directory, `app.js` is only 172kb without gzip.

Future stuff: add a RSS feed for the blog, blog design, ToC updates

# 2016-08-30
* General
    * Split the Plan, FAQ and Whitepaper content into two files each. The Table of Contents and the actual Content. Files are in `./src/components/content/`
* Table of Contents:
    * Design improvements & bug fixes.
    * There's a toggle button to show and hide the ToC.
    * ToC is now enabled for landscape tablets.
    * ToC is now a a separate screen for portrait tablets and lower.

Tomorrow: Allow users to link to specific parts of the Whitepaper, FAQ, and Crowdfund pages. Design improvements for the Crowdfund page (perhaps a graphic for the ). Make the ToC links easier to click on for mobile users. A 'You Are Here' indicator for where in the Whitepaper you currently are.

# 2016-08-29
* General
    * Improved Table of Contents design
    * Added the Material Icons set by Google; added an icon to external links across the site because it wasn't clear when the user was leaving the site.
    * Moved to stabilizeVH code to a separate file
* Home
    * design improvements
    * Linked to the whitepaper on the site instead of the markdown document on GitHub.
* Crowdfund
    * Renamed Plan -> Crowdfund for clarity
    * Added Table of Contents
* FAQ
    * Added Table of Contents


# 2016-08-26 https://nylira.github.io/
* Added more of the HOME.md text to the homepage.
* Fixed an issue on iOS/Android where the bottom navigation Top/I/II/III etc were hidden by the browser chrome.
* Homepage sections with graphics now have room for more description text.
* Fixed the site design for phones and tablets in landscape mode.
* Implemented a sidebar Table of Contents for the whitepaper.
* Other design improvements.

Code: https://github.com/nylira/cosmos-site-mockup
Launch: `npm install`, `npm run build` then copy the files in `./dist` to the cosmos.github.io repo.

# 2016-08-25
* Massive homepage updates. Replaced the animations with the upgraded images. Improved the design and functionality.
* Header design improvements.
* Background color change across the site to an off-white.
* Fixed the Table of Contents on the Whitepaper, will implement the sidebar next
* Swapped in the Mailchimp code - subscriptions now work!

Friday: ToC sidebar for the Whitepaper, overall usability/design improvements

# 2016-08-24
* removed hashbang from urls
* created the blog index page
* created the first blog post
* fixed some responsive design bugs
* clicking on the homepage wheel scrolls you down
* added a 'you are here' link color
* design and code improvements

It's live here: https://nylira.github.io/

Jae, I could use these things:
* google analytis tracker id
* higher res logo
* email capture code from mailchimp so the crowd sale alert can work

Tomorrow I'll work on - authentication and adding posts from the UI.
