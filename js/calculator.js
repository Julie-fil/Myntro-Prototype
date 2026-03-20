(function () {
  var grid = document.getElementById('product-grid');
  if (!grid) return;

  var NAVY = '#162033';
  var MIN_AMOUNT = 5000;
  var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });

  var PRODUCTS = [
    { id: 'card-1', rate: 0.0245, rateLabel: '2.45', termYears: 1, descriptionLine: 'Interest rate - flexible deposit', tags: ['EU deposit guarantee'] },
    { id: 'card-2', rate: 0.025, rateLabel: '2.50', termYears: 3, descriptionLine: '3-Year special · Solid growth.', tags: ['Locked for 3 years', 'Compounded annually'] },
    { id: 'card-3', rate: 0.026, rateLabel: '2.60', termYears: 4, descriptionLine: '4-Year special · Max growth.', tags: ['Locked for 4 years', 'Compounded annually'] },
  ];

  var selectedId = 'card-2';
  var amount = 50000;
  var amountFocused = false;

  function parseCurrencyInput(s) {
    var cleaned = String(s).replace(/[^0-9.]/g, '');
    var n = parseFloat(cleaned);
    return isNaN(n) ? 0 : n;
  }

  function formatCurrencyInput(value) {
    return formatter.format(value);
  }

  function selectedProduct() {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === selectedId) return PRODUCTS[i];
    }
    return PRODUCTS[1];
  }

  function calculate() {
    var p = selectedProduct();
    var P = amount;
    var total = P * Math.pow(1 + p.rate, p.termYears);
    var interest = total - P;
    return { total: total, interest: interest };
  }

  function renderProducts() {
    grid.innerHTML = PRODUCTS.map(function (product) {
      var isSel = product.id === selectedId;
      return (
        '<button type="button" role="listitem" data-id="' + product.id + '" class="cursor-pointer rounded-2xl border bg-white p-6 text-left shadow-sm transition-colors ' +
        (isSel ? 'border-2' : 'border border-slate-200/80') + '" style="' + (isSel ? 'border-color:' + NAVY : '') + '">' +
        '<div class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white" aria-hidden="true">' +
        '<svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg></div>' +
        '<div class="mb-3 flex flex-wrap items-baseline gap-x-1">' +
        '<span class="text-3xl font-bold tabular-nums sm:text-[2rem]" style="color:' + NAVY + '">' + product.rateLabel + '</span>' +
        '<span class="text-lg font-semibold text-slate-400">%</span> <span class="text-sm font-semibold text-slate-400">p.a.</span>' +
        '<svg class="ml-auto h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>' +
        '<p class="mb-6 text-sm text-slate-500">' + product.descriptionLine + '</p>' +
        '<div class="flex flex-col gap-2 border-t border-slate-200/80 pt-4">' +
        product.tags.map(function (t) {
          return '<span class="inline-flex w-fit items-center rounded-full bg-[#e8e8e8] px-4 py-2 text-[11px] font-medium text-navy">' + t + '</span>';
        }).join('') +
        '</div></button>'
      );
    }).join('');

    grid.querySelectorAll('button[data-id]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedId = btn.getAttribute('data-id');
        renderProducts();
        updateResults();
      });
    });
  }

  var amountInput = document.getElementById('amount-input');
  document.getElementById('min-hint').textContent = 'Minimum ' + formatter.format(MIN_AMOUNT);

  function updateResults() {
    var r = calculate();
    document.getElementById('total-value').textContent = formatter.format(r.total);
    document.getElementById('interest-pill').textContent = 'Interest earned: ' + formatter.format(r.interest);
    if (!amountFocused) {
      amountInput.value = formatCurrencyInput(amount);
    }
  }

  amountInput.addEventListener('focus', function () {
    amountFocused = true;
    amountInput.value = String(amount);
  });
  amountInput.addEventListener('blur', function () {
    amountFocused = false;
    amount = Math.max(MIN_AMOUNT, amount);
    updateResults();
  });
  amountInput.addEventListener('input', function (e) {
    var v = parseCurrencyInput(e.target.value);
    if (e.target.value === '') return;
    amount = Math.max(0, v);
    updateResults();
  });

  renderProducts();
  updateResults();
})();
