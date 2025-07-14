// DOM Elements
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")
const sections = document.querySelectorAll("section")
const contactForm = document.getElementById("contactForm")

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  const icon = mobileMenuBtn.querySelector("i")
  icon.classList.toggle("fa-bars")
  icon.classList.toggle("fa-times")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.classList.add("fa-bars")
    icon.classList.remove("fa-times")
  })
})

// Smooth Scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Navigation Link Click Handlers
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})

// Active Navigation Link
function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("data-section") === sectionId) {
          link.classList.add("active")
        }
      })
    }
  })
}

// Scroll Event Listener
window.addEventListener("scroll", () => {
  updateActiveNavLink()
  animateOnScroll()
  parallaxEffect()
})

// Animate on Scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("animated")
    }
  })
}

// Parallax Effect
function parallaxEffect() {
  const scrolled = window.pageYOffset
  const parallaxBg = document.querySelector(".parallax-bg")

  if (parallaxBg) {
    const speed = scrolled * 0.5
    parallaxBg.style.transform = `translateY(${speed}px)`
  }
}

// Floating Particles
function createFloatingParticles() {
  const hero = document.querySelector(".hero")
  const floatingElements = document.querySelector(".floating-elements")

  if (!floatingElements) return

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div")
    particle.className = "floating-particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 2 + "s"
    particle.style.animationDuration = 3 + Math.random() * 2 + "s"
    floatingElements.appendChild(particle)
  }
}

// Typing Animation
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Contact Form Handler
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const formObject = {}
    formData.forEach((value, key) => {
      formObject[key] = value
    })

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitBtn.disabled = true

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
      submitBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)"

      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
        submitBtn.style.background = ""
        contactForm.reset()
      }, 3000)
    }, 2000)
  })
}

// Download Resume Function
function downloadResume() {
  // Create a temporary link element
  const link = document.createElement("a")
  link.href = "#" // Replace with actual resume URL
  link.download = "Donato_Yi_Resume.pdf"
  link.click()

  // Show download notification
  showNotification("Resume download started!", "success")
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
        <span>${message}</span>
    `

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "rgba(16, 185, 129, 0.9)" : "rgba(59, 130, 246, 0.9)"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Skill Tag Hover Effects
function initSkillTagEffects() {
  const skillTags = document.querySelectorAll(".skill-tag")

  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.style.transform = "translateY(-2px) scale(1.05)"
      tag.style.boxShadow = "0 5px 15px rgba(168, 85, 247, 0.3)"
    })

    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "translateY(0) scale(1)"
      tag.style.boxShadow = "none"
    })
  })
}

// Project Card Hover Effects
function initProjectCardEffects() {
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 20px 40px rgba(168, 85, 247, 0.2)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none"
    })
  })
}

// Navbar Background on Scroll
function updateNavbarBackground() {
  const navbar = document.querySelector(".navbar")
  const scrolled = window.scrollY

  if (scrolled > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.8)"
    navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)"
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.2)"
    navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)"
  }
}

// Add scroll listener for navbar
window.addEventListener("scroll", updateNavbarBackground)

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createFloatingParticles()
  initSkillTagEffects()
  initProjectCardEffects()

  // Add animate-on-scroll class to elements
  const elementsToAnimate = document.querySelectorAll(
    ".about-card, .experience-card, .project-card, .testimonial-card, .skill-category",
  )
  elementsToAnimate.forEach((element) => {
    element.classList.add("animate-on-scroll")
  })

  // Initial animation check
  animateOnScroll()

  // Add loading animation to hero
  const heroContent = document.querySelector(".hero-content")
  if (heroContent) {
    heroContent.style.opacity = "0"
    heroContent.style.transform = "translateY(30px)"

    setTimeout(() => {
      heroContent.style.transition = "all 1s ease"
      heroContent.style.opacity = "1"
      heroContent.style.transform = "translateY(0)"
    }, 500)
  }
})

// Smooth scroll polyfill for older browsers
if (!("scrollBehavior" in document.documentElement.style)) {
  const smoothScrollPolyfill = document.createElement("script")
  smoothScrollPolyfill.src =
    "https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"
  document.head.appendChild(smoothScrollPolyfill)
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
  updateActiveNavLink()
  animateOnScroll()
  parallaxEffect()
  updateNavbarBackground()
}, 16) // ~60fps

window.addEventListener("scroll", throttledScroll)

// Add intersection observer for better performance
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserve = document.querySelectorAll(".animate-on-scroll")
  elementsToObserve.forEach((element) => {
    observer.observe(element)
  })
})
