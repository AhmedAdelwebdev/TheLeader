const img_path = 'src/imgs/';

$(function tailwindCss() {
  tailwind.config = { theme: { extend: { fontSize: { xs: ['0.75em'], sm: ['0.875em'], base: ['1em'], lg: ['1.125em'], xl: ['1.25em'], '2xl': ['1.5em'], '3xl': ['1.875em'] } } } };
  $('body').css('font-size', !!window.chrome && (navigator.userAgent.indexOf("Edge") === -1) ? '18px' : (typeof InstallTrigger !== 'undefined' ? '12px' : '14px'));
})

$(function Header() {
  // Loading & Menu
  $('main').before(` 
    <!-- Loading --> 
    <div class="loading flex-center"></div>
    <!-- Menu --> 
    <nav class="Menu fixed z-20 left-0 right-0 bottom-0 p-3 sm:p-4 bg-white flex gap-4 text-gray-700 text-xs sm:text-sm font-medium shadow shadow-gray-400 *:flex *:grow *:flex-col *:sm:flex-row *:gap-1.5 *:sm:gap-4 *:items-center *:justify-center *:group"> 
      <a href="index.html" class="load hover:text-blue-500"> 
        <i class="fas fa-home text-lg group-hover:text-blue-500"></i>
        <span class="group-hover:text-blue-500">الرئيسية</span>
      </a> 
      <a href="gallery.html" class="load hover:text-blue-500">
        <i class="fas fa-image text-lg group-hover:text-blue-500"></i>
        <span class="group-hover:text-blue-500">المعرض</span>
      </a>  
      <a href="#about" class="load hover:text-blue-500" onclick="$('#about').fadeToggle()">
        <i class="fas fa-users text-lg group-hover:text-blue-500"></i>
        <span class="group-hover:text-blue-500">من نحن</span>
      </a>
      <a href="#footer" class="load hover:text-blue-500"> 
        <i class="fas fa-phone text-lg group-hover:text-blue-500"></i>
        <span class="group-hover:text-blue-500">اتصل بنا</span> 
      </a>
    </nav>
  `) 
})

$(function Footer() {
  // About & Footer 
  $('main').after(`
    <!-- about Section -->
    <section id="about" class="hidden fixed inset-0 z-20 bg-black bg-opacity-50 flex-center overflow-auto">   
      <div class="relative bg-white p-6 pb-24 shadow-lg w-screen sm:w-[90vw] sm:max-h-[85vh] sm:rounded-2xl sm:mx-auto sm:my-10 overflow-auto">
        <!-- Close button -->
        <button onclick="$('#about').fadeOut()" class="absolute top-3 left-4 text-gray-500 hover:text-gray-800 text-xl font-bold"> ✖ </button>
        <!-- the address --> 
        <div class="border-b-2 border-gray-300 pb-4">
          <label class="text-2xl md:text-3xl text-blue-500">من نحن</label>
        </div> 
        <!-- Content --> 
        <div class="mt-3 text-gray-700 text-xl md:text-2xl leading-relaxed text-gray-600 *:mt-6"> 
          <h2 class="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl mb-4">أحمد وعبد الرحمن</h2>
          <p>إحنا فريق واحد، حلمنا كبير، نعمل تصاميم تميزك وتخليك دايمًا في الصورة. بدأنا من الكلية وكل خطوة أخدناها كانت شغف وإبداع من القلب.</p>
          <p>إحنا مش بس بنصمم، إحنا بنخلق لحظات بتفضل في البال، بنحول الأفكار لصور بتتكلم وتوصل المعنى بشكل واضح وبسيط. لو فكرتك لسه في دماغك، إحنا هنا نطلعها لعمل فني يخطف الأنظار.</p>
          <p>من تصميم الإعلانات اللي بتخلي الناس توقف وتتفرج، للوجوهات اللي بتعبّر عن الهوية، وكروت الدعوة اللي بتضيف لمسة من الفخامة لكل مناسبة. بنستخدم أحدث الأدوات والتقنيات علشان نوصل لكل تفاصيل التصميم بأعلى جودة وأقل تكلفة.</p>
          <p><span class="font-bold text-blue-600">عبد الرحمن</span> هو المبدع اللي دايمًا بيدور على الجمال في التفاصيل، و<span class="font-bold text-blue-600">أحمد</span> المصمم والمبرمج اللي بيحول الأفكار لواقع بأعلى دقة. الموقع ده هو نتيجة شغلنا مع بعض، بيعكس البساطة والجمال في تصميم واحد، وبيجمع بين الفن والإبداع مع التكنولوجيا علشان نقدم لك أفضل تجربة.</p>
          <p>لو عايز تصاميم تضيف قيمة لمشروعك أو لحظاتك الخاصة، إحنا هنا علشان نسمعك ونحول فكرتك لعمل يخلّي الناس تفتكرها. هدفنا نبني معاك قصة تفضل دايمًا في الذاكرة، ونخلي علامتك التجارية ليها طابع خاص يبقى فريد.</p>
        </div>
      </div>
    </section>
    
    <footer id="footer" class="bg-gray-900 text-white pt-16 pb-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <!-- Website Name and Description -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold mb-4">The Leader</h2>
          <p class="text-xl text-gray-300 mb-6 sm:mx-10">نصمم إعلاناتك بإبداع واحترافية ، تواصل معنا للحصول على تصميماتك الفريدة.</p>
        </div>
      </div>
      <!-- Contact Sections -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Abdul Rahman Contact Section -->
        <div class="text-center border-t border-gray-700 py-6">
          <h3 class="text-2xl font-semibold mb-4">تواصل مع عبد الرحمن</h3>
          <div class="flex justify-center gap-8 sm:gap-10 text-xl">
            <a href="https://wa.me/+201551279779" target="_blank" class="text-green-500 hover:text-green-400"><i class="fab fa-whatsapp"></i> واتساب</a>
            <a href="https://t.me/+201551279779" target="_blank" class="text-blue-500 hover:text-blue-400"><i class="fab fa-telegram"></i> تليجرام</a>
          </div> 
        </div>
        <!-- Ahmed Contact Section -->
        <div class="text-center border-t border-gray-700 pt-6">
          <h3 class="text-2xl font-semibold mb-4">تواصل مع أحمد</h3>
          <div class="flex justify-center gap-8 sm:gap-10 text-xl">
            <a href="https://wa.me/+201556518583" target="_blank" class="text-green-500 hover:text-green-400"><i class="fab fa-whatsapp"></i> واتساب </a>
            <a href="https://t.me/+201556518583" target="_blank" class="text-blue-500 hover:text-blue-400"><i class="fab fa-telegram"></i> تليجرام </a>
          </div>
        </div> 
      </div>
      <!-- Copyright Section -->
      <div class="w-full text-center border-t border-gray-700 pt-6 text-gray-400 text-sm mt-6">
        <p>© 2024 جميع الحقوق محفوظة.<br> تصميم وتطوير أحمد وعبد الرحمن.</p>
      </div>
    </footer>
  `); 
})

