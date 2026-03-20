(function () {
  var faqRoot = document.getElementById('faq-root');
  if (!faqRoot) return;
  var faqs = [
    { q: 'How secure are my savings with Myntro?', a: 'Eligible deposits are covered up to €100,000 per customer under the EU Deposit Guarantee Scheme. We partner only with regulated credit institutions.' },
    { q: 'What is the difference between flexible and fixed terms?', a: 'Flexible products let you access funds according to product rules; fixed terms lock your rate for the chosen period in exchange for a higher yield.' },
    { q: 'Are there any fees?', a: 'We do not charge account management fees for standard savings products. See product sheets for any third-party charges.' },
    { q: 'How do I open an account?', a: 'Complete online registration, verify your identity digitally, and fund your account from your bank. Most customers finish in under fifteen minutes.' },
    { q: 'Can I withdraw early from a fixed term?', a: 'Early withdrawal may be restricted or subject to penalties depending on the product. Check your specific term deposit conditions before investing.' },
  ];
  faqRoot.innerHTML = faqs.map(function (item, i) {
    return (
      '<details class="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm open:shadow-md"' + (i === 0 ? ' open' : '') + '>' +
      '<summary class="flex cursor-pointer list-none items-center justify-between font-sans font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">' +
      item.q + '<svg class="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></summary>' +
      '<p class="mt-3 font-sans text-sm leading-relaxed text-slate-600">' + item.a + '</p></details>'
    );
  }).join('');
})();
