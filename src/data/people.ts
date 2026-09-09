export type PersonSection = { heading: string; items: string[] };
export type Person = {
  slug: string; name: string; role: string; phone: string | null; email: string | null;
  photo: string | null; nameI18n: Record<string, string>; roleI18n: Record<string, string>;
  bio: string[]; sections: PersonSection[];
};

export const people: Person[] = [
  {
    "slug": "zoljargal-dashnyam-2",
    "name": "Zoljargal Dashnyam",
    "role": "Founder",
    "phone": "+976 1133 2020",
    "email": "zola.dashnyam@dplaw.mn",
    "photo": "/images/DP-1-scaled-e1750155294296-65867b.jpg",
    "nameI18n": {
      "mn": "Дашнямын Золжаргал",
      "ru": "Дашням Золжаргал"
    },
    "roleI18n": {
      "mn": "Үүсгэн байгуулагч",
      "ru": "Учредитель"
    },
    "bio": [
      "Zoljargal Dashnyam (Zola ) is a lawyer with business background. She has over 18 years of experience in the law practice. Started off as an in-house counsel at the largest commercial bank in Mongolia, Zoljargal moved to the private practice after 7 years of busy yet fruitful career at the bank. During her time at the bank, Zoljargal was a key team member in the various projects and transactions the bank has undertaken, ranging from privatization of a largest state owned bank in the history of Mongolia, commencing a Visa card issuance and operation first time in the country to syndicated financing activities with foreign reputable financial institutions and the international offering of the first private bond out of Mongolia. She has also gained considerable experience in litigation as well as corporate and labor tax law matters.",
      "Zoljargal has joined the Firm (then named GTS Advocates LLP) as Partner in 2007 and started working for mainly foreign clients. She is now the leading expert on finance and capital markets in Mongolia with impressive track records of deals and transactions she was involved in. She has extensive experience in corporate law, energy and minerals, and private equity. Zoljargal’s portfolio includes clients such as investment banks, energy companies, multinationals, oil & gas as well as mining companies, investment funds etc. She leads and is actively involved in the transactions the firm has advised on over the years accumulating unparalleled experience and expertise in matters of Mongolian law.",
      "Zoljargal is also active in the public activities and currently a member of the Governing Board of the Mongolian Bar Association.",
      "Zoljargal speaks Mongolian, English, and Russian."
    ],
    "sections": [
      {
        "heading": "Education and Qualifications",
        "items": [
          "Bachelor of Arts (BA) in International Law, School of Law of the National University of Mongolia",
          "Master in Business Administration (MBA) in Finance, Oklahoma City University, USA",
          "Master of Laws (LL.M.) Harvard Law School, USA.",
          "Member of the Mongolian Bar Association and admitted to practice law in Mongolia."
        ]
      },
      {
        "heading": "Publication",
        "items": [
          "Directors Liability: A Worldwide Review – Introduction: General Principles Of Mongolian Corporate Law",
          "The International Comparative Legal Guide to : Private Equity 2017 /3rd Edition/ : Chapter 20",
          "The international comparative legal guide to: Mining Law 2019 /6th edition/: Chapter 18"
        ]
      },
      {
        "heading": "Experience and Expertise",
        "items": [
          "Capital Markets;",
          "Banking and Finance;",
          "Energy;",
          "Mining;",
          "Corporate/M&A;",
          "Litigation & Arbitration."
        ]
      },
      {
        "heading": "Programs Attended",
        "items": [
          "Euromoney training program on Advanced Loan Documentation in Hong Kong (2004)",
          "Euromoney training program on Syndicated Loan Documentation in Hong Kong 2004)",
          "Internship at International Court of Arbitration at International Chamber of Commerce in Paris, France (2006)",
          "Special Program on International Tax at Kennedy College of Law in Zurich, Switzerland (2008)",
          "Special program for external legal counsels of European Bank for Reconstruction and Development in London, United Kingdom (2011)",
          "Workshop for external legal counsels by International Finance Corporation in Hong Kong (2013)",
          "Euromoney training program on Public Private Partnership in Hong Kong, S.A.R of People’s Republic of China (2014)",
          "Joint Workshop for external legal counsels by Multinational Development Banks (ADB and IFC) in Manila, Philippines (2016)",
          "Joint Workshop for external legal counsels by Multinational Development Banks (ADB, IFC, IIB) in Manila, Philippines (2019)"
        ]
      },
      {
        "heading": "Awards and Recognition",
        "items": [
          "Chambers and Partners",
          "The Legal 500",
          "Asia law"
        ]
      }
    ]
  },
  {
    "slug": "ariunbayar-enkhbat-amy",
    "name": "Ariunbayar Enkhbat",
    "role": "Managing Partner",
    "phone": "+976 1133 1020",
    "email": "e.ariunbayar@dplaw.mn",
    "photo": "/images/Ami-7027a0.jpeg",
    "nameI18n": {
      "mn": "Энхбатын Ариунбаяр",
      "ru": "Энхбат Ариунбаяр"
    },
    "roleI18n": {
      "mn": "Гүйцэтгэх Захирал",
      "ru": "Исполнительный Директор"
    },
    "bio": [
      "Ariunbayar is a lawyer who has over 6 years of experience in the law practice. Ariunbayar started off as an in-house counsel at the largest commercial bank in Mongolia while she was a third-year student in School of Law of the National University of Mongolia. During her time at the bank, Ariunbayar was in charge of handling legal matters in key departments of the bank, such as trade finance, investment banking, double taxation, custodian banking, marketing, procurement, information technology, and development related departments.",
      "Ariunbayar has joined the Firm as an Associate in December 2018. She now routinely practices corporate law, operations related to banking and capital markets, project finance, and private equity. Ariunbayar is actively involved in investment banking, project finance, commercial transactions, and regulatory advice on fin-techs and startups the firm has advised on over the years accumulating unparalleled experience and expertise in matters of Mongolian law.",
      "Ariunbayar speaks Mongolian and English."
    ],
    "sections": [
      {
        "heading": "Education and Qualifications",
        "items": [
          "Bachelor of Arts (BA) in International Law, School of Law of the National University of Mongolia",
          "Master of Laws (LL.M.) Pennsylvania State University, USA.",
          "Member of the Mongolian Bar Association and admitted to practice law in Mongolia.",
          "Certified to practice the Securities Market Law in Mongolia."
        ]
      },
      {
        "heading": "Experience and Expertise",
        "items": [
          "Capital Markets",
          "Banking and Finance",
          "Trade Finance and Commercial Transactions"
        ]
      },
      {
        "heading": "Programs Attended",
        "items": [
          "Internship at International Labor Organization, United Nations, Mongolia (2014)",
          "Participated in the general rounds of the 12th Red Cross International Humanitarian Law Moot (inter-university competition for Asia-Pacific region) in Hong Kong (2014)",
          "One-year Trade Finance online training program of European Bank for Reconstruction and Development (2016)",
          "Trade Finance training by Asian Development Bank in Ulaanbaatar, Mongolia (2016)",
          "The Financial Regulatory Committee and the Mongolian Bar Association training on practicing the Securities Market Law in Mongolia (2019)"
        ]
      }
    ]
  },
  {
    "slug": "zolzaya-dashnyam",
    "name": "Zolzaya Dashnyam",
    "role": "Deputy Director, Operations",
    "phone": "+976 1133 2020",
    "email": "finance@dplaw.mn",
    "photo": "/images/WEB-2-3-scaled-2aefc8.jpg",
    "nameI18n": {
      "mn": "Дашнямын Золзаяа",
      "ru": "Дашням Золзаяа"
    },
    "roleI18n": {
      "mn": "Үйл ажиллагаа хариуцсан дэд захирал",
      "ru": "Заместитель директора по операционной деятельности"
    },
    "bio": [
      "Zolzaya Dashnyam has experience in finance, operations, sales in the public and private sectors."
    ],
    "sections": [
      {
        "heading": "Education and Qualifications",
        "items": [
          "Bachelor of Finance, Shanghai University of Finance and Economics, China.",
          "Master of Science in Applied Economics, George Washington University, USA."
        ]
      }
    ]
  },
  {
    "slug": "zolzaya-altantsetseg-2",
    "name": "Zolzaya Altantsetseg",
    "role": "Of Counsel",
    "phone": "+976 11331020",
    "email": "a.zolzaya@dplaw.mn",
    "photo": "/images/Zolzaya-1-15f2f5.jpg",
    "nameI18n": {
      "mn": "Алтанцэцэгийн Золзаяа",
      "ru": "Алтанцэцэг Золзаяа"
    },
    "roleI18n": {
      "mn": "Гэрээт Хуульч",
      "ru": "Юрист-консультант"
    },
    "bio": [],
    "sections": [
      {
        "heading": "Overview",
        "items": [
          "Zolzaya Altantsetseg has 5 years of experience in business, judicial and in the law practice. She worked as a judge’s assistant in the Civil Court of Appeal for 4 years under the judge’s instructions, and gained excellent skills of preparing legal opinion in case proceedings and disputes.",
          "Furthermore, When she was a university student, she led her team in the court debate competition in the “Mock Trial-2017” of the President of Mongolian Bar Association and successfully participated in the criminal case and won the first place. Zolzaya. A is a lawyer who represents clients in court, mainly responsible for clients’ cases and disputes and has successfully participated in civil cases such as family law, labor relations, and contract law in addition to criminal, administrative, and arbitration cases."
        ]
      },
      {
        "heading": "Education and Qualifications",
        "items": [
          "Bachelor of Arts (BA), School of Law of the Mongolian National University.",
          "Member of the Mongolian Bar Association",
          "Member of the Association of Mongolian Advocates."
        ]
      },
      {
        "heading": "Experience and Expertise",
        "items": [
          "Provide legal advice on any cases and disputes arising between civil parties, including but not limited to family law, labor law, and contract law, representing and participating as a lawyer in case proceedings;",
          "Provide legal advice and participating as a lawyer in crimininal and on violation proceedings, related to crimes and violation;",
          "Provide legal advice and participating as a lawyer in administrative proceedings;",
          "Provide legal advice and participating as a lawyer in arbitration proceedings,",
          "To provide advice on contracts, deals and activities concluded or about to be concluded between any citizen or legal entity in accordance with the law, and preventing any risks or disputes from happening;",
          "other"
        ]
      },
      {
        "heading": "Programs Attended",
        "items": [
          "Human Resource manager (office manager, archivist, secretary) training program (2014)",
          "“Court Administrative Officer Training” course jointly organized by the Judicial General Council of Mongolia and the National Legal Institute of Mongolia (2017)",
          "Mongolian Bar Association’s continuous legal training for lawyers"
        ]
      }
    ]
  },
  {
    "slug": "enkhtemuulen-lkhagvasuren",
    "name": "Enkhtemuulen Lkhagvasuren",
    "role": "Associate",
    "phone": "+976 70131020",
    "email": "l.enkhtemuulen@dplaw.mn",
    "photo": "/images/web-6-scaled-ea6685.jpg",
    "nameI18n": {
      "mn": "Лхагвасүрэнгийн Энхтэмүүлэн",
      "ru": "Лхагвасурэн Энхтэмулэн"
    },
    "roleI18n": {
      "mn": "Хуульч",
      "ru": "Юрист"
    },
    "bio": [
      "Enkhtemuulen is a lawyer with over four years of professional experience, having worked both in-house and at a law firm.",
      "She began her professional career as an in-house legal counsel at a securities company and a housing finance company, where she specialized in corporate law, capital markets, and securities regulation. During this time, she gained hands-on experience in securities issuance and regulatory compliance. In 2024, she successfully passed the Mongolian Bar Examination to obtain her license as a lawyer, and subsequently passed the professional qualification exam, qualifying as an attorney-at-law in Mongolia.",
      "She joined the Firm as an Associate in January 2025. Her practice focuses on finance and business law, including corporate matters, investment (such as bond issuances and asset-backed securities), lending and secured transactions, and mergers and acquisitions. She has been actively involved in legal due diligence, transaction structuring, and advising on a wide range of commercial agreements.",
      "She also advises on labor law matters, including compliance reviews and employment-related issues, as well as corporate liquidation processes.",
      "She speaks Mongolian and English."
    ],
    "sections": [
      {
        "heading": "Education and qualifications",
        "items": [
          "Bachelor of Laws (LL.B), School of Law of the National University of Mongolia",
          "Member, Lawyer of the Mongolian Bar Association",
          "Member, Attorney at Law of the Association of Mongolian Advocates",
          "Certified Lawyer to Practice the Securities Market Law in Mongolia",
          "Certificate in Corporate Governance"
        ]
      }
    ]
  },
  {
    "slug": "ulziijargal-gantsooj",
    "name": "Ulziijargal Gantsooj",
    "role": "Associate",
    "phone": "+976 70131020",
    "email": "g.ulziijargal@dplaw.mn",
    "photo": "/images/Web-4-scaled-d04f66.jpg",
    "nameI18n": {
      "mn": "Ганцоожийн Өлзийжаргал",
      "ru": "Ганцоож Ользийжаргал"
    },
    "roleI18n": {
      "mn": "Хуульч",
      "ru": "Юрист"
    },
    "bio": [
      "Ulziijargal Gantsooj has joined the Firm as a Trainee Associate in 2026 and assists the Partners in handling matters across the Firm’s practice.",
      "She speaks Mongolian and English."
    ],
    "sections": [
      {
        "heading": "Education and qualifications",
        "items": [
          "Bachelor of Law (LL.B.), School of Law, National University of Mongolia",
          "Master of Laws (LL.M.), Georg August University of Göttingen, Germany"
        ]
      }
    ]
  },
  {
    "slug": "oyuntuil-jigjidsuren-2",
    "name": "Oyuntuil Jigjidsuren",
    "role": "Trainee associate",
    "phone": "+976 70131020",
    "email": "j.oyuntuil@dplaw.mn",
    "photo": "/images/Oyuntuil-1-36b24a.jpg",
    "nameI18n": {
      "mn": "Жигжидсүрэнгийн Оюунтуйл",
      "ru": "Оюнтуйл Джигжидсурэн"
    },
    "roleI18n": {
      "mn": "Дадлагажигч Хуульч",
      "ru": "Стажёр-юрист"
    },
    "bio": [
      "Oyuntuil Jigjidsuren has joined the Firm as Paralegal in 2022 and provides assistance to Partners and Associates on all aspects of the firm’s practice.",
      "Oyuntuil speaks Mongolian, English and Russian."
    ],
    "sections": [
      {
        "heading": "Education and Qualifications",
        "items": [
          "Bachelor of Laws, Plekhanov Russian University of Economics"
        ]
      }
    ]
  },
  {
    "slug": "enkh-otgon-tumentur",
    "name": "Enkh-Otgon Tumentur",
    "role": "Paralegal",
    "phone": "+976 11331020",
    "email": "t.enkh-otgon@dplaw.mn",
    "photo": "/images/Weeb-1-scaled-e07fd5.jpg",
    "nameI18n": {
      "mn": "Түмэнтөрийн Энх-Отгон",
      "ru": "Энх-Отгон Тументур"
    },
    "roleI18n": {
      "mn": "Хуульчийн туслах",
      "ru": "Параюрист"
    },
    "bio": [
      "Enkh-Otgon Tumentur has joined the firm as a paralegal since 2025.",
      "She speaks Mongolian and English."
    ],
    "sections": [
      {
        "heading": "Education and Qualifications",
        "items": [
          "Bachelor of Law (LL.B), The University of Finance and Economics",
          "Currently enrolled in Bachelor of Business Administration (BBA) in Accounting, The University of Finance and Economics"
        ]
      }
    ]
  },
  {
    "slug": "dairiijav-tumurbaatar",
    "name": "Dairiijav Tumurbaatar",
    "role": "Office Manager",
    "phone": "+976 7013 1020",
    "email": "t.dairiijav@dplaw.mn",
    "photo": "/images/Dairii-egch-1-654921.jpeg",
    "nameI18n": {
      "mn": "Төмөрбаатарын Дайрийжав",
      "ru": "Тумурбаатар Дайрийжав"
    },
    "roleI18n": {
      "mn": "Оффис Менежер",
      "ru": "Администратор офиса"
    },
    "bio": [],
    "sections": []
  },
  {
    "slug": "ulzii-ochir-dashdorj",
    "name": "Ulzii-Ochir Dashdorj",
    "role": "Auxiliary staff",
    "phone": "+976 7013 1020",
    "email": "",
    "photo": "/images/Ochiroo-ah-fea59f.jpeg",
    "nameI18n": {
      "mn": "Дашдоржийн Өлзий-Очир",
      "ru": "Дашдорж Улзий-Очир"
    },
    "roleI18n": {
      "mn": "Туслах ажилтан",
      "ru": "Вспомогательный персонал"
    },
    "bio": [],
    "sections": []
  }
];
