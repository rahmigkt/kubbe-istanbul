// KUBBE İSTANBUL — ortak Supabase istemcisi ve yardımcı fonksiyonlar
const SUPABASE_URL = "https://xcsvobtewvjlnjeyqiux.supabase.co";
const SUPABASE_KEY = "sb_publishable_yjwxxm5IaMkEi1TCugejzA__cqLpYnP";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function publicImageUrl(path) {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  const { data } = sb.storage.from("kubbe-images").getPublicUrl(path);
  return data.publicUrl;
}

// Kategori ikonları (örnek görsel yoksa yedek olarak kullanılır)
const CATEGORY_ICONS = {
  "tarihi-yarimada": '<svg viewBox="0 0 60 60"><path d="M12 50 L12 30 A18 18 0 0 1 48 30 L48 50 Z"/><line x1="8" y1="50" x2="52" y2="50"/><line x1="30" y1="12" x2="30" y2="20"/><circle cx="30" cy="9" r="2"/></svg>',
  "bogaz-turu": '<svg viewBox="0 0 60 60"><path d="M8 38 Q 16 30 24 38 T 40 38 T 56 38"/><path d="M14 46 L14 30 L30 20 L46 30 L46 46 Z"/><line x1="8" y1="46" x2="52" y2="46"/></svg>',
  "gastronomi": '<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="18"/><line x1="30" y1="12" x2="30" y2="18"/><line x1="20" y1="30" x2="40" y2="30"/><line x1="30" y1="20" x2="30" y2="40"/></svg>',
  "ozel-turlar": '<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="4"/><circle cx="30" cy="30" r="18" stroke-dasharray="4 3"/><line x1="30" y1="8" x2="30" y2="14"/></svg>',
  "default": '<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="18"/></svg>'
};

function categoryIcon(slug) {
  return CATEGORY_ICONS[slug] || CATEGORY_ICONS["default"];
}
