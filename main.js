function setActive(button) {
  const buttons = document.querySelectorAll(
    ".nav-links button:not(.labs-button)"
  );
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  const highlight = document.querySelector(".highlight");
  if (highlight) {
    highlight.style.width = `${button.offsetWidth}px`;
    highlight.style.left = `${button.offsetLeft}px`;
  }
}

function toggleMenu() {
  if (window.innerWidth <= 768) {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    const closeButton = document.querySelector(".close-button");
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      navLinks.classList.add("show");
      closeButton.style.display = "block";
    } else {
      setTimeout(() => {
        navLinks.classList.remove("show");
        closeButton.style.display = "none";
      }, 300);
    }
    hamburger.classList.toggle("active");
  }
}

function closeMenu() {
  if (window.innerWidth <= 768) {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    const closeButton = document.querySelector(".close-button");
    navLinks.classList.remove("active");
    setTimeout(() => {
      navLinks.classList.remove("show");
      closeButton.style.display = "none";
    }, 300);
    hamburger.classList.remove("active");
  }
}

function typeText() {
  const text = "NEXTRONIX";
  const typingElement = document.getElementById("typing-text");
  let index = 0;
  let isTyping = true;

  function type() {
    if (isTyping) {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
      } else {
        isTyping = false;
        setTimeout(type, 1000);
      }
    } else {
      if (index > 0) {
        typingElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(type, 100);
      } else {
        isTyping = true;
        setTimeout(type, 500);
      }
    }
  }

  type();
}

function handleScroll() {
  const teamCards = document.querySelector(".team-cards");
  const teamCardsPosition = teamCards.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (teamCardsPosition < screenPosition) {
    teamCards.classList.add("visible");
  }

  const heroImage = document.querySelector(".hero-image");
  const sections = document.querySelectorAll(
    ".teams-section, .events-section, .resources-section"
  );
  let isBelowHome = true;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 100) {
      isBelowHome = false;
    }
  });

  if (isBelowHome) {
    heroImage.classList.remove("hero-blur");
  } else {
    heroImage.classList.add("hero-blur");
  }
}

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth",
    });
  }
  if (window.innerWidth <= 768) {
    closeMenu();
  }
}

window.onload = () => {
  const activeButton = document.querySelector(".nav-links .active");
  setActive(activeButton);
  typeText();
  console.log("Nextronix page loaded successfully.");

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
};

window.addEventListener("scroll", handleScroll);

document.addEventListener('DOMContentLoaded', () => {
  const eventCards = document.querySelectorAll('.event-card');
  const expandedEvent = document.getElementById('expanded-event');
  const closeExpanded = document.querySelector('.close-expanded');
  const expandedTitle = document.getElementById('expanded-title');
  const expandedDetails = document.getElementById('expanded-details');
  const expandedRegister = document.getElementById('expanded-register');

  const eventData = {
      'ai-summit': {
          title: 'Robotics Club Foundation',
          details: 'Date: MM DD, 2024 | Location: CSVTU<br>',
          registerLink: '#'
      },
      'robotics-workshop': {
          title: 'Robotics Workshop',
          details: 'Date: MM DD, 20XX | Location: CSVTU<br>',
          registerLink: '#'
      },
      'cybersecurity-conference': {
          title: 'Robo Conference',
          details: 'Date: MM DD, 20XX | Location: CSVTU<br>',
          registerLink: '#'
      }
  };

  eventCards.forEach(card => {
      card.addEventListener('click', () => {
          const eventId = card.getAttribute('data-event');
          const event = eventData[eventId];

          expandedTitle.textContent = event.title;
          expandedDetails.innerHTML = event.details;
          expandedRegister.href = event.registerLink;

          expandedEvent.classList.add('active');
      });
  });

  closeExpanded.addEventListener('click', () => {
      expandedEvent.classList.remove('active');
  });

  expandedEvent.addEventListener('click', (e) => {
      if (e.target === expandedEvent) {
          expandedEvent.classList.remove('active');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const resourceCards = document.querySelectorAll('.resource-card');

  resourceCards.forEach(card => {
      card.addEventListener('click', () => {
          const link = card.querySelector('.resource-link');
          if (link) window.open(link.href, '_blank');
      });
  });
});
