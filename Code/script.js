// Pricing toggle
document.addEventListener('DOMContentLoaded', function() {
  const btnMonthly = document.getElementById('btn-monthly');
  const btnYearly = document.getElementById('btn-yearly');
  const pricingCards = document.getElementById('pricing-cards');

  if (btnMonthly && btnYearly && pricingCards) {
    btnMonthly.addEventListener('click', function() {
      btnMonthly.classList.add('active');
      btnYearly.classList.remove('active');
      pricingCards.innerHTML = `
        <div class="card">
          <h3 class="card-title">Free Plan</h3>
          <div style="font-size:36px;font-weight:800;color:var(--accent-yellow);margin:8px 0;">$0<span style="font-size:18px;">/mo</span></div>
          <p class="card-text">Basic features, perfect to try BrainSync.</p>
        </div>
        <div class="card">
          <h3 class="card-title">Pro Plan</h3>
          <div style="font-size:36px;font-weight:800;color:var(--accent-yellow);margin:8px 0;">$49<span style="font-size:18px;">/mo</span></div>
          <p class="card-text">Unlock all AI tools, analytics, priority support.</p>
        </div>
      `;
    });

    btnYearly.addEventListener('click', function() {
      btnYearly.classList.add('active');
      btnMonthly.classList.remove('active');
      pricingCards.innerHTML = `
        <div class="card">
          <h3 class="card-title">Free Plan</h3>
          <div style="font-size:36px;font-weight:800;color:var(--accent-yellow);margin:8px 0;">$0<span style="font-size:18px;">/yr</span></div>
          <p class="card-text">Stay free forever with limited features.</p>
        </div>
        <div class="card">
          <h3 class="card-title">Pro Plan</h3>
          <div style="font-size:36px;font-weight:800;color:var(--accent-yellow);margin:8px 0;">$399<span style="font-size:18px;">/yr</span></div>
          <p class="card-text">Save 30% with yearly billing.</p>
        </div>
      `;
    });
  }
});
