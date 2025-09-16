// Set darkmode
document.getElementById('mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// enforce local storage setting but also fallback to user-agent preferences
if (
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.body.classList.add('dark');
}

const topMenu = document.querySelector('header.navbar');
const topMenuHeight = topMenu.offsetHeight + 1;
const menuItems = document.querySelectorAll('#TableOfContents a');
const scrollItems = document.querySelectorAll('.docs-content h2, .docs-content h3');
let lastId;

window.addEventListener('scroll', function () {
  // Get container scroll position
  const container = document.querySelector('.docs-content');
  let fromTop = window.pageYOffset + topMenuHeight + 40;

  // Get id of current scroll item
  let cur = [];

  [...scrollItems].map(function (item) {
    if (item.offsetTop < fromTop) {
      cur.push(item);
    }
  });

  // Get the id of the current element
  cur = cur[cur.length - 1];
  let id = cur ? cur.id : '';

  if (lastId !== id) {
    lastId = id;

    menuItems.forEach(function (elem, index) {
      elem.classList.remove('active');
      const filteredItems = [...menuItems].filter((elem) =>
        elem.getAttribute('href').endsWith(`#${id}`)
      );
      filteredItems[0].classList.add('active');
    });
  }
});
