---
layout: default
title: About Me
permalink: /about/
---

# About Me 

<div class="skills-container">
  {% for skill in site.data.skills %}
  <div class="skill-tile">
    <img src="{{ skill.logo }}" alt="{{ skill.name }} logo" class="skill-icon">
    <h3>{{ skill.name }}</h3>
    <p>{{ skill.description }}</p>
  </div>
  {% endfor %}
</div>