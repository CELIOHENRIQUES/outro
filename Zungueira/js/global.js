$(document).ready(function () {
  // Progress bars setup
  let containerA = document.getElementById('circleA')
  let circleA = new ProgressBar.Circle(containerA, {
    color: '#66e966',
    strokeWidth: 3,
    duration: 1400,
    from: { color: '#aaa' },
    to: { color: '#66e966' },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color)
      var value = Math.round(circle.value() * 70)
      circle.setText(value)
    }
  })

  let containerB = document.getElementById('circleB')
  let circleB = new ProgressBar.Circle(containerB, {
    color: '#66e966',
    strokeWidth: 3,
    duration: 1700,
    from: { color: '#aaa' },
    to: { color: '#66e966' },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color)
      var value = Math.round(circle.value() * 357)
      circle.setText(value)
    }
  })

  let containerC = document.getElementById('circleC')
  let circleC = new ProgressBar.Circle(containerC, {
    color: '#66e966',
    strokeWidth: 3,
    duration: 1900,
    from: { color: '#aaa' },
    to: { color: '#66e966' },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color)
      var value = Math.round(circle.value() * 486)
      circle.setText(value)
    }
  })

  // LOADER ON
  let dataAreaOffset = $('#data-area').offset()
  let stop = 0

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop()
    if (scroll > dataAreaOffset.top - 500 && stop === 0) {
      circleA.animate(1.0)
      circleB.animate(1.0)
      circleC.animate(1.0)
      stop = 1
    }
  })

  // Parallax
  setTimeout(function () {
    $('#data-area').parallax({ imageSrc: 'img/3.jpg' })
    $('#apply-area').parallax({ imageSrc: 'img/7.jpg' })
  }, 250)

  // Filtro
  $('.filter-btn').on('click', function () {
    let type = $(this).attr('id')
    let boxes = $('.project-box')

    $('.main-btn').removeClass('active')
    $(this).addClass('active')

    if (type === 'arq-btn') {
      eachBoxes('arq', boxes)
    } else if (type === 'dev-btn') {
      eachBoxes('dev', boxes)
    } else if (type === 'seo-btn') {
      eachBoxes('seo', boxes)
    } else {
      eachBoxes('all', boxes)
    }
  })

  function eachBoxes(type, boxes) {
    if (type === 'all') {
      $(boxes).fadeIn()
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut('slow')
        } else {
          $(this).fadeIn()
        }
      })
    }
  }

  // Scroll
  let navBtn = $('.nav-item')

  let bannerSection = $('#mainSlider')
  let aboutSection = $('#about-area')
  let servicesSection = $('#service-area')
  let timeSection = $('#time-area')
  let portfolioSection = $('#portfolio-area')
  let contactSection = $('#contact-are')

  let scrollTo = ''

  $(navBtn).click(function () {
    let btnId = $(this).attr('id')

    if (btnId === 'about-menu') {
      scrollTo = aboutSection
    } else if (btnId === 'services-menu') {
      scrollTo = servicesSection
    } else if (btnId === 'team-menu') {
      scrollTo = timeSection
    } else if (btnId === 'portefolio-menu') {
      scrollTo = portfolioSection
    } else if (btnId === 'contacto-menu') {
      scrollTo = contactSection
    } else {
      scrollTo = bannerSection
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(scrollTo).offset().top - 70
      },
      1500
    )
  })
})

/*esconder o menu quando for clicado em algum linke*/
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('#navbar-links .nav-link')
  const navCollapse = document.querySelector('#navbar-links')

  for (const link of links) {
    link.addEventListener('click', function () {
      navCollapse.classList.remove('show')
    })
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var aboutSection = document.getElementById('about')

  function checkVisibility() {
    var rect = aboutSection.getBoundingClientRect()
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      aboutSection.classList.add('visible')
    }
  }

  window.addEventListener('scroll', checkVisibility)
  window.addEventListener('resize', checkVisibility)

  checkVisibility() // Check initial visibility
})
