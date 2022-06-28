window.addEventListener('load', function () {
  let darkTheme = !!window.localStorage.getItem('darkTheme');
  
  const htmlEl = document.getElementsByTagName('html')[0];
  
  const themeDesktopButton = document.querySelector('#desktop-theme');
  const themeMobileButton = document.querySelector('#mobile-theme');
  const themeDesktopToggle = document.querySelector('#desktop-theme-toggle');
  const themeMobileToggle = document.querySelector('#mobile-theme-toggle');

  // desktop event
  themeDesktopButton.addEventListener('click', () => {
    if (darkTheme) {
      themeDesktopToggle.classList.remove('active');
      themeMobileToggle.classList.remove('active');
      window.localStorage.removeItem('darkTheme');
      htmlEl.classList.remove('dark-theme');
      darkTheme = false;
    } else {
      themeDesktopToggle.classList.add('active');
      themeMobileToggle.classList.add('active');
      window.localStorage.setItem('darkTheme', true);
      htmlEl.classList.add('dark-theme');
      darkTheme = true;
    }
  });

  // mobile event
  themeMobileButton.addEventListener('click', () => {
    if (darkTheme) {
      themeDesktopToggle.classList.remove('active');
      themeMobileToggle.classList.remove('active');
      window.localStorage.removeItem('darkTheme');
      htmlEl.classList.remove('dark-theme');
      darkTheme = false;
    } else {
      themeDesktopToggle.classList.add('active');
      themeMobileToggle.classList.add('active');
      window.localStorage.setItem('darkTheme', true);
      htmlEl.classList.add('dark-theme');
      darkTheme = true;
    }
  });

  // onstart
  if (darkTheme) {
    themeDesktopToggle.classList.add('active');
    themeMobileToggle.classList.add('active');
    htmlEl.classList.add('dark-theme');
  } else {
    themeDesktopToggle.classList.remove('active');
    themeMobileToggle.classList.remove('active');
    htmlEl.classList.remove('dark-theme');
  }
});