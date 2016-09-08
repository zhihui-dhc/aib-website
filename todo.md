# 2016-09-08
* Crowdfund Page
    * Added a atom split graphic
    * improved the design of Funding Milestones
    * Improved the design of of the Timeline
* Turned off the ToC by default on smaller devices to get the user into the content faster.
* Linked to the Whitepaper from the homepage "see our whitepaper"
* Fixed an issue with the Whitepaper where long urls broke the width of the page on mobile
* Added page titles for every page

# 2016-09-07
* Continued revamping the homepage design
    * Removed the need for stabilizeVH by ditching vh-based layouts.
* Improved the Crowd Sale call to action
* Improved typography around the site.
* Added a color back to links.
* Blog posts show the author now.

# 2016-09-06
* Started revamping the homepage design. Increased the information density above the fold, making it easier to figure out what the project is. Also added the call-to-action above the fold.

Tomorrow - finish revamp of the hompage. Update the design and navigation of the lower sections to be more usable.

# 2016-09-05
* footer design update
* added a footer section with Twitter/Reddit/Slack links
* functionality fixes for the ToC and footer, which overlap
* improved the robustness of the ToC code
* design experiment with removing color and increasing contrast
* mobile: increased the ToC size for easier tapping, added a better close button

# 2016-09-02
* Implemented working location tracking for the FAQ/Whitepaper.
* For larger displays, the table of contents also scrolls with content on the FAQ/Whitepaper pages.

There is a caveat on the Whitepaper page. The h4 headings under TMSP Specification in the Appendix are not listed in the table of contents, which breaks the location tracking. I understand why they aren't listed in the ToC, because it would make the ToC much longer for just a few small sections. What I've done is turned the h4s into h5s just for that section.

Todo for next week: I want to improve the ToC for mobile. Crowdfund page design improvements. Better blog design + rss feed. Bug stomping.

Also have to fix an issue in Firefox with the use of nested lists in the ToC.

# 2016-09-01
## General
* Visiting the Plan/FAQ/Whitepaper pages again via the top navigation no longer resets the page position.
* Added a link icon next to h2/h3/h4 in the Plan/FAQ/Whitepaper. Clicking on them adds the url to your clipboard.
* Fixed an issue where visiting pages with hashes. http://localhost:8080/whitepaper#federated-name-resolution-system now scrolls you to the right place. Also cleaned up the effect of hashes on browser back history.
## Table of Contents
* Increased the clickable area for Table of Contents for easier mobile browsing.
* Hiding the ToC now centers the main page content.
## Whitepaper
* Under "Cosmos Overview", added "Tendermint-BFT DPoS" and "Governance" to the Whitepaper ToC.
* Fixed the `Merkle tree & proof specification` ToC link.
* Linked to the website version of the the Plan under the "Roadmap" section.

Also started on a 'YouAreHere' widget for the longer pages. This will also include a cookie to save the user's current position on the Whitepaper.

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
