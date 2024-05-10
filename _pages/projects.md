---
layout: page
title: Lista de Projetos2
---

# Lista de Projetos

Abaixo estão os meus projetos no GitHub:

{% for repo in site.github.public_repositories %}
- [{{ repo.name }}]({{ repo.html_url }})
{% endfor %}
