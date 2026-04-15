/**
 * @author Vinit Shahdeo 
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();

      // GSAP Scroll Animations
      gsap.registerPlugin(ScrollTrigger);

      // Reveal animations for sections
      gsap.utils.toArray('.gs-reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });

      // Special staggered animation for event items
      gsap.from(".event-item", {
        scrollTrigger: {
          trigger: ".events",
          start: "top 80%",
        },
        x: -30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)"
      });

      // --- CONTINUOUS LOOPING ANIMATIONS ---

      // 1. Floating effect for names
      gsap.to(".title h1", {
        y: 15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // 2. Subtle pulse for countdown blocks
      gsap.to(".block", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "center"
        }
      });

      // 3. Attention-grabbing pulse for action buttons
      gsap.to(".venue", {
        boxShadow: "0 0 20px rgba(103, 78, 167, 0.6)",
        scale: 1.03,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // 4. Floating decoration images
      gsap.to(".top-right-decoration, .top-left-decoration", {
        rotation: 5,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 5. Heartbeat effect for happiness message
      gsap.to(".happiness", {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "back.inOut(2)"
      });

})(jQuery);

// --- MULTI-LANGUAGE LOGIC ---
var currentLang = 'hi';
var translations = {
    hi: {
        btn: "English",
        groom: "प्रमोद (रोशन)",
        bride: "टीना (नैना)",
        and: "संग",
        status: "विवाह बंधन में बंध रहे हैं",
        on: "को",
        at: "स्थान:",
        date: "25 अप्रैल 2026",
        place: "झालद की ढाणी",
        city: "अचरोल, जयपुर",
        days: "दिन",
        hours: "घंटे",
        minutes: "मिनट",
        seconds: "सेकंड",
        events_title: "मांगलिक कार्यक्रम",
        e1_n: "पीले चावल", e1_d: "बुधवार, 15 अप्रैल 2026", e1_t: "सुबह 09:15 बजे",
        e2_n: "लगन", e2_d: "मंगलवार, 21 अप्रैल 2026", e2_t: "शाम 04:15 बजे",
        e3_n: "बाण सांकड़ी", e3_d: "गुरुवार, 23 अप्रैल 2026", e3_t: "सुबह 09:15 बजे",
        e4_n: "चाक", e4_d: "शुक्रवार, 24 अप्रैल 2026", e4_t: "सुबह 11:00 बजे",
        e5_n: "निकासी", e5_d: "शनिवार, 25 अप्रैल 2026", e5_t: "शाम 04:15 बजे",
        e6_n: "भात / प्रीतिभोज", e6_d: "बुधवार, 29 अप्रैल 2026", e6_t: "शाम 04:15 बजे",
        note: "<strong>नोट:</strong> बारात शनिवार, 25 अप्रैल को शाम 04:15 बजे पछया की ढाणी, चोमू से झालद की ढाणी, अचरोल, जयपुर के लिए प्रस्थान करेगी।",
        reception: "प्रीतिभोज एवं आर्शीवाद समारोह",
        btn_v: "रास्ता देखें",
        btn_d: "आमंत्रण पत्र डाउनलोड करें",
        f_msg: "हम आपके साथ अपने परिवार के इस शुभ अवसर का जश्न मनाने के लिए उत्सुक हैं!",
        f_fam: "पापटवान परिवार",
        h_msg: "हमारी खुशियों में शामिल हों!",
        bless: "विवाहित जोड़े को सुखी जीवन का आशीर्वाद दें!"
    },
    en: {
        btn: "हिंदी",
        groom: "Pramod (Roshan)",
        bride: "Teena (Naina)",
        and: "&",
        status: "Are getting married",
        on: "on",
        at: "At",
        date: "25 April 2026",
        place: "Jhalad ki Dhani",
        city: "Achrol, Jaipur",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        events_title: "Wedding Events",
        e1_n: "Peela Chawal", e1_d: "Wednesday, 15 April 2026", e1_t: "09:15 AM",
        e2_n: "Lagan", e2_d: "Tuesday, 21 April 2026", e2_t: "04:15 PM",
        e3_n: "Baan Sankadi", e3_d: "Thursday, 23 April 2026", e3_t: "09:15 AM",
        e4_n: "Chaak", e4_d: "Friday, 24 April 2026", e4_t: "11:00 AM",
        e5_n: "Nikasi", e5_d: "Saturday, 25 April 2026", e5_t: "04:15 PM",
        e6_n: "Reception / Bhaat", e6_d: "Wednesday, 29 April 2026", e6_t: "04:15 PM",
        note: "<strong>Note:</strong> Barat will leave from Pachya ki Dhani, Chomu on Saturday, April 25 at 04:15 PM for Jhalad ki Dhani, Achrol, Jaipur.",
        reception: "Dinner & Reception",
        btn_v: "SEE THE VENUE",
        btn_d: "DOWNLOAD INVITATION CARD",
        f_msg: "Can't wait to celebrate auspicious moment of our family with you!",
        f_fam: "Papatwan Family",
        h_msg: "Join us in our happiness!",
        bless: "Bless the married couple for happy life!"
    }
};

function updateLanguage(lang) {
    var t = translations[lang];
    document.getElementById("lang-btn").textContent = t.btn;
    document.getElementById("groom-name").textContent = t.groom;
    document.getElementById("bride-name").textContent = t.bride;
    document.getElementById("wed-and").textContent = t.and;
    document.getElementById("marrying-status").textContent = t.status;
    document.getElementById("wed-on").textContent = t.on;
    document.getElementById("wed-at-label").textContent = t.at;
    document.getElementById("wedding-date-text").textContent = t.date;
    document.getElementById("wedding-place").textContent = t.place;
    document.getElementById("wedding-city").textContent = t.city;
    
    document.getElementById("label-days").textContent = t.days;
    document.getElementById("label-hours").textContent = t.hours;
    document.getElementById("label-minutes").textContent = t.minutes;
    document.getElementById("label-seconds").textContent = t.seconds;
    
    document.getElementById("events-title").textContent = t.events_title;
    document.getElementById("event-1-name").textContent = t.e1_n;
    document.getElementById("event-1-date").textContent = t.e1_d;
    document.getElementById("event-1-time").textContent = t.e1_t;
    
    document.getElementById("event-2-name").textContent = t.e2_n;
    document.getElementById("event-2-date").textContent = t.e2_d;
    document.getElementById("event-2-time").textContent = t.e2_t;
    
    document.getElementById("event-3-name").textContent = t.e3_n;
    document.getElementById("event-3-date").textContent = t.e3_d;
    document.getElementById("event-3-time").textContent = t.e3_t;
    
    document.getElementById("event-4-name").textContent = t.e4_n;
    document.getElementById("event-4-date").textContent = t.e4_d;
    document.getElementById("event-4-time").textContent = t.e4_t;
    
    document.getElementById("event-5-name").textContent = t.e5_n;
    document.getElementById("event-5-date").textContent = t.e5_d;
    document.getElementById("event-5-time").textContent = t.e5_t;
    
    document.getElementById("event-6-name").textContent = t.e6_n;
    document.getElementById("event-6-date").textContent = t.e6_d;
    document.getElementById("event-6-time").textContent = t.e6_t;
    
    document.getElementById("barat-note").innerHTML = t.note;
    document.getElementById("reception-text").textContent = t.reception;
    document.getElementById("btn-venue").textContent = t.btn_v;
    document.getElementById("btn-download").textContent = t.btn_d;
    document.getElementById("footer-msg").textContent = t.f_msg;
    document.getElementById("footer-family").textContent = t.f_fam;
    document.getElementById("happiness-msg").textContent = t.h_msg;
}

function toggleLanguage() {
    currentLang = (currentLang === 'hi') ? 'en' : 'hi';
    updateLanguage(currentLang);
    // Refresh AOS/GSAP if needed, but since it's just text change, usually not required.
}

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log(currentLang === 'hi' ? 'शादी में ज़रूर आना' : 'Shaadi me zaroor aana');
});

// Set the date we're counting down to
var countDownDate = new Date("Apr 25, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result
    var daysEl = document.getElementById("days-val");
    var hoursEl = document.getElementById("hours-val");
    var minutesEl = document.getElementById("minutes-val");
    var secondsEl = document.getElementById("seconds-val");

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours;
    if (minutesEl) minutesEl.textContent = minutes;
    if (secondsEl) secondsEl.textContent = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = translations[currentLang].bless;
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c ' + (currentLang === 'hi' ? 'तारीख याद रखें: 25 अप्रैल, 2026!' : 'SAVE THE DATE: 25th April, 2026!'), styles);

console.log('%c' + (currentLang === 'hi' ? 'आपकी उपस्थिति प्रार्थनीय है!' : 'Your presence is requested!') + '%c\n\n' + (currentLang === 'hi' ? 'सादर: पापटवान परिवार' : 'Regards: Papatwan Family'), styles1, styles2);

console.log(
    `%c` + (currentLang === 'hi' ? 'शादी में ज़रूर आना!' : 'Shaadi me zaroor aana!') + `\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
