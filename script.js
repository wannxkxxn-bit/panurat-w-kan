/* จดหมายรัก — รองรับทั้งคอมพิวเตอร์และโทรศัพท์ */
const mailModal = document.getElementById('mailModal');
const letter = document.getElementById('letter');
const mailHint = document.getElementById('mailHint');

function showMailPopup() {
  if (!mailModal) return;
  mailModal.classList.add('show');
  mailModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMailPopup() {
  if (!mailModal) return;
  mailModal.classList.remove('show');
  mailModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openLetter() {
  if (!letter) return;
  letter.classList.add('open');
  if (mailHint) mailHint.textContent = 'จดหมายคนเจ๋ง';
  letter.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

if (mailModal) {
  mailModal.addEventListener('click', (event) => {
    if (event.target === mailModal) closeMailPopup();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMailPopup();
});
