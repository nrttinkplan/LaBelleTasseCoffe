# La Belle Tasse

Modern bir kafe için hazırlanmış, dinamik içerik yönetimi sağlayan web sitesi.

## Özellikler

- Dinamik menü ve blog yönetimi (Firebase Firestore ile)
- Admin paneli (korumalı giriş)
- Rezervasyon ve iletişim formları
- Modern ve mobil uyumlu tasarım (Tailwind CSS)
- Animasyonlar ve kullanıcı dostu arayüz

## Kullanılan Teknolojiler

- React
- Vite
- Firebase
- Tailwind CSS
- Framer Motion

## Kurulum

1. Bu repoyu klonlayın:
   ```sh
   git clone https://github.com/kullanici-adi/LaBelleTasse.git
   cd LaBelleTasse
   ```

2. Bağımlılıkları yükleyin:
   ```sh
   npm install
   ```

3. Proje kök dizinine bir `.env` dosyası oluşturun ve aşağıdaki gibi doldurun:
   ```properties
   VITE_FIREBASE_API_KEY="YOUR_API_KEY"
   VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
   VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
   VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
   VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
   VITE_FIREBASE_APP_ID="YOUR_APP_ID"
   ```

4. Uygulamayı başlatın:
   ```sh
   npm run dev
   ```

## Katkı

Katkıda bulunmak için lütfen bir fork oluşturun ve pull request gönderin.
