---
layout: research
title: "Publications"
permalink: /publications/
excerpt: "Research papers on foundation models, simulation, anomaly detection, and inference by Vinicius Mikuni and collaborators."
---
<div class="wrap">
<header class="page-intro"><p class="eyebrow">Papers & preprints</p><h1>Publications</h1><p>Research and methods papers with up to 20 authors, including proceedings. For the complete record, including large experimental collaborations, visit <a href="https://inspirehep.net/authors/1622350">INSPIRE</a>. Entries are ordered by first release; journal references are updated where available.</p></header>
<div class="publication-controls">
<div class="control"><label for="publication-search">Search publications</label><input id="publication-search" type="search" placeholder="Title, author, keyword, or arXiv ID" autocomplete="off"></div>
<div class="control"><label for="publication-year">Year</label><select id="publication-year"><option value="">All years</option>{% for year in site.data.publication_filters.years %}<option value="{{ year }}">{{ year }}</option>{% endfor %}</select></div>
<div class="control"><label for="publication-topic">Research topic</label><select id="publication-topic"><option value="">All topics</option>{% for topic in site.data.publication_filters.topics %}<option value="{{ topic }}">{{ topic }}</option>{% endfor %}</select></div>
</div>
<p id="publication-status" class="publication-status" role="status" aria-live="polite">{{ site.data.publication_catalogue.size }} publications</p>
<div class="publication-list">{% for paper in site.data.publication_catalogue %}
<article class="publication" data-year="{{ paper.year }}" data-topics="{{ paper.topics | join: '|' | escape }}"><span class="publication-year">{{ paper.year }}</span><div><h2><a href="{{ paper.url }}">{{ paper.title | escape }}</a></h2><p class="authors">{% for author in paper.authors %}{% if author contains 'Mikuni' %}<strong>{{ author | escape }}</strong>{% else %}{{ author | escape }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</p><p class="venue">{{ paper.reference | escape }}</p><div class="publication-links">{% if paper.arxiv != empty %}<a href="https://arxiv.org/abs/{{ paper.arxiv }}">arXiv:{{ paper.arxiv }}</a><a href="https://arxiv.org/pdf/{{ paper.arxiv }}">PDF</a>{% endif %}{% if paper.doi != empty %}<a href="https://doi.org/{{ paper.doi }}">Journal</a>{% endif %}{% if paper.inspire_id %}<a href="https://inspirehep.net/literature/{{ paper.inspire_id }}">INSPIRE</a>{% endif %}</div></div></article>
{% endfor %}<p id="publication-empty" class="empty-results" hidden>No publications match these filters. Try another term or select all years and topics.</p></div>
</div>
