window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

function handleScroll() {
  var figures = document.querySelectorAll('.effect-lexi');
  var viewportHeight = window.innerHeight;

  figures.forEach(function (figure) {
    var rect = figure.getBoundingClientRect();
    var elementTop = rect.top;
    var elementBottom = rect.bottom;
    var elementCenter = (elementTop + elementBottom) / 2;

    // Calculate the threshold for each figure element
    var threshold = figure.offsetHeight / 2;

    // Calculate the range within which the element is considered centered
    var centerRangeStart = (viewportHeight / 2) - threshold;
    var centerRangeEnd = (viewportHeight / 2) + threshold;

    // Check if the element is within the center range
    if (elementCenter > centerRangeStart && elementCenter < centerRangeEnd) {
      figure.classList.add('hovered');
    } else {
      figure.classList.remove('hovered');
    }
  });

}