$(function Details() {
  // Show Details Design 
  $('body').append(`
    <div class="overlay hidden fixed inset-0 bg-black bg-opacity-70 z-50"> 
      <div class="details-container absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl sm:rounded-3xl p-3 shadow-lg relative w-11/12 md:w-4/5 text-center overflow-auto max-h-[90vh] sm:flex">
        <div class="imgContent relative rounded-2xl sm:w-1/2 overflow-hidden shadow-md transition-all">
          <img src="${img_path}/watermark.jpg" class="mainImg w-full h-full object-cover rounded-2xl">
          <img src="${img_path}/watermark.jpg" class="watermark">
        </div>
        <div class="text-center p-4 mx-auto max-h-full overflow-auto"> 
          <h1 class="font-bold text-lg md:text-2xl text-blue-500">اطلب مثل هذا التصميم الان</h1>  
          <div class="grid grid-cols-1 gap-8">
            <!-- Abdul Rahman Contact Section -->
            <div class="text-center mt-4 pt-6 border-t border-gray-300">
              <h3 class="text-xl font-semibold mb-4">تواصل مع عبد الرحمن</h3>
              <div class="flex justify-center gap-8 sm:gap-10 text-xl">
                <a href="https://wa.me/+201551279779" target="_blank" class="text-green-500 hover:text-green-400"><i class="fab fa-whatsapp"></i> واتساب </a>
                <a href="https://t.me/+201551279779" target="_blank" class="text-blue-500 hover:text-blue-400"> <i class="fab fa-telegram"></i> تليجرام </a>              
              </div> 
            </div>
            <!-- Ahmed Contact Section --> 
            <div class="text-center pt-6 border-t border-gray-300">
              <h3 class="text-xl font-semibold mb-4">تواصل مع أحمد</h3>
              <div class="flex justify-center gap-8 sm:gap-10 text-xl">
                <a href="https://wa.me/+201556518583" target="_blank" class="text-green-500 hover:text-green-400"><i class="fab fa-whatsapp"></i> واتساب</a>
                <a href="https://t.me/+201556518583" target="_blank" class="text-blue-500 hover:text-blue-400"><i class="fab fa-telegram"></i> تليجرام</a>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  `);
}) 

$(function protect() {
  $('a.load').click(()=> { 
    $('.loading').fadeIn(0); 
    setTimeout(()=> $('.loading').fadeOut(), 400);
  });
  $(window).on('popstate', () => { if (location.hash !== '#about') $('#about').fadeOut()}); 
  
  $(document).on('contextmenu', function(e) { e.preventDefault() });
  $(document).keydown(function(e) { 
    if (e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'Shift')) e.preventDefault();
  }); 
}) 

// Services =================================

