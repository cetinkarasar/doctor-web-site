# doctor-web-site

Op. Dr. Hüsnü Miral – Kadın Hastalıkları ve Doğum Uzmanı (Konak / İzmir) kurumsal web sitesi.

Next.js (App Router), Tailwind CSS ve lucide-react ile geliştirilmiştir. Türkçe / İngilizce dil desteği vardır.

## Geliştirme

```bash
npm install
npm run dev
```

## Yayın (Netlify)

- Build komutu: `npm run build`
- Ortam değişkeni: `NEXT_PUBLIC_SITE_URL` (ör. `https://www.drhusnumiral.com`)

## Görseller

- Hizmet görselleri: `public/images/services/` (dosya adları `src/lib/services.ts` içinde tanımlıdır; eksik olanlarda yer tutucu gösterilir)
- Karşılama görseli: `public/images/karsilama/karsilama.jpg`
- Doktor fotoğrafı: `public/images/dr-husnu-miral.jpg`
