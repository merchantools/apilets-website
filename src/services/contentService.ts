export interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
  imageUrl?: string;
}

class ContentService {
  private static instance: ContentService;

  private constructor() {}

  public static getInstance(): ContentService {
    if (!ContentService.instance) {
      ContentService.instance = new ContentService();
    }
    return ContentService.instance;
  }

async getServices(): Promise<ContentItem[]> {
    // In the future, this could fetch from an API
    return [
        {
            title: 'commercetools Experts',
            description:
                'We are certified commercetools professionals with hands-on experience in implementing, customizing, and optimizing headless commerce architectures. Our team helps businesses transition to a flexible, API-first commerce platform, ensuring scalability, performance, and seamless customer experiences.',
            content: `
              <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.green.500),theme(colors.teal.500))] flex items-center justify-center text-white'>
                <span className='text-lg md:text-xl lg:text-2xl'>Commercetools Experts</span>
              </div>
            `,
            imageUrl: '/themob.jpg',
        },{
            title: 'Cloud, Modernization and MACH',
            description:
                'Our experts provide strategic guidance and hands-on support to navigate complex cloud migrations, eCommerce transformations, and data modernization initiatives. Whether you are adopting AWS, Azure, or GCP, migrating from legacy monoliths, or modernizing your customer experience, we ensure a seamless transition.',
            content: `<div className='h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,theme(colors.blue.400),theme(colors.purple.500))] md:bg-transparent'>
            <span className='block md:hidden text-lg'>UI/UX Design</span>
            <Image
            src='/product.png'
            width={300}
            height={300}
            className='hidden md:block h-full w-full object-cover'
            alt='UI/UX Design'
            />
            </div>`,
            imageUrl: '/divinetechygirl.jpg',
        },{
            title: 'Cloud-Native Software',
            description:
                `We architect and build high-performance, resilient, and scalable cloud-native applications tailored to your business needs. Our solutions leverage:<
                <ul className='text-left list-disc list-inside'>
                  <li>✅ Microservices for modular and efficient system design</li>
                  <li>✅ Serverless & Kubernetes for cost-effective scalability</li>
                  <li>✅ Event-Driven Architecture to enhance real-time interactions</li>
                </ul>`,
            content: `
              <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.green.500),theme(colors.teal.500))] flex items-center justify-center text-white'>
                <span className='text-lg md:text-xl lg:text-2xl'>Cloud-Native Software Design & Implementation</span>
              </div>
            `,
            imageUrl: '/cloud-native.jpg',
        },{
            title: 'UX Design & Development',
            description:
                `We build high-performance, modern web applications that deliver seamless and engaging user experiences. Our frontend expertise includes:
                <ul className='text-left list-disc list-inside'>
                  <li>✅ Headless Commerce UIs tailored for composable commerce platforms</li>
                  <li>✅ NextJS, React, Vue, and Angular for scalable, dynamic interfaces</li>
                  <li>✅ Progressive Web Apps (PWA) for mobile-first, app-like experiences</li>
                  <li>✅ Micro Frontends to support modular, enterprise-grade applications</li>
                </ul>`,
            content: `
              <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.green.500),theme(colors.teal.500))] flex items-center justify-center text-white'>
                <span className='text-lg md:text-xl lg:text-2xl'>Cloud Integration</span>
              </div>
            `,
            imageUrl: '/user-experience.jpg',
        }
    //   {
    //     title: 'Cloud',
    //     description:
    //       'Seamlessly integrate your business processes with cloud technologies. Our expertise ensures secure, reliable, and scalable solutions that optimize your operations and improve accessibility.',
    //     content: 'cloud',
    //     imageUrl: '/ecommerce-marketing1.jpg',
    //   },
      // ... add other items
    ];
  }
}

export const contentService = ContentService.getInstance();