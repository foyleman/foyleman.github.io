// Tiny example to prove JS/jQuery is working
$(function() {
  // current year
  $('#year').text(new Date().getFullYear());

  // fake “projects” list
  const projects = [
    { name: 'Sample Project A', link: '#' },
    { name: 'Sample Project B', link: '#' }
  ];
  $('#project-list').html(
    projects.map(p => `<li><a href="${p.link}">${p.name}</a></li>`).join('')
  );
});
