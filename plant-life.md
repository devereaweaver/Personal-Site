---
layout: layout.njk
title: Plant Life
---
<div class="animate">

<h1>Plant Life 🪴</h1>

{% for post in collections.plantPosts | reverse %}
  <article>
    <h2><a class="project-word" href="{{ post.url }}">{{ post.data.title }} →</a></h2>
  </article>
{% endfor %}

</div>