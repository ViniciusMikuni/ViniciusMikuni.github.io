/* Progressive enhancement: the full publication list works without JavaScript. */
(() => {
  const search = document.getElementById('publication-search');
  if (!search) return;
  const year = document.getElementById('publication-year');
  const topic = document.getElementById('publication-topic');
  const entries = [...document.querySelectorAll('.publication')];
  const status = document.getElementById('publication-status');
  const empty = document.getElementById('publication-empty');
  const filter = () => {
    const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const entry of entries) {
      const text = entry.textContent.toLocaleLowerCase();
      const match = words.every(word => text.includes(word)) &&
        (!year.value || entry.dataset.year === year.value) &&
        (!topic.value || entry.dataset.topics.split('|').includes(topic.value));
      entry.hidden = !match;
      if (match) count++;
    }
    status.textContent = `${count} of ${entries.length} publications`;
    empty.hidden = count > 0;
  };
  search.addEventListener('input', filter);
  year.addEventListener('change', filter);
  topic.addEventListener('change', filter);
  filter();
})();
