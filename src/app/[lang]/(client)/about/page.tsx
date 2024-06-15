import React from "react";
import Image from "next/image";
import { H1, H2 } from "@/components/typography";

const data = {
  np: [
    {
      title: "बचत संकलनस्",
      desc: "संस्थामा समूहमा आवद्ध सदस्यहरूबाट बचत संकलन गर्ने आवद्ध सदस्यहरूलाई बचत गर्ने लागि उत्साहित गरी उनीहरूलाई बचत सम्बन्धी शिक्षा प्रदान गर्ने । ",
    },
    {
      title: "कर्जा प्रवाह",
      desc: "संस्थामा आवद्ध सदस्यहरूलाई समूह जमानतमा विना धितो वा धितो तथा व्यक्तिगत सदस्यहरूलाई धितो लिई सदस्यहरुको व्यवसायीक क्षमता बृद्धी गर्न आर्थिक उपार्जनमा सहयोग पुग्ने गरि कर्जा प्रदान गर्ने साथै सदस्यहरुलाई आकस्मिक रुपमा आवश्यकता पर्ने कर्जाको नियमानुसार प्रदान गर्ने ।",
    },

    {
      title: "विप्रेषण सेवा",
      desc: "विभिन्न देशबाट पठाइएको वा स्वदेशका अन्य स्थानमा रकम पठाउन तथा झिन्न  विभिन्न विप्रेषण सेवाहरू प्रदान गरिएको छ । संंस्थाले हाल आइएमइ रेमिट, वेस्टन युनियन मनि लगायतका कम्पनी संग विषयमा सम्झौता गरि सदस्यहरुलाई यो सुविधा प्रदान गरिएको छ ।",
    },

    {
      title: "राहात सम्बन्धि कार्यक्रमस",
      desc: "संस्थाले आवद्ध सदस्यहरूलाई राहात सम्बन्धि कार्यक्रमहरूमा सहयोग गर्ने गरेको छ । जस्तै प्रसुति स्याहार खर्च, काजकृया खर्च, औषधी उपचार खर्च , कर्जा मिनाह लगायतका शिर्षकमा राहात प्रदान गर्ने गरिएको छ ।",
    },
    {
      title: "सामाजिक सुरक्षा कोषमा आवद्धता",
      desc: "संस्थाले सामाजिक सुरक्षा कोषमा आवद्ध भई संस्थाका कर्मचारीहरुलाई संलग्न गराएको छ । यस कोषमा आवद्ध हुन चाहाने सदस्यहरुलाई समेत संस्थाले नियमानुसार आवद्ध गराउने निति लिएको छ । यस मार्फत सदस्यले सामाजिक सुरक्षाकोषबाट पाउने सुविधा प्राप्त गर्न सक्नेछन् ।",
    },
  ],
  en: [
    {
      title: "Savings Collection",
      desc: "The institution encourages its members, who are part of a group, to contribute to savings. It is committed to motivating them to save and provides them with education related to savings.",
    },

    {
      title: "Loan Services",
      desc: "For the members affiliated with the institution, loans are provided without collateral in group guarantees or individually. The institution aims to enhance the entrepreneurial capacity of its members, contributing to economic growth. It also provides loans according to the members' needs and the rules of the necessary loans in emergency situations.",
    },
    {
      title: "Remittance Services",
      desc: "Various remittance services, such as sending money from different countries or other locations within the country, are provided. The institution has entered into agreements with companies like IME Remit, Western Union, and others to offer these services to its members",
    },
    {
      title: "Relief Programs",
      desc: "The institution supports its affiliated members in relief-related programs. For example, it provides relief in terms of childbirth expenses, work-related expenses, medical treatment expenses, and loans for emergencies.",
    },
    {
      title: "Social Security Fund Contribution",
      desc: "The institution has dedicated funds for social security and includes its employees in this fund. Members who wish to contribute to this fund are also enlisted as per the institution's rules. Through this, members can avail themselves of the benefits from the social security fund.",
    },
  ],
};

