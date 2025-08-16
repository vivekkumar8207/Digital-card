// WhatsApp Button
document.getElementById('whatsappBtn').onclick = function() {
  window.open('https://wa.me/919988776655?text=Namaste,%20main%20aapse%20business%20connect%20karna%20chahta%20hoon!', '_blank');
  incrementClicks();
};
// UPI Payment Button
document.getElementById('paymentBtn').onclick = function() {
  window.open('upi://pay?pa=YOURUPIID@okicici&am=50000', '_blank'); // 50k UPI link
};
// Appointment Booking
document.getElementById('appointmentBtn').onclick = function() {
  window.open('https://calendly.com/', '_blank');
};
// Download PNG (add html2canvas for real download)
document.getElementById('downloadBtn').onclick = function() {
  alert('Aapka premium card PNG download ho raha hai! (Real code mein html2canvas add karein)');
};

// Analytics
let views = localStorage.getItem('views') || 0;
views++;
localStorage.setItem('views', views);
document.getElementById('viewCount').innerText = `👁 Views: ${views}`;

let clicks = localStorage.getItem('clicks') || 0;
function incrementClicks() {
  clicks++;
  localStorage.setItem('clicks', clicks);
  document.getElementById('clickCount').innerText = `👉 Contact Clicks: ${clicks}`;
}
document.getElementById('phone').onclick = incrementClicks;
document.getElementById('email').onclick = incrementClicks;

// Profile Image Upload
document.getElementById('profileUpload').onchange = function(e) {
  let reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('profileImg').src = reader.result;
  };
  reader.readAsDataURL(this.files[0]);
};