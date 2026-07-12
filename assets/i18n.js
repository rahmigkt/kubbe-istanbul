// KUBBE İSTANBUL — çoklu dil (i18n) sistemi
const LANGS = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ar', label: 'AR', name: 'العربية' },
  { code: 'es', label: 'ES', name: 'Español' }
];

const UI_STRINGS = {
  nav_shoots:    { tr:'Çekimler', en:'Shoots', fr:'Séances', ar:'الجلسات', es:'Sesiones' },
  nav_gallery:   { tr:'Galeri', en:'Gallery', fr:'Galerie', ar:'المعرض', es:'Galería' },
  nav_about:     { tr:'Hakkımızda', en:'About', fr:'À propos', ar:'من نحن', es:'Nosotros' },
  nav_whatsapp:  { tr:'WhatsApp', en:'WhatsApp', fr:'WhatsApp', ar:'واتساب', es:'WhatsApp' },
  nav_reserve:   { tr:'Rezervasyon', en:'Reserve', fr:'Réserver', ar:'الحجز', es:'Reservar' },
  hero_eyebrow:  { tr:'Teras Fotoğraf Deneyimi', en:'Rooftop Photo Experience', fr:'Expérience Photo en Terrasse', ar:'تجربة تصوير على التراس', es:'Experiencia Fotográfica en Terraza' },
  hero_tagline_default: { tr:"İstanbul'u, Kendi Hikayesinden Dinleyin", en:'Listen to Istanbul Tell Its Own Story', fr:"Écoutez Istanbul Raconter Sa Propre Histoire", ar:'استمع إلى إسطنبول وهي تروي حكايتها', es:'Escucha a Estambul Contar Su Propia Historia' },
  hero_sub:      { tr:'Galata Kulesi ve Süleymaniye manzaralı özel teraslarımızda, uçuşan elbiseler ve martılar eşliğinde unutulmaz bir kare.', en:'On our private terraces overlooking Galata Tower and Süleymaniye, an unforgettable frame with flying dresses and seagulls.', fr:'Sur nos terrasses privées avec vue sur la tour de Galata et Süleymaniye, un instant inoubliable avec des robes volantes et des mouettes.', ar:'على تراساتنا الخاصة المطلة على برج غلطة والسليمانية، لقطة لا تُنسى مع فساتين طائرة وطيور نورس.', es:'En nuestras terrazas privadas con vistas a la Torre Gálata y Süleymaniye, un instante inolvidable con vestidos voladores y gaviotas.' },
  hero_cta_explore: { tr:'Çekimleri Keşfet →', en:'Explore Shoots →', fr:'Découvrir les Séances →', ar:'استكشف الجلسات ←', es:'Explorar Sesiones →' },
  hero_cta_reserve: { tr:'Rezervasyon Al', en:'Reserve Now', fr:'Réserver', ar:'احجز الآن', es:'Reservar Ahora' },
  about_eyebrow: { tr:'Hakkımızda', en:'About Us', fr:'À Propos', ar:'من نحن', es:'Sobre Nosotros' },
  specs_location_label: { tr:'Lokasyon', en:'Location', fr:'Lieu', ar:'الموقع', es:'Ubicación' },
  specs_location_value: { tr:'Galata · Süleymaniye', en:'Galata · Süleymaniye', fr:'Galata · Süleymaniye', ar:'غلطة · السليمانية', es:'Gálata · Süleymaniye' },
  specs_costume_label: { tr:'Kostüm', en:'Costume', fr:'Costume', ar:'الزي', es:'Vestuario' },
  specs_costume_value: { tr:'Stüdyodan Temin Edilir', en:'Provided by the Studio', fr:'Fourni par le Studio', ar:'يوفره الاستوديو', es:'Proporcionado por el Estudio' },
  specs_duration_label: { tr:'Süre', en:'Duration', fr:'Durée', ar:'المدة', es:'Duración' },
  specs_duration_value: { tr:'30-60 Dakika', en:'30-60 Minutes', fr:'30-60 Minutes', ar:'30-60 دقيقة', es:'30-60 Minutos' },
  specs_booking_label: { tr:'Rezervasyon', en:'Booking', fr:'Réservation', ar:'الحجز', es:'Reserva' },
  specs_booking_value: { tr:'Instagram · WhatsApp', en:'Instagram · WhatsApp', fr:'Instagram · WhatsApp', ar:'إنستغرام · واتساب', es:'Instagram · WhatsApp' },
  shoots_eyebrow: { tr:'Çekimler', en:'Shoots', fr:'Séances', ar:'الجلسات', es:'Sesiones' },
  shoots_heading: { tr:'İki teras, sayısız kare', en:'Two Terraces, Endless Frames', fr:'Deux Terrasses, Des Instants Infinis', ar:'تراسان، لقطات لا تُحصى', es:'Dos Terrazas, Instantes Infinitos' },
  shoots_loading: { tr:'Çekimler yükleniyor…', en:'Loading shoots…', fr:'Chargement des séances…', ar:'جارٍ التحميل…', es:'Cargando sesiones…' },
  shoots_see_all: { tr:'Tüm çekimler için bir kategori seçin', en:'Choose a category to see all shoots', fr:'Choisissez une catégorie pour voir toutes les séances', ar:'اختر فئة لعرض جميع الجلسات', es:'Elige una categoría para ver todas las sesiones' },
  shoots_view: { tr:'Çekimleri Gör →', en:'View Shoots →', fr:'Voir les Séances →', ar:'عرض الجلسات ←', es:'Ver Sesiones →' },
  gallery_eyebrow: { tr:'Galeri', en:'Gallery', fr:'Galerie', ar:'المعرض', es:'Galería' },
  gallery_heading: { tr:'Rotadan kareler', en:'Frames from the Route', fr:"Instantanés du Parcours", ar:'لقطات من الرحلة', es:'Instantáneas del Recorrido' },
  video_eyebrow: { tr:'Video', en:'Video', fr:'Vidéo', ar:'فيديو', es:'Video' },
  video_heading: { tr:'Hareket halinde İstanbul', en:'Istanbul in Motion', fr:'Istanbul en Mouvement', ar:'إسطنبول في حركة', es:'Estambul en Movimiento' },
  contact_eyebrow: { tr:'İletişim', en:'Contact', fr:'Contact', ar:'تواصل معنا', es:'Contacto' },
  contact_heading: { tr:'Programınızı birlikte planlayalım', en:"Let's Plan Your Session Together", fr:'Planifions Votre Séance Ensemble', ar:'لنخطط لجلستك معًا', es:'Planifiquemos Tu Sesión Juntos' },
  contact_lead: { tr:'Çekimlerimiz kişiye ve gruba özel olarak planlanır. Tarih, süre ve lokasyon tercihlerinizi bize iletin.', en:'Our shoots are planned individually for each person or group. Share your preferred date, duration, and location with us.', fr:'Nos séances sont planifiées individuellement pour chaque personne ou groupe. Indiquez-nous vos préférences de date, durée et lieu.', ar:'يتم التخطيط لجلساتنا بشكل خاص لكل شخص أو مجموعة. أخبرنا بتفضيلاتك للتاريخ والمدة والموقع.', es:'Nuestras sesiones se planifican de forma individual para cada persona o grupo. Cuéntanos tu fecha, duración y ubicación preferidas.' },
  contact_reserve_btn: { tr:'Rezervasyon Formu →', en:'Reservation Form →', fr:'Formulaire de Réservation →', ar:'نموذج الحجز ←', es:'Formulario de Reserva →' },
  loc_office: { tr:'Ofis', en:'Office', fr:'Bureau', ar:'المكتب', es:'Oficina' },
  loc_phone: { tr:'Telefon', en:'Phone', fr:'Téléphone', ar:'الهاتف', es:'Teléfono' },
  card_instagram: { tr:'Instagram', en:'Instagram', fr:'Instagram', ar:'إنستغرام', es:'Instagram' },
  card_phone: { tr:'Telefon', en:'Phone', fr:'Téléphone', ar:'الهاتف', es:'Teléfono' },
  card_whatsapp: { tr:'WhatsApp', en:'WhatsApp', fr:'WhatsApp', ar:'واتساب', es:'WhatsApp' },
  card_whatsapp_send: { tr:'Mesaj Gönder →', en:'Send Message →', fr:'Envoyer un Message →', ar:'إرسال رسالة ←', es:'Enviar Mensaje →' },
  footer_tagline: { tr:'Teras Fotoğraf Deneyimi', en:'Rooftop Photo Experience', fr:'Expérience Photo en Terrasse', ar:'تجربة تصوير على التراس', es:'Experiencia Fotográfica en Terraza' },
  breadcrumb_home: { tr:'Ana Sayfa', en:'Home', fr:'Accueil', ar:'الرئيسية', es:'Inicio' },
  spec_duration: { tr:'Süre', en:'Duration', fr:'Durée', ar:'المدة', es:'Duración' },
  spec_group: { tr:'Grup Büyüklüğü', en:'Group Size', fr:'Taille du Groupe', ar:'حجم المجموعة', es:'Tamaño del Grupo' },
  spec_language: { tr:'Dil', en:'Language', fr:'Langue', ar:'اللغة', es:'Idioma' },
  reserve_this_shoot: { tr:'Bu Çekim İçin Rezervasyon Yap →', en:'Reserve This Shoot →', fr:'Réserver Cette Séance →', ar:'احجز هذه الجلسة ←', es:'Reservar Esta Sesión →' },
  not_found_category: { tr:'Kategori bulunamadı', en:'Category not found', fr:'Catégorie introuvable', ar:'الفئة غير موجودة', es:'Categoría no encontrada' },
  not_found_category_body: { tr:'Bu kategori mevcut değil', en:'This category does not exist', fr:"Cette catégorie n'existe pas", ar:'هذه الفئة غير موجودة', es:'Esta categoría no existe' },
  empty_category: { tr:'Bu kategoride henüz çekim eklenmedi — yakında', en:'No shoots added to this category yet — coming soon', fr:'Aucune séance ajoutée à cette catégorie — bientôt disponible', ar:'لم تُضَف جلسات لهذه الفئة بعد — قريبًا', es:'Aún no se han añadido sesiones a esta categoría — próximamente' },
  not_found_shoot: { tr:'Çekim bulunamadı.', en:'Shoot not found.', fr:'Séance introuvable.', ar:'الجلسة غير موجودة.', es:'Sesión no encontrada.' },
  not_exist_shoot: { tr:'Bu çekim mevcut değil.', en:'This shoot does not exist.', fr:"Cette séance n'existe pas.", ar:'هذه الجلسة غير موجودة.', es:'Esta sesión no existe.' },
  form_title: { tr:'Çekiminizi Ayırtın', en:'Book Your Shoot', fr:'Réservez Votre Séance', ar:'احجز جلستك', es:'Reserva Tu Sesión' },
  form_lead: { tr:'Formu doldurun, size Instagram veya WhatsApp üzerinden en kısa sürede dönüş yapalım. Tarih kesinleşmemişse tahmini bilgi de yeterli.', en:"Fill out the form and we'll get back to you via Instagram or WhatsApp as soon as possible. An estimated date is fine if it's not confirmed yet.", fr:"Remplissez le formulaire et nous vous répondrons via Instagram ou WhatsApp dès que possible. Une date approximative suffit si elle n'est pas encore confirmée.", ar:'املأ النموذج وسنرد عليك عبر إنستغرام أو واتساب في أقرب وقت ممكن. يكفي تاريخ تقريبي إذا لم يكن مؤكدًا بعد.', es:'Completa el formulario y te responderemos por Instagram o WhatsApp lo antes posible. Una fecha estimada es suficiente si aún no está confirmada.' },
  form_name: { tr:'Ad Soyad', en:'Full Name', fr:'Nom Complet', ar:'الاسم الكامل', es:'Nombre Completo' },
  form_email: { tr:'E-posta', en:'Email', fr:'E-mail', ar:'البريد الإلكتروني', es:'Correo Electrónico' },
  form_phone: { tr:'Telefon', en:'Phone', fr:'Téléphone', ar:'الهاتف', es:'Teléfono' },
  form_date: { tr:'Tercih Edilen Tarih', en:'Preferred Date', fr:'Date Préférée', ar:'التاريخ المفضل', es:'Fecha Preferida' },
  form_shoot: { tr:'İlgilendiğiniz Çekim', en:'Shoot of Interest', fr:'Séance Souhaitée', ar:'الجلسة المطلوبة', es:'Sesión de Interés' },
  form_shoot_placeholder: { tr:'Seçiniz (opsiyonel)', en:'Select (optional)', fr:'Sélectionner (facultatif)', ar:'اختر (اختياري)', es:'Seleccionar (opcional)' },
  form_group_size: { tr:'Kişi Sayısı', en:'Number of People', fr:'Nombre de Personnes', ar:'عدد الأشخاص', es:'Número de Personas' },
  form_message: { tr:'Mesajınız', en:'Your Message', fr:'Votre Message', ar:'رسالتك', es:'Tu Mensaje' },
  form_submit: { tr:'Rezervasyon Talebi Gönder →', en:'Send Reservation Request →', fr:'Envoyer la Demande →', ar:'إرسال طلب الحجز ←', es:'Enviar Solicitud de Reserva →' },
  form_whatsapp_btn: { tr:'WhatsApp ile Gönder →', en:'Send via WhatsApp →', fr:'Envoyer via WhatsApp →', ar:'إرسال عبر واتساب ←', es:'Enviar por WhatsApp →' },
  form_sending: { tr:'Gönderiliyor…', en:'Sending…', fr:'Envoi en cours…', ar:'جارٍ الإرسال…', es:'Enviando…' },
  form_success: { tr:'Talebiniz alındı, teşekkürler! En kısa sürede dönüş yapacağız.', en:"Your request has been received, thank you! We'll get back to you soon.", fr:'Votre demande a été reçue, merci ! Nous vous répondrons bientôt.', ar:'تم استلام طلبك، شكرًا لك! سنرد عليك قريبًا.', es:'¡Tu solicitud ha sido recibida, gracias! Te responderemos pronto.' },
  form_error: { tr:'Bir sorun oluştu, lütfen tekrar deneyin.', en:'Something went wrong, please try again.', fr:'Une erreur est survenue, veuillez réessayer.', ar:'حدث خطأ، يرجى المحاولة مرة أخرى.', es:'Ocurrió un error, por favor inténtalo de nuevo.' },
  form_conn_error: { tr:'Bağlantı hatası, lütfen tekrar deneyin.', en:'Connection error, please try again.', fr:'Erreur de connexion, veuillez réessayer.', ar:'خطأ في الاتصال، يرجى المحاولة مرة أخرى.', es:'Error de conexión, por favor inténtalo de nuevo.' },
  form_whatsapp_need_name: { tr:'WhatsApp ile göndermek için en azından Ad Soyad alanını doldurun.', en:'Please fill in at least the Full Name field to send via WhatsApp.', fr:'Veuillez remplir au moins le champ Nom Complet pour envoyer via WhatsApp.', ar:'يرجى تعبئة حقل الاسم الكامل على الأقل للإرسال عبر واتساب.', es:'Por favor completa al menos el campo Nombre Completo para enviar por WhatsApp.' }
};

