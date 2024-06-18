import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto my-8 px-4 2xl:container">
      <div className="z-10 flex flex-col items-center justify-between bg-white md:flex-row lg:flex-row">
        <div className="rounded-lg p-4">
          <h1 className="text-4xl font-semibold">अध्यक्षको सन्देश</h1>
        </div>
      </div>
      <div className="ml-4 mt-6 rounded">
        <div className="relative flex flex-col items-center lg:flex-row lg:items-start">
          <div className="text-center lg:sticky lg:top-20 lg:ml-4 lg:text-left">
            <div>
              <Image
                className="rounded-lg"
                src="/home/message/photo.svg"
                alt="literature collection"
                width={200}
                height={200}
              />
              <h2 className="mt-4 text-xl font-semibold lg:text-center">
                बाबुराम
              </h2>
              <p className="mb-8 lg:text-center">अध्यक्ष</p>
            </div>
          </div>
          <div className="mt-4 w-full  bg-white text-justify text-lg leading-relaxed lg:ml-8 lg:mt-0 lg:text-left">
            <p className="mb-4">
              क्रियाशीलता र रंगिनता भरपुर नेपाली संस्कृति र जीवन उत्सव। हाम्रो
              सामाजिक समृद्धता र सांस्कृतिक विविधतामा गहिरो नाटिकले फैलिएको छ।
              नेपाली लोकसंस्कृति अनेक रंग र स्वादमा समृद्ध छ, जुन सार्वजनिक र
              प्राइभेट अवस्थामा पाईन्छ। यसले हाम्रो समाजलाई अन्याय, समर्थन, र
              सामूहिकता भर्खरै प्रदान गर्दछ।
            </p>
            <p className="mb-4">
              नेपाली साहित्य, कला, संगीत, नृत्य, वस्त्र, र भोजनसमेत नेपालको
              सांस्कृतिक धरोहरको एक महत्त्वपूर्ण हिस्सा हुन्। त्यस्तो धेरै
              विविधताले हाम्रो देशलाई अनूठो र अत्यन्त प्रिय बनाएको छ। धार्मिक र
              सांस्कृतिक अवस्थामा, हाम्रो समाजले धेरै प्राचीन परंपराहरू आदर्श
              रुपमा बनाएको छ।
            </p>
            <p className="mb-4">
              नेपाली साहित्य र भाषा प्राय: हाम्रो भाषा, संस्कृतिक धारणा, र रहेका
              ऐतिहासिक घटनाहरूको विस्तृत प्रतिबिम्ब हो। यसले हाम्रो समुदायको
              संस्कृतिक गहिरोता, ज्ञान, र विचारलाई प्रकट गर्दछ।
            </p>
            <p>
              धेरै तालिकाहरू, रितुअनुसार उत्सव, उत्सव, तथा पर्वहरू भागी नेपालमा
              आयोजित हुन्छन्। यी आयोजनहरू नेपाली सांस्कृतिक परंपरा र धार्मिक
              उत्सवमा सहायक छन्। यसले नेपाली जीवनको निरन्तरता र समृद्धताको
              प्रतिष्ठा गर्दछ। प्रथम, नेपाली संस्कृतिको विविधता र समृद्धतामा
              संगीत, नृत्य, र कला जस्ता अनेक आदानप्रदानहरू भरिएका छन्। यसले
              नेपाली समुदायलाई समृद्ध भावना, सांस्कृतिक सहभागिता, र सामूहिक
              अभिवृद्धि साधन गर्दछ।
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col  items-end space-y-2 pr-4">
          <Button asChild variant="outline" className="border-primary">
            <Link
              href="/about"
              className="block py-3 text-center text-lg text-primary md:py-4 md:text-xl"
            >
              View More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
