"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48610],{51205:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(67176),l=n(80187);function i(e){var t=e.metadata,n=t.previousPage,i=t.nextPage;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&a.createElement(l.Z,{permalink:i,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},57813:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(52428),l=n(34228);function i(e){var t=e.items,n=e.component,i=void 0===n?l.Z:n;return a.createElement(a.Fragment,null,t.map((function(e){var t=e.content;return a.createElement(r.n,{key:t.metadata.permalink,content:t},a.createElement(i,null,a.createElement(t,null)))})))}},78033:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(67294),r=n(86010),l=n(67176),i=n(10385),o=n(58417),s=n(21185),c=n(19372),u=n(25103),g=n(51205),m=n(78571),p=n(57813);function d(e){var t,n=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function E(e){var t=d(e.tag);return a.createElement(a.Fragment,null,a.createElement(o.d,{title:t}),a.createElement(m.Z,{tag:"blog_tags_posts"}))}function f(e){var t=e.tag,n=e.items,r=e.sidebar,i=e.listMetadata,o=d(t);return a.createElement(u.Z,{sidebar:r},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,o),a.createElement(c.Z,{href:t.allTagsPath},a.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(p.Z,{items:n}),a.createElement(g.Z,{metadata:i}))}function h(e){return a.createElement(o.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},a.createElement(E,e),a.createElement(f,e))}},58427:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(57427),l=n(33328),i=n(3540);function o(){return a.createElement("header",null,a.createElement(r.Z,null),a.createElement(i.Z,null),a.createElement(l.Z,null))}},70772:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(87462),r=n(63366),l=n(67294),i=n(50531),o=["editUrl"];function s(e){var t=e.editUrl,n=(0,r.Z)(e,o),s=function(e){return new RegExp("content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/","i").test(e)}(t)?function(e){var t=new RegExp("content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/","i");return e.replace(t,"")}(t):t;return l.createElement(i.Z,(0,a.Z)({editUrl:s},n))}}}]);