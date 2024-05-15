<h1>Meus Repositórios</h1>
<ul>
  {% for repo in site.github.public_repositories %}
    <li><a href="{{ repo.html_url }}">{{ repo.name }}</a></li>
  {% endfor %}
</ul>

{% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="prev">Anterior</a>
    {% endif %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="next">Próxima</a>
    {% endif %}
  </div>
{% endif %}
