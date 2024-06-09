function scrollToSection(selector, duration, offset) {
    const element = document.querySelector(selector);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset + (offset || 0);
      window.scrollTo({
        top: topPos, // Posición en Y del elemento ajustada por el offset
        behavior: 'smooth' // Efecto de desplazamiento suave
      });
    }
  }