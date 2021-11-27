<div class='blog-post-card gh-search-item' id='gh-{{ref}}'><div class='post-card-image'>{{#if feature_image}}<a class='post-card-image-wrap' href='{{link}}' style='background-image:url({{img_url feature_image size='s'}})'></a>{{else if canonical_url}}<a class='link-post-card-image-wrap' href='{{url}}'></a>{{/if}}</div><div class='post-card-info'>{{#if canonical_url}}<h2 class='link-post-title'><a href='{{canonical_url}}'>{{title}}&#8594;</h2></a> <div class='blog-post-content'>{{content}}</div><div class='link-post-meta'> <time datetime='{{date format='YYYY-MM-DD'}}'>Linked on{{date published_at}}</time><a href='{{url}}'> &#9733;</a> </div>{{else}}<h2 class='blog-post-title'><a href='{{url}}'>{{title}}</h2></a> <div class='blog-post-meta'> <time datetime='{{date format='YYYY-MM-DD'}}'>Posted on{{date published_at}}</time> </div><div class='blog-post-excerpt'>{{excerpt}}</div><div class='continue-reading'><a href='{{link}}'>Continue Reading...</a></div>{{/if}}</div></div><span class='separator'><span class='divider'></span></span>


result_template 	: "<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><p><h2>{{title}}</h2><h4>{{prettyPubDate}}</h4></p></a>",