function getLang(){
  return localStorage.getItem('kubbe_lang') || 'tr';
}
function setLang(code){
  localStorage.setItem('kubbe_lang', code);
  location.reload();
}
function langSuffix(lang){
  return lang === 'tr' ? '' : '_' + lang;
}
// site_content (key/value) tablosundan, dile göre uygun değeri al (çeviri yoksa Türkçe'ye düşer)
function scValue(map, baseKey, lang){
  const suf = langSuffix(lang);
  return (suf && map[baseKey + suf]) || map[baseKey] || '';
}
// categories/tours/videos gibi sütunlu tablolardan, dile göre uygun sütunu al
function colValue(row, baseCol, lang){
  const suf = langSuffix(lang);
  return (suf && row[baseCol + suf]) || row[baseCol] || '';
}
function t(key){
  const lang = getLang();
  const entry = UI_STRINGS[key];
  if (!entry) return key;
  return entry[lang] || entry.tr || key;
}
function applyStaticTranslations(){
  const lang = getLang();
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
}
function renderLangSwitcher(containerId){
  const el = document.getElementById(containerId);
  if (!el) return;
  const current = getLang();
  el.innerHTML = LANGS.map(l =>
    '<button class="lang-btn'+(l.code===current?' active':'')+'" data-lang="'+l.code+'">'+l.label+'</button>'
  ).join('');
  el.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}
