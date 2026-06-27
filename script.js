const translations = {
    ar: {
        navTitle: "💱 المحول العالمي",
        mainTitle: "💱 المحول الذكي المرن",
        subTitle: "حوّل بين العملات ",
        labelAmount: "المبلغ:",
        labelFrom: "من:",
        labelTo: "إلى:",
        convertBtn: "احسب التحويل الآن",
        placeholder: "أدخل المبلغ هنا",
        resultDefault: "النتيجة ستظهر هنا.",
        wordEqual: "تساوي",
        alertError: "الرجاء إدخال مبلغ صحيح أكبر من الصفر"
    },
    en: {
        navTitle: "💱 Global Converter",
        mainTitle: "💱 Smart Currency Converter",
        subTitle: "Convert between currencies",
        labelAmount: "Amount:",
        labelFrom: "From:",
        labelTo: "To:",
        convertBtn: "Convert Now",
        placeholder: "Enter amount here",
        resultDefault: "Result will appear here.",
        wordEqual: "is equal to",
        alertError: "Please enter a valid amount greater than zero"
    }
};


function performConversion() {
    let amount = parseFloat(document.getElementById('amount').value);
    let from = document.getElementById('fromCurrency').value;
    let to = document.getElementById('toCurrency').value;
    let currentLang = document.getElementById('langSelect').value;

    if (isNaN(amount) || amount <= 0) {
        alert(translations[currentLang].alertError);
        return;
    }

    const ratesToMain = {
        USD: 1.0, SAR: 3.75, EUR: 0.92, GBP: 0.79, JPY: 156.50,
        CAD: 1.37, AUD: 1.51, CHF: 0.90, CNY: 7.25, AED: 3.673,
        QAR: 3.64, KWD: 0.307, OMR: 0.385, BHD: 0.376, INR: 83.50
    };

    let amountInUSD = amount / ratesToMain[from];
    let convertedAmount = amountInUSD * ratesToMain[to];
    let formattedResult = (to === "JPY" || to === "INR") ? convertedAmount.toFixed(0) : convertedAmount.toFixed(2);


    let equalWord = translations[currentLang].wordEqual;
    document.getElementById('finalResult').innerText = `${amount} ${from} ${equalWord} ${formattedResult} ${to}`;
}


function changeLanguage() {
    let lang = document.getElementById('langSelect').value;
    let html = document.getElementById('htmlTag');
    

    if (lang === 'en') {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    } else {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    }

   
    document.getElementById('navTitle').innerText = translations[lang].navTitle;
    document.getElementById('mainTitle').innerText = translations[lang].mainTitle;
    document.getElementById('subTitle').innerText = translations[lang].subTitle;
    document.getElementById('labelAmount').innerText = translations[lang].labelAmount;
    document.getElementById('amount').placeholder = translations[lang].placeholder;
    document.getElementById('labelFrom').innerText = translations[lang].labelFrom;
    document.getElementById('labelTo').innerText = translations[lang].labelTo;
    document.getElementById('convertBtn').innerText = translations[lang].convertBtn;
    document.getElementById('finalResult').innerText = translations[lang].resultDefault;
}

function swapCurrencies() {
    let fromSelect = document.getElementById('fromCurrency');
    let toSelect = document.getElementById('toCurrency');
    let temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    
    let amount = document.getElementById('amount').value;
    if(amount !== "") { performConversion(); }
}

function toggleTheme() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    let themeBtn = document.getElementById("themeToggle");
    themeBtn.innerText = body.classList.contains("dark-mode") ? "☀️" : "🌙";
}