import type { MetadataRoute } from 'next';

const SITE_URL = 'https://beforechina.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // Home
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },

    // Tools
    { url: `${SITE_URL}/visa`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/esim`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/vpn`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/payment`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/insurance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/budget`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Xinjiang
    { url: `${SITE_URL}/xinjiang`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/xinjiang/silk-road`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/xinjiang/karakoram-highway`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/xinjiang/northern-loop`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/xinjiang/taklamakan-desert`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Golden Triangle
    { url: `${SITE_URL}/golden-triangle/beijing-xian-shanghai`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/golden-triangle/beijing-in-depth`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/golden-triangle/xian-in-depth`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/golden-triangle/shanghai-in-depth`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/golden-triangle/beijing-xian`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/golden-triangle/beijing-shanghai`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Yunnan
    { url: `${SITE_URL}/yunnan/kunming-dali-lijiang-shangri-la`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/yunnan/lijiang-lugu-lake-tiger-leaping-gorge`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/yunnan/dali-shaxi-tengchong`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/yunnan/xishuangbanna-tropical`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/yunnan/kunming-dongchuan-yuanyang`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Sichuan
    { url: `${SITE_URL}/sichuan/chengdu-jiuzhaigou-huanglong`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/sichuan/chengdu-emei-leshan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/sichuan/chengdu-in-depth`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/sichuan/chengdu-daocheng-yading`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/sichuan/chongqing-wulong-dazu`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Guangxi
    { url: `${SITE_URL}/guangxi/guilin-yangshuo-lijiang`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/guangxi/guilin-longji-xingping`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Guizhou
    { url: `${SITE_URL}/guizhou/huangguoshu-libo-miao`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/guizhou/fanjingshan-zhenyuan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Yangtze Delta
    { url: `${SITE_URL}/yangtze-delta/shanghai-hangzhou-suzhou`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/yangtze-delta/hangzhou-wuzhen-mogan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/yangtze-delta/nanjing-zhenjiang-yangzhou`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Ancient Capitals
    { url: `${SITE_URL}/ancient-capitals/xian-luoyang-kaifeng`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/ancient-capitals/pingyao-datong-yungang`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Silk Road
    { url: `${SITE_URL}/silk-road/xian-lanzhou-dunhuang`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/silk-road/hexi-corridor-deep`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Tibet
    { url: `${SITE_URL}/tibet/lhasa-shigatse-everest`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/tibet/lhasa-namtso-lake`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Yangtze Cruise
    { url: `${SITE_URL}/yangtze-cruise/chongqing-yichang-cruise`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Dongbei
    { url: `${SITE_URL}/dongbei/harbin-snow-town`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/dongbei/changbaishan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Fujian
    { url: `${SITE_URL}/fujian/xiamen-tulou-quanzhou`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/fujian/wuyishan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // South China
    { url: `${SITE_URL}/south-china/hong-kong-macau`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/south-china/guangzhou-shenzhen`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/south-china/sanya-hainan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Zhangjiajie
    { url: `${SITE_URL}/zhangjiajie/avatar-mountains`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Huangshan
    { url: `${SITE_URL}/huangshan/yellow-mountain`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Shandong
    { url: `${SITE_URL}/shandong/qingdao-yantai`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/shandong/taishan-qufu`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Jiangxi
    { url: `${SITE_URL}/jiangxi/lushan-jingdezhen`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Static pages
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/cookie`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}