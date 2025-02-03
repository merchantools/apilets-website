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
            title: 'Cloud',
            description:
              'Seamlessly integrate your business processes with cloud technologies. Our expertise ensures secure, reliable, and scalable solutions that optimize your operations and improv accessibility.',
            content: `
              <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.green.500),theme(colors.teal.500))] flex items-center justify-center text-white'>
                <span className='text-lg md:text-xl lg:text-2xl'>Cloud Integration</span>
              </div>
            `,
            imageUrl: '/ecom-marketing-01.png',
      },
        {
        title: 'Custom Software Development',
        description:
            'We specialize in crafting tailored software solutions to meet your unique business needs. From concept to deployment, we deliver scalable, efficient, and innovative applications that drive success.',
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
        imageUrl: '/product.png',
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