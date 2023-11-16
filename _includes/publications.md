<h1 id="publications"></h1>

<h2 style="margin: 60px 0px -15px;">Publications <temp style="font-size:15px;">[</temp><a href="https://scholar.google.com/citations?user=Uf9GqRsAAAAJ" target="_blank" style="font-size:15px;">Google Scholar</a><temp style="font-size:15px;">]</temp><temp style="font-size:15px;">[</temp><a href="https://dblp.uni-trier.de/pid/12/10033-1.html" target="_blank" style="font-size:15px;">DBLP</a><temp style="font-size:15px;">]</temp></h2>


<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
            <abbr class="badge">{{ link.conference_short }}</abbr>
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.Link }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.Link %} 
      <a href="{{ link.Link }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Link</a>
      {% endif %}
    {% if link.Abstract %} 
    <a href="javascript:void(0);" class="btn btn-sm z-depth-0 abstract-btn" style="font-size:12px;" data-target="abstract-content-{{ forloop.index }}">Abstract</a>
    <div id="abstract-content-{{ forloop.index }}" class="abstract-content" style="display: none;">
      {{ link.Abstract }}
    </div>
    {% endif %}
    </div>
  </div>
</div>
</li>

<br>

{% endfor %}

<script>
$(document).ready(function () {
  var abstractButtons = document.querySelectorAll('.abstract-btn');

  abstractButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = this.getAttribute('data-target');
      var targetElement = document.getElementById(targetId);
      if (targetElement.style.display === 'none') {
        targetElement.style.display = 'block';
      } else {
        targetElement.style.display = 'none';
      }
    });
  });
});
</script>

</ol>
</div>
