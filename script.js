function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function loadPreference(key) {
  return localStorage.getItem(key);
}

function animateButton(button) {
  button.classList.add('animate-pulse');
  
  setTimeout(() => {
    button.classList.remove('animate-pulse');
  }, 600); 
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('magicButton');

const savedText = loadPreference('buttonText');
  if (savedText) {
    btn.textContent = savedText;
  }

  btn.addEventListener('click', () => {
    animateButton(btn);
    savePreference('buttonText', 'You clicked me!'); 
    btn.textContent = 'You clicked me!';
  });
});
