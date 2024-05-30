 








// // banner and recent blog 

// // src/i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translation: {
       
//           "bannerText": "Embark on a journey of discovery. Explore our blog for thought-provoking content that ignites imagination and fosters personal development. Start exploring now!",
//           "recentBlog": "Recent blog",
//           "details": "Details",
//           "wishlist": "Wishlist"
//         }
//       },
//       fr: {
//         translation: {
       
//           "bannerText": "Embarquez pour un voyage de découverte. Explorez notre blog pour un contenu stimulant qui éveille l'imagination et favorise le développement personnel. Commencez à explorer maintenant !",
//           "recentBlog": "Blog récent",
//           "details": "Détails",
//           "wishlist": "Liste de souhaits"
//         }
//       },
//       bn: {
//         translation: {
      
//           "bannerText": "আবিষ্কারের একটি যাত্রায় যাত্রা শুরু করুন। উদ্ভাবনী বিষয়বস্তুর জন্য আমাদের ব্লগ অন্বেষণ করুন যা কল্পনাকে জাগিয়ে তোলে এবং ব্যক্তিগত বিকাশকে উৎসাহিত করে। এখনই অন্বেষণ শুরু করুন!",
//           "recentBlog": "সাম্প্রতিক ব্লগ",
//           "details": "বিস্তারিত",
//           "wishlist": "ইচ্ছেতালিকা"
//         }
//       },
//       hi: {
//         translation: {
         
//           "bannerText": "खोज की यात्रा पर निकलें। विचारोत्तेजक सामग्री के लिए हमारे ब्लॉग का अन्वेषण करें जो कल्पना को प्रज्वलित करती है और व्यक्तिगत विकास को बढ़ावा देती है। अभी अन्वेषण करना शुरू करें!",
//           "recentBlog": "हाल का ब्लॉग",
//           "details": "विवरण",
//           "wishlist": "इच्छा सूची"
//         }
//       }
//     },
//     fallbackLng: 'en',
//     detection: {
//       order: ['queryString', 'cookie'],
//       caches: ['cookie'],
//     },
//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

// export default i18n;



// with nav 





// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to React",
          "description": "This is a sample description",
          "bannerText": "Embark on a journey of discovery. Explore our blog for thought-provoking content that ignites imagination and fosters personal development. Start exploring now!",
          "recentBlog": "Recent blog",
          "details": "Details",
          "wishlist": "Wishlist",
          // Add translation keys for Nav component
          "nav.home": "Home",
          "nav.allBlog": "All Blog",
          "nav.addBlogs": "Add Blogs",
          "nav.featuredBlogs": "Featured Blogs",
          "nav.wishlist": "Wishlist",
          "nav.logout": "Logout",
          "nav.register": "Register",
          "nav.login": "Login"
        }
      },
      fr: {
        translation: {
          "welcome": "Bienvenue à React",
          "description": "Ceci est une description d'exemple",
          "bannerText": "Embarquez pour un voyage de découverte. Explorez notre blog pour un contenu stimulant qui éveille l'imagination et favorise le développement personnel. Commencez à explorer maintenant !",
          "recentBlog": "Blog récent",
          "details": "Détails",
          "wishlist": "Liste de souhaits",
          // Add translation keys for Nav component
          "nav.home": "Accueil",
          "nav.allBlog": "Tous les articles",
          "nav.addBlogs": "Ajouter des articles",
          "nav.featuredBlogs": "Articles en vedette",
          "nav.wishlist": "Liste de souhaits",
          "nav.logout": "Se déconnecter",
          "nav.register": "S'inscrire",
          "nav.login": "S'identifier"
        }
      },
      bn: {
        translation: {
          "welcome": "রিয়েক্টে স্বাগতম",
          "description": "এটি একটি নমুনা বর্ণনা",
          "bannerText": "আবিষ্কারের একটি যাত্রায় যাত্রা শুরু করুন। উদ্ভাবনী বিষয়বস্তুর জন্য আমাদের ব্লগ অন্বেষণ করুন যা কল্পনাকে জাগিয়ে তোলে এবং ব্যক্তিগত বিকাশকে উৎসাহিত করে। এখনই অন্বেষণ শুরু করুন!",
          "recentBlog": "সাম্প্রতিক ব্লগ",
          "details": "বিস্তারিত",
          "wishlist": "ইচ্ছেতালিকা",
          // Add translation keys for Nav component
          "nav.home": "হোম",
          "nav.allBlog": "সব ব্লগ",
          "nav.addBlogs": "ব্লগ যোগ করুন",
          "nav.featuredBlogs": "বৈশিষ্ট্যযুক্ত ব্লগ",
          "nav.wishlist": "ইচ্ছেতালিকা",
          "nav.logout": "প্রস্থান",
          "nav.register": "নিবন্ধন",
          "nav.login": "লগইন"
        }
      },
      hi: {
        translation: {
          "welcome": "React में आपका स्वागत है",
          "description": "यह एक नमूना विवरण है",
          "bannerText": "खोज की यात्रा पर निकलें। विचारोत्तेजक सामग्री के लिए हमारे ब्लॉग का अन्वेषण करें जो कल्पना को प्रज्वलित करती है और व्यक्तिगत विकास को बढ़ावा देती है। अभी अन्वेषण करना शुरू करें!",
          "recentBlog": "हाल का ब्लॉग",
          "details": "विवरण",
          "wishlist": "इच्छा सूची",
          // Add translation keys for Nav component
          "nav.home": "होम",
          "nav.allBlog": "सभी ब्लॉग",
          "nav.addBlogs": "ब्लॉग जोड़ें",
          "nav.featuredBlogs": "विशेष ब्लॉग",
          "nav.wishlist": "इच्छा सूची",
          "nav.logout": "लॉग आउट",
          "nav.register": "रजिस्टर करें",
          "nav.login": "लॉगिन"
        }
      }
    },
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