let Services = [
  {
    icon: "fa-bullhorn",
    title: "إعلانات لعلامتك التجارية",
    description: "تصميم إعلانات مبتكرة تعمل على تعزيز وجود علامتك التجارية والوصول إلى جمهورك المستهدف."
  },
  {
    icon: "fa-pencil-alt",
    title: "شعارات احترافية",
    description: "نقدم لك شعارات مميزة وفريدة تعكس هوية علامتك التجارية بدقة."
  },
  {
    icon: "fa-gift",
    title: "كروت دعوة مميزة",
    description: "كروت دعوة فاخرة ومصممة خصيصًا لمناسباتك الخاصة، تضفي لمسة أنيقة وفريدة."
  },
  {
    icon: "fa-comments",
    title: "التواصل مع المصممين",
    description: "يمكنك التحدث مباشرة مع المصممين للحصول على التعديلات التي تريدها في تصميمك."
  }
];

$(function displayService() {
  $("#Serveces").html(Services.map((serv, i) => `
    <li class="hover:border-${i % 2 ?"red":"blue"}-500 hover:shadow-lg">
      <div class="flex-center">
        <i class="fas ${serv.icon} bg-${i % 2 ?"red":"blue"}-500 shrink-0 text-xl w-14 h-14 flex items-center justify-center text-white rounded-full mb-4"></i>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">${serv.title}</h3>
      </div> 
      <p class="text-gray-600">${serv.description}</p> 
    </li>`).join("\n")
  );
})
 
// Sections ==================================

function htmlPro(pro) { 
  return ` 
  <li class="pro overflow-hidden group relative cursor-pointer">
    <div class="imgContent relative rounded-3xl overflow-hidden shadow-md transition-all">
      <img src="${img_path + pro.srcImg}" onerror="$(this).parent().parent().remove()" class="w-full hover:scale-105 transition-all duration-300">
      <img src="${img_path}/watermark.jpg" class="watermark">
    </div>
    <p class="title text-gray-700 p-3 font-bold">${pro.title}</p>
  </li>`;
}

$(function proDetails() { 
  $(document).on('click', '.pro', function () {
    let imgSrc = $(this).find('img').attr('src'); 
    $('.overlay').fadeIn(300).find('.mainImg').attr('src', imgSrc);
  }); 
  $('.overlay').click(() => $('.overlay').fadeOut(300));
}) 

async function fetchWithRetry(url, maxRetries = 3) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      setTimeout(()=> { 
        $('body').animate({'opacity': 1}, 1000);
        setTimeout(()=> $('.loading').fadeOut(), 600);
      }, 600);
      return await response.json();
    } catch (error) { 
      attempt++;
      console.warn(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt >= maxRetries) $('#AllSections').html('<p class="text-red-500">حدث خطأ أثناء تحميل البيانات. يرجى <b onclick="location.reload()">إعادة تحميل الصفحة</b></p>'); 
    }
  }
}

async function displaySections() {
  try {
    let isHomePage = $('title').text().includes('The Leader');
    let imgNum = ($(window).width() <= 600 ? 2 : Math.min(4, Math.floor($(window).width() / 260)));

    let data = await fetchWithRetry('src/sections.json', 3);
    let Sections = data.data;
    $("#searchCatigory").html(""); 
    // Content building
    let content = Sections.map((sect, sectIndex) => {
      if (location.href.includes('gallery.html')) {
        $("#searchCatigory").append(`<li class="hover:bg-blue-200"><a href="#section${sectIndex}">${sect.category}</a></li>`);
      }
      return `
      <section>
        <div class="flex items-center justify-between gap-4 *:whitespace-nowrap overflow-auto">
          <label class="text-2xl md:text-3xl text-blue-500">${sect.category}</label>
          ${!isHomePage ?  
          '<i class="fas fa-chevron-down text-gray-500 text-lg"></i>' :  
          `<a href="gallery.html#section${sectIndex}" class="text-lg md:text-xl text-gray-600 hover:text-black">عرض الكل</a>` }
        </div> 
        <ul id="section${sectIndex}" class="grid my-4 gap-4 md:gap-8 pt-6 border-t-2 border-gray-300">
          ${sect.items.slice(0, isHomePage ? imgNum : sect.items.length).map(pro => htmlPro(pro)).join("\n")} 
        </ul>
      </section>`;
    }).join('\n');
    // Show content on page 
    $('#AllSections').html(content);
  } catch (error) {
    $('body').animate({'opacity': 1});
    setTimeout(()=> $('.loading').fadeOut(), 1000);
    console.error('Error fetching or displaying sections:', error);
    $('#AllSections').html('<p class="text-center text-lg sm:text-xl text-red-500">حدث خطأ أثناء تحميل البيانات. يرجى <u><b onclick="location.reload()">إعادة تحميل الصفحة</b><u></p>'); }
}
displaySections() 


function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

$(window).on('resize', debounce(displaySections, 300));
$(window).on('scroll', () => {
  var video = document.getElementById('video');
  var rect = video.getBoundingClientRect();
   if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
     if (video.paused) video.play();
   } else {if (!video.paused) video.pause();}
}); 