---
layout: page
title: Lista de Projetos
---

# Lista de Projetos

{% for repo in site.github.public_repositories %}
- [{{ repo.name }}]({{ repo.html_url }})
{% endfor %}
