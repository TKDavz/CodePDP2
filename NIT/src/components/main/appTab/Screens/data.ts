export type New3 = {
    id?: number;
    title?: string;
    content?: string;
    publishDate?: Date;
    author?: string;
    category?: string;
    url?: string;
    active?: boolean;
    cover?: string;
    source?: Source;
    commentCount?: number;
    viewCount?: number;
    likeCount?: number;
    comment?: Comment[];
    like?: Like[];
};


type Source = {
    sourceId?: number;
    sourceName?: string;
    sourceUrl?: string;
    sourceLogo?: string;
    sourceDescription?: string;
};

type Comment = {
    id?: number;
    content?: string;
    createDate?: Date;
    user?: User;
};


type Like = {
    id?: number;
    user?: User;

};

type User = {
    id?: number;
    username?: string;
    email?: string;
};

export const timeAgo = (date: Date) => {
    const now: Date = new Date();
    const diff: number = now.getTime() - date.getTime();

    const seconds: number = Math.floor(diff / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
    const weeks: number = Math.floor(days / 7);
    const months: number = Math.floor(days / 30);

    if (months > 0) {
        return `${months} tháng trước`;
    } else if (weeks > 0) {
        return `${weeks} tuần trước`;
    } else if (days > 0) {
        return `${days} ngày trước`;
    } else if (hours > 0) {
        return `${hours} giờ trước`;
    } else if (minutes > 0) {
        return `${minutes} phút trước`;
    } else {
        return `${seconds} giây trước`;
    }
};

export const newsData: New3[] = [
    {
        id: 1,
        title: 'Apple có thể ra mắt iPad tuần tới',

        content: 'The first news content.Markets on Edge to Start Week (3:00 a.m.) ' +
            'Efforts by the US and its allies to prevent the conflict from engulfing the wider region helped keep financial markets stable, if nervy, at the start of the trading week. Haven assets such as the dollar, US Treasury bonds and gold held most of their gains after surging on Friday on concern a ground invasion was imminent. Crude oil was little changed after Brent jumped above $90 a barrel Friday.',
        publishDate: new Date('2023-10-15T17:06:00.000Z'),
        author: 'Didu',
        category: 'news',
        url: 'https://tinhte.vn/thread/apple-co-the-ra-mat-ipad-tuan-toi.3726951/?ta_from_block=home_featured_threads',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8151120_5808107-review-ipadmini-6thgen-tinhte-5.jpg',
        commentCount: 2,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'Apple có thể ra mắt iPad tuần tới',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'abcd@gamil.com'
                }
            },
            {
                id: 2,
                content: 'Comment 2',
                createDate: new Date(),
                user: {
                    id: 2,
                    username: 'user',
                    email: 'abcde@gamil.com'
                }
            }
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {

        id: 2,
        title: 'Trên tay bàn nâng hạ chiều cao iCockpit FEL 1880: 4 chân, mặt bàn to, 2 motor, vững chãi',
        content: 'The second news content',
        publishDate: new Date('2023-10-04T23:53:00.000Z'),
        author: 'cuhiep',
        category: 'news',
        url: 'https://tinhte.vn/thread/tren-tay-ban-nang-ha-chieu-cao-icockpit-fel-1880-4-chan-mat-ban-to-2-motor-vung-chai.3723132/#menuid2',
        active: true,
        // cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8140721_ban-nang-ha-chieu-cao-iCockpit-FEL-1880-15.jpgs',
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8140726_ban-nang-ha-chieu-cao-iCockpit-FEL-1880-06.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date('2023-10-11T12:00:00'),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'abcde@hfas.com'
                }
            }
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 3,
        title: 'Samsung ra mắt tính năng theo dõi chứng ngưng thở khi ngủ trên đồng hồ Galaxy Watch',
        content: '',
        publishDate: new Date('2023-10-15T13:41:00.000Z'),
        author: 'tuantomobile',
        category: 'news',
        url: 'https://tinhte.vn/thread/samsung-ra-mat-tinh-nang-theo-doi-chung-ngung-tho-khi-ngu-tren-dong-ho-galaxy-watch.3726873/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8150981_IMG-3556.jpeg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date('2023-10-10T12:00:00'),
                user: {
                    id: 1,
                    username: 'admin',

                    email: 'adasa'
                }
            }
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',

                    email: 'sdah',
                },
            },
        ],
    },

    {
        id: 4,
        title: 'Dùng thử AI Wallpaper trên Google Pixel 8 Pro: không lo thiếu hình nền đẹp để xài',
        content: 'The fourth news content',
        publishDate: new Date('2023-10-14T23:28:00.000Z'), // 
        author: 'Pnghuy',
        category: 'news',
        url: 'https://tinhte.vn/thread/dung-thu-ai-wallpaper-tren-google-pixel-8-pro-khong-lo-thieu-hinh-nen-dep-de-xai.3726737/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8150669_dung-thu-ai-wallpaper-Google-pixel-8-pro-tinhte.jpeg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date('2023-10-10T12:00:00'),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdsaas'
                }
            }
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },

    {
        id: 5,
        title: 'Công ty nào có chính sách cập nhật phần mềm tốt nhất thế giới smartphone hiện tại?',
        content: 'The fifth news content',
        publishDate: new Date('2023-10-10T20:00:00.000Z'),
        author: 'vn_ninja',
        category: 'news',
        url: 'https://tinhte.vn/thread/cong-ty-nao-co-chinh-sach-cap-nhat-phan-mem-tot-nhat-the-gioi-smartphone-hien-tai.3725208/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8146336_cover-Cap-Nhat-Phan-Mem-Android-tinhte.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date('2023-10-10T12:00:00'),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 6,
        title: 'Nghiên cứu mới cho phép đổi hướng tia laser bằng không khí',
        content: 'The sixth news content',
        publishDate: new Date('2023-10-16T12:00:00'), // chưa đổi ngày
        author: 'Lư Thế Nghĩa',
        category: 'news',
        url: 'https://tinhte.vn/thread/nghien-cuu-moi-cho-phep-doi-huong-tia-laser-bang-khong-khi.3725296/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8146629_cover-doi-huong-laser-bang-khong-khi-tinhte.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 7,
        title: 'Giám đốc AMD: Dịch vụ gia công bán dẫn của Intel sẽ thất bại',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-11T01:20:00.000Z'),
        author: 'P.W',
        category: 'news',
        url: 'https://tinhte.vn/thread/giam-doc-amd-dich-vu-gia-cong-ban-dan-cua-intel-se-that-bai.3725292/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8146622_cover-intel.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 8,
        title: 'Khoa học đã chứng minh: Tung đồng xu không bao giờ có tỷ lệ chính xác 50/50',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-14T16:25:00.000Z'),
        author: 'P.W',
        category: 'news',
        url: 'https://tinhte.vn/thread/khoa-hoc-da-chung-minh-tung-dong-xu-khong-bao-gio-co-ty-le-chinh-xac-50-50.3726600/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8150256_cover-xu.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 9,
        title: 'Chỉ một thay đổi đơn giản, pin thể rắn giờ đã ổn định và hiệu quả hơn',
        content: 'The seventh news content',
        publishDate: new Date('2023-06-13T15:34:00.000Z'),
        author: 'Lê Phú Khương',
        category: 'news',
        url: 'https://tinhte.vn/thread/chi-mot-thay-doi-don-gian-pin-the-ran-gio-da-on-dinh-va-hieu-qua-hon.3681008/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/06/6463306_cover.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 10,
        title: 'Canon giới thiệu máy khắc chip nano, cạnh tranh trực tiếp với ASML trong ngành bán dẫn',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-14T01:50:00.000Z'),
        author: 'P.W',
        category: 'news',
        url: 'https://tinhte.vn/thread/canon-gioi-thieu-may-khac-chip-nano-canh-tranh-truc-tiep-voi-asml-trong-nganh-ban-dan.3726439/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8149841_cover-canon.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 11,
        title: 'Mất gần 2 năm, thương vụ 69 tỷ USD của Microsoft và Activision cuối cùng cũng xong',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-14T01:21:00.000Z'),
        author: 'P.W',
        category: 'news',
        url: 'https://tinhte.vn/thread/mat-gan-2-nam-thuong-vu-69-ty-usd-cua-microsoft-va-activision-cuoi-cung-cung-xong.3726421/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8149840_cover-xbox.jpeg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 12,
        title: 'Samsung sẽ ra mắt bộ nhớ HBM4 vào năm 2025, gấp đôi độ rộng bus',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-14T00:22:00.000Z'),
        author: 'Lư Thế Nghĩa',
        category: 'news',
        url: 'https://tinhte.vn/thread/samsung-se-ra-mat-bo-nho-hbm4-vao-nam-2025-gap-doi-do-rong-bus.3726429/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8149813_cover-samsung-hbm4-2048-bit-tinhte.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 13,
        title: 'Treo giải 700 nghìn đô để đọc nội dung cuộn giấy bị thiêu rụi bởi núi lửa gần 2 nghìn năm trước',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-13T21:53:00.000Z'),
        author: 'Hassler',
        category: 'news',
        url: 'https://tinhte.vn/thread/treo-giai-700-nghin-do-de-doc-noi-dung-cuon-giay-bi-thieu-rui-boi-nui-lua-gan-2-nghin-nam-truoc.3726395/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8149713_cover-burntscroll.jpeg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 14,
        title: 'How roboticists are thinking about generative AI',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-15T03:08:00.000Z'),
        author: 'Brian Heater',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/14/how-roboticists-are-thinking-about-generative-ai/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/09/Screenshot-2023-09-16-at-2.58.20%E2%80%AFPM.png?w=1390&crop=1',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 15,
        title: 'Trezor launches two new devices to help onboard crypto newbies',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-14T04:08:00.000Z'),
        author: 'jacquelyn Melinek',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/13/trezor-launches-two-new-devices-to-help-onboard-crypto-newbies/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/10/TRZ-970.jpg?w=1390&crop=1',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 16,
        title: 'X Communities start to look more like Facebook Groups with new member vetting feature',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-13T11:14:00.000Z'),
        author: 'Sarah Perez',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/13/x-communities-start-to-look-more-like-facebook-groups-with-new-member-vetting-feature/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/07/x-twitter.jpg?w=1390&crop=1',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 17,
        title: 'Shadow silent on data breach as hacked data appears genuine',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-13T09:35:00.000Z'),
        author: 'Carly Page',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/13/shadow-data-breach-hacked/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-723499991.jpg?w=1390&crop=1',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 18,
        title: 'Indian state government fixes website bug that revealed Aadhaar numbers and fingerprints',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-13T08:00:00.000Z'),
        author: 'Zack Whittaker',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/12/india-aadhaar-fingerprints-west-bengal/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/10/aadhaar-fingerprint-india-getty.jpg?w=1390&crop=1',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 19,
        title: 'Lakera launches to protect large language models from malicious prompts',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-12T07:25:00.000Z'),
        author: 'Paul Sawers',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/12/lakera-launches-to-protect-large-language-models-from-malicious-prompts/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1488400461.jpg?w=1390&crop=1',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 20,
        title: 'Yepic fail: This startup promised not to make deepfakes without consent, but did anyway',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-12T02:05:00.000Z'),
        author: 'Zack Whittaker',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/11/yepic-ai-deepfakes-without-consent/#:~:text=AI-,Yepic%20fail%3A%20This%20startup%20promised%20not%20to%20make,without%20consent%2C%20but%20did%20anyway&text=U.K.%2Dbased%20startup%20Yepic%20AI,it%20claimed%20it%20never%20would.',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2020/04/hero-clearview-fakefaces.jpg?w=1390&crop=1',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 21,
        title: 'SEC is investigating MOVEit mass-hack, says Progress Software',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-10T12:00:00.000Z'),
        author: 'Carly Page',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/11/sec-is-investigating-moveit-mass-hack-says-progress-software/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2016/10/gettyimages-167959993.jpg?w=1390&crop=1',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 22,
        title: 'Database Hosting là gì? Chi tiết về Database Hosting',
        content: 'The seventh news content',
        publishDate: new Date('2023-09-26T00:00:00.000Z'),
        author: 'Vinh Phạm',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/database-hosting-la-gi-chi-tiet-ve-database-hosting-20230926121043986.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/9/26/database-hosting-la-gi-16957039254391505790363-0-58-407-782-crop-16957039522081243334655.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 23,
        title: 'Thuê server là gì? Thuê server hay mua server tối ưu hơn?',
        content: 'The seventh news content',
        publishDate: new Date('2023-09-16T00:00:00.000Z'),
        author: 'Vinh Phạm',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/thue-server-la-gi-thue-server-hay-mua-server-toi-uu-hon-20230915153348563.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/9/15/thue-server-la-gi-1694764261717833767996-77-118-1024-1803-crop-16947667673991623460189.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 24,
        title: 'Hướng dẫn tự tạo Cloud Server dùng thử miễn phí',
        content: 'The seventh news content',
        publishDate: new Date('2023-09-13T00:00:00.000Z'),
        author: 'Vinh Phạm',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/huong-dan-tu-tao-cloud-server-dung-thu-mien-phi-20230913235008797.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/9/13/tu-tao-cloud-server-1-16946222909201004076729-0-39-565-1045-crop-1694623722440288249389.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 25,
        title: '5 Lợi ích khi sử dụng Traffic Manager trong kiến trúc Hybrid Cloud và Multi Cloud',
        content: 'The seventh news content',
        publishDate: new Date('2023-08-29T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/5-loi-ich-khi-su-dung-traffic-manager-trong-kien-truc-hybrid-cloud-va-multi-cloud-20230829120434546.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/29/298c-1693285351920804942571.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 26,
        title: '5 mẹo tăng lượt tương tác video bạn nhất định nên thử',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-10T12:00:00'), // chưa đổi ngày
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/5-meo-tang-luot-tuong-tac-video-ban-nhat-dinh-nen-thu-20230829104925181.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/29/298a-16932808743101085147887-95-0-1219-2000-crop-1693280915424976411162.jpeg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 27,
        title: 'Gợi ý 2 kiến trúc hạ tầng hybrid cloud và multi cloud giúp doanh nghiệp chuyển đổi số hiệu quả',
        content: 'The seventh news content',
        publishDate: new Date('2023-08-22T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/goi-y-2-kien-truc-ha-tang-hybrid-cloud-va-multi-cloud-giup-doanh-nghiep-chuyen-doi-so-hieu-qua-20230822102326303.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/22/hybrid-cloud-vs-multi-cloud-16926742744451108216437-74-0-731-1170-crop-16926742909181090438903.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 28,
        title: 'Giải pháp cloud đã giúp công ty chứng khoán đứng đầu thị trường giải bài toán "tắc nghẽn" bảng giá như thế nào?',
        content: 'The seventh news content',
        publishDate: new Date('2023-08-18T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/giai-phap-cloud-da-giup-cong-ty-chung-khoan-dung-dau-thi-truong-giai-bai-toan-tac-nghen-bang-gia-nhu-the-nao-20230818151343403.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/18/188-16923460545072027729600-21-0-414-700-crop-169234606141219587208.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 29,
        title: 'Thông báo update bản vá hàng tháng của Microsoft và bản cập nhật của Google Chrome',
        content: 'The seventh news content',
        publishDate: new Date('2023-08-15T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/thong-bao-update-ban-va-hang-thang-cua-microsoft-va-ban-cap-nhat-cua-google-chrome-20230815110436267.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/15/chrome-5092-16513497-1692072085160522994671-0-0-404-720-crop-169207209381653559289.jpeg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 30,
        title: '13 lý do vì sao không nên tự lưu trữ video trong doanh nghiệp',
        content: 'The seventh news content',
        publishDate: new Date('2023-08-15T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/13-ly-do-vi-sao-doanh-nghiep-khong-nen-tu-luu-tru-video-2023081510502227.htm#:~:text=Video%20l%C3%A0%20nh%E1%BB%AFng%20file%20c%C3%B3,%C4%91i%E1%BB%83m%20b%C4%83ng%20th%C3%B4ng%20%C4%91%E1%BA%A1t%20%C4%91%E1%BB%89nh.',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/15/158-16920709290591569064206-23-0-598-1024-crop-16920709358011735674439.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 31,
        title: 'Trung Quốc chỉ ra một quyết định đã khiến cả nền kinh tế toàn cầu "toát mồ hôi"',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T13:19:00.000Z'),
        author: 'BĂNG BĂNG',
        category: 'news',
        url: 'https://genk.vn/trung-quoc-chi-ra-mot-quyet-dinh-da-khien-ca-nen-kinh-te-toan-cau-toat-mo-hoi-20231017130847497.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/china-has-banned-the-export-of-gallium-and-germanium-two-1697522867296-1697522869080581942772.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 32,
        title: 'Thiết bị lọc nước biển đột phá, tạo ra nước sạch rẻ hơn cả nước máy',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T09:30:00.000Z'),
        author: 'NGUYỄN HẢI',
        category: 'news',
        url: 'https://genk.vn/thiet-bi-loc-nuoc-bien-dot-pha-tao-ra-nuoc-sach-re-hon-ca-nuoc-may-20231017080723908.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/edit-fx1lrg-16974651422161804549049-1697504696185-16975046963901499410616.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 33,
        title: 'Làm gì khi dung lượng Google Drive và Gmail bị đầy?',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T09:30:00.000Z'),
        author: 'PHẠM THÁI HỌC',
        category: 'thủ thuật',
        url: 'https://genk.vn/lam-gi-khi-dung-luong-google-drive-va-gmail-bi-day-2023101708000184.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/photo-1697451136515-1697451136928765658422-1697504291406-1697504291596441462446.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 34,
        title: 'Bất chấp những hạn chế Mỹ đưa ra, Trung Quốc tạo ra một "cú nổ" về bán dẫn, sức mạnh gấp 75 lần các sản phẩm hiện có',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T08:00:00.000Z'),
        author: 'NGỌC HIỆP',
        category: 'news',
        url: 'https://genk.vn/bat-chap-nhung-han-che-my-dua-ra-trung-quoc-tao-ra-mot-cu-no-ve-ban-dan-suc-manh-gap-75-lan-cac-san-pham-hien-co-20231017075523949.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/27bb8e01-3fce-458d-a16e-35ca0da29e0f-1697503990635-16975039908201282347076.jpeg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 35,
        title: 'Đánh giá Oneodio Studio Pro C: Tai nghe cho người chỉ quan tâm chất âm, không chống ồn nhưng pin tận 110 tiếng',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T08:00:00.000Z'),
        author: 'PH - WEBUY',
        category: 'news',
        url: 'https://genk.vn/danh-gia-oneodio-studio-pro-c-tai-nghe-cho-nguoi-chi-quan-tam-chat-am-khong-chong-on-nhung-pin-tan-110-tieng-20231016175958982.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/review-tai-nghe-one-odio-studio-pro-c-wireless-genk-webuy-dsc01732-16974530216561334016735-1697453684437-16974536857151394895028.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 36,
        title: 'Microsoft treo thưởng “khủng” để tìm lỗ hổng Bing AI',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T07:00:00.000Z'),
        author: 'BẰNG HƯNG',
        category: 'news',
        url: 'https://genk.vn/microsoft-treo-thuong-khung-de-tim-lo-hong-bing-ai-20231017075112692.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/bing-16973552159711583499121-1697503782963-16975037831191741284160.jpeg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 37,
        title: 'Hack card màn hình, phương thức tấn công mới của tin tặc',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T07:00:00.000Z'),
        author: 'ĐÔNG PHONG',
        category: 'news',
        url: 'https://genk.vn/hack-card-man-hinh-phuong-thuc-tan-cong-moi-cua-tin-tac-20231017074901903.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/nvidia-hackers-1697430034188-1697430034555311786156-1697430363028-1697430363593651014924-1697503626534-16975036269791686987901.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 38,
        title: 'Nở rộ cách kiếm tiền mới trên TikTok: Đăng 3 video mỗi ngày, kiếm về hơn 20 triệu/tuần - Làm giàu quá dễ?',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T11:00:00.000Z'),
        author: 'MẠNH KIÊN',
        category: 'news',
        url: 'https://genk.vn/no-ro-cach-kiem-tien-moi-tren-tiktok-dang-3-video-moi-ngay-kiem-ve-hon-20-trieu-tuan-lam-giau-qua-de-20231016155912674.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/2-banyun-account2jpeg-400x866-16972888671681861515851-1697445613435-1697445614148199107998-1697446834836-16974468354551545781516.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 39,
        title: 'Phương tiện rẽ lòng biển với vận tốc lướt gần 1.000 km/h, tiêu tốn ít nhất vài tỷ USD: Còn hơn cả phim viễn tưởng',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T11:00:00.000Z'),
        author: 'THIÊN DI',
        category: 'news',
        url: 'https://genk.vn/phuong-tien-re-long-bien-voi-van-toc-luot-gan-1000-km-h-tieu-ton-it-nhat-vai-ty-usd-con-hon-ca-phim-vien-tuong-20231016155209371.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/image3-1697439757661-16974397585301214480686-1697446399006-16974463996381886230680.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 40,
        title: 'Xuất hiện đối thủ đáng gờm của Elon Musk, "đổ" 10 tỷ đô để phóng 3.236 vệ tinh',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T11:00:00.000Z'),
        author: 'TRANG LY',
        category: 'news',
        url: 'https://genk.vn/xuat-hien-doi-thu-dang-gom-cua-elon-musk-do-10-ty-do-de-phong-3236-ve-tinh-20231016155016935.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/ty-phu-giau-nhat-the-gioi-1-16974262251302086406484-1697429971324-16974299716712109750285-1697446291215-1697446292124646916938.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 41,
        title: 'Lời tiên tri của Toyota đã thành sự thật, không phải xe điện, xe hybrid mới là chân ái',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T11:00:00.000Z'),
        author: 'BĂNG BĂNG',
        category: 'news',
        url: 'https://genk.vn/loi-tien-tri-cua-toyota-da-thanh-su-that-khong-phai-xe-dien-xe-hybrid-moi-la-chan-ai-20231016153725577.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/japantoyota-1697431413022-1697431413890848485528-1697445476246-1697445477069306487198.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 42,
        title: 'Chip Core i7 thế hệ 14 bất ngờ xuất hiện trên thị trường, trước cả khi Intel mở bán',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T10:00:00.000Z'),
        author: 'ĐÔNG PHONG',
        category: 'news',
        url: 'https://genk.vn/facebook-co-nghe-len-de-quang-cao-chuyen-gia-an-ninh-mang-khang-dinh-khong-20231016145853126.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/japantoyota-1697431413022-1697431413890848485528-1697445476246-1697445477069306487198.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 43,
        title: 'Sáng kiến độc đáo mở ra kỷ nguyên đường sá trên Mặt Trăng',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T10:00:00.000Z'),
        author: 'HUỲNH DŨNG',
        category: 'Khám phá',
        url: 'https://genk.vn/sang-kien-doc-dao-mo-ra-ky-nguyen-duong-sa-tren-mat-trang-20231016144355688.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/mat-trang-1-08164445-1697442073020-16974420733121315752683.png',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 44,
        title: 'Chuyện "thế giới đã sản xuất được chip có 1.000 chân, chúng ta mới sản xuất được 8 chân" và màn đặt cược của FPT với ngành bán dẫn',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T12:00:00.000Z'),
        author: 'HOÀNG THÙY',
        category: 'news',
        url: 'https://genk.vn/chuyen-the-gioi-da-san-xuat-duoc-chip-co-1000-chan-chung-ta-moi-san-xuat-duoc-8-chan-va-man-dat-cuoc-cua-fpt-voi-nganh-ban-dan-20231016093944745.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/ong-nguyen-van-khoa-tong-giam-doc-tap-doan-fpt01-1697423941841-1697423942504617772480.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 45,
        title: 'Chang\'\ e 5 phát hiện chất bí ẩn trên Mặt Trăng',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T13:00:00.000Z'),
        author: 'ĐỨC KHƯƠNG',
        category: 'news',
        url: 'https://genk.vn/change-5-phat-hien-chat-bi-an-tren-mat-trang-20231014115541452.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2023/10/14/18820368-0-image-a-271569235732527-1697258615952974840073.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 46,
        title: 'What is Wi-Fi 7 — and do you even need it?',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T12:09:00.000Z'),
        author: 'Wes Davis',
        category: 'news',
        url: 'https://www.theverge.com/23902812/wi-fi-7-explained',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24957254/236811_WIFI7_CVirginia_12.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 47,
        title: 'The Meta glassholes have arrived',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T07:08:00.000Z'),
        author: 'Sean Hollister',
        category: 'news',
        url: 'https://www.theverge.com/23920102/meta-quest-3-in-public-privacy-recording-glassholes',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1558/750x500/filters:focal(1835x532:1836x533):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25007956/meta_quest_3_elevator_mixed_reality.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 48,
        title: 'Lakers legend Rick Fox built a house that can suck CO2 out of the atmosphere',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-16T11:01:00.000Z'),
        author: 'Justine Calma',
        category: 'news',
        url: 'https://www.theverge.com/2023/10/16/23916106/nba-lakers-rick-fox-concrete-alternative-house-partanna-climate-change',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:6754x4503/750x500/filters:focal(3377x2252:3378x2253):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25001154/RA23101115192003323.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 49,
        title: 'Pixel 6 owners who use multiple profiles run into problems with Android 14',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T06:08:00.000Z'),
        author: 'Umar Shakir',
        category: 'Tech',
        url: 'https://www.theverge.com/2023/10/16/23919957/pixel-6-android-14-upgrade-bugs-multiple-user-profiles',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24007893/acastro_STK112_android_02.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },
    {
        id: 50,
        title: 'The Meta glassholes have arrived',
        content: 'The seventh news content',
        publishDate: new Date('2023-10-17T05:19:00.000Z'),
        author: 'Wes Davis and Richard Lawler',
        category: 'Tech',
        url: 'https://www.theverge.com/2023/10/15/23917926/apple-ipad-air-mini-tablet-m2-a16-bionic-rumor',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951261/VRG_Illo_N_Barclay_5_apple.jpg',
        commentCount: 1,
        viewCount: 0,
        source: {
            sourceId: 1,
            sourceName: 'abc',
            sourceUrl: 'https://www.google.com',
            sourceLogo: 'https://www.google.com',
            sourceDescription: 'abc',
        },
        comment: [
            {
                id: 1,
                content: 'Comment 1',
                createDate: new Date(),
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
        like: [
            {
                id: 1,
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'sdah',
                },
            },
        ],
    },



];