const Card = ({
  title,
  desc,
  lang,
}: {
  title: string;
  desc: string;
  lang: string;
}) => {
  return (
    <div
      className={`flex w-[250px] flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#00A652] to-[#035739] px-2 py-20 text-center text-white ${lang === "en" ? "h-[450px]" : "h-[300px]"}`}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const page = ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  return (
    <div>
      <H1 className="text-center font-semibold md:mt-5">संस्थाको परिचय</H1>
      <div className="grid place-items-center gap-y-6 px-2 py-10 md:grid-cols-2 md:py-20">
        <Image src="/about/hero.svg" alt="heroimg" height={0} width={500} />
        <div>
          <p className="text-md md:pl-4 md:pr-8">
            सतलोक बहुउद्देश्यीय सहकारी संस्था लि.मिति २०७० जेष्ठ २२ गते डिभिजन
            सहकारी कार्यालय झापामा दर्ता भई सहकारी कारोवार गर्न स्वीकृत प्राप्त
            भई हाल झापा जिल्ला कार्यक्षेत्र रहेको यस सहकारी संस्थाले झापा
            जिल्लाका ३ वटा सेवाकेन्द्र मार्फत सेवा प्रदान गरिरहेको छ ।
            <br />
            <br />
            <strong>“गरिवी न्यूनीकरण र उद्यमशिलता श्रृजना”</strong>
            भन्ने मूल मन्त्रका साथ अघि बढेको यस संस्थाले राजनैतिक, सांस्कृतिक,
            भाषिक तथा अन्य विषमताको आधारमा भेदभाव नगरी आफ्नो कार्यक्षेत्र
            भित्रका आवद्ध सदस्य परिवारहरुलाई वित्तीय सेवा प्रवाह गर्दै आएको छ ।
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 py-4">
        <div className="mx-auto max-w-7xl">
          <H2 className="text-center font-semibold md:mt-5">हाम्रो बारेमा</H2>
          <div className="grid place-items-center gap-y-6 px-2 py-10 md:grid-cols-2 md:py-20">
            <div className="order-2">
              <p className="text-md md:pr-8">
                यस सहकारी संस्थाले आफ्ना ग्राहक सदस्यहरुलाई वित्तिय सेवामा मात्र
                संलग्न नगराई समय समयमा विभिन्न सीपमूलक तालिम दिने, उनीहरुलाई
                आत्मनिर्भर बनाउनको लागि प्रयास गर्ने, सदस्यहरुको छोराछोरीहरुलाई
                छात्रवृत्तिको व्यवस्था लगायत उनीहरु बीच विभिन्न सामाजिक
                क्रियाकलापहरु गर्ने गरिएको छ । “सहकारी संस्थाको निहित मूल्य,
                मान्यतामा रही आफ्नो क्षेत्रभित्र रहेका विपन्न वर्गमा आर्थिक
                क्रियाकलापद्वारा उनिहरुको जीवनस्तरमा सुधार ल्याई सक्षम सहकारी
                संस्थाको रुपमा स्थापित गराउने” संस्थाको लक्ष्य रहेको छ ।
              </p>
            </div>
            <Image
              className="md:order-2"
              src="/about/hero.svg"
              alt="heroimg"
              height={0}
              width={500}
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-10">
        <div className="mx-auto max-w-7xl">
          <H2 className="text-center font-semibold">हाम्रो उद्देश्य</H2>
          <div className="grid place-items-center gap-y-6 px-2 py-10 md:grid-cols-2 md:py-20">
            <Image src="/about/hero.svg" alt="heroimg" height={0} width={500} />
            <div>
              <p className="text-md md:pl-4 md:pr-8">
                सहकारी संस्थाको मुख्य उद्देश्य भनेको आफ्को कार्यक्षेत्र भित्रका
                सदस्यहरुलाई सहभागी गराई समुदायमा सामाजिक र आर्थिक रुपमा पछाडी
                परेका सदस्यहरुलाई समेटी सहज रुपमा कर्जा लगानी तथा बचत गर्ने
                बानीको बिकास गरी उनीहरुको आर्थिक विकासमा टेवा पुर्याउनु
                ,स्थानीयस्तरमै पूँजी निर्माण गर्ने, स्वरोजगारीको सिर्जना गरी
                राष्ट्रिय आयमा थप टेवा पुर्याई गरिबी न्यूनीकरणमा सहयोग पुर्याउनु
                हो । समयको गतिशीलतासँगै हरेकक्षेत्र तथा परिस्थितिलाई मध्यनजर गरी
                समय अनुसार ब्याजदरमा परिवर्तन ल्याउने, समय अनुकुल सामाजिक
                कार्यमा सहयोग गर्ने, सदस्यहरुलाई संस्था प्रति बढी बफादार बनाई
                आप्mनोपनमा बाँधी राख्न सदस्यहरु माझ नयाँ–नयाँ सेबा प्रदान गर्नु
                हो ।
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 py-10">
        <H2 className="text-center font-semibold">हाम्रा सेवाहरु</H2>
        <p className="mx-auto px-2 text-center text-lg md:w-3/5">
          हाम्रो सहकारी संस्था एक सामाजिक र आर्थिक समृद्धि को दिशामा प्रतिबद्ध
          छ। हाम्रो संस्था तपाईंको सहारा गर्नका लागि विभिन्न सेवाहरू प्रदान
          गर्दछ जो आफ्ना सदस्यहरूलाई आर्थिक रूपमा सक्षम बनाउँछ र सामाजिक
          क्रियाकलापहरू गर्दछ।
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8  py-20 md:mx-auto md:w-4/5">
          {data[lang as keyof typeof data].map((d, idc) => (
            <Card key={idc} title={d.title} desc={d.desc} lang={lang} />
          ))}
        </div>
      </div>

      <p className="mx-auto px-2 py-20 text-center text-lg md:w-3/5">
        हाम्रो सहकारी संस्था एक सामाजिक र आर्थिक समृद्धि को दिशामा प्रतिबद्ध छ।
        हाम्रो संस्था तपाईंको सहारा गर्नका लागि विभिन्न सेवाहरू प्रदान गर्दछ जो
        आफ्ना सदस्यहरूलाई आर्थिक रूपमा सक्षम बनाउँछ र सामाजिक क्रियाकलापहरू
        गर्दछ।
      </p>
    </div>
  );
};

export default page;
