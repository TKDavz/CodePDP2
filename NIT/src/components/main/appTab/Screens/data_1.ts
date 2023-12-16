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

        content: `Nhiều thông tin cho rằng Apple sẽ có một sự kiện diễn ra trong tháng 10 dành cho iPad, ngày đó có thể là 17/10. Trong khi iPad Pro đã ra mắt năm ngoái, nhiều khả năng đây là dịp để Apple làm mới iPad, iPad Air và đặc biệt là iPad mini.
        Thế hệ hiện tại của iPad Air đã ra mắt gần 3 năm trước với chip M1, nguồn tin Supercharged nói dự kiến máy sẽ được trang bị con chip M2 mới hơn và mạnh hơn. Trong khi đó, iPad mini sẽ ra mắt với A16 Bionic cũng như bộ điều khiển màn hình mới để khắc phục lỗi đã tồn tại khi ra mắt. Các phiên bản iPad mới sẽ chỉ có thay đổi về cấu hình trong khi thiết kế có thể sẽ giữ nguyên như cũ.`,
        publishDate: new Date('2023-10-15T17:06:00.000Z'),
        author: 'Didu',
        category: 'news',
        url: 'https://tinhte.vn/thread/apple-co-the-ra-mat-ipad-tuan-toi.3726951/?ta_from_block=home_featured_threads',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8151120_5808107-review-ipadmini-6thgen-tinhte-5.jpg',
        commentCount: 2,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'Apple có thể ra mắt iPad tuần tới',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Với việc trang bị 4 chân thay vì hai chân như hầu hết các bàn nâng hạ khác thì iCockpit FEL 1880 sẽ gắn được các mặt bàn với kích thước lớn hơn nên anh em có thể dùng bàn với nhiều mục đích hơn. Hai motor hai bên sẽ giúp việt thay đổi chiều cao được diễn ra cân bằng và chắc chắn hơn so với các bàn có một motor. Và đặc biệt là giá chỉ có khoảng 5 triệu đồng trong khi các bài nâng hạ 2 trụ khác trên thị trường cũng ở mức giá này. Điều duy nhất mình không thích ở chiếc bàn này đó là chiều cao tối thiểu của nó là 73 cm, nếu nó có thể thấp xuống tới 65 cm thì ngon.
        4 chân giúp cho bàn vững chãi hơn, gắn được mặt bàn to hơn
        Mặt bàn to hơn, làm được nhiều việc hơn
        Đây là điểm mà anh em cần lưu ý. Tức là cái bàn này dành cho anh em muốn một bàn làm việc thật to, để được nhiều đồ hoặc là anh em có thể dùng nó cho các mục đích khác như bàn ăn, bàn quay phim, bàn cho anh em chơi máy cà phê. Một nhu cầu khác mình nghĩ ra đó là bàn làm việc nhóm, tức là bàn này nếu anh em gắn mặt bàn 90x240 (cm) thì có thể thoải mái cho 4 người cùng làm việc hoặc thậm chí 6 người nếu dùng laptop.
        Chiếc bàn mình trên tay thì có kích thước là chiều sâu 80 cm, chiều rộng 180 cm và chiều cao là từ 73 cm lên tới 117 cm. Tuy nhiên theo thông số mình coi thì anh em có thể để được mặt bàn có chiều sâu từ 70 cm đến 90 cm và chiều rộng tối đa tới 240 cm.
        4 chân vững chãi hơn, ít rung lắc hơn
        Việc trang bị 4 chân thay vì 2 chân như hầu hết các bàn nâng hạ chiều cao hiện nay thì giúp cho bàn iCockpit FEL 1880 vững chãi hơn. Như vậy anh em dùng bàn làm việc hoặc cho các việc khác sẽ thấy nó ổn định và chắc chắn hơn, ít rung lắc hơn. Như vậy khi anh em gắn arm màn hình hay dùng bàn để làm các việc như vẽ, cắt đồ, lắp ráp đồ… sẽ thấy chắc chắn hơn các loại bàn hai chân trụ khác.
        Nếu anh em là người gõ phím hơi mạnh tay mà anh em có dùng arm gắn màn hình thì có thể với bàn hai chân anh em gõ sẽ có độ rung nhất định làm cho màn hình rung. Còn bàn 4 chân như iCockpit FEL 1880 sẽ hạn chế được tình trạng đó.
        Cho nên việc lựa chọn iCockpit FEL 1880 là có chủ đích và dành cho một yêu cầu cao hơn yêu cầu bình thường. Anh em nhớ lưu ý khi chọn.
        Động cơ nâng hạ điện và điều khiển
        iCockpit FEL 1880 trang bị hai cộng cơ hai bên để nâng/hạ độ cao của bàn. Trong khi các bàn bình thường khác thì có một động cơ đặt ở một bên và dùng hệ thống truyền động để điều nâng/hạ độ cao. Việc trang bị hai động cơ giúp việc nâng/hạ độ cao được diễn ra cân bằng hơn và hệ thống sẽ bền bỉ và êm ái hơn do không cần phải dùng hệ thống truyền động. Theo thông tin thì anh em có thể để được tổng cộng là 150 kg trên mặt bàn mà nó vẫn có thể nâng hạ thoải mái.
        Chúng ta sẽ điều khiển nâng/hạ độ cao của bàn qua một bảng điều khiển và anh em có thể gắn ở vị trí nào mà anh em thấy tiện tay. Trên màn điều khiển có nút tăng/giảm độ cao, có 2 nút nhớ và nút reset. Khi anh em nhấn và giữ vào nút nâng hoặc hạ trong vài giây thì nó sẽ tự động lên hoặc xuống cho đến khi anh em nhấn lần nữa. Thường thì chúng ta sẽ lưu nút ngồi và đứng theo một chiều cao nào đó rồi sau đó nhấn một cái thôi.
        Động cơ hoạt động êm ái, không nghe tiếng động quá lớn. Một phần cũng do dùng 2 động cơ và không có hệ thống truyền động. Theo thông số của nhà sản xuất thì tổng thời gian sử dụng của động cơ là 50,000 giờ, tức tương đương với 17 năm sử dụng.
        Khay đựng ly nước và móc treo tai nghe
        Đi theo bàn là hai phụ kiện hữu ích này cho anh em văn phòng. Anh em có thể tuỳ biến vị trí để nào cũng được, phía dưới mặt bàn người ta có khoan sẵn các vị trí để anh em gắn các phụ kiện này. Tuy nhiên mặt bàn này bằng gỗ ép nên việc anh em gắn nó ở các vị trí khác mà anh em muốn nó quá đơn giản.
        Các thông tin khác anh em cần quan tâm
        Mặt bàn ghép hai mảnh chứ không phải một tấm liền. Mình nhận được bàn kích thước 80 cm x 180 cm là hai mảnh ghép, rõ ràng để có thể ship được dễ dàng đến nhà anh em thì đây là giải pháp tuyệt vời nhất. Sau khi gắn lên mình thấy nó cũng ổn, không hở nhiều. Mặt bàn có độ dày là 1,5 cm. Tuy nhiên nếu anh em có thể chỉ mua chân không và bỏ thêm tiền mua mặt bàn liền cũng hay, khổ ván chuẩn là 120 cm x 240 cm. Như vậy anh em có thể tìm chỗ nào bán ván và nhờ họ cắt theo kích thước anh em muốn. Ví dụ như tìm mặt bàn dày 2 cm hay 2,5 cm thì sẽ chắc chắn và ổn hơn.
        Mình thấy việc tự lắp cái bàn này cũng đơn giản, anh em dùng công cụ đi theo trong hộp làm cũng được. Nếu anh em có đồ nghề ở nhà thì ngon hơn, cho nên nếu mua bàn này anh em lựa chọn tự lắp cũng hay.
        Mặt bàn ghép nhưng làm kỹ nên rất khít.
        Chiều cao thay đổi được sẽ phù hợp và giúp cho việc ngồi, đứng làm việc tốt hơn cho sức khoẻ.
        Hơn 50% thời gian của mình khi làm việc trên bàn là đứng. Nó giúp mình thoải mái và linh hoạt hơn, khoẻ mạnh hơn.
        Mặt bàn lớn cũng giúp để được nhiều đồ hơn và dùng cho các mục đích khác nhau.`,
        publishDate: new Date('2023-10-04T23:53:00.000Z'),
        author: 'cuhiep',
        category: 'news',
        url: 'https://tinhte.vn/thread/tren-tay-ban-nang-ha-chieu-cao-icockpit-fel-1880-4-chan-mat-ban-to-2-motor-vung-chai.3723132/#menuid2',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8140726_ban-nang-ha-chieu-cao-iCockpit-FEL-1880-06.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Samsung ra mắt tính năng theo dõi chứng ngưng thở khi ngủ trên đồng hồ Galaxy Watch được phê duyệt bởi Bộ An toàn Thực phẩm và Dược phẩm Hàn Quốc.
        Tính năng mới được tích hợp trên ứng dụng Samsung Health Monitor giúp nhiều người phát hiện sớm chứng ngưng thở khi ngủ.
        Samsung Electronics vừa thông báo Tính Năng Theo Dõi Chứng Ngưng Thở Khi Ngủ trên ứng dụng Samsung Health Monitor đã được Bộ An toàn Thực phẩm và Dược phẩm Hàn Quốc (MFDS) phê duyệt và sẽ có mặt trên các sản phẩm Galaxy Watch ra mắt tại Hàn Quốc vào đầu năm sau. Tính năng được kỳ vọng hỗ trợ người dùng phát hiện sớm các triệu chứng ngưng thở khi ngủ do tắc nghẽn thường không được chẩn đoán và điều trị kịp thời.
        Ông Hon Pak, Phó Giám Đốc kiêm Trưởng nhóm Sức khỏe Số thuộc Bộ phận Trải nghiệm thiết bị MX tại Samsung Electronics cho biết: “Samsung luôn cam kết cung cấp những công nghệ tiên tiến nhất cho các thiết bị đeo Galaxy để giúp người dùng hiểu rõ về tình trạng sức khỏe cũng như chủ động chăm sóc sức khỏe một cách tối ưu. Với tính năng theo dõi chứng ngưng thở khi ngủ trên Galaxy Watch, chúng tôi đem đến cho người dùng một công cụ đơn giản và chủ động để kịp thời nhận biết hội chứng rối loạn này trước khi tình trạng sức khỏe trở nên nghiêm trọng hơn.”
        Ngưng thở khi ngủ là một triệu chứng rối loạn giấc ngủ thường găp có thể gây ra hậu quả nghiêm trọng, khiến người bệnh ngừng thở khi đang ngủ. Điều này làm gián đoạn quá trình cung cấp oxy, giảm chất lượng giấc ngủ và gây ra các biến chứng khác như tăng huyết áp, rối loạn tim mạch, đột quỵ hoặc rối loạn nhận thức. Theo Tổ chức Giấc ngủ Quốc gia, có khoảng 25% nam giới và 10% phụ nữ ở Hoa Kỳ mắc chứng ngưng thở khi ngủ do tắc nghẽn, trong đó nhiều trường hợp không nhận ra các triệu chứng hoặc tìm đến các phương pháp điều trị y khoa kịp thời. Vì thế, tính năng theo dõi chứng ngưng thở khi ngủ được thiết kế để giúp người dùng chủ động nhận biết các triệu chứng sớm nhấ nhằm ngăn chặn và giảm thiểu khả năng xảy ra các biến chứng liên quan.
        Tính năng theo dõi chứng ngưng thở khi ngủ trên Galaxy Watch sử dụng Cảm biến BioActive để theo dõi mức độ oxy trong máu khi ngủ và xác định các triệu chứng chứng ngưng thở khi ngủ do tắc nghẽn từ cấp độ trung bình đến nặng, bằng cách phân tích sự thay đổi của giá trị oxy trong máu chạm mức ngưng thở/giảm thông khí, và đưa ra ước tính Chỉ số ngưng thở-Giảm thông khí (AHI). Người dùng chỉ cần theo dõi giấc ngủ 2 lần trong vòng 10 ngày, mỗi lần cách nhau 4 giờ ngủ để đánh giá và phát hiện xem liệu có mắc phải các triệu chứng hay không.
        Tính năng theo dõi chứng ngưng thở khi ngủ của Galaxy Watch được tích hợp trên ứng dụng Samsung Health Monitor cùng tính năng theo dõi huyết áp, phát hiện điện tâm đồ (ECG) và thông báo nhịp rối loạn tim (IHRN), giúp người dùng nắm bắt chi tiết hơn về tình trạng sức khỏe tổng quát — tất cả ngay trên cổ tay của người dùng. Tính năng sẽ được ra mắt trên các thiết bị Galaxy Watch seires tại Hàn Quốc thông qua các bản cập nhật ứng dụng Samsung Health Monitor từ đầu năm sau.`,
        publishDate: new Date('2023-10-15T13:41:00.000Z'),
        author: 'tuantomobile',
        category: 'news',
        url: 'https://tinhte.vn/thread/samsung-ra-mat-tinh-nang-theo-doi-chung-ngung-tho-khi-ngu-tren-dong-ho-galaxy-watch.3726873/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8150981_IMG-3556.jpeg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `AI Wallpaper là một trong những tính năng phần mềm thú vị về cách Google tận dụng AI vào trong Pixel 8 series mới của họ. Anh em đã nghe nhiều về Dall-E, về các model AI có thể tạo ra hình ảnh từ những câu chữ gợi ý, tuỳ thuộc vào độ “bay bổng” trong đầu và tuỳ vào độ thông minh của model AI đó. AI Wallpaper là cách hay ho để người dùng tự sáng tạo ra hình nền cho riêng mình.
        Được giới thiệu như là một phần của Android 14, hiện tại AI Wallpaper đã có sẵn trên Pixel 8 series, nó cho phép anh em tạo hình nền từ các chủ đề có sẵn, chỉ việc thay đổi các câu từ là các hình ảnh, màu sắc mong muốn là có thể tạo được. Hình nền anh em tạo ra không nhất thiết là tất cả đều giống nhau, dựa trên suy nghĩ, cá nhân hoá của mỗi người mà hình nền sẽ giống hoặc khác nhau.`,
        publishDate: new Date('2023-10-14T23:28:00.000Z'),
        author: 'Pnghuy',
        category: 'news',
        url: 'https://tinhte.vn/thread/dung-thu-ai-wallpaper-tren-google-pixel-8-pro-khong-lo-thieu-hinh-nen-dep-de-xai.3726737/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8150669_dung-thu-ai-wallpaper-Google-pixel-8-pro-tinhte.jpeg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Android trước đây thường rất hạn chế trong việc cập nhật phần mềm, tuy nhiên mọi thứ đã được cải thiện rất nhiều trong khoảng 5 năm qua. Trong năm 2023, việc các smartphone Android cao cấp nhận được các bản cập nhật OS và bảo mật trong ít nhất 3 đến 4 năm đã là điều tương đối phổ biến, tuy nhiên không phải tất cả các nhà sản xuất đều có cam kết như nhau về việc cập nhật phần mềm.
        Google và Samsung là 2 trong số những công ty dẫn đầu về việc hỗ trợ phần mềm trong thế giới Android. Trước đây cả 2 đều chưa đạt được đến mức độ hỗ trợ như Apple, tuy nhiên Google mới đây vừa công bố một chính sách cập nhật mới vô cùng ấn tượng. Có vẻ như sự cạnh tranh trong lĩnh vực này đang nóng dần lên, nhưng công ty nào đang có chính sách cập nhật phần mềm tốt nhất trong thế giới smartphone hiện tại?
        Google hiện đang dẫn đầu nhưng cũng có một số lưu ý
        Google Pixel là dòng điện thoại Android hỗ trợ phần mềm lâu dài nhất trước khi bị Samsung vượt qua với dòng Galaxy S22. Tuy nhiên Google cũng không để tình trạng này kéo dài lâu khi dòng Pixel 8 mới hứa hẹn sẽ có 7 năm cập nhật OS, 7 năm cập nhật bảo mật và 7 năm cập nhật Android Feature Drop.
        Mức độ hỗ trợ này là chưa từng có trước đây, đặc biệt là khi cả Apple cũng không đưa ra mức độ cam kết tương tự. Điều này tất nhiên làm hài lòng người dùng tuy nhiên vẫn có một số lưu ý ở đây:
        Mức độ cập nhật này chỉ áp dụng cho dòng Pixel 8 mới nhất và không áp dụng cho các thiết bị cũ hơn như Pixel Fold, Pixel 7 hay Pixel 6
        Chưa có gì đảm bảo Google sẽ đưa ra cam kết tương tự cho các thiết bị Pixel mới trong tương lai. Pixel 9 và Pixel Fold 2 thì có thể được, nhưng Pixel 8a thì chưa chắc
        Apple là hãng nhất quán nhất với các bản cập nhật phần mềm
        Ở những ngày đầu của Android thì mức độ phân mảnh rất lớn chính là nguyên nhân khiến các nhà sản xuất không hỗ trợ thiết bị của mình lâu dài. Ngược lại thì Apple luôn có chính sách cập nhật phần mềm rất tuyệt vời ngay từ đầu.
        Chiếc iPhone 1 có ít nhất 3 bản cập nhật OS vào thời điểm mà Android còn chưa có khái niệm về điều đó. Vào thời điểm iPhone 6 xuất hiện thì Apple đã bắt đầu hỗ trợ phần mềm cho điện thoại của mình từ 5 năm trở lên. Và càng ấn tượng hơn nữa với dòng iPhone 6S, xuất xưởng với iOS 9 và vẫn được cập nhật đến iOS 15.
        Một điểm đặc biệt khác là Apple chưa bao giờ công bố rõ ràng về chính sách cập nhật của mình. Không có bất kỳ cam kết cụ thể nào và mọi chiếc iPhone đều được Apple đánh giá để cập nhật theo từng trường hợp cụ thể. Ví dụ iPhone 6S được cập nhật 6 năm tuy nhiên iPhone 8 và iPhone X ra mắt 2 năm sau đó chỉ được cập nhật OS trong 5 năm.
        Nhìn chung Apple sẽ tiếp tục hỗ trợ điện thoại của mình miễn là bản cập nhật không có thay đổi lớn nào có thể ảnh hưởng tiêu cực đến hiệu năng. Người dùng chúng ta chỉ cần hiểu là mọi chiếc iPhone đều sẽ được hỗ trợ cập nhật ít nhất 5 năm là được, áp dụng cho cả thiết bị mới nhất như iPhone 15 hay thiết bị cấp thấp hơn như iPhone SE.`,
        publishDate: new Date('2023-10-10T20:00:00.000Z'),
        author: 'vn_ninja',
        category: 'news',
        url: 'https://tinhte.vn/thread/cong-ty-nao-co-chinh-sach-cap-nhat-phan-mem-tot-nhat-the-gioi-smartphone-hien-tai.3725208/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8146336_cover-Cap-Nhat-Phan-Mem-Android-tinhte.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Chất lượng tia laser có thể bị ảnh hưởng bởi các thiết bị quang học, tuy nhiên sóng âm cũng có thể giúp đổi hướng laser mà không gây ra các tác động trên. Nhóm nhà nghiên cứu Đức vừa công bố phát hiện đặc biệt này trên tạp chí Nature Photonics.
        Ngày nay chúng ta không còn gì xa lạ với laser. Chúng xuất hiện ở rất nhiều nơi nhất là những máy đo nhiệt độ, máy quét barcode, các thiết bị cảm biến an toàn, chống trộm... Laser bản chất là những tia sáng năng lượng cao hội tụ do đó chúng vẫn tuân theo các quy luật quang học chung. Chúng có thể bị phản xạ, tán xạ, hấp thụ như bất kỳ loại bước sóng điện từ nào khác.
        Song laser có bản chất là chùm tia năng lượng cao nên chúng có thể bị thay đổi thuộc tính khi đi qua các thiết bị quang học. Ngược lại, tuổi thọ các thiết bị cũng có thể suy giảm khi tia laser tác động lên chúng. Điều này đặc biệt quan trọng đối với các thiết bị phát laser công suất lớn. Việc sử dụng lâu dài có thể gây ra các hao tổn không chỉ với thiết bị mà còn với cả chất lượng tia laser ở điểm cuối.
        Một nhóm các nhà nghiên cứu tại DESY và Học viện Helmholtz tại Jena (Đức) vừa công bố một phát hiện mới, cho thấy chúng ta hoàn toàn có thể thay các thiết bị quang học bằng sóng âm để điều hướng các tia laser trên. Bằng cách sử dụng những chiếc loa công suất lớn, nhóm nhà nghiên cứu tạo ra một vùng không khí đặc biệt nơi tia laser truyền qua. Cụ thể họ tạo ra một "tấm lưới" trong đó có những khu vực không khí đậm đặc và khu vực không khí loãng. Hình thái này tạo ra những khu vực có chiết quang khác nhau, tương tự như bầu khí quyển của Trái Đất làm đổi hướng các tia sáng từ Mặt Trời rọi xuống.
        
        Yannick Schrödel, trưởng nhóm nghiên cứu, cho biết: "Chúng tôi tạo ra một tấm lưới quang học với sự hỗ trợ của các sóng âm có mật độ khác nhau. Ngoài ra, tán xạ tia sáng bằng các tấm lưới chiết quang cho phép việc kiểm soát chính xác hơn so với tán xạ bằng khí quyển. Tính chất của tấm chiết quang được quyết định bởi cường độ và tần số - hay nói cách khác, bởi thể tích - của lớp sóng âm".
        Trong lần thử nghiệm đầu tiên, một xung laser hồng ngoại có công suất 20 GW đã được đảo hướng bằng phương pháp này với hiệu quả đạt 50%. Các nhà nghiên cứu đã phải cấu hình lại chiếc loa đặc biệt của họ. Christoph Heyl, đồng tác giả nghiên cứu, mô tả: "Chúng tôi tạo ra một luồng sóng âm với cường độ 140 dB, vốn tương đương với độ ồn của một động cơ phản lực ở khoảng cách vài mét. Nhưng may mắn là, chúng tôi sử dụng dải âm siêu cao tần, vì thế tai của chúng tôi không nghe được gì cả".
        Chi tiết quan trọng là cường độ của tia laser trên tương đương với năng lượng của 2 tỉ bóng đèn LED. Những tia laser như thế có thể được dùng trong những ứng dụng cao cấp, ví dụ như lò gia tốc hạt hoặc nghiên cứu tổng hợp hạt nhân. Heyl nói thêm: "Ở mức năng lượng như thế, tính chất vật liệu của các lăng kính, thấu kính, gương phản chiếu giới hạn đáng kể hoàn cảnh sử dụng chúng. Những thành phần quang học rất dễ bị hư hại bởi các tia laser mạnh mẽ. Chưa kể, chất lượng của tia laser cũng bị suy giảm. Trong khi đó, chúng ta hoàn toàn có thể phản chiếu các tia laser theo cách bảo toàn năng lượng mà không cần 'chạm' vào chúng".
        
        Việc ứng dụng sóng âm để điều khiển tia laser có thể không chỉ dừng lại ở các tấm chiết quang. Các nhà nghiên cứu còn có ý định dùng chúng để thay thế các thành phần khác như thấu kính hay bộ dẫn sóng (waveguide). Heyl giải thích thêm: "Chúng tôi đã nghĩ về phương pháp này từ rất lâu và nhận ra rằng các mức sóng âm cực hạn là cần thiết. Dù rằng lúc đầu những thứ này dường như là bất khả thi về mặt kỹ thuật. Nhưng chúng tôi đã không bỏ cuộc và sau cùng tìm được giải pháp với sự hỗ trợ từ các đồng nghiệp ở ĐH Kỹ thuật Darmstadt cũng như từ công ty Inoson. Trước hết, chúng tôi thử phương pháp của mình với không khí bình thường. Sắp tới, chúng tôi sẽ thử với các loại khí khác để phân loại các loại bước sóng khác nhau cũng như thành phần quang học khác".`,
        publishDate: new Date('2023-10-16T12:00:00'),
        author: 'Lư Thế Nghĩa',
        category: 'news',
        url: 'https://tinhte.vn/thread/nghien-cuu-moi-cho-phep-doi-huong-tia-laser-bang-khong-khi.3725296/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8146629_cover-doi-huong-laser-bang-khong-khi-tinhte.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Đó là kết luận sau cuộc nghiên cứu tiến hành 350.757 lần tung đồng xu, sử dụng 46 loại tiền xu với mệnh giá khác nhau từ khắp nơi trên thế giới, và với 48 tình nguyện viên. Kết quả, các nhà khoa học phát hiện ra rằng, tỷ lệ xấp ngửa của đồng xu không bao giờ chính xác 50/50, mà 50,8% tổng số lần tung đồng xu, nó tiếp đất đúng mặt hướng lên trên khi bắt đầu tung.
        Cuộc nghiên cứu do các nhà khoa học châu Âu thực hiện sử dụng dữ liệu từ những mô hình mô phỏng người tung đồng xu do Diaconis, Holmes, và Montgomery phát triển từ năm 2007. Theo mô hình này, vì mặt hướng lên trên lơ lửng trong không trung lâu hơn so với mặt dưới, nên kết quả có tỷ lệ ra mặt này cao hơn.
        Các nhà khoa học gọi hiện tượng này là “thiên lệch mặt đồng xu”.
        Đương nhiên tỷ lệ 50,8% trong hơn 300 nghìn lần thực hiện là quá nhỏ để có được lợi thế khi dự đoán kết quả của một cú tung đồng xu. Nhưng lấy ví dụ số lần tung đồng xu tỷ lệ gần như 50/50 được thực hiện cỡ 1 nghìn lần, và ví dụ cứ mỗi lần đoán đúng là được 1 Đô, thì 1000 lần tung sẽ thu lời được khoảng 19 Đô.
        Đó cũng là lý do, để công bằng, khi tung đồng xu, không bao giờ được hé lộ mặt nào hướng lên trên.`,
        publishDate: new Date('2023-10-11T01:20:00.000Z'),
        author: 'P.W',
        category: 'news',
        url: 'https://tinhte.vn/thread/giam-doc-amd-dich-vu-gia-cong-ban-dan-cua-intel-se-that-bai.3725292/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8146622_cover-intel.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Đấy là tuyên bố của Darren Grasby, phó chủ tịch mảng đối tác chiến lược, kiêm chủ tịch AMD phân vùng châu Âu, châu Phi và Trung Đông (EMEA).
        Theo CEO Pat Gelsinger của Intel, IFS, viết tắt của Intel Foundry Services là “dịch vụ gia công wafer bán dẫn đẳng cấp thế giới” phục vụ các công ty phát triển chip xử lý không có fab gia công riêng. Giữa thời điểm thị trường máy tính cá nhân đang có những dấu hiệu suy giảm về doanh thu và càng lúc càng cạnh tranh, thì đây là giải pháp để Intel tiếp tục phát triển về lâu dài.
        Còn phó chủ tịch Grasby của AMD, tại diễn đàn Canalys EMEA Forum 2023 thì khẳng định rằng con đường mới để đảm bảo doanh thu hàng năm của Intel là sai lầm. Ông cho biết, AMD đã lựa chọn con đường ngược lại hoàn toàn nhiều năm về trước. Khi ấy mảng fab gia công bán dẫn của AMD phải tách riêng, trở thành GlobalFoundries để cứu sống mảng phát triển chip xử lý của hãng, đổi lại, AMD chịu số phận “fabless”, muốn sản xuất sản phẩm thương mại thì phải nhờ tới các bên khác gia công.
        Nhưng nhờ việc chia đôi ngả như thế, AMD đã có thể đổ rất nhiều tiền cho quá trình phát triển sản phẩm, để rồi ngày hôm nay họ có những sản phẩm được đánh giá cao, từ Ryzen, Radeon cho tới EPYC.
        Intel từ trước tới giờ luôn luôn là một công ty gia công bán dẫn, nhưng trước khi có IFS, fab của Intel chỉ phục vụ riêng chính bản thân tập đoàn. Dưới sự dẫn dắt của CEO Gelsinger, Intel đi theo hướng mở hơn, tạo ra những sản phẩm mới như GPU Arc, được TSMC gia công. Cùng lúc, Intel cũng đầu tư mạnh tay để xây dựng những fab gia công bán dẫn mới để mở rộng khả năng vận hành của IFS, với những fab và trung tâm nghiên cứu phát triển sản phẩm tại Arizona, Ohio, New Mexico và Đức.
        Gần đây, nói về IFS, CEO Pat Gelsinger cho rằng, sau hai năm rưỡi công bố mảng gia công bán dẫn, ông và những người đồng sự tại Intel đã làm tạm ổn nhiệm vụ đặt ra. Nếu dịch vụ fab gia công bán dẫn thành công, thì Intel hoàn toàn có thể nhận đơn đặt hàng từ những tập đoàn mà họ coi là đối thủ cạnh tranh trực tiếp trên thị trường, nghĩa là hoàn toàn có khả năng sản phẩm của Nvidia, ARM hay cả AMD sẽ được Intel gia công.
        Gần đây có nhiều nhà phân tích thị trường đưa ra quan điểm cho rằng Intel có thể bị chia làm hai. Mảng nghiên cứu phát triển sản phẩm chip thương mại sẽ là khách hàng của IFS. Theo nhà phân tích Andy Buss của IDC, đương nhiên có nhiều lựa chọn fab gia công bán dẫn sẽ là điều tốt cho cả thị trường. TSMC giờ đang gặp khó khăn trong quá trình phục vụ những khách hàng lớn, từ AMD đến Nvidia, cho tới cả Apple vì đơn hàng càng lúc số lượng càng lớn.`,
        publishDate: new Date('2023-10-14T16:25:00.000Z'),
        author: 'P.W',
        category: 'news',
        url: 'https://tinhte.vn/thread/khoa-hoc-da-chung-minh-tung-dong-xu-khong-bao-gio-co-ty-le-chinh-xac-50-50.3726600/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8150256_cover-xu.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Phòng thí nghiệm quốc gia Oak Ridge (ORNL) đã thực hiện một số điều chỉnh nhỏ trong cấu tạo của pin thể rắn (Solid-state battery) để khắc phục các vấn đề khiếm khuyết trong màng điện phân của loại pin này. Thay đổi dù nhỏ nhưng được cho là đem lại kết quả lớn khi nó giúp mở ra cánh cửa cho việc tạo ra những viên pin thể rắn an toàn, ổn định và hiệu quả hơn.
        Pin thể rắn được xem là một công nghệ hứa hẹn. Khác với pin lithium-ion hiện tại, pin thể rắn không chứa chất lỏng dễ cháy. Đây vốn là nhược điểm cố hữu của các loại pin hiện tại, bằng chứng là đã có không ít những vụ việc cháy nổ do thiết bị điện tử sử dụng loại pin này. Pin thể rắn cũng ít độc hơn, có mật độ năng lượng cao hơn, thời gian sạc nhanh hơn và tuổi thọ cao hơn. Ngoài ra, một ưu điểm độc đáo khác của pin thể rắn đó chính là nó rất ít bị “chai pin” theo thời gian.
        Tuy nhiên, quá trình sản xuất loại pin này đang gặp phải nhiều khó khăn và tốn kém so với pin Li-ion. Một trong những thách thức lớn nhất mà pin thể rắn đang gặp phải đó là khiếm khuyết trong màng điện phân, một yếu tố quan trọng trong cấu trúc của pin. Hiện tại, màng điện phân của loại pin này được làm từ Li2OHCl. Các tấm Li2OHCL mỏng sẽ được ép lại thành một tấm màng lớn hơn. Khi hoạt động, các bọt nhỏ li ti sẽ bắt đầu hình thành trong màng điện phân, nó ngăn cản sự di chuyển ion giữa các điện cực, làm chậm quá trình sạc và giảm hiệu quả hoạt động của pin.
        Để giải quyết vấn đề này, hoá ra giải pháp của ORNL đưa ra lại quá đơn giản. Thay vì chỉ ép các tấm Li2OHCl lại đơn thuần, họ sẽ gia nhiệt trong quá trình ép. Sau khi ép xong, họ sẽ để tấm màng điện phân tự nguội lại trong khi vẫn giữ áp suất ép lớn. Nhờ bước gia nhiệt này, màng điện phân thành phẩm không còn tạo ra các bóng khí nữa, đồng thời khả năng dẫn điện của nó cũng hiệu quả hơn tới gần 1000 lần so với trước. Mật độ dòng điện tới hạn cũng được cải thiện cao hơn 50%, và quan trọng hơn cả, tính chất lithiophilic cũng tốt hơn. Từ "lithiophilic" là một thuật ngữ kỹ thuật trong lĩnh vực pin và ngành công nghiệp liên quan. Nó chỉ tính chất của một vật liệu hoặc bề mặt có khả năng tương tác và hấp thụ ion lithium.
        Trong trường hợp pin thể rắn, tính lithiophilic của màng điện phân được coi là một yếu tố quan trọng. Tính lithiophilic tốt có nghĩa là màng điện phân có khả năng tương tác và hấp thụ ion lithium một cách hiệu quả, giúp tăng cường quá trình truyền tải và lưu trữ năng lượng trong pin. Điều này đóng vai trò quan trọng để đảm bảo hiệu suất và ổn định của pin thể rắn.
        Các nhà nghiên cứu cho biết rằng điều chỉnh mới này không chỉ cải thiện hiệu suất mà còn mở ra cơ hội để xử lý chất điện phân rắn trong quy mô công nghiệp một cách đáng tin cậy hơn. Điều này cho phép các kỹ sư có nhiều khả năng kiểm soát quy trình chặt chẽ hơn. Marm Dixit, người đứng đầu nhóm nghiên cứu, hào hứng nói rằng “Cũng là một loại vật liệu, nhưng chúng tôi thay đổi cách làm ra nó, và nó tạo ra một kết quả tốt hơn nhiều”.
        Với việc xe điện đang ngày càng phát triển, pin thể rắn hứa hẹn sẽ là một mảnh ghép hoàn hảo để giúp ngành công nghiệp giao thông bùng nổ hơn trong tương lại.
        Tham khảo NewAtlas`,
        publishDate: new Date('2023-06-13T15:34:00.000Z'),
        author: 'Lê Phú Khương',
        category: 'news',
        url: 'https://tinhte.vn/thread/chi-mot-thay-doi-don-gian-pin-the-ran-gio-da-on-dinh-va-hieu-qua-hon.3681008/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/06/6463306_cover.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Giữa lúc mọi người còn mải bàn tán và đánh giá những thiết bị công nghệ mới, thì một động thái từ phía Nhật Bản lại đang có khả năng thay đổi toàn bộ thị trường bán dẫn, ngành công nghiệp tạo ra chính những thiết bị các anh chị em sử dụng hàng ngày.
        Canon vừa giới thiệu cỗ máy tên là FPA-1200NZ2C, một hệ thống khắc nanoimprint, với khả năng tạo ra những wafer silicon với các die chip bán dẫn, hay những linh kiện bán dẫn ứng dụng tiến trình gia công mới nhất. Với việc ứng dụng công nghệ nanoimprint, khả năng mà cỗ máy Canon vừa giới thiệu không hề thua kém những giải pháp tương tự từ các tập đoàn khác, ASML là ví dụ điển hình, nhưng tiêu thụ điện năng của cỗ máy người Nhật tạo ra thấp hơn nhiều.
        Nanoimprint khác quang khắc thạch bản truyền thống như thế nào? Máy gia công chip bán dẫn của Canon không cần tới cơ chế quang học để chuyển thiết kế mạch bán dẫn lên tấm wafer silicon đã qua xử lý hóa chất. Thay vì dùng tia cực tím DUV hay EUV, máy khắc nanoimprint của Canon chỉ cần thực hiện một bước dập lớp mask với thiết kế và bố cục transistor cũng như mạch bán dẫn lên tấm wafer.
        Canon FPA-1200NZ2C hiện tại thừa đủ khả năng gia công chip xử lý với đường ngang tối thiểu (minimum linewidth) 14nm, tức là thông số của tiến trình gia công bán dẫn 5nm hiện tại, đủ để tạo ra những chip xử lý cao cấp. Canon kỳ vọng ở khả năng tối đa của hệ thống này, máy có thể khắc được những wafer silicon với đường ngang tối thiểu 10nm, tức là tiêu chuẩn của tiến trình gia công bán dẫn 2nm.
        Để giảm thiểu tình trạng tạp chất rơi vào những transistor siêu nhỏ trên bề mặt wafer, máy có hệ thống quản lý môi trường bên trong cỗ máy. Và như đã nói, vì không cần những hệ thống quang học để thực hiện quá trình khắc thạch bản wafer silicon để làm chip bán dẫn như những hệ thống EUV hay DUV đắt tiền của ASML, tiêu thụ điện năng của máy gia công bán dẫn Canon giới thiệu thấp hơn rất nhiều.
        Và cũng nhờ hệ thống quản lý môi trường bên trong máy khắc, nên tỷ lệ chip đạt chuẩn khi sản xuất bằng hệ thống máy của Canon cũng sẽ ở mức cao. Theo tập đoàn Nhật Bản, cỗ máy của họ đủ khả năng làm ra nhiều sản phẩm cần độ chính xác cao, từ những lăng kính metalens phức tạp nhưng có khả năng khuếch đại ánh sáng và triệt tiêu quang sai cho công nghệ thực tế ảo và thực tế trộn, cho tới những chip bán dẫn phục vụ cho nhiều ngành nghề.
        Cũng phải khẳng định, công nghệ nanoimprint không mới, nó đã tồn tại hơn 20 năm, theo lời chủ tịch viện nghiên cứu Takshashila, Pranay Kotasthane. Nhưng công nghệ này không có được sự quan tâm đúng mực vì dù rẻ hơn, ban đầu nanoimprint lithography tạo ra những sản phẩm với chất lượng thấp hơn hẳn so với quang khắc thạch bản, thứ mà ASML đang thống trị thị trường. Nhưng bất chấp điều đó, Canon vẫn bỏ ra gần 20 năm, làm việc từ năm 2004 để làm chủ công nghệ khắc bán dẫn nano, với ý tưởng là tạo ra một giải pháp rẻ hơn rất nhiều để các hãng có thể sản xuất chip bán dẫn.`,
        publishDate: new Date('2023-10-14T01:50:00.000Z'),
        author: 'P.W',
        category: 'news',
        url: 'https://tinhte.vn/thread/canon-gioi-thieu-may-khac-chip-nano-canh-tranh-truc-tiep-voi-asml-trong-nganh-ban-dan.3726439/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8149841_cover-canon.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Tin đồn đã trở thành sự thật. Tuần trước các chuyên gia và các nhà đầu tư phố Wall đưa ra thông tin cho rằng thương vụ trị giá 68.7 tỷ USD nơi Microsoft mua lại Activision Blizzard sẽ hoàn tất trong tuần này. Giờ đó là tin chính thức chứ không còn là tin đồn nữa. Thương vụ này đã tiêu tốn của Microsoft tới 20 tháng trời đấu tranh về mặt pháp lý với các cơ quan quản lý nhiều nước, trong số đó đáng chú ý nhất là ủy ban thương mại liên bang Hoa Kỳ (FTC) và cơ quan cạnh tranh và thị trường Anh Quốc (CMA)
        Bên Mỹ, Microsoft đã giành chiến thắng trước FTC trước tòa án liên bang, chí ít là ở phiên xử sơ thẩm. Còn bên Anh Quốc, những thay đổi trong kết cấu và những đảm bảo với nhà quản lý của CMA đã khiến phía Anh Quốc gật đầu đồng ý, cho phép thương vụ diễn ra.
        So với thương vụ năm 2016, nơi Microsoft bỏ 26 tỷ USD mua lại mạng xã hội chuyên nghiệp LinkedIn, hay thương vụ năm 2021 mua lại nhà phát hành game Bethesda với giá 7.5 tỷ USD, thì thương vụ mua lại Activision Blizzard có con số lớn hơn rất nhiều. Thực tế thì đây vẫn đang là thương vụ sáp nhập với giá trị cao nhất thị trường công nghệ nói riêng. Theo Microsoft, thương vụ này hoàn thành đồng nghĩa với việc họ đã trở thành tập đoàn game lớn thứ 3 trên thế giới về mặt giá trị, chỉ sau Tencent và Sony.
        Kế hoạch của Microsoft bây giờ sẽ là đem những tựa game do Activision, Blizzard hay King phát triển lên dịch vụ Xbox Game Pass, tiếp tục tận dụng lợi thế của dịch vụ cho thuê game này để đổi lấy người dùng và độ phủ trên thị trường game đầy tiềm năng. Tính đến tháng 1/2022, bên cạnh việc công bố thương vụ mua lại Activision Blizzard, Microsoft công bố Xbox Game Pass đã vượt qua mốc 25 triệu người đăng ký. Nhưng kể từ đó không thấy tập đoàn này cập nhật con số.
        Hồi đầu tuần, Microsoft khẳng định rằng hai game quan trọng nhất của Activision Blizzard phát hành trong năm nay, Call of Duty Modern Warfare III và Diablo IV sẽ không xuất hiện trên Xbox Game Pass trong năm nay.
        Cuối cùng, kết cấu của Xbox, mảng game của Microsoft trông sẽ như thế này, với các studio dưới quyền cùng những series mà họ đã, đang và sẽ phát triển:
        CMA Anh Quốc thông qua thương vụ
        CMA và FTC bên Anh Quốc và Mỹ gần như là hai đơn vị quản lý lớn nhất tìm cách ngăn chặn thương vụ giữa Microsoft và Activision Blizzard. Bên Mỹ thì chí ít họ còn có cơ hội đem dàn luật sư hùng hậu của tập đoàn ra để đối đầu với luật sư của ủy ban thương mại liên bang trước tòa án. Mà đó cũng chính là những gì đã xảy ra, với phần thắng ở phiên xử sơ thẩm được tuyên cho Microsoft. Còn ở bên Anh Quốc mọi chuyện hơi khác. Nếu cố cứng rắn đưa nhau ra tòa, phần thua khả năng cao sẽ dành cho Microsoft, vì lịch sử những thương vụ ở quy mô tương tự, tòa án và thẩm phán luôn đứng về phía cơ quan quản lý thị trường của chính phủ Anh Quốc.
        Vậy là Microsoft phải xuống nước.
        Giám đốc điều hành Sarah Cardell của CMA hôm thứ 6 vừa rồi cho biết các nhà quản lý cạnh tranh đã đảm bảo Microsoft không thể giành vị thế độc quyền trong ngành stream game máy chủ đám mây, thứ cho phép người dùng chơi game thông qua đường truyền internet, xử lý qua trung tâm dữ liệu về thiết bị đầu cuối.
        Bà Cardell cho biết thêm: “Các doanh nghiệp và các nhà tư vấn nên hiểu rằng những chiến lược Microsoft sử dụng hoàn toàn không có giá trị xây dựng và hợp tác với CMA. Microsoft ngay từ ban đầu đã có cơ hội tái cơ cấu thương vụ sáp nhập khi chúng tôi bắt đầu quá trình điều tra, nhưng lại tiếp tục cố gắng theo đuổi thương vụ theo cách mà chúng tôi đã cảnh báo là sẽ không khả thi.”
        Kể từ tháng 4 đến nay, ở thời điểm CMA đưa ra dấu hiệu cho thấy họ sẽ chặn thương vụ giữa Microsoft và Activision, Microsoft đã liên tục có những thỏa thuận. Đầu tiên là với Nvidia để đưa những game của Activision Blizzard lên dịch vụ stream game GeForce Now. Kế đến là thỏa thuận với Ubisoft, cho hãng game Pháp quyền quyết định xem trong vòng 15 năm nữa, tất cả những game của Activision Blizzard sẽ được phát hành trên những nền tảng cloud streaming nào. Rồi sau đó là cả thỏa thuận giữ Call of Duty trên PlayStation trong vòng 10 năm tới, và thỏa thuận đem Call of Duty lên Nintendo Switch trong trường hợp thương vụ được thông qua.
        Tất cả những quyết định kể trên đều là những nỗ lực để Microsoft thuyết phục nhà quản lý thị trường Anh Quốc “quay xe.” Cũng phải khẳng định rằng nếu không có những động thái của CMA, thì có lẽ tất cả những thương vụ và thỏa thuận được liệt kê ở trên đều sẽ không được thực hiện.
        Tuy nhiên, lo ngại vẫn còn tồn tại.
        Call of Duty hoàn toàn có thể trở thành game độc quyền Xbox
        Hãy để ý đến thỏa thuận giữ Call of Duty phát hành trong vòng 10 năm trên PlayStation. Ở thời điểm hiện tại, thị trường máy console cổ điển giờ có lẽ chỉ còn hai cái tên cạnh tranh trực tiếp, đó là Microsoft và Sony. Nintendo thì chẳng bao giờ quan tâm tới những gì hai hãng này làm, mà chỉ tập trung làm ra những thiết bị và những trò chơi sáng tạo, tươi mới và phù hợp với mọi lứa tuổi.
        Đành rằng cũng phải thừa nhận rằng, với tình hình thị trường thiết bị công nghệ và những tiến bộ của công nghệ hiện giờ, khái niệm máy console nơi mọi người mua thiết bị phần cứng về cắm vào màn hình hoặc TV để chơi điện tử sẽ không còn là thị trường để Microsoft, Sony hay chính bản thân Nintendo cạnh tranh từng chiếc máy bán ra thị trường nữa.
        Khi đường truyền internet đủ nhanh, chi phí vận hành data center càng lúc càng rẻ, xu hướng rồi sẽ chuyển dịch sang những dịch vụ stream game đám mây, chơi ở đâu cũng được, phần cứng xử lý đồ họa không còn là vấn đề nữa.
        Nhưng cho tới khi đó, những hệ sinh thái console vẫn cần tới những tác phẩm game bom tấn thu hút hàng chục, hàng trăm triệu người chơi. Và trong số những trò chơi như vậy, tính riêng trên console, Call of Duty xứng đáng ở ngôi vương, theo sau rất sát là EA FC, trước kia là FIFA.
        Lo ngại của Sony, thứ khiến họ luôn luôn bày tỏ quan điểm phản đối thương vụ của Microsoft là có thật. Doanh số máy PS4 và PS5 luôn nhỉnh hơn, thậm chí gấp rưỡi gấp đôi doanh số máy Xbox hai thế hệ One và Series. Nhưng sẽ thế nào khi mọi người chỉ có thể chơi Call of Duty trên hai nền tảng Xbox và PC, hai hệ sinh thái mà Microsoft nắm trong tay rất chắc?
        Những thỏa thuận đem Call of Duty lên nền tảng streaming đám mây hay Nintendo Switch đủ để xoa dịu các nhà quản lý. Nhưng 10 năm nữa nếu dịch vụ stream game đám mây chưa đủ chín muồi, Sony vẫn cần doanh thu từ cả doanh thu bán game và bán máy console, việc PS6 hay PS7 không có Call of Duty chắc chắn sẽ ảnh hưởng tiêu cực đến họ.
        Nói đi thì cũng phải nói lại, 10 năm nữa Call of Duty chưa chắc đã giữ được ngôi vương của thị trường game bắn súng trên console như cái cách nó đã làm được trong vòng 16 năm qua, kể từ khi Call of Duty 4: Modern Warfare phát hành năm 2007, lần lượt đánh bại hết Halo đến Killzone, rồi những game battle royale khác cũng chẳng có chỗ đứng chắc chắn và hạ bệ ngôi vương của Call of Duty. Dù rằng game cứ nhai đi nhai lại phong cách chiến đấu, nghe nói Modern Warfare III năm nay còn lấy y nguyên map cũ để làm mục chơi multiplayer, tập trung mở rộng chế độ chơi miễn phí Warzone, thì game vẫn sẽ thu hút hàng chục hàng trăm triệu người chơi.
        Về tay Microsoft đổ vốn và quản lý, khá chắc Call of Duty sẽ còn đủ khả năng thay đổi, sáng tạo và tiếp tục giữ vững vị thế của nó. Rồi tới khi những thỏa thuận với các hãng game khác kết thúc, tới năm 2033, Call of Duty chỉ còn phát hành trên Windows và Xbox, thì Microsoft chỉ việc ung dung ngồi đếm tiền, khỏi phải chia cho ai khác.
        CEO Bobby Kotick sẽ từ chức sau 32 năm tại vị
        Một phần trong thỏa thuận sáp nhập, đó là CEO Bobby Kotick sẽ từ nhiệm. Có nguồn tin nói rằng ông này sẽ ở lại ban lãnh đạo của Activision Blizzard cho tới hết năm 2023 để hỗ trợ cho quá trình chuyển giao. Nhưng nguồn tin khác lại nói Bobby Kotick đã từ chức, hiệu lực ngay lập tức.
        Cùng với đó là những giám đốc cấp cao và các thành viên ban quản trị Activision Blizzard cũng sẽ rời đi, ví dụ như Reveta Bowers, Kerry Carr, Robert Corti, Brian Kelly, Barry Meyer, Robert Morgado, Peter Nolan và Dawn Ostroff.
        Năm 1991, sau khi mua lại một lượng cổ phiếu của Activision, Bobby Kotick đã trở thành CEO của nhà phát hành game nước Mỹ. Kể từ đó, Activision và bản thân Kotick trở thành trung tâm của không ít tranh cãi và phê phán từ cộng đồng gamer. Chiến lược của vị này luôn là tập trung phát triển những thương hiệu có thể khai thác trong một thời gian rất dài. Rồi những quyết định mang tính kinh doanh thuần túy của vị này cũng từng khiến mọi người coi đây là một trong những vị giám đốc đáng ghét nhất làng game. Nhưng ở khía cạnh kinh doanh, phải thừa nhận Activision vẫn khỏe về mặt tài chính và sức hút.
        Theo thỏa thuận sáp nhập, mỗi cổ phiếu của Activision Blizzard sẽ có giá trị 95 USD. Microsoft hoàn tất thương vụ này đúng 4 ngày trước thời hạn mới. Ban đầu đáng lẽ thương vụ đã hoàn tất trước ngày 18/7/2023. Nhưng vì cuộc điều tra của CMA Anh Quốc, nên deadline được dời qua ngày 18/10/2023. Nếu thương vụ này không được hoàn tất trước thời hạn kể trên, thì Microsoft phải đền bù cho Activision Blizzard số tiền 4.5 tỷ USD.`,
        publishDate: new Date('2023-10-14T01:21:00.000Z'),
        author: 'P.W',
        category: 'news',
        url: 'https://tinhte.vn/thread/mat-gan-2-nam-thuong-vu-69-ty-usd-cua-microsoft-va-activision-cuoi-cung-cung-xong.3726421/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8149840_cover-xbox.jpeg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Theo lộ trình, Samsung sẽ cho ra mắt bộ nhớ HBM thế hệ kế tiếp vào năm 2025. Kể từ khi xuất hiện lần đầu hồi 2013, High Bandwidth Memory đã và đang góp mặt ở nhiều thiết bị, phục vụ nhu cầu bộ nhớ băng thông cao để xử lý tác vụ nặng. Hiện tại Samsung đang đi vào sản xuất đại trà HBM2E và HBM3, đã phát triển HBM3E với băng thông tới 9.8 Gbps. Samsung cho biết việc phát triển HBM4 đang đi đúng kế hoạch
        Nếu anh em có từng nghe qua card đồ họa AMD Radeon RX Fury và Radeon RX Vega thì chắc hẳn biết là chúng có hiệu năng lúc bấy giờ rất đáng chú ý, phần lớn nhờ HBM. Ngày ra thì băng thông nhớ cao không chỉ để phục vụ game thủ, nó còn mang ý nghĩa quan trọng khi xu hướng và ứng dụng AI càng lúc càng phổ biến. Báo cáo gần nhất cho thấy HBM4 sẽ có giao diện nhớ (memory interface hay bus width) 2048 bit, gấp đôi bus 1024 bit hiện tại.
        Theo Sang Joon Hwang, Phó Chủ tịch Điều hành Sản phẩm và Công nghệ DRAM của Samsung, HBM thế hệ 6 sẽ được hỗ trợ bởi các công nghệ tối ưu hóa về nhiệt độ và cả hiệu suất năng lượng, bao gồm “non-conductive film” (NCF) và “hybrid copper bonding” (HCB). Màng không dẫn điện NCF là 1 lớp polymer bảo vệ các mối hàn khỏi lớp cách điện và sốc cơ học giữa các lớp chip xếp chồng. Trong khi đó liên kết đồng lai HCB là công nghệ liên kết thế hệ mới, sử dụng đồng và màng oxit thay vì hàn thông thường.
        Samsung`,
        publishDate: new Date('2023-10-14T00:22:00.000Z'),
        author: 'Lư Thế Nghĩa',
        category: 'news',
        url: 'https://tinhte.vn/thread/samsung-se-ra-mat-bo-nho-hbm4-vao-nam-2025-gap-doi-do-rong-bus.3726429/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8149813_cover-samsung-hbm4-2048-bit-tinhte.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Các nhà khoa học tại trường đại học Kentucky cho biết họ đã dùng AI để đọc được từ đầu tiên trong số những từ có trong cuộn giấy được tìm thấy sau đợt phun trào núi lửa Vesuvius vào năm 79 sau Công nguyên. Đây là cuộn giấy được tìm thấy trong tàn tích của thị trấn Herculaneum, nơi đợt phun trào núi lửa Vesuvius làm cho toàn bộ thị trấn và các biệt thự xa hoa tại đây chìm trong biển lửa và tro bụi núi lửa.
        Trước đó vào hồi tháng 3 đã có 1 thử thách mang tên ngọn núi lửa này để xem ai có thể đọc được nội dung cuộn giấy nói trên. Nhóm đã chia sẻ hàng nghìn hình ảnh X-quang 3D của 2 cuộn giấy, 3 mảnh vụn giấy cùng với phần mềm AI đã được huấn luyện để đọc ký tự trên đó dựa vào cách mực viết ngày xưa ghi dấu lên cấu trúc của giấy. Đây là những cuộn giấy được cho là của 1 quan chức cao cấp của đế chế Rome, cụ thể hơn có thể là Lucius Calpurnius Piso Caesoninus, cha vợ của Julius Caesar. Ở thời điểm hiện tại phần còn lại của nó đang được lưu giữ tại Institut de France tại Paris.
        Người đầu tiên thắng giải là 1 sinh viên ngành khoa học máy tính, Luke Farritor, tại Nebraska và tìm ra được từ ΠΟΡΦΥΡΑϹ có nghĩa là màu tím. Cũng 1 sinh viên khác tại Berlin, Youssef Nader, đã làm việc độc lập và cũng tìm ra được từ này. Người tìm ra trước đã nhận giải thưởng $40,000, còn người tìm ra thứ 2 nhận giải nhì với mức $10,000. Giờ đây các bên đang tiếp tục cuộc đua xem ai đọc được các chữ xung quanh bởi tổng giải thưởng của thử thách này lên tới 700 nghìn đô. Theo như chuyên gia về giấy của trường đại học Naples Federioco II, tiến sỹ Federica Nicolardi, thì vào thời điểm hiện tại họ đã có thể đọc được 3 dòng với khoảng 10 từ của cuộn giấy.
        
        Các nhà khoa học cho rằng đây có thể là 1 cuốn sách nói về sản xuất, vì từ "tím" có thể nói đến một động vật có vỏ hay loài giáp xác nào đó. Cũng có ý kiến cho rằng đây có liên quan đến tôn giáo, hoặc đơn giản hơn chỉ là 1 bức thư hồi xưa. Tất cả sẽ chờ xem công nghệ AI và cách diễn giải của nó có thể đem nội dung vốn đã cháy đen thành than trở lại như xưa với nội dung đầy đủ để chúng ta biết người xưa đã viết gì.
        Anh em có thể xem chi tiết thử thách này ở link cuối bài
        Tham khảo The Guardian, Scrollprize`,
        publishDate: new Date('2023-10-13T21:53:00.000Z'),
        author: 'Hassler',
        category: 'news',
        url: 'https://tinhte.vn/thread/treo-giai-700-nghin-do-de-doc-noi-dung-cuon-giay-bi-thieu-rui-boi-nui-lua-gan-2-nghin-nam-truoc.3726395/',
        active: true,
        cover: 'https://photo2.tinhte.vn/data/attachment-files/2023/10/8149713_cover-burntscroll.jpeg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `The topic of generative AI comes up frequently in my newsletter, Actuator. I admit that I was a bit hesitant to spend more time on the subject a few months back. Anyone who has been reporting on technology for as long as I have has lived through countless hype cycles and been burned before. Reporting on tech requires a healthy dose of skepticism, hopefully tempered by some excitement about what can be done.
        This time out, it seemed generative AI was waiting in the wings, biding its time, waiting for the inevitable cratering of crypto. As the blood drained out of that category, projects like ChatGPT and DALL-E were standing by, ready to be the focus of breathless reporting, hopefulness, criticism, doomerism and all the different Kübler-Rossian stages of the tech hype bubble.
        Those who follow my stuff know that I was never especially bullish on crypto. Things are, however, different with generative AI. For starters, there’s a near universal agreement that artificial intelligence/machine learning broadly will play more centralized roles in our lives going forward.
        Smartphones offer great insight here. Computational photography is something I write about somewhat regularly. There have been great advances on that front in recent years, and I think many manufacturers have finally struck a good balance between hardware and software when it comes to both improving the end product and lowering the bar of entry. Google, for instance, pulls off some truly impressive tricks with editing features like Best Take and Magic Eraser.

        Sure, they’re neat tricks, but they’re also useful, rather than being features for features’ sake. Moving forward, however, the real trick will be seamlessly integrating them into the experience. With ideal future workflows, most users will have little to no notion of what’s happening behind the scenes. They’ll just be happy that it works. It’s the classic Apple playbook.
        Generative AI offers a similar “wow” effect out the gate, which is another way it differs from its hype cycle predecessor. When your least tech savvy relative can sit at a computer, type a few words into a dialogue field and then watch as the black box spits out paintings and short stories, there isn’t much conceptualizing required. That’s a big part of the reason all of this caught on as quickly as it did — most times when everyday people get pitched cutting-edge technologies, it requires them to visualize how it might look five or 10 years down the road.
        With ChatGPT, DALL-E, etc., you can experience it firsthand right now. Of course, the flip side of this is how difficult it becomes to temper expectations. Much as people are inclined to imbue robots with human or animal intelligence, without a fundamental understanding of AI, it’s easy to project intentionality here. But that’s just how things go now. We lead with the attention-grabbing headline and hope people stick around long enough to read about machinations behind it.
        Spoiler alert: Nine times out of 10 they won’t, and suddenly we’re spending months and years attempting to walk things back to reality.
        One of the nice perks of my job is the ability to break these things down with people much smarter than me. They take the time to explain things and hopefully I do a good job translating that for readers (some attempts are more successful than others).
        Once it became clear that generative AI has an important role to play in the future of robotics, I’ve been finding ways to shoehorn questions into conversations. I find that most people in the field agree with the statement in the previous sentence, and it’s fascinating to see the breadth of impact they believe it will have.
        For example, in my recent conversation with Marc Raibert and Gill Pratt, the latter explained the role generative AI is playing in its approach to robot learning:
        We have figure out how to do something, which is use modern generative AI techniques that enable human demonstration of both position and force to essentially teach a robot from just a handful of examples. The code is not changed at all. What this is based on is something called diffusion policy. It’s work that we did in collaboration with Columbia and MIT. We’ve taught 60 different skills so far.
        Last week, when I asked Nvidia’s VP and GM of Embedded and Edge Computing, Deepu Talla why the company believes generative AI is more than a fad, he told me:
        I think it speaks in the results. You can already see the productivity improvement. It can compose an email for me. It’s not exactly right, but I don’t have to start from zero. It’s giving me 70%. There are obvious things you can already see that are definitely a step function better than how things were before. Summarizing something’s not perfect. I’m not going to let it read and summarize for me. So, you can already see some signs of productivity improvements.
        Meanwhile, during my last conversation with Daniela Rus, the MIT CSAIL head explained how researchers are using generative AI to actually design the robots:
        It turns out that generative AI can be quite powerful for solving even motion planning problems. You can get much faster solutions and much more fluid and human-like solutions for control than with model predictive solutions. I think that’s very powerful, because the robots of the future will be much less roboticized. They will be much more fluid and human-like in their motions.
        We’ve also used generative AI for design. This is very powerful. It’s also very interesting , because it’s not just pattern generation for robots. You have to do something else. It can’t just be generating a pattern based on data. The machines have to make sense in the context of physics and the physical world. For that reason, we connect them to a physics-based simulation engine to make sure the designs meet their required constraints.
        This week, a team at Northwestern University unveiled its own research into AI-generated robot design. The researchers showcased how they designed a “successfully walking robot in mere seconds.” It’s not much to look at, as these things go, but it’s easy enough to see how with additional research, the approach could be used to create more complex systems.        
        “We discovered a very fast AI-driven design algorithm that bypasses the traffic jams of evolution, without falling back on the bias of human designers,” said research lead Sam Kriegman. “We told the AI that we wanted a robot that could walk across land. Then we simply pressed a button and presto! It generated a blueprint for a robot in the blink of an eye that looks nothing like any animal that has ever walked the earth. I call this process ‘instant evolution.’”
        It was the AI program’s choice to put legs on the small, squishy robot. “It’s interesting because we didn’t tell the AI that a robot should have legs,” Kriegman added. “It rediscovered that legs are a good way to move around on land. Legged locomotion is, in fact, the most efficient form of terrestrial movement.”        
        “From my perspective, generative AI and physical automation/robotics are what’s going to change everything we know about life on Earth,” Formant founder and CEO Jeff Linnell told me this week. “I think we’re all hip to the fact that AI is a thing and are expecting every one our jobs, every company and student will be impacted. I think it’s symbiotic with robotics. You’re not going to have to program a robot. You’re going to speak to the robot in English, request an action and then it will be figured out. It’s going to be a minute for that.”
        Prior to Formant, Linnell founded and served as CEO of Bot & Dolly. The San Francisco–based firm, best known for its work on Gravity, was hoovered up by Google in 2013 as the software giant set its sights on accelerating the industry (the best-laid plans, etc.). The executive tells me that his key takeaway from that experience is that it’s all about the software (given the arrival of Intrinsic and Everyday Robots’ absorption into DeepMind, I’m inclined to say Google agrees).`,
        publishDate: new Date('2023-10-15T03:08:00.000Z'),
        author: 'Brian Heater',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/14/how-roboticists-are-thinking-about-generative-ai/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/09/Screenshot-2023-09-16-at-2.58.20%E2%80%AFPM.png?w=1390&crop=1',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Trezor, a hardware crypto wallet company, debuted two new products this week at the Bitcoin Amsterdam conference — and we got to take a first look at them.

        Trezor Safe 3, a hardware crypto wallet, and Trezor Keep Metal, a “mistake-proof” backup solution for wallet passwords, launched in celebration of the company’s 10-year anniversary.
        
        The new crypto wallet is designed specifically for new digital asset entrants with a focus on “maximum safety and ease of use,” Matěj Žák, CEO of Trezor, said to TechCrunch.
        
        Hardware crypto wallets are one of — if not the — safest ways to store your digital assets, because they’re typically not connected to the internet, inhibiting the risk of an online attack. Also it’s arguably better sometimes to keep cryptocurrencies on a wallet instead of a centralized exchange, where they can be frozen and withheld like Celsius did in June 2022, because it gives you total control over the tokens.
        
        But that control also comes with a lot of responsibility. While the device holds your coins securely, you only get told the passcode (seed phrase) once upon setting up a wallet. If you forget it, you might lose access forever.
        
        In the past year to 18 months, a lot of crypto wallet providers have improved their user interfaces and products to create a user-friendly experience, given how difficult the onboarding process into the space has historically been.
        
        In December 2022, Ledger, a security-focused firm that sells crypto hardware wallets, partnered with the designer behind the iPod, Tony Fadell, in hopes of creating an easier, more accessible way for users to secure their crypto assets.
        
        “Our team has spent literally thousands of hours developing our user experience,” Žák said. “We have carried out extensive research and focus groups with crypto novice audiences to underpin development of our new products.”
        
        Trezor Safe 3 aims to make crypto wallets easier to use
        Trezor Safe 3 retails for $79 and is available in four colors — gold, rose gold, silver and black — with a 0.96” monochromatic OLED screen and two-button pad.
        
        The wallet supports major cryptocurrencies like bitcoin and Ethereum, as well as over 7,000 other tokens. It can be integrated with Trezor’s desktop application, which helps users manage their cryptocurrencies on its platform. The product also has a tamper-resistant hardware component to provide additional protection in real life and can operate in conditions ranging from negative 4°F to 140°F, according to Trezor’s website.
        
        Trezor Safe 3 crypto wallet in four colors – gold, rose gold, silver and black
        
        The Trezor Safe 3 weighs only half an ounce and comes in a box about the size of an iPhone, which includes the wallet itself, a USB-C charging cable, some branded stickers and a pamphlet describing how to set it up, alongside two paper cards so you can write down your 12-word recovery phrase, also known as a seed phrase, that gives you access to your device’s assets.
        
        It’s important to remember that for any crypto wallet you have you write down your recovery phrase on a piece of paper — not online — and store it in a safe place so no one else has access to it. Recovery seeds are randomly generated words created by the wallet that allows you to recover and access your funds; think of it like a password that you can’t forget because you can’t reset it.
        
        In addition to commemorating its 10-year anniversary, the Trezor Safe 3 also launched to celebrate that it released a limited edition bitcoin-focused hardware wallet that solely runs on Bitcoin firmware and is only available in “Bitcoin orange” color. There were only 2,013 devices being sold at the same price, and according to the company’s X account, it sold out within a day.
        
        Inside the orange-themed packaging there’s a quote from Satoshi Nakamoto, the pseudonymous creator of Bitcoin, that said, “If you don’t believe me or don’t get it, I don’t have time to try to convince you, sorry.”
        
        The setup process is pretty straightforward. First, users have to download and install Trezor Suite, which gives you access to your device’s contents from a better interface than the tiny little screen the product has. From there they connect their Trezor with the USB cable and set it up online. It’ll give you the option to create a new wallet or recover one from a backup recovery seed. I went the create a new wallet route.
        
        Trezor gives you the option to do a standard seed backup or an ”Advanced Shamir Backup,” which allows users to recover the wallet by combining a list of words and can be secured in different places for additional security.
        
        After writing down the seed phrase, creating an (optional) pin, the Suite allows you to select a handful of coins to show on its platform, I picked Bitcoin and Ethereum.
        
        From start to finish, the setup process took less than 10 minutes. The company calls itself easy to use and I’d agree with that sentiment. The ultimate test, though, would be having someone who’s unfamiliar with testing it out (time for me to take a trip home to see if my non-crypto-native mom could set one up.)
        
        The Trezor Keep Metal keeps your seed phrases safe from fire, acid and more
        The Trezor Keep Metal aims to safeguard users’ recovery seed phrases and has two price points: $99 for the standard 12-word backups and $249 for 20-word Shamir-compatible Trezor Safe 3 backups.
        
        The Shamir product’s package is 67 ounces, or roughly four pounds, which is heavy, but the small flashlight-shaped product is 3.9 inches x 1.4 inches and weighs less than a pound. The standard product’s package is about 1.3 pounds and the actual product is 4.3 inches x 1.2 inches and also weighs less than a pound. The weight makes sense — it’s made to be damage resistant with “aerospace grade” stainless steel and a black surface treatment.
        
        The Shamir version comes with three, 20-word backup devices, and the standard version comes with one device to secure a 12-word backup phrase. Both products come with a pre-marking pen to mark letters before using the punching tool to make the recovery seed phrase permanently ingrained into the product. There’s also tamper-evident stickers you can close the product with and step-by-step instructions.
        
        The Keep Metal aims to ensure one’s recovery seed papers are safe under any conditions with its corrosion resistant exterior and watertight seal. (I put mine underneath water and the inside did stay dry.) It also claims to protect against fire, acid, chemical corrosion, extreme temperatures and other heavy impacts — but I’m not going to be testing it against those elements, for obvious reasons.
        
        But for roughly $99 or $250, respectively, I’m not sure it’s worth the price for the average person. If you’re someone who loses a piece of paper the second you put it down or are likely to damage it, this might be good for you. With that said, the price point is steep for what it does, but I guess if your crypto wallets are holding astronomically higher digital asset value, the product’s price could seem like a bargain in the bigger picture.
        
        The products are available for preorder and will be shipped to the public in mid-November, the company shared in a statement.
        
        The well-known crypto wallet saying, “Not your keys, not your coins,” has also been a prominent theme over the last year after the high-profile implosion of such centralized exchanges as FTX transpired, Žák said.
        
        In early December, Ledger’s chief experience officer, Ian Rogers, said the company had its biggest sales day ever, which ended its biggest sales week ever, in mid-November 2022 after FTX collapsed, which signals the demand for hardware crypto wallets is rising.
        
        And as the trial for FTX’s co-founder and former CEO Sam Bankman-Fried continues, more people might be reminded of what happened 11 months ago and consider securing their digital assets — if they haven’t already.
        
        There has been a significant uptick in interest in self-custody of crypto assets with hardware wallets, Žák added. “The reality is that too few people are using hardware wallets today, so we see huge potential for growth from both existing crypto users and new entrants to crypto.”`,
        publishDate: new Date('2023-10-14T04:08:00.000Z'),
        author: 'jacquelyn Melinek',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/13/trezor-launches-two-new-devices-to-help-onboard-crypto-newbies/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/10/TRZ-970.jpg?w=1390&crop=1',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `X is adopting a feature that’s currently used across many Facebook Groups to vet members before joining: required questions. The company formerly known as Twitter announced today that admins of private Communities on X can now require users to answer a question when they request to join, along with agreeing to the group’s rules. The answers to the questions could help admins and moderators decide who should be able to join and offer some minimal protection against spammers and bots, who could disrupt their group with unwelcome posts.

        The feature could also potentially evaluate Communities on X to have a more exclusive status, where only some people are allowed in, as admins weigh their responses to determine their worthiness. On the flip side, however, it could also allow for groups that toe the line of X’s terms and policies by keeping people out who might flag or report the group’s content.
        Facebook Groups offers a similar questions feature, though it’s much more robust. On Facebook, admins can require users to answer multiple questions before being able to join and also insist they agree to their group’s own specific set rules. Some groups even quiz prospective members on what the rules state to ensure they have read them.
        Though anyone can make a Facebook Group, building and running Communities on X is a feature that’s limited to X Premium subscribers as only “verified” users can create a Community. Verification, of course, is the flagship feature of X’s paid subscription. Joining Communities, however, is open to all X users. That’s led to some of the larger groups having sizable user bases. For example, the Apple Community has 52,500 members, Tech Twitter has 29,500 members, The Design Sphere has 117,000 members, and Movie Twitter has 119,600 members, to name a few of the larger groups. Still, broader adoption of the feature may be limited by the fact that not everyone can make a Community of their own.
        It’s interesting to note that Communities have not been among the numerous features that got the chopping block under Elon Musk’s ownership. Since the Tesla and SpaceX exec took over Twitter/X, he’s axed quite a few features and services, including its newsletter platform Revue, support for ad-free news articles, support for third-party clients, and its private Circle feature for sharing with friends. It also stuck TweetDeck (now called XPro) behind a paywall and raised the prices to access its developer API.
        Communities today feel like an underdeveloped feature that doesn’t quite fit into the fast-flowing timeline on X, offering a quieter and more isolated space to post about a topic or theme. It’s not clear what larger vision X has in store for its groups feature or if they’ll ever become a more prominent part of X’s service, or how.",`,
        publishDate: new Date('2023-10-13T11:14:00.000Z'),
        author: 'Sarah Perez',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/13/x-communities-start-to-look-more-like-facebook-groups-with-new-member-vetting-feature/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/07/x-twitter.jpg?w=1390&crop=1',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `A data breach at French cloud gaming provider Shadow may be worse than the company initially suggested, according to a sample of the stolen data seen by TechCrunch.

        In an email sent to affected customers this week, Paris-based Shadow said that a hacker carried out an “advanced social engineering attack” against one of its employees that allowed access to customers’ private data. In the email, Shadow CEO Eric Sèle said this includes full names, email addresses, dates of birth, billing addresses and credit card expiry dates.
        
        TechCrunch obtained a sample of the stolen data containing 10,000 unique records from the hacker who claimed responsibility for the cyberattack. The hacker, who posted about the breach on a popular hacking forum, claims to have accessed the data of more than 530,000 Shadow customers and is offering the data for sale after they say they were “deliberately ignored” by the company.
        
        TechCrunch verified a portion of the stolen records by matching unique staff-related email addresses found in the dataset using the website’s sign-up form, which returns an error if an email address is already found in the system. Several of these Shadow staff accounts were registered using company email addresses with “plus” wildcards containing long strings of letters and numbers unique to Shadow.
        
        Of the data we’ve seen, many of the customer billing addresses correspond with private home addresses. The dataset we have seen also includes private API keys that correspond with customer accounts, though it’s unclear if these keys are accessible by customers. The dataset also includes non-personal information related to customer accounts, such as subscription status and whether accounts have been “blacklisted.”
        
        The most recent record in the stolen data suggests that Shadow was breached on or shortly after September 28. In an email sent to those affected by the incident, which has not yet been published on Shadow’s website or shared on the company’s social media channels, Shadow said it was hacked “at the end of September” after an employee downloaded a malware-laced Steam game via Discord.
        
        Shadow spokesperson Thomas Beaufils would not comment when emailed Friday, but did not dispute the findings. It’s not known if Shadow informed France’s data protection regulator, CNIL, of the breach as required under European law. A spokesperson for CNIL did not immediately return a request for comment.
        
        Separately, Valve this week mandated two-factor authentication checks for developers after the accounts of multiple game developers were recently compromised and used to update their games with malware. It’s unknown if this is related to the Shadow breach, and Valve has yet to respond to TechCrunch’s questions.`,
        publishDate: new Date('2023-10-13T09:35:00.000Z'),
        author: 'Carly Page',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/13/shadow-data-breach-hacked/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-723499991.jpg?w=1390&crop=1',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `A security researcher says a bug on an Indian state government website inadvertently revealed documents containing residents’ Aadhaar numbers, identity cards and copies of their fingerprints.

        The bug was fixed last week after the security researcher disclosed the bug to local authorities.
        
        Sourajeet Majumder found the bug in the West Bengal government’s e-District web portal that allows state residents to access government services online, like obtaining birth and death certificates and building applications. Majumder said the website bug meant it was possible to obtain land deeds, which contain records about the owners of a piece of land, from the e-District website by guessing sequential deed application numbers.
        
        Application identification numbers are unique 16-digit numbers issued by the state government when a local resident applies for a digital copy of a deed.
        
        an example of what a land deed looks like, slightly blurred
        A partially blurred copy of an exposed West Bengal resident’s land deed.
        
        Not every application identification number was valid. Using publicly available tools like Burp Suite to analyze the network traffic in and out of the website meant that Majumder could cycle through entire lists of sequential application numbers and use the responses from the server to determine if an application identification number was valid.
        
        With access to an application identification number, anyone with a login to the e-District system could access a copy of a land deed. Two land deed records seen by TechCrunch contain the names of the individuals involved with the deed, their photographs and their full set of fingerprints from both hands. It’s not uncommon to see multiple individuals on a single deed.
        
        The deeds also contain the individuals’ government-issued identity documents, including their confidential Aadhaar numbers, which every citizen is assigned as part of India’s national identity and biometric database. Aadhaar numbers are required for accessing banking, cell phone plans and many government services.
        
        Majumder reported the website vulnerability to India’s computer emergency response team, known as CERT-In, and the West Bengal government, fearing that the vulnerability could be misused for identity fraud. The bug was fixed soon after.
        
        It’s not known if anyone else other than Majumder discovered the bug. Representatives for the West Bengal government and CERT-In did not return requests for comment. The West Bengal government’s e-District website says it has processed more than 17 million applications to date, though it’s not known how many relate to land deeds.
        
        Local media reports a recent rise in fraud linked to the alleged theft of biometric information, which criminals are said to be using to empty bank accounts.`,
        publishDate: new Date('2023-10-13T08:00:00.000Z'),
        author: 'Zack Whittaker',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/12/india-aadhaar-fingerprints-west-bengal/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/10/aadhaar-fingerprint-india-getty.jpg?w=1390&crop=1',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Large language models (LLMs) are the driving force behind the burgeoning generative AI movement, capable of interpreting and creating human-language texts from simple prompts — this could be anything from summarizing a document to writing a poem to answering a question using data from myriad sources.

        However, these prompts can also be manipulated by bad actors to achieve far more dubious outcomes, using so-called “prompt injection” techniques whereby an individual inputs carefully crafted text prompts into an LLM-powered chatbot with the purpose of tricking it into giving unauthorized access to systems, for example, or otherwise enabling the user to bypass strict security measures.
        
        And it’s against that backdrop that Swiss startup Lakera is officially launching to the world today, with the promise of protecting enterprises from various LLM security weaknesses such as prompt injections and data leakage. Alongside its launch, the company also revealed that it raised a hitherto undisclosed $10 million round of funding earlier this year.
        
        Data wizardry
        Lakera has developed a database comprising insights from various sources, including publicly available open source datasets, its own in-house research and — interestingly — data gleaned from an interactive game the company launched earlier this year called Gandalf.
        
        With Gandalf, users are invited to “hack” the underlying LLM through linguistic trickery, trying to get it to reveal a secret password. If the user manages this, they advance to the next level, with Gandalf getting more sophisticated at defending against this as each level progresses.
        
        Powered by OpenAI’s GPT3.5, alongside LLMs from Cohere and Anthropic, Gandalf — on the surface, at least — seems little more than a fun game designed to showcase LLMs’ weaknesses. Nonetheless, insights from Gandalf will feed into the startup’s flagship Lakera Guard product, which companies integrate into their applications through an API.
        
        “Gandalf is literally played all the way from like six-year-olds to my grandmother, and everyone in between,” Lakera CEO and co-founder David Haber explained to TechCrunch. “But a large chunk of the people playing this game is actually the cybersecurity community.”
        
        Haber said the company has recorded some 30 million interactions from 1 million users over the past six months, allowing it to develop what Haber calls a “prompt injection taxonomy” that divides the types of attacks into 10 different categories. These are: direct attacks; jailbreaks; sidestepping attacks; multi-prompt attacks; role-playing; model duping; obfuscation (token smuggling); multi-language attacks; and accidental context leakage.
        
        From this, Lakera’s customers can compare their inputs against these structures at scale.
        
        “We are turning prompt injections into statistical structures — that’s ultimately what we’re doing,” Haber said.
        
        Prompt injections are just one cyber risk vertical Lakera is focused on though, as it’s also working to protect companies from private or confidential data inadvertently leaking into the public domain, as well as moderating content to ensure that LLMs don’t serve up anything unsuitable for kids.
        
        “When it comes to safety, the most popular feature that people are asking for is around detecting toxic language,” Haber said. “So we are working with a big company that is providing generative AI applications for children, to make sure that these children are not exposed to any harmful content.”
        
        On top of that, Lakera is also addressing LLM-enabled misinformation or factual inaccuracies. According to Haber, there are two scenarios where Lakera can help with so-called “hallucinations” — when the output of the LLM contradicts the initial system instructions, and where the output of the model is factually incorrect based on reference knowledge.
        
        “In either case, our customers provide Lakera with the context that the model interacts in, and we make sure that the model doesn’t act outside of those bounds,” Haber said.
        
        So really, Lakera is a bit of a mixed bag spanning security, safety and data privacy.
        
        EU AI Act
        With the first major set of AI regulations on the horizon in the form of the EU AI Act, Lakera is launching at an opportune moment in time. Specifically, Article 28b of the EU AI Act focuses on safeguarding generative AI models through imposing legal requirements on LLM providers, obliging them to identify risks and put appropriate measures in place.
        
        In fact, Haber and his two co-founders have served in advisory roles to the Act, helping to lay some of the technical foundations ahead of the introduction — which is expected some time in the next year or two.
        
        “There are some uncertainties around how to actually regulate generative AI models, distinct from the rest of AI,” Haber said. “We see technological progress advancing much more quickly than the regulatory landscape, which is very challenging. Our role in these conversations is to share developer-first perspectives, because we want to complement policymaking with an understanding of when you put out these regulatory requirements, what do they actually mean for the people in the trenches that are bringing these models out into production?”
        
        The security blocker
        The bottom line is that while ChatGPT and its ilk have taken the world by storm these past nine months like few other technologies have in recent times, enterprises are perhaps more hesitant to adopt generative AI in their applications due to security concerns.
        
        “We speak to some of the coolest startups, to some of the world’s leading enterprises — they either already have these [generative AI apps] in production, or they’re looking at the next three to six months,” Haber said. “And we are already working with them behind the scenes to make sure they can roll this out without any problems. Security is a big blocker for many of these [companies] to bring their generative AI apps to production, which is where we come in.”
        
        Founded out of Zurich in 2021, Lakera already claims major paying customers, which it says it’s not able to name-check due to the security implications of revealing too much about the kinds of protective tools that they’re using. However, the company has confirmed that LLM developer Cohere — a company that recently attained a $2 billion valuation — is a customer, alongside a “leading enterprise cloud platform” and “one of the world’s largest cloud storage services.”
        
        With $10 million in the bank, the company is fairly well-financed to build out its platform now that it’s officially in the public domain.
        
        “We want to be there as people integrate generative AI into their stacks, to make sure these are secure and the risks are mitigated,” Haber said. “So we will evolve the product based on the threat landscape.”
        
        Lakera’s investment was led by Swiss VC Redalpine, with additional capital provided by Fly Ventures, Inovia Capital and several angel investors.`,
        publishDate:  new Date('2023-10-12T07:25:00.000Z'),
        author: 'Paul Sawers',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/12/lakera-launches-to-protect-large-language-models-from-malicious-prompts/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1488400461.jpg?w=1390&crop=1',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `U.K.-based startup Yepic AI claims to use “deepfakes for good” and promises to “never reenact someone without their consent.” But the company did exactly what it claimed it never would.

        In an unsolicited email pitch to a TechCrunch reporter, a representative for Yepic AI shared two “deepfaked” videos of the reporter, who had not given consent to having their likeness reproduced. Yepic AI said in the pitch email that it “used a publicly available photo” of the reporter to produce two deepfaked videos of them speaking in different languages.
        
        The reporter requested that Yepic AI delete the deepfaked videos it created without permission.
        
        Deepfakes are photos, videos or audio created by generative AI systems that are designed to look or sound like an individual. While not new, the proliferation of generative AI systems allow almost anyone to make convincing deepfaked content of anyone else with relative ease, including without their knowledge or consent.
        
        On a webpage it titles “Ethics,” Yepic AI said: “Deepfakes and satirical impersonations for political and other purposed [sic] are prohibited.” The company also said in an August blog post: “We refuse to produce custom avatars of people without their express permission.”
        
        It’s not known if the company generated deepfakes of anyone else without permission, and the company declined to say.
        
        When reached for comment, Yepic AI chief executive Aaron Jones told TechCrunch that the company is updating its ethics policy to “accommodate exceptions for AI-generated images that are created for artistic and expressive purposes.”
        
        In explaining how the incident happened, Jones said: “Neither I nor the Yepic team were directly involved in the creation of the videos in question. Our PR team have confirmed that the video was created specifically for the journalist to generate awareness of the incredible technology Yepic has created.”
        
        Jones said the videos and image used for the creation of the reporter’s image was deleted.
        
        Predictably, deepfakes have tricked unsuspecting victims into falling for scams and unknowingly giving away their crypto or personal information by evading some moderation systems. In one case, fraudsters used AI to spoof the voice of a company’s chief executive in order to trick staff into making a fraudulent transaction worth hundreds of thousands of euros. Before deepfakes became popular with fraudsters, it’s important to note that people used deepfakes to create nonconsensual porn or sex imagery victimizing women, meaning they created realistic-looking porn videos using the likeness of women who had not consented to be part of the video.`,
        publishDate: new Date('2023-10-12T02:05:00.000Z'),
        author: 'Zack Whittaker',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/11/yepic-ai-deepfakes-without-consent/#:~:text=AI-,Yepic%20fail%3A%20This%20startup%20promised%20not%20to%20make,without%20consent%2C%20but%20did%20anyway&text=U.K.%2Dbased%20startup%20Yepic%20AI,it%20claimed%20it%20never%20would.',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2020/04/hero-clearview-fakefaces.jpg?w=1390&crop=1',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `U.S. securities regulators have opened a probe into the MOVEit mass-hack that has exposed the personal data of at least 64 million people, according to the company that made the affected software.

        In a regulatory filing this week, Progress Software confirmed it had received a subpoena from the U.S. Securities and Exchange Commission (SEC) seeking “various documents and information” relating to the MOVEit vulnerability. “The SEC investigation is a fact-finding inquiry, the investigation does not mean that Progress or anyone else has violated federal securities laws,” Progress said, adding that it intends to “cooperate fully” with the investigation.
        
        Progress also said in the filing that it expects to see minimal financial impact from the MOVEit mass-hacks, despite the broad scale of the incident.
        
        The company said it incurred $1 million of costs related to the MOVEit vulnerability, once it had taken into account received and expected insurance payouts of approximately $1.9 million.
        
        However, Progress notes that a loss from this incident remains possible after 23 affected customers launched legal action against the company and “intend to seek indemnification.” Progress said that a further 58 class action lawsuits have been filed by individuals who claim to be affected.
        
        While it’s almost six months on from the discovery of the MOVEit zero-day vulnerability, the exact number of impacted MOVEit Transfer customers remains unknown, though cybersecurity company Emsisoft reports that 2,546 organizations have so far confirmed to be affected, impacting more than 64 million individuals.
        
        New victims continue to come forward. Last week, Sony confirmed that more than 6,000 employees had data accessed in a MOVEit-related incident, and Flagstar Bank said more than 800,000 customer records had been stolen.
        
        November security incident
        Progress Software said in the filing that it incurred additional costs of $4.2 million related to a separate cybersecurity incident in November 2022.
        
        The filing doesn’t reveal any details about the incident, but John Eddy, a Progress spokesperson representing the company via a third-party agency, confirmed that Progress Software at the time uncovered evidence of unauthorized access to Progress’ corporate network, including evidence that certain company data has been exfiltrated. Progress disclosed the incident in December 2022.
        
        Progress Software hasn’t confirmed what types of data was accessed or how many individuals were impacted. Eddy tells TechCrunch that the company remained fully operational throughout the 2022 incident, which was not related to any “recently reported software vulnerabilities.”
        
        The company confirmed that costs related to this incident “were primarily related to the engagement of external cybersecurity experts and other incident response professionals” and noted that it received approximately $3 million in insurance payouts.
        
        Updated to amend tense in eighth paragraph.`,
        publishDate: new Date('2023-10-10T12:00:00.000Z'),
        author: 'Carly Page',
        category: 'news',
        url: 'https://techcrunch.com/2023/10/11/sec-is-investigating-moveit-mass-hack-says-progress-software/',
        active: true,
        cover: 'https://techcrunch.com/wp-content/uploads/2016/10/gettyimages-167959993.jpg?w=1390&crop=1',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Database hosting rất quan trọng trong các mô hình cần sử dụng dữ liệu. Với sự gia tăng dữ liệu và tốc độ ứng dụng dữ liệu vào mọi công việc và AI như hiện nay thì việc cân nhắc sử dụng công nghệ dữ liệu phù hợp và tối ưu là cần thiết hơn bao giờ hết. Cùng Bizfly Cloud tìm hiểu tổng quan Database hosting là gì? qua bài viết này!

        Database hosting là gì? 
        Database hosting là dịch vụ cung cấp lưu trữ cơ sở dữ liệu để giúp giải quyết các vấn đề hạn chế mà việc lưu trữ database truyền thống không thể đáp ứng được. Mô hình phổ biến thường là lưu trữ trên các đám mây hay còn gọi là Cloud Database service. Kiểu lưu trữ xu hướng này mở ra các khả năng dễ dàng trong việc quản lý, sử dụng cơ sở dữ liệu ở quy mô lớn với hiệu quả cao trong các công việc liên quan đến dữ liệu.
        
        Database hosting là gì?
        Database hosting có thể lưu trữ giữ liệu trên hệ thống đám mây
        
        Đầu tiên, chúng ta sẽ phân tích một chút về cơ sở dữ liệu để hiểu hơn cách hoạt động của Database. Cơ sở dữ liệu là một tập hợp các thông tin hoặc dữ liệu có cấu trúc, thường được lưu trữ vật lý trên đĩa CD, thẻ nhớ, ổ cứng máy tính… Dữ liệu trong các kiểu cơ sở dữ liệu phổ biến nhất hiện nay thường được tổ chức dưới dạng hàng và cột, sắp xếp trong các bảng (có thể liên tưởng tới mô hình excel như ví dụ). Từ đó chúng ta có thể thực hiện truy vấn dữ liệu với các thông tin được tổng hợp lại từ các cột và hàng liên quan. Hầu hết các cơ sở dữ liệu đều sử dụng ngôn ngữ truy vấn có cấu trúc (SQL) để viết và truy vấn dữ liệu.
        
        Cơ sở dữ liệu thường được kiểm soát bởi hệ thống quản lý cơ sở dữ liệu (DBMS). Cùng với nhau, dữ liệu và DBMS và các ứng dụng liên quan được gọi là hệ thống cơ sở dữ liệu, thường được rút ngắn thành cơ sở dữ liệu.
        
        
        Đối với việc lưu trữ database truyền thống tồn tại nhiều trở ngại, thường gặp nhất là hạn chế về không gian lưu trữ, khó khăn khi thay đổi cấu hình ổ cứng, sao lưu và dự phòng dữ liệu khi thiết bị lưu trữ gặp trục trặc (lỗi, hỏng…), cũng như khó khăn để kết hợp database với các giải pháp khác hiệu quả, chi phí xây dựng hệ thống lưu trữ lớn rất đắt đỏ…
        
        Do đó mô hình database hosting ra đời để giải quyết các vấn đề trên, ở đó các nhà cung cấp sẽ cung cấp hạ tầng phần cứng để chạy cơ sở dữ liệu theo nhu cầu của khách hàng. Bizfly Cloud với hệ tài nguyên dồi dào và hạ tầng mạnh mẽ sẵn có, giúp cực kỳ dễ dàng và nhanh chóng mở rộng cơ sở dữ liệu cho mọi quy mô sử dụng, đồng thời đảm bảo môi trường lưu trữ an toàn và khả năng tích hợp với toàn bộ các giải pháp cần thiết khác như kho lưu trữ đám mây vô hạn Simple Storage, phân phối nội dung nhanh chóng với CDN, chống tấn công DDoS, công cụ quản lý Kubernetes tự động Kubernetes Engine…
        
        Tại sao website cần sử dụng Database Hosting 
        Đảm bảo tính sẵn sàng hay khả năng truy cập liên tục của website
        
        Trong một mô hình vận hành website thông thường, Database sẽ đóng vai trò là nơi lưu trữ các thông tin mô tả cho các hình ảnh, video, ảnh động… của website hay còn gọi là các metadata. Và khi có truy cập đến website, trình duyệt sẽ gửi yêu cầu về database và căn cứ theo các thông tin mô tả để lấy các dữ liệu từ kho lưu trữ nội dung và trả cho trình duyệt. Vì vậy, nếu có vấn đề với database như sự cố, lỗi, hỏng, nghẽn đường truyền hoặc quá tải máy chủ database thì quá trình truyền dữ liệu sẽ gặp gián đoạn và website không thể trả ra nội dung yêu cầu cho người truy cập.
        
        Khi đó việc lưu trữ Database trên một nền tảng cloud mạnh mẽ như Bizfly Cloud với khả năng tự động tăng hoặc tự động giảm cấu hình theo mức độ tăng giảm của việc sử dụng dữ liệu sẽ đảm bảo khả năng truyền dữ liệu thông suốt, liên tục. Cùng với đó, tính chịu lỗi cao do Bizfly Cloud có hệ thống máy chủ dự phòng lớn cũng đảm bảo database luôn hoạt động kể cả khi có sự cố.
        
        Việc phải cập nhật thông tin thường xuyên như các trang báo, trang tin tức thì sử dụng Database gần như là bắt buộc bởi với việc tự động các thao tác quản lý phần cứng, người quản trị tiết kiệm được rất nhiều thời gian, cũng đồng nghĩa với việc nội dung được cập nhật tới người dùng với tốc độ nhanh nhất.
        
        Cải thiện trải nghiệm người dùng tốt hơn
        
        Như đã nói, có thể kết hợp Bizfly Cloud Database với hệ giải pháp đa dạng và đầy đủ của Bizfly Cloud để phát triển nhiều tính năng hấp dẫn và đa dạng hơn cho website ví dụ như tạo tài khoản, đăng ký, chat trực tiếp, AR…, qua đó tối ưu hơn trải nghiệm người dùng trên website.
        
        Ngoài ra, database cũng có thể kết nối đồng bộ vào hệ thống ứng dụng nên cho phép truyền dữ liệu đồng bộ cả trên website và ứng dụng, do đó giúp người dùng có trải nghiệm tương đồng trên mọi thiết bị sử dụng: máy tính, laptop, điện thoại…
        
        Database hosting là gì?
        Bizfly Cloud Database có thể đồng bộ với rất nhiều hệ quản trị cơ sở dữ liệu
        
        Lợi ích Database hosting mang lại 
        Như đã phân tích ở trên, Database hosting xuất hiện như một giải pháp thay thế cho việc chạy cơ sở dữ liệu và các ứng dụng trên các máy vật lý do chính tổ chức sở hữu và vận hành nhờ loại bỏ các hạn chế của mô hình cũ với những lợi ích mà mọi doanh nghiệp đều có thể tận dụng:
        
        Dễ dàng và linh hoạt hơn trong việc cấu hình phần cứng
        Có cơ chế tự động tăng giảm tài nguyên theo nhu cầu.
        Cung cấp tính sẵn sàng cao, đồng nghĩa với việc không có bất cứ gián đoạn nào cho người dùng.
        Có cơ chế dự phòng dữ liệu an toàn cho mọi tình huống sự cố, hỏng hóc phần cứng, sơ suất con người….
        Không cần đầu tư xây dựng hạ tầng phần cứng và bảo trì, nâng cấp định kỳ với chi phí đắt đỏ, tốn kém…
        Tích hợp nhanh và dễ với nhiều dịch vụ 
        Nhà cung cấp hỗ trợ các vấn đề về kỹ thuật, tích hợp, tùy chỉnh nâng cao.
        Các loại Database hosting 
        Database được chia thành hai loại chính: cơ sở dữ liệu quan hệ và cơ sở dữ liệu phi quan hệ hay còn gọi là NoSQL.
        
        Cơ sở dữ liệu quan hệ được sử dụng phổ biến và rộng rãi hiện nay. Đã hiện hữu rất lâu trên thị trường, nên cơ sở dữ liệu quan hệ được cung cấp dưới cả 2 hình thức là truyền thống và đám mây.
        Cơ sở dữ liệu phi quan hệ NoSQL bao gồm tất cả các mô hình không sử dụng hàng và cột như cơ sở dữ liệu quan hệ. Có nhiều kiểu cơ sở dữ liệu NoSQL để sử dụng, vì vậy chúng ta cần xem xét loại cơ sở dữ liệu nào phù hợp nhất với nhu cầu của ứng dụng. NoSQL thường được ưu tiên cho các đám mây, và do đó có độ phù hợp cao cho database hosting.
        Hầu hết các cơ sở dữ liệu phổ biến hiện nay đều được hỗ trợ, nên bạn có thể yên tâm lựa chọn sao cho phù hợp.
        
        Lưu ý khi sử dụng Database hosting 
        Với rất nhiều lợi ích Database hosting được xem là sự lựa chọn tuyệt vời cho giải pháp cơ sở dữ liệu. Tuy nhiên, cân nhắc một số vấn đề sau có thể giúp bạn sử dụng cơ sở dữ liệu hiệu quả hơn.
        
        Mức độ bảo mật, kiểm soát dữ liệu 
        
        Về cơ bản, các dữ liệu lưu trữ trên hệ thống nhà cung cấp đều an toàn vì luôn có cơ chế dự phòng và khôi phục sẵn sàng. Bên cạnh đó, với những yêu cầu lưu trữ dữ liệu tại nước sở tại để tuân thủ Nghị định của Chính phủ thì việc chạy các Database như Bizfly Cloud Database sẽ đáp ứng hoàn toàn nhu cầu này.
        
        Nếu dự án phải tuân theo các chính sách nghiêm ngặt, ví dụ như các dự án của chính phủ thì có thể lên kế hoạch để xác định các phần công việc phù hợp đưa lên Database hosting.
        
        Chi phí
        
        Tùy thuộc vào loại database mà bạn host, mức giá sẽ khác nhau, tuy nhiên lưu trữ truyền thống trên máy vật lý vẫn luôn tốn kém hơn do phải chi trả các chi phí điện, làm mát, phần cứng, không gian và kết nối internet.
        
        Vì vậy, cần cân nhắc giữa chi phí và lợi ích trước khi quyết định nên áp dụng giải pháp nào.
        
        Nhà cung cấp dịch vụ
        
        Đánh giá nhà cung cấp có thể dựa trên các tiêu chí như chi phí, địa điểm và các dịch vụ có sẵn.
        
        Tại Việt Nam, Bizfly Cloud tiên phong nghiên cứu và cung cấp các giải pháp cloud nội địa, bên cạnh hạ tầng phần cứng rộng lớn để chạy các database với độ uptime trên 99,99%, Bizfly Cloud còn phát triển riêng Bizfly Cloud Database - dịch vụ cơ sở dữ liệu đám mây đầy đủ tính năng, tốc độ cao, tối ưu đường truyền và chi phí. 
        
        Database-as-a-service
        
        Nếu bạn nhận thấy rằng database hosting là một lựa chọn phù hợp và giúp bạn giải quyết các bài toán về dữ liệu thì hãy cân nhắc thêm giải pháp Cơ sở dữ liệu dưới dạng dịch vụ (DBaaS).
        
        Với việc thuê ngoài các máy chủ để vận hành cơ sở dữ liệu, bạn vẫn phải quản lý các máy này bao gồm việc cấu hình, giám sát, điều chỉnh…, vừa tốn thời gian vừa cần công sức. Trong khi đó, sử dụng một dịch vụ DBaaS như Bizfly Cloud Database sẽ phụ trách luôn các công việc quản lý. DBaaS là một phiên bản nâng cao của database hosting, cung cấp khả năng tự động hóa nhiều công việc quản trị như cài đặt, cấu hình, giám sát, bảo trì và nâng cấp cơ sở dữ liệu. Giải pháp giúp giải phóng đến hơn 80% việc quản lý, vận hành cơ sở dữ liệu so với cách thức truyền thống.
        
        Các câu hỏi thường gặp về Database hosting 
        1. Việc host database có nghĩa là gì?
        
        Đây là hình thức lưu trữ cơ sở dữ liệu  trên các máy chủ do công ty bên thứ ba sở hữu và quản lý. Bạn có thể truy cập an toàn, giám sát và tùy chỉnh cấu hình theo nhu cầu, trong khi đó tận dụng thêm được các lợi thế vượt trội về tính khả dụng, tính sẵn sàng, tính linh hoạt, không tốn chi phí mua máy chủ, bảo trì và nâng cấp.
        
        2. Làm cách nào tôi có thể tự host cơ sở dữ liệu của mình?
        
        Với hình thức tự lưu trữ, bạn có thể lưu database trên bất kỳ máy tính nào đáp ứng các yêu cầu về phần cứng và phần mềm để chạy cơ sở dữ liệu đó.
        Nhiều hệ cơ sở dữ liệu cung cấp giải pháp tự lưu trữ, bạn có thể tải xuống và chạy tại máy, hoặc có cả phiên bản cộng đồng miễn phí, ví dụ như MongoDB…
        
        3. Tôi nên lưu trữ cơ sở dữ liệu của mình ở đâu?
        
        Để trả lời được vấn đề này thì cần xác định rõ được yêu cầu của bạn và việc bạn đang sử dụng cơ sở dữ liệu quan hệ hay không quan hệ.
        Hình thức lưu trữ đám mây sẽ là sự lựa chọn tuyệt vời cho các yêu cầu về đơn giản hóa công việc quản lý, tính sẵn sàng cao và khả năng mở rộng linh hoạt nhất.
        
        Kết luận
        Những lợi ích của việc sử dụng database hosting là khá rõ ràng. Đây là giải pháp dữ liệu hiệu quả đang giúp loại bỏ những khó khăn, hạn chế từ phương án lưu trữ truyền thống. Cùng với đó để tối ưu nhiều nhất các công việc với cơ sở dữ liệu thì sử dụng DBaaS là giải pháp đang được rất nhiều doanh nghiệp hiện nay lựa chọn. Là giải pháp tiên phong tại Việt Nam, với lợi thế về đường truyền trong nước ổn định giúp giảm chi phí network quốc tế, chất lượng tương đương với các giải pháp hàng đầu, Bizfly Cloud Database cung cấp cho khách hàng một giải pháp nội địa đáp ứng đầy đủ nhu cầu sử dụng cơ sở dữ liệu hiệu quả.`,
        publishDate:  new Date('2023-09-26T00:00:00.000Z'),
        author: 'Vinh Phạm',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/database-hosting-la-gi-chi-tiet-ve-database-hosting-20230926121043986.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/9/26/database-hosting-la-gi-16957039254391505790363-0-58-407-782-crop-16957039522081243334655.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Máy chủ trong doanh nghiệp gặp sự cố hoặc đã khấu hao hết và cần thay thế, doanh nghiệp triển khai các chương trình phần mềm mới cần thêm các máy chủ hiệu suất cao… Có rất nhiều nguyên nhân để một doanh nghiệp ở mọi quy mô cần lựa chọn để mua hay thuê server, cùng Bizly Cloud tìm hiểu để đưa ra quyết định tốt nhất bạn nhé.

        Bên cạnh doanh nghiệp, người dùng cá nhân với các mục đích phát triển riêng của mình có thể cũng có nhu cầu để thuê server. Vậy thì những điều cần biết vể thuê server là gì, chúng ta cũng có thể tham khảo trong bài sau.
        
        Thuê server là gì? Thuê server hay mua server tối ưu hơn? Thuê Server có thể giúp ích cho doanh nghiệp rất nhiều trong khâu quản lý cũng như chi phí ban đầu
        
        Thuê server là gì?
        Thuê server là một hình thức sử dụng trong đó doanh nghiệp sẽ không mua và không thực sự sở hữu máy chủ tại doanh nghiệp mình, thay vào đó họ đăng ký một gói sử dụng của nhà cung cấp với số lượng máy chủ cụ thể, cấu hình và cài đặt phần mềm theo nhu cầu mong muốn và thanh toán hàng tháng hoặc hàng giờ. Nhà cung cấp thường sở hữu một số lượng lớn máy chủ cấu hình cao, công suất lớn tại các trung tâm dữ liệu (data center) và cho thuê thông qua hình thức ảo hóa Cloud.
        Ngoài hình thức đăng ký gói sử dụng thì cũng có hình thức thuê cố định một hoặc một số server vật lý đặt tại trung tâm dữ liệu để sử dụng riêng. 
        Người dùng cá nhân có nhu cầu sử dụng server cũng có thể dễ dàng đăng ký một gói phù hợp nhu cầu dev, test cá nhân mà không cần phải tự mua sắm máy chủ đắt đỏ.
        
        Ưu điểm khi thuê server 
        Hình thức thuê server hiện nay đang được các doanh nghiệp sử dụng ngày càng nhiều nhờ sở hữu nhiều ưu điểm khó bỏ qua như:
        
        Chi phí:
        
        Lợi thế đầu tiên mà hình thức thuê server mang lại chính là chi phí. Chi phí này bao gồm: chi phí mua sắm ban đầu 1 máy chủ mới, chi phí vận hành, chi phí bảo trì, nâng cấp định kỳ, chi phí nhân sự, các chi phí cố định cho điện năng, chi phí làm mát, chi phí mặt bằng… Đây là những chi phí cơ bản cho một máy chủ đặt tại văn phòng.
        
        Chi phí mua mới một máy chủ thường đắt đỏ, trong trường hợp cần mua nhiều máy một lúc thì chi phí này sẽ tăng rất cao. 
        
        Các máy thường là có công suất lớn nên tiêu thụ điện năng rất nhiều và vì hoạt động liên tục 24/7 trên nên cần có một cơ chế làm mát để không làm giảm tuổi thọ sử dụng máy. 
        
        Các máy cũng chiếm một diện tích đặt nhất định, chưa kể nếu văn phòng ở các khu dân cư thì cần phải thuê riêng chỗ đặt để giảm ồn vì các máy chạy rất ồn.
        
        Các server sau một thời gian sử dụng sẽ có khấu hao nhất định, vì vậy sẽ phát sinh các chi phí bảo trì, bảo dưỡng định kỳ để gia tăng tuổi thọ máy. Và khi đã khấu hao hết thì sẽ phải thay thế máy mới với chi phí đắt đỏ.
        
        Chi phí phần mềm, các chương trình cài đặt bản quyền sẽ phải trả phí bản quyền.
        
        Cần nhân sự giám sát chặt chẽ để đề phòng lỗi, hỏng, virus xâm nhập gây tê liệt hệ thống, gián đoạn công việc, thiệt hại kinh doanh.
        
        Và rất nhiều các chi phí rủi ro khác như chi phí thời gian (lắp đặt, xử lý sự cố, cập nhật bảo mật…)
        
        Với thuê server thì loại bỏ hoàn toàn các chi phí về điện năng, làm mát, chỗ đặt, khấu hao, cắt giảm chi phí thời gian, nhân sự do bỏ qua các công đoạn mua sắm, lắp đặt, vận hành phức tạp. Các công việc nâng cấp, bảo trì, bảo dưỡng do nhà cung cấp chịu trách nhiệm hoàn toàn. Hình thức chi trả theo giờ, theo tháng cho phép doanh nghiệp chỉ phải chi trả các khoản thanh toán tối thiểu. Không cần nhiều nhân sự để phụ trách như với máy chủ truyền thống. Nhìn chung chi phí giảm một nửa so với đầu tư cho server vật lý.
        
        Lưu trữ, bảo mật và độ ổn định
        
        Khi tự sở hữu server thì toàn bộ trách nhiệm về dữ liệu, bảo đảm hoạt động liên tục sẽ là trách nhiệm của doanh nghiệp. Tuy nhiên khi thuê server thì nhà cung cấp sẽ phải đảm bảo một số điều khoản liên quan đến bảo mật hệ thống, dữ liệu và tính sẵn sàng hoạt động của các server họ cung cấp. Họ cũng xây dựng các quy trình bảo mật nhiều lớp để bảo vệ hệ thống server trước tấn công và các tình huống thảm họa (mưa bão, mất điện, mất mạng…). Các điều khoản được quy định rõ ràng trong cam kết giữa nhà cung cấp và doanh nghiệp. Ví dụ Bizfly Cloud cung cấp dịch vụ thuê server đảm bảo ổn định sẵn sàng tới 99,99%, tuân thủ cam kết chất lượng dịch vụ SLA.
        
        Băng thông và kết nối mạng
        
        Các nhà cung cấp cũng thường sở hữu thông lượng băng thông lớn, các data center được đặt ở khu vực mạng tốc độ cao và họ cũng duy trì một hệ thống mạng nội bộ đảm bảo khả năng kết nối liên tục của các server. Trong khi với các vị trí đặt văn phòng trong các khu dân cư và sử dụng mạng tiêu dùng thì sự cố kết nối mạng cục bộ có thể gây gián đoạn hoạt động và mất thời gian để xử lý.
        
        Hệ thống Bizfly Cloud được xây dựng trên đường truyền trong nước ổn định, mạnh mẽ, tốc độ cao, hoàn toàn không bị ảnh hưởng bởi các sự cố mất mạng quốc tế. 
        
        Hỗ trợ và xử lý kỹ thuật
        
        Như đã nói, server tự sở hữu yêu cầu nhân sự chuyên trách giám sát 24/7, các vấn đề phức tạp cần xử lý chuyên môn sâu, hệ thống càng nhiều server thì cần càng nhiều nhân sự. Các nhà cung cấp dịch vụ cho thuê server là các chuyên gia trong lĩnh vực của họ, vì vậy họ cung cấp các khả năng xử lý các vấn đề kỹ thuật nhanh chóng. Bizfly Cloud cung cấp hỗ trợ kỹ thuật trực tiếp 24/7 qua nhiều kênh kết nối: chat, hotline, email. 
        
        Linh hoạt
        
        Tính linh hoạt được đánh giá là 1 ưu điểm vượt trội của hình thức thuê server. Với hệ thống nhiều server công suất lớn cùng chạy một lúc, nếu có vấn đề thì các công việc sẽ lập tức được chuyển sang một server khác trên hệ thống với tốc độ tức thì để không có bất cứ gián đoạn nào. Ngoài ra cũng dễ dàng để nâng cấp dòng máy cao hơn khi có nhu cầu và lựa chọn loại rẻ hơn khi nhu cầu sử dụng không còn cao như trước nữa. 
        
        Nên thuê server hay mua server 
        Thuê server là gì? Thuê server hay mua server tối ưu hơn? Thuê server sẽ giảm được chi phí thiết bị, vận hành, nhân sự,...
        
        Lựa chọn nên mua hay nên thuê server vẫn luôn là vấn đề mà nhiều doanh nghiệp cân nhắc, bởi vì server giống như xương sống trong hạ tầng công nghệ của một doanh nghiệp vậy, có vai trò vận hành toàn bộ các chương trình, phần mềm làm việc quan trọng trên đó. Để quyết định nên thuê hay mua máy chủ thì cũng cần đánh giá nhu cầu, nguồn lực, ngân sách, và mục tiêu sử dụng của doanh nghiệp.
        
        Với các công việc yêu cầu toàn quyền kiểm soát hoặc tuyệt đối riêng tư, doanh nghiệp nên đầu tư các máy chủ cố định. Tuy nhiên, cũng có hình thức thuê server dedicated, dòng server chuyên dụng dùng riêng.
        Với các doanh nghiệp nhỏ, các công ty khởi nghiệp, công ty IT Outsource thì hình thức thuê server có lợi thế lớn về mặt chi phí, vận hành và công nghệ do không phải bỏ chi phí lớn từ ban đầu và tận dụng được sự hỗ trợ từ nhà cung cấp dịch vụ.
        Các nhu cầu dev, test cho các dự án ngắn hạn cũng phù hợp khi thuê server.
        Các công ty muốn tối ưu chi phí, tối ưu nguồn lực, tối ưu tài nguyên có thể triển khai mô hình “hybrid” với việc kết hợp hệ thống máy chủ cố định và máy chủ đi thuê. Với hình thức này doanh nghiệp có thể tận dụng toàn bộ nguồn tài nguyên sẵn có từ các máy chủ hiện hành, đồng thời tận hưởng sức mạnh tuyệt vời, các khả năng vô hạn của server ảo hóa nhằm phát triển doanh nghiệp hiệu quả nhất.
        Lưu ý khi thuê server 
        Để thuê server hiệu quả và đáp ứng đầy đủ các nhu cầu của doanh nghiệp thì có một số tiêu chí cần đánh giá:
        
        Tìm hiểu nhà cung cấp: Nhà cung cấp uy tín sẽ được nhiều khách hàng lớn tin tưởng và có khả năng đáp ứng nhiều nhu cầu đặc thù của Doanh nghiệp. Bizfly Cloud hiện là nhà cung cấp dịch vụ máy chủ phục vụ hơn 3000 khách hàng doanh nghiệp với nhiều doanh nghiệp lớn như SSI, Ahamove, Thu Cúc, Đất Xanh Miền Bắc, iPOS…
        Thông số kỹ thuật gồm: thông số ổ cứng, HĐH hỗ trợ, dung lượng băng thông, ứng dụng kết nối…
        Xác định nhu cầu sử dụng: Cấu hình RAM, CPU, dung lượng lưu trữ, băng thông mạng…, các giải pháp đi kèm. Bizfly Cloud cung cấp sẵn sàng hơn 20 giải pháp công nghệ cho nhiều nhu cầu sử dụng server từ cơ bản đến đặc thù. Ví dụ triển khai các ứng dụng wordpress, MySQL, cPanel… không cần cài đặt.
        Xác định ngân sách: Lên kế hoạch ngân sách gồm giới hạn chi trả hàng tháng, dự trù mức sử dụng tăng giảm, chi phí triển khai (nếu có)...
        Có thể thấy thuê server đem lại vô số lợi ích cho doanh nghiệp mà những gì được chia sẻ trong viết có thể chưa nêu hết được. Một doanh nghiệp mới bắt đầu phát triển chỉ cần thuê server để chạy các ứng dụng cơ bản là đã có thể bắt đầu công việc kinh doanh và sau đó dễ dàng mở rộng theo thời gian. Các phương án sử dụng server là rất nhiều, tùy vào từng mô hình mà có thể tận dụng tối đa tiềm năng của hinh thức công nghệ ngày một phổ biến này.
        
        Để tìm hiểu thêm về các thông số, các gói cấu hình mạnh mẽ, chi phí chi trả linh hoạt theo giờ từ Bizfly Cloud, bạn đọc tham khảo dịch vụ thuê server chất lượng hàng đầu tại: https://bizflycloud.vn/cloud-server`,
        publishDate: new Date('2023-09-16T00:00:00.000Z'),
        author: 'Vinh Phạm',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/thue-server-la-gi-thue-server-hay-mua-server-toi-uu-hon-20230915153348563.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/9/15/thue-server-la-gi-1694764261717833767996-77-118-1024-1803-crop-16947667673991623460189.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Đánh giá mức độ phù hợp và chất lượng một dịch vụ Cloud Server là rất quan trọng khi cá nhân, doanh nghiệp muốn chạy các chương trình trên đó đạt độ ổn định, hiệu quả cao. Dùng thử Cloud Server của Bizfly Cloud không phải chi trả chi phí sử dụng và được trải nghiệm đầy đủ toàn bộ các tính năng mạnh mẽ hàng đầu.

        Cách tự tạo Cloud Server dùng thử miễn phí 
        Bước 1: Chọn vào service cloud server 
        
        Bizfly Cloud Server cung cấp cấu hình tùy chỉnh, bạn có thể lựa chọn theo nhu cầu và tạo Cloud Server dùng thử miễn phí để trải nghiệm.
        
        Bạn đăng ký tài khoản từ website Bizfly Cloud Server: https://bizflycloud.vn/cloud-server và chọn click vào “Dùng thử miễn phí” ở góc phải màn hình.
        
         Giao diện đăng ký tài khoản hiện ra, bạn nhập các thông tin đăng ký gồm email sử dụng cho tạo Cloud Server dùng thử miễn phí trong ô đăng ký.
        
         Sau khi đăng ký thành công, bạn dùng email và mật khẩu được cung cấp qua email để xác thực và đăng nhập vào hệ thống để bắt đầu sử dụng.  
        
         Cick vào mũi tên để tiếp tục nhập mật khẩu.
        
         Bạn sẽ được đăng ký một tài khoản trên trang quản trị (Dashboard) để có thể thao tác và sử dụng cloud server. Ở bước đăng ký bạn sẽ được yêu cầu thanh toán một khoản phí xác thực là 20K, và sẽ được cộng vào tài khoản sử dụng sau khi nâng cấp lên trả phí.
        
        Tại trang Dashboard bạn chọn Cloud Server:
        
         Bước 2: Chọn chức năng tạo máy chủ 
        
        Trang quản trị Cloud Server hiện ra, bạn chọn Tạo máy chủ ở góc màn hình bên phải.
        
         Bước 3: Chọn Hệ điều hành 
        
        Sau khi tạo server sẽ hiện ra giao diện để bạn lựa chọn HĐH. Bizfly Cloud cung cấp đầy đủ HĐH phổ biến hiện nay. 
        
         Bước 4: Chọn Billing Plan 
        
        Có 2 phương án chi trả bạn có thể lựa chọn với:
        
        Subscription: Thanh toán theo tháng
        
        On Demand: Thanh toán theo giờ
        
         
        Bước 5: Chọn loại máy chủ 
        
        Tùy thuộc vào nhu cầu sử dụng, ngân sách, chi phí của mình mà bạn có thể lựa chọn loại máy chủ phù hợp trong các dòng Basic, Premium, Enterprise mà BFC cung cấp.
        
        Dòng máy chủ tầm trung Premium được sử dụng khá phổ biến, vì đáp ứng tương đối đầy đủ các nhu cầu sử dụng của nhiều doanh nghiệp, thích hợp cho các loại ứng dụng quy mô vừa và nhỏ.
        
         
        Bước 6: Chọn Data Center 
        
        Ở khu vực Hà Nội thì hiện có 2 khu vực (zone) là HN1 và HN2 để lựa chọn. Đối với nhu cầu zone ở khu vực HCM bạn có thể liên hệ để được hỗ trợ trực tiếp.
        
         
        Bước 7: Chọn cấu hình 
        
        Bạn có thể chọn theo cấu hình thu gọn, danh sách cấu hình hoặc cấu hình tùy chỉnh theo nhu cầu riêng.
        
         
        Danh sách cấu hình sẽ gồm các thông số và giá cụ thể, Bizfly Cloud cung cấp cấu hình lên tới 32vCPU.
        
         
        Hoặc bạn có thể chọn tùy chỉnh để có cấu hình ưng ý.
        
         
        Bước 8: Có thể chọn thêm ổ cứng hoặc không 
        
        Để đáp ứng các nhu cầu khi chạy các ứng dụng cần lưu trữ lớn, Bizfly Cloud cung cấp lựa chọn gắn thêm ổ cứng với tối đa 5 ổ. Bạn chọn loại ổ cứng để thêm như hinh dưới:
        
         
        Bước 9: Cấu hình network nâng cao và ssh key 
        
         
        Lựa chọn loại network bạn muốn sử dụng
        Có 2 hình thức Miễn phí DataTransfer và Miễn phí Bandwidth (dòng Basic chỉ Miễn phí DataTransfer). Tùy thuộc vào ứng dụng bạn chạy mà bạn đưa ra lựa chọn tối ưu chi phí nhất.
        
         
        Lựa chọn WAN IP
        
        Bạn có thể chọn theo mặc định, hoặc sử dụng loại bạn đã mua hoặc bỏ qua.
        
        
        Private Network
        
        Đáp ứng các nhu cầu sử dụng dải mạng LAN.
        
        
        Để tạo VPC Network bạn Click vào nút “tại đây” để khởi tạo.
        
        
        SSH Key
        
        Bạn có thể sử dụng SSH Key thay cho password khi đăng nhập vào server nếu server chạy các hệ điều hành Linux hoặc Unix. Nếu không có nhu cầu thì có thể bỏ qua.
        
        Bước 10: Chọn số lượng máy chủ và đặt tên cho server 
        
        Ngoài ra còn có các tùy chọn về sao lưu hay userdata mà tùy theo nhu cầu bạn có thể chọn sử dụng hoặc bỏ qua nhé.
        
         
        Bước 11: Thực hiện thanh toán 
        
         
        Bước 12: Thực hiện xác thực thanh toán 
        
        Bạn chờ một lúc để hệ thống tạo máy chủ.
        
        Bước 13: Sau khi tạo thành công 
        
         
        Cách Quản Lý Dùng Thử Cloud Server của Bizfly Cloud 
        Đầu tiên, nếu bạn đang ở 1 trang khác và muốn quay về trang danh sách bạn chọn ấn vào biểu tượng bên góc trái màn hình. 
        
         
        Thanh công cụ xuất hiện, bạn có thể chọn vào Dashboard để trở về màn hình quản trị tổng quan hoặc chọn vào Cloud Server để đến với trang danh sách máy chủ bạn đã tạo để thao tác.
        
         
        Hoặc bạn lựa chọn trong mục tìm kiếm, sẽ có các trường cho sẵn, bạn chỉ cần tích chọn.
        
         
        Thao tác nhanh:
        
        Bảng danh sách các thao tác bên góc phải màn hình là tổng hợp các thao tác bạn có thể thực hiện với máy chủ của mình. 
        
         
        Thao tác chi tiết:
        
        Bạn có thể thao tác chi tiết và trực tiếp trên từng server như hướng dẫn dưới đây:
        
        - Bật/tắt server
        
         
        Bạn Click trực tiếp vào tên máy chủ bạn muốn thực hiện tắt hoặc bật. Màn hình sẽ hiển thị thông tin chi tiết của máy đó. Bạn chọn bật/tắt ở nút trên cùng bên phải màn hình.
        
         
        Hoặc bạn chọn vào Power, màn hình sẽ hiện nút tắt máy chủ để bạn thực hiện tắt.
        
         
        Sau khi tắt máy chủ thì đèn của server sẽ tắt.
        
        - Theo dõi server 
        
        Để theo dõi thời gian thực về mức sử dụng tài nguyên, bạn chọn vào “Theo dõi” trên thanh quản trị. Bạn có thể chọn để chia sẻ hoặc xuất dữ liệu tùy theo nhu cầu mong muốn. 
        
         
        - Truy cập
        
        Tạo Console 
        
        Trong các trường hợp bạn không thể vào server bằng IP hoặc bạn muốn truy cập vào hệ thống không dùng IP chả hạn thì BFC cũng cung cấp Console để truy cập vào servers. Tại thanh quản trị bên trái bạn chọn “Truy cập”, sau đó chọn “Mở Console”, trang Console sẽ hiện ra để bạn tiếp tục thao tác.
        
        Đặt lại mật khẩu
        
        Tại mục Truy cập bạn cũng có thể chọn đặt lại mật khẩu tại “Reset mật khẩu”, mật khẩu mới sẽ được gửi đến bạn qua email. Đây là thiết lập mật khẩu gốc cho server trong trường hợp bạn quên mật khẩu hoặc mất SSH Key khi truy cập server. Quá trình reset mật khẩu sẽ làm máy chủ bị khởi động lại.
        
         
        Quản lý ổ cứng server 
        
        Bạn vào mục ổ cứng (lưu ý ổ cứng của chọn server bạn muốn thực hiện) để thao tác. Với ổ cứng thì bạn có thể chọn thêm ổ cứng để gắn vào hoặc thao tác với ổ cứng hiện tại.
        
        Nhấn vào “Tạo ổ cứng” để thêm ổ data disk, lựa chọn loại ổ HDD hay SSD, điều chỉnh dung lượng (nếu muốn), giao diện sẽ xuất hiện chi phí của ổ, bạn kiểm tra và chọn xác nhận để hoàn thành tạo ổ cứng.`,
        publishDate: new Date('2023-09-13T00:00:00.000Z'),
        author: 'Vinh Phạm',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/huong-dan-tu-tao-cloud-server-dung-thu-mien-phi-20230913235008797.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/9/13/tu-tao-cloud-server-1-16946222909201004076729-0-39-565-1045-crop-1694623722440288249389.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Trong mô hình kiến trúc Hybrid Cloud và Multi Cloud đang thịnh hành ngày nay nổi lên một nhu cầu thiết yếu đó là điều phối truy cập người dùng tới các dịch vụ chạy ở nhiều nền tảng hạ tầng khác nhau. Giả sử, doanh nghiệp có một ứng dụng web được triển khai Hybrid trên hạ tầng máy chủ vật lý đặt tại Việt Nam và trên Cloud Server của một Cloud Provider nước ngoài. Khi đó, làm sao để điều hướng khách hàng ở Việt Nam về máy chủ web trên hạ tầng vật lý, còn khách hàng ở nước ngoài điều hướng về Cloud Server một cách tối ưu nhất?


        Nhu cầu này thường được các nhà cung cấp dịch vụ giải quyết bằng các giải pháp công nghệ dựa trên DNS hoặc Network. Trong đó, phổ biến nhất vẫn là DNS-based. Traffic Manager là một dịch vụ DNS-based Load Balancing cho phép doanh nghiệp điều phối truy cập cho các dịch vụ đặt ở nhiều nơi.
        
        5 lợi ích khi sử dụng Traffic Manager
        Vậy Traffic Manager giúp các doanh nghiệp giải quyết bài toán điều phối truy cập sẽ thu được những lợi ích quan trọng nào?
        
        Tăng tính sẵn sàng cho hệ thống
        Nhờ liên tục theo dõi tình trạng endpoint và tự động điều hướng lưu lượng truy cập khi một endpoint gặp sự cố nên tính sẵn sàng của hệ thống sẽ được gia tăng.
        
        5 Lợi ích khi sử dụng Traffic Manager trong kiến trúc Hybrid Cloud và Multi Cloud Tăng trải nghiệm cho người dùng
        Nhờ khả năng điều phối lưu lượng đến các endpoint (vị trí) trên khắp thế giới cùng các kiểu điều hướng khác nhau, người dùng truy cập website của bạn có thể được điều hướng đến server gần nhất hoặc server đang được ưu tiên nhất. Độ trễ khi giao tiếp giữa người dùng và server sẽ được giảm xuống qua đó giúp nâng cao trải nghiệm sử dụng.
        
        Không downtime khi mở rộng, bảo trì hệ thống
        Trong khi mở rộng, bảo trì ứng dụng, hệ thống của bạn có thể cần chặn toàn bộ lưu lượng cập hoặc chỉ cho phép một lượng nhỏ lưu lượng truy cập đến một server. Traffic Manager sẽ giải quyết được bài toán này nhờ các kiểu điều hướng cùng cơ chế tự động kiểm tra để loại bỏ endpoint gặp sự cố. Vì vậy việc mở rộng, bảo trì ứng dụng có thể tránh được downtime.
        
        Hỗ trợ đa dạng và kết hợp linh hoạt các nền tảng hạ tầng cho ứng dụng
        
        Sự linh hoạt của Traffic Manager nằm ở việc các endpoint dịch vụ của doanh nghiệp có thể nằm ở bất kỳ đâu, không nhất thiết phải thuộc cùng một Cloud Provider và không quan trọng hạ tầng công nghệ bên dưới của endpoint là gì.
        
        Hỗ trợ triển khai các mô hình phức tạp
        Tính năng Nested Endpoint cho phép kết hợp lồng ghép nhiều logic định tuyến với nhau để giải quyết những nhu cầu điều phối truy cập phức tạp hơn. Giả sử, doanh nghiệp có website chạy trên 3 server SVR1, SVR2, SVR3. Trong đó, SVR1 và SVR2 đặt tại DC Hà Nội; SVR3 đặt tại DC HCM. Ngoài ra, SVR1 có cấu hình mạnh hơn SVR2. Với trường hợp này doanh nghiệp có thể cấu hình điều phối truy cập như sau: user ở HCM điều hướng về SVR3, user ở Hà Nội điều hướng về SVR1 và SV2 theo tỉ lệ traffic 70/30.
        
        Có thể thấy với những mô hình hệ thống công nghệ có dữ liệu và các công việc chạy trên nhiều khu vực khác nhau trên thế giới hoặc qua nhiều nhà cung cấp khác nhau thì Traffic Manager là một mắt xích rất quan trọng để đảm bảo mọi công việc được diễn ra trơn tru, liền mạch. Có thể ví Traffic Manager như một trung tâm điều phối giao thông vậy. Người dùng tại Việt Nam cần điều phối truy cập cho các hệ thống Hybrid Cloud hoặc Multi Cloud có thể sử dụng Bizfly Cloud Traffic Manager - giải pháp nội địa tiên phong - với đầy đủ tính năng để sử dụng tiện ích và được hỗ trợ trực tiếp nhất.`,
        publishDate: new Date('2023-08-29T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/5-loi-ich-khi-su-dung-traffic-manager-trong-kien-truc-hybrid-cloud-va-multi-cloud-20230829120434546.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/29/298c-1693285351920804942571.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Video trực tuyến vẫn tiếp tục là loại nội dung thịnh hành trong một thời gian rất dài nữa. Thực tế là có đến 82% nội dung trực tuyến là video và con số này đang tiếp tục tăng. Doanh nghiệp, các nhà khởi nghiệp, người có ảnh hưởng và hầu hết mọi người đều muốn tạo ra những video hấp dẫn, có được sự tương tác tốt với khán giả của họ.

        Video có nhiều người xem, nhiều người chia sẻ, bình luận là mong muốn của tất cả mọi người. Nó quyết định phạm vi lan toả của thông điệp mà người sáng tạo nội dung muốn truyền tải, vì vậy chúng ta có xu hướng thử mọi thứ để tăng tương tác cho video.
        
        Trong bài viết này, chúng tôi sẽ chia sẻ 5 mẹo để tăng mức độ tương tác cho video của bạn. Chúng tôi sẽ chỉ ra nhiều yếu tố quan trọng khi bạn tạo và phân phối nội dung video. Các điểm chính mà chúng tôi sẽ đề cập bao gồm chất lượng video, chiến lược nội dung, cách thể hiện và cách tạo nội dung video để mang lại hiệu quả cao và cách một video platform góp phần vào sự thành công trong việc phân phối nội dung video như thế nào.
        
        Thu hút và gây ấn tượng cho khán giả ngay từ những giây đầu video
        Mặc dù không có số liệu cho thấy việc tạo video ngắn là cần thiết, nhưng chúng ta nhận thấy mỗi khán giả chỉ dành một khoảng thời gian ngắn để xem một video. Do đó, bạn cần tận dụng 15-30 giây đầu tiên của video để thuyết phục khán giả rằng họ nên xem hết video này. 15-30 giây đó có thể là một sự thật thú vị, một cảnh gây cười hay một cảnh kịch tính... Cho dù bạn sản xuất nội dung gì thì hãy nhớ cảm nhận ban đầu là rất quan trọng.
        
        5 mẹo tăng lượt tương tác video bạn nhất định nên thử  Hãy tạo ra video chất lượng để thu hút và giữ chân khán giả
        Khán giả có thể xem video dài nếu nội dung hay và chất lượng hiển thị tốt. Nhưng họ sẽ dễ dàng rời bỏ nếu video có nội dung nhàm chán hoặc chất lượng kỹ thuật kém. Do đó, bên cạnh nội dung bạn hãy đầu tư vào các thiết bị ghi hình, công nghệ truyền tải video để tạo ra những video chất lượng cao. Điều này rất quan trọng để khán giả dừng lại xem video của bạn đến phút cuối trong vô vàn video khác trên internet. Ngày nay, khán giả đã quen thuộc với chất lượng tốt và họ sẽ nhanh chóng nhận ra các vấn đề kỹ thuật gây ra trải nghiệm xấu trên video của bạn.
        
        Không quá kỳ vọng vào các thủ thuật SEO
        Có rất nhiều thủ thuật để giúp video của bạn được hiển thị trước khán giả. Các chuyên gia về SEO, Marketing có nhiều cách để làm tốt việc này. Tuy nhiên, tiếp cận khán giả mới chỉ là bước đầu trong quá trình phân phối nội dung video. Chúng ta không phủ nhận đó là một bước rất quan trọng, nhưng khán giả có ở lại xem hết video hay không còn phụ thuộc vào chất lượng video. Vì vậy, hãy tạo ra những video đạt chất lượng về cả nội dung lẫn kỹ thuật truyền tải. Điều này sẽ tạo được sự tương tác tốt với khán giả.
        
        Làm cho video nổi bật nhờ sự khác biệt, mới lạ
        Để video của bạn nổi bật và hấp dẫn, điều quan trọng là bạn phải làm cho video của bạn khác biệt hơn so với những video khác. Đôi khi, việc mạo hiểm đổi mới nội dung video có thể hấp dẫn khán giả hơn là việc tái sử dụng nội dung từ những video trước. Bạn nên hiểu đối tượng mà bạn muốn hướng đến là ai và họ quan tâm đến điều gì? Hãy nghĩ ra những ý tưởng mới mẻ và những khía cạnh chưa được khám phá trong video của bạn, điều đó có thể làm cho video của bạn trở nên hấp dẫn hơn đối với khán giả. Dù bạn chưa biết chắc liệu những ý tưởng đó có gây ấn tượng với khán giả hay không, thì việc thử nghiệm cũng là một tín hiệu tích cực.
        
        5 mẹo tăng lượt tương tác video bạn nhất định nên thử  Kể chuyện bằng các cảnh quay đa dạng
        Cách ngồi trò chuyện trước camera không còn đủ để làm cho video của bạn trở nên thú vị, mà thay vào đó bạn cần xây dựng nó như một câu chuyện. Sử dụng cách thiết kế câu chuyện giống như cách một bộ phim (kịch, hài, tài liệu) được tạo ra, đồng thời điều chỉnh độ dài video sao cho phù hợp. Nội dung hình ảnh cũng cần phải phong phú và đa dạng với nhiều yếu tố chuyển động và hành động. Nếu chủ đề video cho phép sử dụng nhiều hình ảnh và hành động mạnh mẽ thì việc áp dụng chúng có thể làm video trở nên thực sự ấn tượng.
        
        Tóm lại, chất lượng nội dung và chất lượng kỹ thuật của video là những yếu tố quan trọng tác động trực tiếp đến hiệu quả tương tác cho video của bạn. Ngoài ra, nếu bạn là tổ chức hay cá nhân đang sản xuất nội dung video trên website, ứng dụng di động, hãy cân nhắc sử dụng ngay một video platform trên nền tảng công nghệ điện toán đám mây. Dịch vụ này sẽ giúp video của bạn được truyền tải mượt mà nhất. Việc tích hợp sử dụng cũng rất dễ dàng, bạn không cần phải bận tâm về các yếu tố kỹ thuật phức tạp. Nhờ vậy mà bạn sẽ có nhiều thời gian hơn để tập trung nâng cao chất lượng nội dung. 
        
        Bizfly Cloud VoD là một video platform đáp ứng tốt nhu cầu phân phối video cho các doanh nghiệp trong nhiều lĩnh vực như báo điện tử, truyền hình, giải trí, thương mại điện tử, bất động sản… Tại Việt Nam, hiện nay Bizfly Cloud VoD đang là nền tảng video theo yêu cầu trọn gói, tiên phong phục vụ nhiều đối tác lớn như VTV News, VOVTV, báo Người Lao Động, báo Dân Việt, báo Tuổi trẻ, báo CafeF,…`,
        publishDate: new Date('2023-10-10T12:00:00'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/5-meo-tang-luot-tuong-tac-video-ban-nhat-dinh-nen-thu-20230829104925181.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/29/298a-16932808743101085147887-95-0-1219-2000-crop-1693280915424976411162.jpeg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Chuyển dịch lên cloud là một trong những hoạt động quan trọng trong quá trình chuyển đổi số của doanh nghiệp. Các nền tảng điện toán đám mây ngày nay đã giúp doanh nghiệp tối ưu chi phí và mang lại rất nhiều tiện ích so với hạ tầng vật lý truyền thống trước kia.

        Trong quá trình dịch chuyển này, có 2 mô hình kiến trúc nổi trội, phù hợp với nhu cầu đặc thù của nhiều doanh nghiệp đó là Hybrid Cloud và Multi Cloud. Bài viết này sẽ đưa ra minh hoạ kiến trúc tổng quan về 2 mô hình trên, qua đó bạn sẽ có cái nhìn rõ ràng hơn và áp dụng hiệu quả trong quá trình chuyển đổi số tại doanh nghiệp của mình.
        
        Mô hình Hybrid Cloud
        Hybrid cloud là một môi trường điện toán hỗn hợp, trong đó các ứng dụng chạy bằng sự kết hợp giữa việc tính toán, lưu trữ trên nhiều môi trường khác nhau: public cloud, private cloud, hạ tầng cơ sở của doanh nghiệp. Kết quả là đem lại một môi trường điện toán thống nhất nơi doanh nghiệp có thể luân chuyển linh hoạt khối lượng công việc giữa các đám mây.
        
        Việc sử Hybrid Cloud giúp doanh nghiệp vẫn tận dụng hoàn toàn hiệu năng từ hạ tầng sẵn có, đồng thời vẫn có thể tiếp cận, thử nghiệm dịch vụ cloud từ nhà cung cấp cloud.
        
        Gợi ý 2 kiến trúc hạ tầng hybrid cloud và multi cloud giúp doanh nghiệp chuyển đổi số hiệu quả - Ảnh 1.
        Mô hình Multi Cloud
        Mô hình Multi Cloud được hiểu là khi doanh nghiệp sử dụng dịch vụ điện toán đám mây của ít nhất 2 nhà cung cấp trở lên để chạy ứng dụng của mình. Ví dụ một doanh nghiệp có thể sử dụng đồng thời nhiều IaaS như Amazon Web Services (AWS), Google Cloud Platform (GCP) hay Bizfly Cloud tại Việt Nam.
        
        Việc sử dụng mô hình Multi Cloud giúp doanh nghiệp hạn chế bị phụ thuộc vào một nhà cung cấp duy nhất, qua đó giúp tăng độ linh hoạt về công nghệ, tối ưu hiệu năng, tối ưu chi phí.
        
        Gợi ý 2 kiến trúc hạ tầng hybrid cloud và multi cloud giúp doanh nghiệp chuyển đổi số hiệu quả - Ảnh 2.
        Lưu ý để đảm bảo khả năng điều phối truy cập khi triển khai Hybrid Cloud và Multi Cloud
        Một điểm cần lưu ý với 2 kiểu mô hình này, đó là khi triển khai ứng dụng trên nhiều đám mây (Hybrid/Multi Cloud) doanh nghiệp sẽ cần một cơ chế để điều phối truy cập linh hoạt. Các Load Balancer thông thường không thể xử lý tối ưu cho nhu cầu này. Giả dụ chúng ta muốn chia traffic tới 1 ứng dụng chạy trên Public Cloud và Private Cloud theo tỉ lệ 60/40, hay chúng ta điều phối truy cập của người dùng nội địa về Bizfly Cloud còn người dùng quốc tế về Google Cloud. 
        
        Về kỹ thuật, có rất nhiều giải pháp xử lý vấn đề này nhưng phổ biến nhất vẫn là cơ chế cân tải dựa trên DNS hay còn gọi là DNS-based Load Balancing. Để tối ưu nhất về kết nối, service này sẽ thực hiện việc điều hướng kết nối ngay khi client truy vấn DNS. Ngoài ra, nó còn hỗ trợ nhiều tuỳ chọn điều hướng, đáp ứng được mọi nhu cầu về điều phối traffic. 
        
        Hiện nay tại Việt Nam, Bizfly Cloud đang cung cấp giải pháp điều phối truy cập Bizfly Cloud Traffic Manager tiên phong, sử dụng công nghệ lõi DNS-based Load Balancing và tối ưu cho người dùng khu vực Việt Nam. Doanh nghiệp Việt có nhu cầu triển khai các mô hình đám mây lai, đa đám mây có thể sử dụng giải pháp để giải quyết các vấn đề một cách dễ dàng, nhanh chóng nhất. Bizfly Cloud với kinh nghiệm triển khai cho hạ tầng VCCorp và các hệ thống doanh nghiệp phức tạp cũng cung cấp các tư vấn để triển khai mô hình một cách hiệu quả cả về mặt công nghệ lẫn chi phí.`,
        publishDate: new Date('2023-08-22T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/goi-y-2-kien-truc-ha-tang-hybrid-cloud-va-multi-cloud-giup-doanh-nghiep-chuyen-doi-so-hieu-qua-20230822102326303.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/22/hybrid-cloud-vs-multi-cloud-16926742744451108216437-74-0-731-1170-crop-16926742909181090438903.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `"Nghẽn lệnh" đã trở thành từ khoá của nửa đầu năm 2021 khi số lượng giao dịch tăng đột biến. Tại một số CTCK, số lệnh tăng gấp 8-10 lần cùng kỳ năm trước, trong khi hạ tầng của Sở Giao dịch chứng khoán TP.HCM đã có tuổi đời hơn 20 năm.
        Truyền thông khi đó chỉ phản ánh câu chuyện của thượng tầng, giải bài toán nghẽn lệnh tại Hose, chứ ít ai biết "sóng ở đáy sông", khi các công ty chứng khoán cũng phải giải bài toán "nghẽn lệnh" tại cơ sở của mình.
        
        Một CTCK trong top 5 đã yêu cầu khoá bảng điện tử, chỉ cho phép khách hàng của công ty được truy cập bảng giá. Lý do là quá nhiều nhà đầu tư cùng truy cập một lúc dẫn đến tình trạng "nghẽn lệnh" tại ngay bảng điện tử. Hệ quả là số nhảy chậm, các lệnh khớp trên sàn hiển thị chậm vài giây so với lệnh tại Sở khiến nhiều nhà đầu tư đặt lệnh sai. Câu chuyện này xảy ra ở hầu hết các CTCK lớn.
        
        Với việc giao dịch chỉ tính bằng giây, nhà đầu tư nhỏ phải cạnh tranh với lệnh bắn từ robot thì việc giải được nghẽn lệnh sẽ giúp CTCK thu hút khách hàng, bên cạnh chính sách margin.
        
        Chia sẻ với người viết, ông Steve Yam - Giám đốc Hệ thống CNTT CTCP Chứng khoán SSI cho biết, kênh giao dịch trực tuyến của SSI đã được nâng cấp để tăng tốc vào lệnh cho nhà đầu tư. Theo đó, ngoài kênh giao dịch trực tuyến truyền thống (webtrading.ssi.com.vn), SSI mở rộng các tính năng giao dịch của SSI iBoard trên cả thị trường cơ sở và thị trường phái sinh. Khách hàng có thể theo dõi thị trường và giao dịch ngay tại iBoard bằng máy tính, máy tính bảng hay smartphone.
        
        Giải pháp cloud đã giúp công ty chứng khoán đứng đầu thị trường giải bài toán "tắc nghẽn" bảng giá như thế nào? - Ảnh 1.
        "Đặc biệt, iBoard đã được thiết kế bộ phím tắt tiện lợi để đảm bảo không lãng phí một giây phút nào khi giao dịch", ông Steve Yam khẳng định. Cùng với kênh webtrading, iBoard là công cụ để SSI tối đa hóa khả năng cung cấp dịch vụ trực tuyến cho các khách hàng của mình với phương châm "Giao dịch tại bất kỳ đâu, tại bất kỳ thời điểm nào".
        Giải bài toán hạ tầng bằng Cloud của Bizfly Cloud
        Ít ai biết rằng, để cung cấp dịch vụ bảng giá trực tuyến miễn phí như iBoard cho khách hàng cũng như khách vãng lai được hiển thị realtime và không bị trễ, SSI phải tìm một giải pháp mới. Ông Steve Yam cho biết, đây là điều SSI làm với trách nhiệm xây dựng thị trường bởi nó đòi hỏi công ty phải tăng dung lượng hạ tầng, cũng như dự phòng, đồng thời thay đổi cách vận hành để đáp ứng nhu cầu người dùng tăng giảm đột ngột.
        
        Để giải bài toán về hạ tầng máy chủ, với nhu cầu ngày càng cao với số lượng người dùng tăng liên tục, nhưng cũng có thể giảm bất thường, công ty chứng khoán số 1 Việt Nam đã thay đổi việc đầu tư. Theo đó, SSI đã chuyển qua phương thức vận hành linh hoạt khi làm việc với các nhà cung cấp dịch vụ điện toán đám mây (cloud server). "Hiện tại, SSI có thể mở rộng dung lượng cần thiết trong vòng một giờ để đáp ứng nhu cầu tăng nóng trong từng thời điểm", ông Steve tiết lộ.
        
        Bên cạnh việc giải được bài toán về dung lượng máy chủ, iBoard cũng liên tục được cập nhật phiên bản mới đảm bảo việc hiển thị realtime ngay cả khi lượng người dùng tăng vọt.
        
        "Bizfly Cloud là một trong những nhà cung cấp dịch vụ Cloud service của chúng tôi. Tới nay, SSI hài lòng với sự ổn định và chuyên nghiệp của đối tác Bizfly Cloud", Giám đốc công nghệ SSI chia sẻ.
        
        Đại diện đơn vị cung cấp giải pháp cho SSI, ông Nguyễn Hoàng Long, Giám đốc Phát triển Kinh doanh Bizfly Cloud chia sẻ thêm, có 3 lý do SSI lựa chọn hạ tầng của Bizfly Cloud để giải quyết bài toán công nghệ.
        Thứ nhất là thấu hiểu các vấn đề dẫn đến hiện tượng tải cao đối với hệ thống Bảng giá của SSI. Bizfly Cloud có sẵn mô hình Hybrid Cloud đảm bảo kiến trúc hệ thống, quy trình giám sát chất lượng, theo dõi hiệu năng, kịch bản tích hợp triển khai và vận hành trong mọi tình huống tải cao có thể phát sinh; đồng thời, mô hình này dễ dàng tích hợp và tương thích với kiến trúc hạ tầng sẵn có của SSI.
        
        Giải pháp cloud đã giúp công ty chứng khoán đứng đầu thị trường giải bài toán "tắc nghẽn" bảng giá như thế nào? - Ảnh 2.
        Thứ hai là khả năng mở rộng tài nguyên dồi dào. Khi hệ thống bảng giá quá tải, các máy chủ của SSI đa phần là vật lý nên khó mở rộng máy chủ cũng như băng thông trong thời gian ngắn. Môi trường quản trị của Bizfly Cloud giúp SSI chỉ mất vài phút là tạo được máy chủ mới, khả năng tạo máy chủ không giới hạn, luôn sẵn sàng về tài nguyên dự phòng và triển khai nhanh chóng. Công ty chứng khoán số 1 Việt Nam sẽ không còn tốn thời gian chờ mua máy chủ, sắp xếp vị trí lắp đặt, triển khai cài đặt tại Datacenter như các phương thức truyền thống cũ
        
        Thứ ba, là linh hoạt. Với máy chủ vật lý, ngoài mất thời gian lắp đặt, CTCK nói chung trong đó có SSI gặp bài toán về dung lượng biến đổi liên tục. Khi người dùng tăng giảm liên tục, công ty sẽ khó đánh giá được cần đầu tư bao nhiêu máy chủ và bao nhiêu con người để vận hành. Trong khi đó, khi sử dụng điện toán đám mây, kỹ sư của SSI có thể ngồi bất cứ đâu để triển khai một máy chủ mới, cũng như theo dõi, giám sát toàn bộ tiến trình vận hành hệ thống trực tuyến.
        Bên cạnh đó, Bizfly Cloud có sẵn nhiều tiện ích quản trị vận hành tự động như giải pháp tự động mở rộng hệ thống (auto scaling), tự động hoá quá trình tăng giảm tài nguyên máy chủ theo số lượng người dùng thực tế. Ví dụ trong khung giờ giao dịch có 1.000 người truy cập bảng giá, đến ngày hôm sau, số người truy cập tăng lên 2.000 thậm chí 10.000 người thì hạ tầng điện toán đám mây hoàn toàn có thể mở rộng tài nguyên máy chủ tự động mà không cần con người vận hành.`,
        publishDate: new Date('2023-08-18T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/giai-phap-cloud-da-giup-cong-ty-chung-khoan-dung-dau-thi-truong-giai-bai-toan-tac-nghen-bang-gia-nhu-the-nao-20230818151343403.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/18/188-16923460545072027729600-21-0-414-700-crop-169234606141219587208.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Bizfly Cloud vừa thu thập được các thông tin liên quan tới việc phát hành bản vá hàng tháng của Microsoft và bản cập nhật của Google Chrome cụ thể như sau:
        1. Microsoft vừa phát hành bản vá hàng tháng cho các sản phẩm của Microsoft (Microsoft August 2023 Patch Tuesday).
        
        Trong bản vá tháng 8 này Microsoft đã vá tổng cộng 87 lỗ hổng trong đó có 2 lỗ hổng bị khai thác tích cực trong thực tế và 23 lỗ hổng thực thi mã từ xa.
        
        Bản vá này đã fix 1 số lượng lớn lỗ hổng với 6 lỗ hổng được đánh giá là Critical (Nghiêm trọng) cho phép kẻ tấn công thực thi mã từ xa, từ chối dịch vụ hoặc leo thang đặc quyền.
        
        Trong 87 lỗ hổng được fix cũng có các lỗ hổng được đánh giá là rất nghiêm trọng, những lỗ hổng này cho phép kẻ tấn công có thể leo thang đặc quyền, giả mạo và nghiêm trọng hơn là thực thi mã từ xa trên máy nạn nhân để thực hiện các cuộc tấn công mã hóa đòi tiền chuộc. Còn lại các lỗ hổng cũng được đánh giá là nghiêm trọng dựa trên mức ảnh hưởng của từng lỗ hổng. Các lỗ hổng bao gồm:
        
        - 18 lỗ hổng leo thang đặc quyền
        - 3 lỗ hổng Bypass Security Features
        - 23 lỗ hổng thực thi mã từ xa
        - 10 lỗ hổng lộ thông tin nhạy cảm
        - 8 lỗ hổng từ chối dịch vụ
        - 12 lỗ hổng giả mạo
        
        Không bao gồm 12 lỗ hổng Microsoft Edge đã được fix vào đầu tháng này.
        
        Bản vá tháng 8 này đã vá 2 lỗ hổng Zero-day bị khai thác tích cực, đó là:
        
        - CVE-2023-36884: Lỗ hổng thực thi mã từ xa trong Office and Windows HTML. Microsoft đã phát hành bản cập nhật Office Defense in Depth để khắc phục một bản vá bỏ qua lỗ hổng thực thi mã từ xa CVE-2023-36884 đã khai thác tích cực trước đó.
        - CVE-2023-38180: Lỗ hổng từ chối dịch vụ trong .NET và Visual Studio
        
        Ngoài ra có các lỗ hổng được đánh giá là rất nghiêm trọng do dựa trên khả năng khai thác và mức độ ảnh hưởng do lỗ hổng mang lại. Cụ thể bao gồm các lỗ hổng như sau:
        
        Lỗ hổng thực thi mã từ xa (Remote code excution):
        
        - CVE-2023-36895: Lỗ hổng tồn tại trong Microsoft Outlook
        - CVE-2023-29328, CVE-2023-29330: Lỗ hổng tồn tại trong Microsoft Teams
        - CVE-2023-35385, CVE-2023-36911, CVE-2023-36910: Lỗ hổng tồn tại trong Windows Message Queuing
        
        Một vài lỗ hổng được đánh giá là Important (Quan trọng) khác như:
        
        - CVE-2023-36873: Lỗ hổng thực thi mã từ xa trong Microsoft .NET Framework
        - CVE-2023-36896, CVE-2023-35371: Lỗ hổng thực thi mã từ xa trong Microsoft Office Excel
        - CVE-2023-38169: Lỗ hổng thực thi mã từ xa trong Microsoft OLE DB (SQL Server)
        
        Bên cạnh đó Microsoft cũng phát hành bản vá cho các phần mềm như .NET, Microsoft Office, Microsoft Teams, Visual Studio, ...
        
         2. Google Chrome phát hành bản cập nhật 
        
        Google Chrome vừa phát hành bản cập nhật Stable Channel for Desktop dành cho Windows, Mac và Linux. Bản cập nhật này đã vá tổng cộng 17 lỗ hổng bảo mật, trong đó 9 lỗ hổng được đánh giá là High (Cao) và 2 lỗ hổng được đánh giá là Medium (Trung bình).
        
        Những lỗ hổng này sẽ cho phép kẻ tấn công từ xa thực hiện đọc/ghi tùy ý hay khai thác lỗi heap qua trang HTML tự tạo; hoặc đánh lừa người dùng cài đặt tiện ích độc hại để tiêm tập lệnh hay HTML vào các trang có đặc quyền thông qua một Chrome Extension được tạo giả mạo. Từ đó sẽ cho phép kẻ tấn công thực thi mã tùy ý, từ chối dịch vụ hoặc làm lộ thông tin nhạy cảm.
        - Luôn bật chức năng Update của hệ điều hành.
        - Trong quá trình Update, các anh chị tuân thủ các hướng dẫn trên màn hình (Khởi động lại máy tính, không tắt máy trong quá trình Update...)
        - Hướng dẫn Update Windows và Microsoft Office trong File đính kèm
        - Chủ động update Chrome lên phiên bản 115.0.5790.170 (cho Linux và Mac), 115.0.5790.170 hoặc 115.0.5790.171 (cho Windows).
        
        Link các phần mềm được phát hành bản vá trong tháng này của Microsoft và thông tin chi tiết về bản cập nhật mới của Google Chrome:
        
        https://www.bleepingcomputer.com/news/microsoft/microsoft-august-2023-patch-tuesday-warns-of-2-zero-days-87-flaws/
        
        https://chromereleases.googleblog.com/2023/08/stable-channel-update-for-desktop.html`,
        publishDate: new Date('2023-08-15T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/thong-bao-update-ban-va-hang-thang-cua-microsoft-va-ban-cap-nhat-cua-google-chrome-20230815110436267.htm',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/15/chrome-5092-16513497-1692072085160522994671-0-0-404-720-crop-169207209381653559289.jpeg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Với sự phát triển của hạ tầng internet ngày nay, video ngày càng được sử dụng phổ biến trên website, app di động. Video là một hình thức truyền tải nội dung đem lại hiệu quả cao và chất lượng truyền tải là yếu tố quan trọng tác động tới trải nghiệm xem. Tuy nhiên, việc đầu tư hạ tầng cũng như giải pháp công nghệ cho việc lưu trữ, truyền tải video đôi khi chưa được nhìn nhận đúng mức. 

        Xem video bị giật lag là một vấn đề rất thường gặp. Phần lớn nguyên nhân là do doanh nghiệp tự tổ chức lưu trữ video trên các storage (kho lưu trữ) đơn thuần, không có cơ chế transcode tối ưu video. Cách lưu này gọi chung là Self-Hosting Video. Trong bài viết này, chúng ta sẽ cùng đi tìm hiểu xem Self-Hosting Video là gì và vì sao không nên sử dụng phương pháp này.
        
        Self-Hosting Video là gì?
        Self-Hosting Video nghĩa là bạn không chỉ sáng tạo ra nội dung video mà còn phải tự quản lý hạ tầng để lưu trữ, đăng tải video và quảng bá các nội dung đó tới khán giả.
        
        Các công việc này đòi hỏi đầu tư nhiều thời gian, chi phí và kiến thức vì bạn cần duy trì không gian lưu trữ đủ lớn để chứa tất cả video, cũng như thiết kế các giải pháp để chống sao chép, truy cập trái phép vào video của mình. Khác với việc lưu trữ file thông thường, các giải pháp & hạ tầng máy chủ cũng phải đảm bảo đủ tốt để transcode video, tối ưu cho việc phục vụ trên website. Với Self-Hosting Video, bạn sẽ phải tự xử lý mọi thứ liên quan đến video của mình.
        
        Lợi ích của Self-Hosting Video
        Việc tự lưu trữ video nếu áp dụng đúng cách, đúng chỗ có thể đem lại một số lợi ích nhất định, có thể kể đến như:
        
        Có khả năng làm chủ, kiểm soát cao nhất đối với dữ liệu video.
        
        Tuỳ biến hiển thị giao diện video (player) theo thương hiệu của mình. Một số nền tảng như Youtube, Facebook không cho phép làm việc này.
        
        Tuy nhiên, chúng ta có thể thấy trong hầu hết mô hình kinh doanh thì những lợi ích của lựa chọn Self-Hosting Video lại lu mờ hoàn toàn so với những hạn chế mà nó gây ra.
        
        13 Lý do vì sao chúng ta không nên Self-Hosting Video
        Các hạn chế bạn sẽ cần cân nhắc kỹ lưỡng khi Self-Hosting Video:
        
        Chi phí băng thông cao
        Video là những file có dung lượng lớn, thường cao hơn 100MB. Khi Self-Hosting Video, server của bạn sẽ phải phục vụ một lượng lớn các request truy cập video. Việc này dẫn tới 2 nguy cơ: băng thông chạm ngưỡng giới hạn và bạn có thể phải chi trả nhiều chi phí network hơn do các thời điểm băng thông đạt đỉnh.
        
        Giới hạn về kích thước file và không gian lưu trữ
        Bên cạnh băng thông thì không gian lưu trữ cũng là một vấn đề cần lưu tâm. Bạn có thể phải đối mặt với việc không upload được file lớn do hạn chế về năng lực xử lý của server. Upload và lưu trữ file dung lượng lớn cũng sẽ gây áp lực cho cơ chế backup dữ liệu hệ thống. Ngoài ra còn tiềm ẩn các rủi ro về bảo mật khi server upload không được kiểm soát tốt.
        
        Về không gian lưu trữ, bạn cần phải dự phòng 1 không gian lưu trữ đủ lớn để sẵn sàng cho sự tăng trưởng dữ liệu video trong tương lai. Không gian lưu trữ chưa dùng đến này sẽ là phần tài nguyên bị lãng phí.
        
        Thời gian load trang lâu hơn
        Nhúng video lên trang web nghĩa là mỗi trang web sẽ cần nhiều thời gian hơn để load tài nguyên. Nếu chúng ta hosting video trên chính máy chủ web thì máy chủ đồng thời sẽ phải gửi lượng dữ liệu lớn tới client (máy khách). Việc này làm tăng rủi ro load trang chậm với chất lượng kết nối internet kém.
        
        Load trang chậm sẽ dẫn tới nhiều hệ luỵ như: khách hàng rời bỏ, website bị tụt hạng trên các hệ thống đánh giá, giảm hiệu quả tối ưu SEO.
        
        13 lý do vì sao doanh nghiệp không nên tự lưu trữ video - Ảnh 1.
        Định dạng video không tương thích với trình duyệt
        Mặc dù nhiều trình phát video đang chuyển sang định dạng HTML5, nhưng không có định dạng chuẩn nào có thể dùng được cho tất cả các trình duyệt.
        
        Ví dụ, trình duyệt A có thể phát được những video WEBM nhưng trình duyệt B chỉ phát được video MP4. Self-Hosting video đồng nghĩa với việc bạn phải đảm bảo video của bạn có thể chạy trên tất cả các trình duyệt. Việc này đòi hỏi một cơ chế xử lý phức tạp hơn để chuyển đổi định dạng video thành các phiên bản tối ưu theo từng loại trình duyệt. Và đây là một công việc tiêu tốn nhiều nguồn lực.
        
        Video load chậm hoặc bị giật khi xem
        Nếu video của bạn được lưu trữ ở 1 server thì có nghĩa là tất cả các request để xem nội dung đều được gửi tới 1 nơi. Vì vậy nên nếu có 10 người đang xem 1 video nghĩa là có 10 request gửi tới 1 server, 100 người tương đương 100 request, 1000 người tương đương 1000 request và cứ thế... Việc này sẽ gây ra hiện tượng nghẽn cổ chai trên băng thông của server đang lưu trữ video, càng nhiều người xem tình trạng giật lag càng nghiêm trọng.
        
        Nếu sử dụng phương pháp Self-Hosting Video, bạn cần phải mua thêm nhiều băng thông dự phòng để đảm bảo chất lượng đường truyền khi có nhiều người xem video, tốn kém rất nhiều chi phí.
        
        Cần làm nhiều việc hơn
        Trong thực tế, để đảm bảo chất lượng hiển thị video tốt trên website, bạn sẽ có rất nhiều việc phải lo:
        
        Người dùng có thể xem video trên nhiều thiết bị khác nhau và sử dụng các trình duyệt khác nhau. Do đó, video của bạn phải phát được ở tất cả định dạng.
        
        Với người dùng xem video trên máy tính hoặc laptop sử dụng internet tốc độ cao, bạn phải xuất ra được video ở định dạng người dùng có thể xem full màn hình mà chất lượng không bị giảm. Để làm điều này, bạn cần phải upload file ở độ phân giải 1080p hoặc 720p ở luồng video bitrate cao.
        
        Với người dùng muốn xem video bằng điện thoại thì sẽ cần những video ở độ phân giải thấp hơn để phù hợp với màn hình nhỏ và tốc độ internet kém hơn, vì vậy bạn sẽ phải tự convert video gốc ra nhiều phiên bản với độ phân giải thấp hơn.
        
        Tóm lại, để video có thể phát ổn định trên các trình duyệt, thiết bị và tốc độ internet khác nhau, bạn sẽ phải upload nhiều định dạng cho 1 video, mỗi định dạng lại phải upload nhiều phiên bản độ phân giải khác nhau. Việc này khiến bạn khó quản lý được các phiên bản của 1 file video và làm tốn nhiều chi phí cho việc xử lý.
        
        13 lý do vì sao doanh nghiệp không nên tự lưu trữ video - Ảnh 2.
        Cần tìm Video Player phù hợp trong hàng tá Video Player hiện có
        Video Player là phần mềm dùng để phát video. Khi chạy video trên website bạn cần cài đặt một Video Player. Để tối ưu cho việc phát video, Player thường tự động phát hiện thiết bị nào đang xem video, tốc độ đường truyền ra sao để lựa chọn phiên bản video phù hợp. Đây là một cơ chế phức tạp đòi hỏi khả năng kết hợp từ phía hạ tầng lưu trữ video.
        
        Trên internet hiện có hàng tá phần mềm Video Player. Bạn sẽ tốn nhiều thời gian cho việc tìm hiểu, lựa chọn phần mềm phù hợp với website và hạ tầng lưu trữ video của mình.
        
        Phải xử lý code phức tạp
        Sau khi chọn được Video Player phù hợp. Để nó hoạt động được trên website, bạn cần tích hợp code sử dụng plugin hoặc các phương thức khác theo đặc tả của phần mềm yêu cầu.
        
        Như đã đề cập ở trên, để sử dụng được các cơ chế phát video tối ưu bạn sẽ cần xử lý logic code ở phía hạ tầng lưu trữ video sao cho tương thích với Video Player. Việc này tốn nhiều thời gian và nguồn lực, nó cũng đem lại rủi ro phát sinh do tích hợp không đúng.
        
        Gia tăng chi phí
        Nếu tự lưu trữ video, bạn sẽ phải xử lý nhiều tác vụ để video có thể hoạt động ổn định.
        
        Khi tạo và đăng tải video, bạn sẽ cần phải convert 1 video ra nhiều phiên bản để nhiều người dùng có thể xem. Việc này sẽ tốn thời gian và công sức của bạn hoặc là rất nhiều tiền để thuê người làm những thao tác này.
        
        Thêm nữa, để đảm bảo video có thể xem được bình thường mà không bị giật lag, bạn phải tốn rất nhiều tiền để dự phòng một lượng băng thông lớn, trong khi thực tế lượng người xem không phải lúc nào cũng cao, và những thời gian ít người xem thì lượng băng thông dự phòng này sẽ bị lãng phí hoàn toàn.
        
        Ở hầu hết các doanh nghiệp vừa và nhỏ những chi phí này sẽ nhanh chóng vượt khỏi tầm kiểm soát và kéo theo đó là giảm hiệu quả sản xuất video (ở góc nhìn kinh doanh).
        
        Cần thực hiện nhiều thao tác convert video
        Để tạo ra được nhiều phiên bản với độ phân giải video và các định dạng video khác nhau, bạn phải convert 1 video rất nhiều lần.
        
        Khi convert nhiều video 1 lúc sẽ cần rất nhiều thời gian và những công cụ đặc biệt, chưa kể có nguy cơ video sẽ bị lỗi trong quá trình convert.
        
        Khó đo lường hoạt động xem video
        Để tối ưu hiệu quả phân phối nội dung qua video, bạn sẽ cần tổng hợp được các chỉ số đo lường mức độ quan tâm của khán giả với các video. Giả sử bạn cần biết video nào đang có lượt xem nhiều nhất, khán giả thường xem video của bạn trên mobile hay laptop, họ xem hết video hay chỉ xem 1 đoạn rồi tắt, và rất nhiều thông tin khác nữa... Những thông tin này cần được thu thập và có một hệ thống xử lý, tổng hợp ra các báo cáo. Bạn rất khó có được những thông tin này nếu tự lưu trữ video.
        
        Quá trình sản xuất video phức tạp hơn
        Quản lý tất cả các tiến trình như tạo, đăng tải và hosting video sẽ làm tăng mức độ phức tạp khi muốn xuất bản một video.
        
        Bạn sẽ phải dành thời gian để học và xử lý các tiến trình đó hoặc thuê người xử lý các tác vụ bạn không thể tự làm được. Việc này sẽ tốn kém hơn rất nhiều so với chi phí khi sử dụng một nền tảng hosting video bên ngoài.
        
        Video dễ bị vi phạm bản quyền hơn
        Nội dung video chính là tài sản của doanh nghiệp, đặc biệt trong các mô hình kinh doanh như E-Learning. Và nếu nó có giá trị với bạn, có nghĩa là ở đâu đó nó cũng có giá trị với người khác, có thể họ sẽ muốn tìm cách sao chép nội dung để trục lợi.
        
        Khi tự lưu trữ video, bạn sẽ cần phải nghiên cứu các giải pháp để tự bảo vệ nội dung video của mình thông qua các hình thức như giới hạn tên miền, đặt mật khẩu, mã hoá… Đây là một bài toán khó đòi hỏi bạn phải có nhân lực thực sự có kinh nghiệm trong lĩnh vực bảo vệ nội dung số.
        
        13 lý do vì sao doanh nghiệp không nên tự lưu trữ video - Ảnh 3.
        Sử dụng một nền tảng video trả phí là lựa chọn tối ưu
        Để tránh các vấn đề tới từ việc Self-Hosting Video nêu trên, rất nhiều doanh nghiệp đã lựa chọn sử dụng nền tảng video trả phí từ một nhà cung cấp bên ngoài. Nền tảng video sẽ giải quyết tất cả các nhu cầu về lưu trữ, xử lý, phân phối video mà doanh nghiệp cần. Doanh nghiệp dễ dàng kiểm soát, tối ưu chi phí nhờ hình thức thanh toán linh hoạt theo tài nguyên sử dụng (pay as you go). Chi phí này chỉ bao gồm chi phí lưu trữ cố định dữ liệu video và chi phí truyền tải phát sinh khi video được truyền phát, hoàn toàn loại bỏ các chi phí về máy chủ đắt đỏ, chi phí băng thông dự phòng, chi phí nhân sự, chi phí thời gian... Cũng nhờ chuyển giao các vấn đề kỹ thuật cho nhà cung cấp dịch vụ có chuyên môn mà doanh nghiệp có thể tập trung nguồn lực cho việc sáng tạo, sản xuất nội dung video.`,
        publishDate: new Date('2023-08-15T00:00:00.000Z'),
        author: 'Bizfly Cloud',
        category: 'news',
        url: 'https://bizflycloud.vn/tin-tuc/13-ly-do-vi-sao-doanh-nghiep-khong-nen-tu-luu-tru-video-2023081510502227.htm#:~:text=Video%20l%C3%A0%20nh%E1%BB%AFng%20file%20c%C3%B3,%C4%91i%E1%BB%83m%20b%C4%83ng%20th%C3%B4ng%20%C4%91%E1%BA%A1t%20%C4%91%E1%BB%89nh.',
        active: true,
        cover: 'https://techvccloud.mediacdn.vn/280518386289090560/2023/8/15/158-16920709290591569064206-23-0-598-1024-crop-16920709358011735674439.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Hãng tin CNN cho hay chỉ 1 tháng sau khi Trung Quốc tuyên bố sẽ hạn chế xuất khẩu Germanium và Gallium, 2 nguyên liệu chủ chốt sản xuất bán dẫn, các lô hàng xuất khẩu ra nước ngoài của những nguyên liệu này từ Trung Quốc đã giảm xuống gần như bằng 0.

        Trong tháng 8/2023, Trung Quốc không hề xuất khẩu bất kỳ lô hàng Gallium hay Germanium nào ra ngoài biên giới.
        
        Xin được nhắc rằng Trung Quốc gần như độc quyền trong mảng xuất khẩu 2 nguyên liệu chính này.
        
        Năm 2022, nền kinh tế thứ lớn 2 thế giới chiếm 98% sản lượng sản xuất Gallium trên toàn cầu và con số này là 68% với lượng tinh chế Germanium.
        
        Trung Quốc chỉ ra một quyết định đã khiến cả nền kinh tế toàn cầu &quot;toát mồ hôi&quot; - Ảnh 2.
        Mặc dù tổng giá trị thị trường ngành khai khoáng, tinh chế Gallium và Germanium chỉ vào khoảng vài trăm triệu USD nhưng 2 nguyên liệu này lại đóng vai trò chủ chốt trong mảng bán dẫn, quốc phòng, xe điện, viễn thông... vốn có tổng giá trị lên đến hàng trăm triệu USD.
        
        “Vẫn còn quá sớm để dự đoán về mức độ của các lệnh cấm trên nhưng nếu Trung Quốc ngừng xuất khẩu lượng lớn 2 nguyên liệu chủ chốt này thì sẽ gây nên sự gián đoạn lớn trong chuỗi cung ứng toàn cầu”, giám đốc Xiaomeng Lu của Eurasia Group nhận định.
        
        Mặc dù Phương Tây vẫn có thể tìm kiếm các nguồn cung nguyên liệu khác nhưng việc thay thế Trung Quốc là điều hầu như bất khả thi.
        
        Việc xây dựng chuỗi cung ứng độc lập cho Gallium và Germanium cần đầu tư tối thiểu hơn 20 tỷ USD và mất nhiều năm mới có thể đi vào hoạt động.
        
        “Việc phát triển công nghệ tinh chế và các cụm nhà máy sản xuất Gallium và Germanium sẽ tốn rất nhiều thời gian, nhất là phải tính đến cả các tác động về ô nhiễm môi trường”, giáo sư Marina Zhang của trường đại học công nghệ Sydney cho hay.
        
        Thống trị
        
        Trung Quốc đã thống trị mảng tinh chế 2 nguyên liệu trên suốt 10 năm qua.
        
        Trong khi Gallium là một kim loại mềm được sử dụng nhiều để sản xuất các hợp chất tạo ra chip bán dẫn cho smartphone hay vệ tinh liên lạc thì Germanium là kim loại cứng được dùng sản xuất sợi quang cho dữ liệu điện tử.
        
        Cả 2 nguyên liệu này đều không thể tìm thấy trong tự nhiên ở độ tinh khiết cần thiết. Chúng cần phải được tổng hợp và thường là sản phẩm phụ của ngành luyện kim chính như nhôm, kẽm hay đồng.
        
        Trung Quốc chỉ ra một quyết định đã khiến cả nền kinh tế toàn cầu &quot;toát mồ hôi&quot; - Ảnh 3.
        “Trung Quốc là nước thống trị trong sản xuất 2 nguyên liệu này không chỉ vì chúng hiếm mà còn là bởi họ giữ được chi phí sản xuất rẻ mà không một nhà sản xuất nào khác trên thế giới có thể cạnh tranh được. Ngành tinh chế, sản xuất kim loại quý này rất tốn tiền, đòi hỏi nhiều công nghệ khó, cần nhiều năng lượng và rất ô nhiễm môi trường”, chuyên gia chiến lược Ewa Manthey của ING Group nhận xét.
        
        Số liệu của Trung tâm nghiên cứu chiến lược quốc tế (CSIS) cho thấy trong khoảng 2005-2015, sản lượng Gallium của Trung Quốc đã tăng vọt từ 22 tấn lên 444 tấn.
        
        Nhờ sản lượng sản xuất nhôm cực cao của mình mà Trung Quốc cũng dẫn đầu mảng tinh chế Gallium khi đây là sản phẩm phụ từ quá trình luyện kim.
        
        Ngoài ra, chính quyền Bắc Kinh còn yêu cầu các nhà sản xuất nhôm phải có tiêu chuẩn tinh chế Gallium trong quá trình luyện kim, qua đó thúc đẩy sản lượng nguyên liệu này.
        
        Đây chính là lý do mà trong suốt 10 năm qua, việc tìm nguồn Gallium bên ngoài Trung Quốc là không khả thi do không cạnh tranh nổi về chi phí lẫn sản lượng.
        
        Từ năm 2013 đến năm 2016, toàn bộ các dự án sản xuất Gallium của Kazakhstan, Hungary và Đức đều đã phải đóng cửa vì không cạnh tranh nổi.
        
        Chật vật tìm nguồn thay thế
        
        Số liệu của USGS cho thấy Nga, Nhật Bản và Hàn Quốc hiện chỉ chiếm 1,8% sản lượng Gallium toàn cầu năm 2022.
        
        Riêng Germanium thì có Canada và Mỹ cũng sản xuất được nhưng giá cả và sản lượng đều không so bì được với Trung Quốc.
        
        Tác giả Chris Miller của cuốn “Chiến tranh chip bán dẫn” (Chip War) nói với CNN rằng sẽ rất khó để dịch chuyển nguồn cung ứng nguyên liệu ngay lập tức được nếu không làm gián đoạn chuỗi cung ứng.
        
        Thêm vào đó, động thái này sẽ đẩy giá lên rất cao do chi phí đi lên.
        
        Trung Quốc chỉ ra một quyết định đã khiến cả nền kinh tế toàn cầu &quot;toát mồ hôi&quot; - Ảnh 4.
        Ngoài ra, việc tái chế 2 nguyên liệu này cũng là một giải pháp khả thi nhưng khó lòng đáp ứng được nhu cầu sản xuất ngày một cao của toàn ngành bán dẫn.
        
        Giá Gallium trên thị trường quốc tế đã tăng hơn 17% kể từ tháng 6/2023, còn Germanium là 3%.`,
        publishDate: new Date('2023-10-17T13:19:00.000Z'),
        author: 'BĂNG BĂNG',
        category: 'news',
        url: 'https://genk.vn/trung-quoc-chi-ra-mot-quyet-dinh-da-khien-ca-nen-kinh-te-toan-cau-toat-mo-hoi-20231017130847497.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/china-has-banned-the-export-of-gallium-and-germanium-two-1697522867296-1697522869080581942772.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Được xem như một phần tất yếu không thể thiếu trong cuộc sống nhưng nước sạch chỉ chiếm một phần rất nhỏ so với tổng lượng nước biển trên toàn cầu. Cho đến nay phương pháp chủ yếu để tách lấy nước sạch từ nước biển là dùng nhiệt làm bay hơi – một giải pháp tương đối đắt đỏ và không hiệu quả - đặc biệt với nhu cầu sử dụng nước sạch ngày càng lớn của thế giới.
        Nhưng mới đây các kỹ sư từ Viện Công nghệ Massachusetts đã tìm ra một phương pháp mới có thể làm thay đổi hoàn toàn cách chúng ta tạo ra nước sạch có thể sử dụng được. Thay đổi đột phá này là nhờ vào thiết bị lọc nước giá rẻ, nhỏ gọn có thể giúp các vùng đang bị thiếu nước dễ dàng có được nguồn nước uống được từ nước biển.
        Thiết bị này được phác thảo trong một nghiên cứu đăng tải vào tháng trước trên Joule. Theo nghiên cứu này, cho dù có kích thước nhỏ gọn, thiết bị này cũng có thể mở rộng khiến nó trở thành một lựa chọn tuyệt vời cho các vùng ở gần biển nhưng lại đang phải đối phó với tình trạng thiếu nước sạch.
        Ngay cả những khu vực chưa gặp tình trạng thiếu nước sạch nhưng với tình trạng khí hậu toàn cầu đang ngày một nóng hơn, kéo theo nhu cầu sử dụng nước tăng cao. Trong khi đó nhiều nguồn nước sạch đang dần cạn kiệt do sử dụng quá mức, vì vậy việc tìm được một giải pháp thay thế để cung cấp nước sạch là điều vô cùng cấp thiết.
        Theo nghiên cứu này, thiết bị trên sẽ tạo ra các dòng nước chuyển động tròn giống như các xoáy nước nhỏ với chức năng tương tự như vòng tuần hoàn muối nhiệt của đại dương trên toàn cầu. Dưới tác động của ánh nắng mặt trời, nước biển bay hơi và làm nồng độ muối ngày càng cao hơn. Nồng độ muối càng cao thì chất lỏng càng đặc và nặng hơn, làm cho phần nước biển này có xu hướng chìm xuống bên dưới để đẩy phần nước biển có nồng độ thấp hơn lên trên, tạo nên vòng tuần hoàn của nước biển.
        Thiết bị mới của các kỹ sư MIT cũng mô phỏng chu trình tuần hoàn này để loại bỏ muối trong nước biển.

        Thiết bị này hoạt động như thế nào?
        
        Các nhà khoa học sử dụng một chiếc hộp nhỏ, mỏng bên trên phủ một lớp vật liệu tối để hấp thụ hiệu quả nhiệt từ mặt trời. Bên trong, chiếc hộp này được chia thành 2 phần trên dưới. Nước biển khi chảy vào qua nửa trên chiếc hộp, được tiếp xúc với một lớp bay hơi sử dụng nhiệt mặt trời. Hơi nước sau đó được dẫn xuống nửa dưới của hộp, nơi có một bộ ngưng tụ hơi nước làm mát bằng không khí để tạo thành nước tinh khiết có thể uống được.
        
        
        Các nhà nghiên cứu đặt nghiêng toàn bộ chiếc hộp trong một bình rỗng lớn hơn, sau đó gắn các ống dẫn từ phần trên của hộp nối xuống phía dưới của bình. Bình này lại được đặt nổi trong nước muối. Do chênh lệch áp suất, nước sẽ được đẩy lên qua ống dẫn và vào trong hộp, tại đây độ nghiêng của hộp kết hợp với nhiệt độ của mặt trời sẽ tạo nên dòng xoáy nước khi nó chảy qua.
        
        Xoáy nước này giúp nước mặn tiếp xúc với lớp bay hơi phía trên hộp, đồng thời giữ cho nước muối tuần hoàn chảy xuống dưới, thay vì lắng đọng và gây tắc nghẽn lớp bay hơi này. Ý tưởng về khả năng lọc muối thụ động bằng năng lượng mặt trời đã được nhiều nhóm khác thử nghiệm, nhưng các kỹ sư của MIT cho biết, hệ thống của họ mang lại hiệu suất tạo ra nước sạch và loại bỏ muối cao hơn.
        
        Thiết bị lọc nước biển đột phá, tạo ra nước sạch rẻ hơn cả nước máy - Ảnh 3.
        Các kỹ sư MIT cho biết thiết bị thử nghiệm có thể tạo ra 4-6 lít nước sạch mỗi giờ
        
        
        Họ khẳng định nếu hệ thống được thiết kế có kích thước bằng một valy nhỏ, nó có thể tạo ra khoảng 4-6 lít nước uống được mỗi giờ và có thể sử dụng vài năm trước khi cần thay thế các bộ phận. Với quy mô và hiệu suất đó, hệ thống có thể sản xuất được nước uống với tốc độ và giá thành rẻ hơn cả nước máy hiện tại.
        Một thiết bị với kích thước lớn hơn nữa có thể sản xuất thụ động đủ nước uống để đáp ứng nhu cầu cho một gia đình nhỏ. Hơn thế nữa, khi được xây dựng với quy mô như một nhà máy, nó hoàn toàn có khả năng đáp ứng nhu cầu cho các cộng đồng nhỏ ở ven biển nhưng hiện chưa tiếp cận được nguồn nước sạch. Các cộng đồng dân cư sống trên đảo chính là những đối tượng thích hợp cho thiết bị này.`,
        publishDate: new Date('2023-10-17T09:30:00.000Z'),
        author: 'NGUYỄN HẢI',
        category: 'news',
        url: 'https://genk.vn/thiet-bi-loc-nuoc-bien-dot-pha-tao-ra-nuoc-sach-re-hon-ca-nuoc-may-20231017080723908.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/edit-fx1lrg-16974651422161804549049-1697504696185-16975046963901499410616.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Google cung cấp cho mỗi tài khoản 15GB dung lượng miễn phí để bạn có thể tự do lưu trữ dữ liệu. Tuy nhiên, đối với nhiều người mức dung lượng 15GB này là không đủ. Thực chất, 15GB này là không gian lưu trữ chung cho các dịch vụ Google mà người dùng sử dụng. Do đó, nếu bạn sử dụng nhiều dịch vụ Google như Gmail hay Photos, thì 15GB này sẽ hết rất nhanh.
        Khi bạn gần đạt đến giới hạn lưu trữ của mình, Google sẽ hỏi bạn có muốn mua thêm dung lượng lưu trữ bằng cách đăng ký các gói Google One hay không. Nếu tài chính dư dả, bạn có thể mua. Còn nếu không, các mẹo sau đây sẽ giúp bạn lấy lại phần lớn không gian lưu trữ bị chiếm dụng bởi các dữ liệu “rác” từ các dịch vụ Google, cụ thể như sau.
        
        1. Xóa các tập tin có dung lượng lớn
        Nếu chỉ muốn xóa một vài tập tin có dung lượng lớn khỏi Google Drive và Gmail để giải phóng không gian lưu trữ, bạn có thể sắp xếp chúng theo kích thước và tiến hành xóa, thay vì phải tốn công xóa các tập tin nhỏ hơn.
        Cách xóa các tập tin có kích thước lớn trong Google Drive
        Cách xóa các tập tin có kích thước lớn trong Gmail 
        Với Gmail, bạn truy cập vào tài khoản của mình trong Gmail và nhập vào thanh tìm kiếm cụm từ khóa “has:attachment larger:dung_lượng_tập_tin”. Trong đó, “dung_lượng_tập_tin” là kích thước của tập tin đính kèm ở mail. 
        Lúc này, danh sách các email có tập tin đính kèm với dung lượng như bạn yêu cầu sẽ hiện ra. Giờ bạn hãy kiểm tra lại và xóa các email này. Cuối cùng, hãy vào Thùng rác và xóa chúng lần nữa là hoàn tất.
        
        2. Dọn sạch thư mục Spam trong Gmail
        Hằng ngày, chúng ta có thể phải nhận đến hàng chục thư rác, Spam vào mail. Mỗi lần dọn dẹp, bạn có thể thấy hàng ngàn, thậm chí chục ngàn mail rác như thế này trong thư mục Spam. Khi tích tụ lại thì chúng chiếm rất nhiều dung lượng lưu trữ.
        Mặc dù lâu nay, Gmail vẫn mặc định có chế độ tự động xóa email trong thư mục Spam sau 30 ngày. Nhưng nếu bạn đang cần thêm không gian để lưu dữ liệu, hãy thực hiện việc dọn sạch thư mục Spam trong Gmail theo cách thủ công.
        
        3. Xóa các dữ liệu từ Google Photos
        Dung lượng 15GB lưu trữ miễn phí cũng được Google Photos “chia sẻ” cùng với các dịch vụ khác. Và thường thì các dữ liệu hình ảnh có dung lượng lớn hơn nhiều so với các tập tin văn bản. Do đó, nếu sử dụng Google Photos để đồng bộ ảnh từ điện thoại hay máy tính bảng, bạn hãy xem lại và xóa các ảnh, video cũ để có thêm dung lượng.
        Tuy nhiên, Google Photos không được trang bị tính năng sắp xếp ảnh theo dung lượng nên việc tìm và xóa các ảnh, video có dung lượng lớn sẽ yêu cầu bạn thực hiện hoàn toàn theo cách thủ công.
        
        4. Sao lưu các dữ liệu Google trên máy tính
        Nếu không gian lưu trữ Google của bạn vẫn chưa được giải phóng đủ dung lượng mình cần và bạn không thể xóa thêm thêm bất kỳ mục nào từ Google Drive, Gmail hoặc Google Photos, thì bạn có thể tải các dữ liệu này xuống và lưu trữ chúng trực tiếp trên máy tính của mình thông qua dịch vụ Takeout của chính Google cung cấp.
        Sau khi truy cập vào trang web Google Takeout, bạn hãy đăng nhập bằng tài khoản Google của mình và tiến hành lựa chọn các dịch vụ mà mình cần tải dữ liệu xuống.
        Sau khi tải về, bạn chỉ cần giải nén gói tin và lưu các dữ liệu này vào thư mục nào đó trên máy tính là xong.`,
        publishDate: new Date('2023-10-17T09:30:00.000Z'),
        author: 'PHẠM THÁI HỌC',
        category: 'thủ thuật',
        url: 'https://genk.vn/lam-gi-khi-dung-luong-google-drive-va-gmail-bi-day-2023101708000184.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/photo-1697451136515-1697451136928765658422-1697504291406-1697504291596441462446.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Theo SCMP, chip memristor tích hợp hệ thống đầy đủ đầu tiên trên thế giới đã được một nhóm nghiên cứu thuộc Đại học Thanh Hoa (Trung Quốc) phát triển thành công.

        Loại chip này không chỉ có thể giúp trí tuệ nhân tạo (AI) thông minh hơn mà còn tiết kiệm thời gian và năng lượng gấp tới 75 lần so với các loại thiết bị được thiết kế để xử lý ngôn ngữ dựa trên AI.

        Memristor là công nghệ lưu trữ không bay hơi năng lượng thấp có thể mô phỏng một số đặc điểm cơ bản của tế bào thần kinh. Các nhà nghiên cứu cho biết thiết bị có thể cho phép phát triển AI có khả năng học tập giống con người hơn và xa hơn là giúp ích cho hoạt động của các thiết bị thông minh và xe tự lái.

        Thiết bị tiên tiến này được kỳ vọng sẽ đáp ứng tốt nhu cầu tăng hiệu quả tính toán trong kỷ nguyên AI. Bên cạnh đó, theo chia sẻ của một nhà nghiên cứu trong nhóm, con chip còn có thể bảo vệ quyền riêng tư và dữ liệu của người dùng hiệu quả hơn.

        Đây là tiến bộ mới nhất trong một loạt cải tiến về chất bán dẫn của Trung Quốc sau khi các lệnh trừng phạt và kiểm soát xuất khẩu do Mỹ áp đặt hạn chế việc cung cấp chip và thiết bị sản xuất chip cho quốc gia này.

        Bất chấp những hạn chế Mỹ đưa ra, Trung Quốc tạo ra một &quot;cú nổ&quot; về bán dẫn, sức mạnh gấp 75 lần các sản phẩm hiện có 
        
        Theo các nhà nghiên cứu, chip memristor mới của Trung Quốc là một bước tiến đáng kể trong việc phát triển công nghệ memristor. Để đào tạo mạng lưới thần kinh nhân tạo, mô phỏng cách tế bào thần kinh của con người truyền dữ liệu trong não, phần cứng thông thường đòi hỏi rất nhiều năng lượng và thời gian để chuyển dữ liệu giữa các đơn vị tính toán và bộ nhớ.
        
        Điện toán dựa trên memristor có thể giảm năng lượng cần thiết cho một tác vụ bằng cách cho phép quá trình học tập diễn ra trên chip mà không cần nguồn bộ nhớ ngoài. Các nhà nghiên cứu cho biết khả năng học của loại chip này được thể hiện thông qua nhiều tác vụ, bao gồm phân loại hình ảnh, điều khiển chuyển động và nhận dạng âm thanh.
        
        Tuy nhiên, vẫn còn những thách thức trong việc nghiên cứu và phát triển những con chip như vậy, đặc biệt là chế tạo những con chip để tích hợp quy mô lớn.
        
        Wu Huaqiang và Gao Bin, hai giáo sư tại Tsinghua và trưởng nhóm nghiên cứu, chia sẻ với Science Times: “Nghiên cứu này là một bước quan trọng hướng tới những con chip tương lai có hiệu suất năng lượng cao và khả năng học hỏi sâu rộng. Chúng tôi hy vọng thiết bị của mình sẽ đẩy nhanh sự phát triển của những thiết bị thông minh tương tự trong tương lai”.
        
        Những năm gần đây, Trung Quốc đã triển khai các chính sách thuận lợi trong lĩnh vực bán dẫn, bao gồm giảm thuế và hỗ trợ tài chính để đẩy nhanh sự phát triển của ngành này và củng cố khả năng tự lực trong đổi mới chip cũng như tiến bộ công nghệ.
        
        Tháng trước, gã khổng lồ công nghệ Huawei của Trung Quốc đã tạo ra cơn sốt khi ra mắt sản phẩm smartphone mới Mate 60 Pro được trang bị chip xử lý mới có tên Kiri 9000s.
        
        Đây là bộ chip xử lý đầu tiên sử dụng công nghệ 7nm tiên tiến nhất của nhà sản xuất chip hàng đầu Trung Quốc SMIC. Bước tiến này cho thấy Trung Quốc đã đạt được những tiến bộ mới trong nỗ lực xây dựng hệ sinh thái chip trong nước của mình.`,
        publishDate: new Date('2023-10-17T08:00:00.000Z'),
        author: 'NGỌC HIỆP',
        category: 'news',
        url: 'https://genk.vn/bat-chap-nhung-han-che-my-dua-ra-trung-quoc-tao-ra-mot-cu-no-ve-ban-dan-suc-manh-gap-75-lan-cac-san-pham-hien-co-20231017075523949.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/27bb8e01-3fce-458d-a16e-35ca0da29e0f-1697503990635-16975039908201282347076.jpeg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Trong khi các thương hiệu chuyên tai nghe giá rẻ đang bỏ qua mọi thứ để tập trung vào việc thêm các công nghệ phụ trợ cho tai nghe như chống ồn, xuyên âm… thì Oneodio lại ra mắt mẫu Studio Pro C với định hướng ngược lại hoàn toàn: Mang đến âm thanh chất lượng cao hơn, đạt chuẩn Hi-Res và thời lượng pin siêu dài để người dùng thực sự chỉ đắm chìm trong âm thanh chứ không phải những tính năng khác.
        
        Điểm nổi bật đầu tiên của Oneodio Studio Pro C để mang đến trải nghiệm âm thanh chất lượng là màng loa kích thước 50mm, lớn hơn đáng kể so với hầu hết các sản phẩm cùng tầm vốn ưu tiên nhỏ gọn mà dùng màng loa 30 hoặc 40mm. Về lý thuyết, lợi thế này có thể giúp tai nghe cho âm lượng lớn hơn và khả năng thể hiện bass tốt hơn.
        
        Housing của Studio Pro C hầu hết là nhựa nhưng cho cảm giác cứng cáp, chắc chắn chứ không lỏng lẻo. Phần đệm da mềm êm, kích thước lớn nên bao bọc quanh vành tai chứ không đè lên, đeo lâu vẫn thấy thoải mái.
        
        Studio Pro C cho cảm giác đeo dễ chịu vì trọng lượng nhẹ, ôm tai vừa đủ khít và đệm đầu êm ái.
        
        Phần khớp của tai nghe này rất linh động, có thể xoay đến 90 độ, gập vào trong để đựng vừa trong túi và mang theo. Kích thước của Pro C khá lớn nhưng trọng lượng rất nhẹ, chỉ khoảng 260gr nên đeo lâu không thấy nặng đầu, lực kẹp vừa phải và có thể điều chỉnh độ dài headband thoải mái.
        Tai nghe có thể gập gọn và cho vào túi đựng đi kèm hộp.
        
        Chất âm chuẩn Hi-Res
        Nhìn chung, chất âm tổng thể của Studio Pro C vẫn là dạng V Shape, phù hợp với gu nghe nhạc điện tử, pop, EDM… của các bạn trẻ hiện nay. Tuy nhiên, tai nghe thể hiện các dải âm vẫn rất tốt, không có dải nào lấn lướt dải nào, tạo ra trải nghiệm cực kì ổn trong phân khúc.
        
        
        Dải bass của Studio Pro C dày dặn, đánh xuống sâu rất ấn tượng, chưa đủ lực để làm hài lòng các basshead thực thụ nhưng cũng không quá lùng bùng lỗ tai, nghe rất dễ chịu. Bạn chỉ cần chú ý dùng tai nghe khi đeo kính thì 1 phần âm bass có thể bị lọt qua vì đệm tai lúc này không còn bọc kín được nữa.
        
        Phần mid của tai nghe dù là V Shape nhưng không hề bị nhấn chìm trong bass, thể hiện đủ nổi bật giọng hát của ca sĩ, nhất là những giọng nữ cao, sáng. Giọng nam trầm có thể hơi mờ nhạt 1 chút nhưng vẫn không thể coi là tệ được. 
        
        Cuối cùng, treble của tai nghe có độ tách bạch cao, nhấn nhá và thể hiện tốt các nhạc cụ và chi tiết của bản nhạc một cách tự nhiên, không gây chói tai hay gắt mà vẫn êm ái dễ chịu cho đôi tai.
        
        Âm trường của Studio Pro C cũng có thể đánh giá là tốt trong phân khúc, cho cảm giác không gian khá rộng rãi, tách bạch các nhạc cụ chứ không dồn hết vào giữa như phần lớn tai nghe giá rẻ khác.
        
        Nếu muốn trải nghiệm chất âm chi tiết hơn nữa, bạn có thể cắm dây 3.5mm đi kèm trong hộp vào và tận hưởng âm thanh Hi-Res. Tất nhiên là phải có thêm máy phát và nguồn nhạc chất lượng tương xứng. Còn lại, dây 3.5mm sẽ có lợi cho ai muốn dùng để chơi game hoặc chỉnh sửa video để tránh độ trễ.
        
        Thời lượng pin siêu dài là điểm sáng
        Dùng tai nghe không dây thực ra đến nay vẫn khá bất tiện khoản pin. Các loại tai nghe TWS thường chỉ nghe được 4 - 5 tiếng là phải sạc. Tai dạng headphone cỡ lớn thì có thể lên đến 30 - 40 giờ nghe liên tục. Nhưng, để chạm đến con số 110 giờ của Studio Pro C thực sự rất hiếm.
          
        Chính xác thì thời lượng pin này có thể đạt được nếu bạn nghe ở mức âm lượng khoảng 50 - 60%. Tính ra nếu mỗi ngày nghe 5 tiếng thì cỡ 20 ngày mới phải sạc lại 1 lần, và có lỡ chưa kịp sạc vẫn có thể nghe qua dây 3.5mm.
        
        Điểm trừ duy nhất là tai nghe vẫn dùng cổng microUSB cũ kĩ để sạc thay vì USB-C mới hơn.
        
        Lựa chọn đáng chú ý tầm giá 1 triệu
        Nếu thực sự cần chống ồn thì Studio Pro C hoàn toàn không phải mẫu tai nghe dành cho bạn. Tuy nhiên, nếu muốn ưu tiên chất lượng âm thanh, cảm giác đeo thoải mái và thời lượng pin siêu dài thì đây chính là 1 trong những lựa chọn cực kì đáng chú ý ở phân khúc 1 triệu.`,
        publishDate: new Date('2023-10-17T08:00:00.000Z'),
        author: 'PH - WEBUY',
        category: 'news',
        url: 'https://genk.vn/danh-gia-oneodio-studio-pro-c-tai-nghe-cho-nguoi-chi-quan-tam-chat-am-khong-chong-on-nhung-pin-tan-110-tieng-20231016175958982.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/review-tai-nghe-one-odio-studio-pro-c-wireless-genk-webuy-dsc01732-16974530216561334016735-1697453684437-16974536857151394895028.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Bing AI là công cụ tìm kiếm tích hợp trí tuệ nhân tạo (AI) của Tập đoàn Microsoft (Mỹ). Giống như ChatGPT của OpenAI (Mỹ), công cụ Bing AI cũng có khả năng "giao tiếp toàn diện" với người dùng.

        Bing AI được huấn luyện dựa trên nguồn dữ liệu cập nhật hơn so với bản miễn phí của ChatGPT và có cách phản hồi tự nhiên hơn. 
        
        Thế nhưng, trong khi ChatGPT thường xin lỗi mỗi khi người dùng nhận xét nó trả lời sai thì Bing AI được cho là tỏ ra "bảo thủ" hơn, sẵn sàng tranh cãi với người dùng.

        Bing AI cũng được cho là đang gặp lỗ hổng bảo mật dẫn đến có thể ảnh hưởng đáng kể đến trải nghiệm người dùng. Vì thế, Microsoft quyết định treo thưởng cho bất cứ ai tìm ra lỗ hổng này và số tiền thưởng lên tới 15.000 USD. 
        
        Quá trình quét lỗ hổng bao gồm Bing AI trên bing.com, tích hợp với trình duyệt Microsoft Edge, ứng dụng Microsoft Start và ứng dụng di động Skype.
        
        Để nhận được tiền thưởng, các ứng viên phải đảm bảo rằng lỗ hổng này chưa được phát hiện trước đây, được Microsoft phân loại là "nghiêm trọng" hoặc "quan trọng".`,
        publishDate: new Date('2023-10-17T07:00:00.000Z'),
        author: 'BẰNG HƯNG',
        category: 'news',
        url: 'https://genk.vn/microsoft-treo-thuong-khung-de-tim-lo-hong-bing-ai-20231017075112692.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/bing-16973552159711583499121-1697503782963-16975037831191741284160.jpeg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Với sự phổ biến của GPU trong thế giới điện toán hiện đại, không có gì ngạc nhiên khi chúng trở thành mục tiêu tấn công. Nhưng làm thế nào GPU có thể bị hack và bạn có nguy cơ gặp phải trường hợp như vậy không?

        GPU có thể bị hack không?
        
        Câu trả lời là có. Về mặt lý thuyết, card đồ họa có thể bị hack, đặc biệt là khi sử dụng mã độc. Trên thực tế, hầu hết các loại linh kiện phần cứng máy tính đều có thể bị tấn công. Bo mạch chủ, CPU, SSD và nhiều bộ phận khác có thể bị tin tặc khai thác, thường thông qua các lỗ hổng và GPU cũng không ngoại lệ.
        
        Trong trường hợp của GPU, mã độc có thể được lưu trữ trong bộ nhớ của card đồ họa mà chủ sở hữu không hề hay biết về nó. Từ đây, tin tặc có thể bắt đầu hành động độc hại của chúng ở chế độ nền.
        
        Tại sao lại hack GPU?
        
        Điều quan trọng nhất là khi tấn công vào GPU, tin tặc có thể thoát khỏi tầm ngắm của phần mềm diệt virus. Thông qua đó, tin tặc có thể tiếp tục khai thác các thiết bị trong một khoảng thời gian dài hơn, cho phép chúng truy cập dữ liệu nhạy cảm hoặc thực hiện nhiều chức năng từ xa hơn.
        
        Cách tránh bị hack GPU
        
        Bởi vì các vụ hack GPU phần lớn mới xuất hiện, nên rất khó để biết chính xác cách tránh chúng. Hiện tại, điều bạn có thể làm nhiều nhất là làm theo các cách sau:
        
        1. Tránh tải xuống các file trực tuyến từ các trang web mờ ám hoặc bên thứ ba.
        
        2. Sử dụng chương trình diệt virus tin cậy, độ bảo mật cao.
        
        3. Mua (các) GPU từ những nơi uy tín
        
        4. Mua máy tính xách tay và PC từ những người bán uy tín.`,
        publishDate: new Date('2023-10-17T07:00:00.000Z'),
        author: 'ĐÔNG PHONG',
        category: 'news',
        url: 'https://genk.vn/hack-card-man-hinh-phuong-thuc-tan-cong-moi-cua-tin-tac-20231017074901903.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/17/nvidia-hackers-1697430034188-1697430034555311786156-1697430363028-1697430363593651014924-1697503626534-16975036269791686987901.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Kể từ tháng 6, Li Na, 27 tuổi, dành ít nhất hai giờ mỗi ngày cho công việc phụ trên TikTok. Cô đăng tối đa ba video trang điểm trên tài khoản cá nhân hàng ngày, với nội dung chia sẻ các mẹo và mô tả những thay đổi ấn tượng trước và sau.

        Nhưng Li không tự làm ra bất kỳ video nào. Thay vào đó, cô tìm các clip lan truyền trên các nền tảng mạng xã hội Trung Quốc như Douyin, Bilibili và Xiaohongshu, sau một vài chỉnh sửa nhẹ, cô đăng lại chúng lên TikTok.
        
        Li và nhiều người khác đăng những video này với hy vọng chúng cũng sẽ lan truyền tương tự trên TikTok, giúp họ kiếm thu nhập thông qua Quỹ sáng tạo của ứng dụng hoặc từ hoạt động tiếp thị liên kết.
        
        Cách làm này được gọi là banyun trong tiếng Trung Quốc, được hiểu là "chuyển đổi" hoặc "đăng lậu". Hình thức thu hút rất nhiều sự chú ý trong năm qua, khi có các "chuyên gia" và những người ảnh hưởng triển khai các buổi đào tạo về cách kiếm tiền thông qua banyun.
        
        Họ hứa rằng sau khi được đào tạo, bất kỳ ai cũng có thể thu được lượng lớn người theo dõi trên TikTok và kiếm tiền bằng cách quảng cáo sản phẩm, chỉ bằng vài giờ làm việc mỗi ngày.
        
        Nhưng các chuyên gia này đang bán một giấc mơ lỗi thời và sai lầm, George Gu, người sáng lập NewMe, công ty thương mại điện tử mạng xã hội chuyên về TikTok, nói với Rest of World.
        
        Chính sách nền tảng của TikTok không cho phép đăng bất kỳ nội dung nào vi phạm quyền sở hữu trí tuệ của người khác. Nếu bị báo cáo, những tài khoản đó có nguy cơ bị xóa, đình chỉ hoặc chấm dứt vĩnh viễn.
        
        Jamie Favazza, người phát ngôn của TikTok, viết trong email gửi tới Rest of World: "Banyun không được phép xuất hiện trên TikTok và chúng tôi xóa nội dung cũng như cấm các tài khoản có hành vi này ngay khi phát hiện ra".
        
        Mindy Liu, 22 tuổi, quyết định thử banyun sau khi đọc một bài đăng trên ứng dụng truyền thông xã hội về phong cách sống Xiaohongshu về người phụ nữ bắt đầu kinh doanh thương mại điện tử trên TikTok tại nhà.
        
        Liu đã liên hệ với Xindi Consulting, tài khoản đăng bài và nhanh chóng được kết nối với một "người cố vấn" trên WeChat. Người cố vấn nói về mọi thứ nghe có vẻ rất dễ dàng, cho biết Liu có thể nhanh chóng tạo ra thu nhập 1.000 USD (hơn 20 triệu đồng) mỗi tuần từ Quỹ sáng tạo của TikTok và hoạt động tiếp thị liên kết.
        
        Người cố vấn của Liu cũng báo khoản phí đào tạo là 550 USD, chiếm hơn một nửa số tiền tiết kiệm của cô. Sau cùng, cô vẫn quyết định chi trả.
        
        Đổi lại, Liu nhận được tập tài liệu khổng lồ dài hơn 100 trang, nêu chi tiết các bước cần thực hiện. Cô chọn các sản phẩm gia dụng làm lĩnh vực kinh doanh và lùng sục trên mạng xã hội Trung Quốc để tìm các video phổ biến về các mẹo tổ chức và thủ thuật sản phẩm.
        
        TikTok bị chặn ở Trung Quốc, vì vậy Liu cần một mạng riêng ảo (VPN) đáng tin cậy; cô mua dịch vụ từ người cố vấn với giá thêm 70 USD/năm. Cô sử dụng ứng dụng CapCut để chỉnh sửa video, đồng thời cắt và lật hình ảnh từ trái sang phải để tránh vi phạm bản quyền.
        
        Li, người quản lý tài khoản chuyên về nội dung trang điểm, cũng xóa một khung hình sau mỗi 2–3 giây của video trước khi đăng lại lên TikTok. Sự khác biệt dẫn đến chất lượng video gần như không thể bị phát hiện ra bởi con người, điều mà cô được hứa rằng chỉ cần như vậy là đủ để đánh lừa TikTok.
        
        Phần thưởng không bao giờ đến
        
        Bất chấp những nỗ lực, phần thưởng không bao giờ đến. Sau hai tháng, tài khoản trang điểm của Li chỉ có 84 người theo dõi. Mặc dù các video cô đăng lại rất nổi tiếng trên Douyin nhưng chúng chỉ thu được hơn vài trăm lượt xem trên TikTok. Hầu hết có ít hơn 10 lượt thích.
        
        Liu cố gắng liên hệ với người cố vấn trên WeChat nhưng nhận ra họ đã biến mất: Tài khoản của họ đã bị xóa. Liu nói với Rest of World: "Bây giờ tôi đang rất đau khổ về tinh thần và tài chính. Tôi bắt đầu làm banyun trên TikTok vì không có nhiều tiền. Giờ thì tôi mắc nợ vì phí đào tạo".
        
        Ngay cả những người đăng banyun đạt được mức độ thành công nhất định cũng phải vật lộn để duy trì.
        
        Xiaoting Wang trả cho một cố vấn banyun khoảng 700 USD để bắt đầu công việc kinh doanh. Có sẵn nền tảng về chỉnh sửa video, cô nhận thấy việc chỉnh sửa và đăng lại video rất dễ dàng và bắt đầu tạo một vài tài khoản chuyên về thú cưng vào tháng 10 năm ngoái.
        
        Đến tháng 2 năm sau, một trong những tài khoản phát triển đủ lớn để tham gia Quỹ sáng tạo của TikTok - bước cuối cùng được cho là để làm giàu trong vở kịch banyun.
        
        Nhưng thu nhập của Wang kể từ đó vẫn ở mức từ 1 đến 3 USD, thấp hơn nhiều so với mức 100 USD một ngày mà người cố vấn đã hứa. Khi liên hệ với người cố vấn để xin thêm lời khuyên, họ biến mất.
        
        "Nó đã suy tàn", Wang nói với Rest of World. "Tôi bắt đầu thấy ba giờ mỗi ngày bỏ ra không đáng giá."
        
        Vào tháng 5, cô bán toàn bộ tài khoản cho một công ty phát trực tiếp với giá 2.000 nhân dân tệ (278 USD).
        
        Bất chấp những khó khăn, Li và Liu vẫn chưa từ bỏ TikTok. Li dự định tạo video trang điểm của riêng mình với hy vọng nó sẽ thành công hơn là ăn cắp nội dung từ nơi khác.
        
        Trong khi đó, Liu chuyển sự chú ý sang TikTok Shop, nền tảng thương mại điện tử mới của ByteDance.
        
        Cô đã tham gia một nhóm WeChat có tên là "Người chơi TikTok", gồm những người làm nội dung và người bán sản phẩm. Tất cả đều đang tìm kiếm cách thức kiếm tiền từ tài khoản cá nhân, tận dụng tối đa những gì họ cảm thấy là sự phát triển tất yếu của thương mại điện tử TikTok trên toàn thế giới.
        
        "Người Trung Quốc đã quen với mua sản phẩm trên Douyin. Việc người nước ngoài bắt kịp nó chỉ là vấn đề thời gian", Liu đánh giá.`,
        publishDate: new Date('2023-10-16T11:00:00.000Z'),
        author: 'MẠNH KIÊN',
        category: 'news',
        url: 'https://genk.vn/no-ro-cach-kiem-tien-moi-tren-tiktok-dang-3-video-moi-ngay-kiem-ve-hon-20-trieu-tuan-lam-giau-qua-de-20231016155912674.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/2-banyun-account2jpeg-400x866-16972888671681861515851-1697445613435-1697445614148199107998-1697446834836-16974468354551545781516.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Cách nhau hơn 1.800 km, thành phố Mumbai nhộp nhịp của Ấn Độ sẽ kết nối với thành phố cảng Fujairah của Các Tiểu vương quốc Ả Rập Thống nhất (UAE) bằng tàu cao tốc dưới nước. Một lần nữa, UAE muốn tập trung vào một dự án đột phá.

        Văn phòng Cố vấn Quốc gia của UAE đang dẫn đầu sáng kiến đầy tham vọng này. Dự án đang thu hút sự chú ý khi các chuyên gia nghiêm túc nghiên cứu tính khả thi của sáng kiến này.
        
        Nổi tiếng với những dự án táo bạo và độc đáo như toà nhà chọc trời cao nhất thế giới, Đảo Cọ nhân tạo ngoài khơi Dubai, UAE đang tìm cách mở rộng năng lực kỹ thuật dưới lòng vùng biển Ả Rập.
        
        Dự án này xuất hiện lần đầu tiên từ năm 2018 và hiện đang được tích cực triển khai. Nó thể hiện quyết tâm của khu vực trong việc dẫn đầu về các công trình ấn tượng.
        
        Thời gian di chuyển bằng máy bay từ Mumbai đến Dubai hiện là hơn 3 giờ đồng hồ, bao gồm cả các thủ tục trước chuyến bay. Tuy nhiên, đề án đường sắt cao tốc dưới nước sẽ giúp giảm thời gian đi lại ít nhất một tiếng và tàu có thể đạt vận tốc tối đa gần 1000 km/h.
        
        Dự án sáng tạo này được kỳ vọng sẽ cải thiện đáng kể thương mại song phương giữa UAE và Ấn Độ, đồng thời cung cấp một phương thức vận tải mới. Thành phố cảng Fujairah sẽ xuất khẩu dầu sang Ấn Độ, ngược lại nước ngọt từ sông Narmada sẽ được vận chuyển tới UAE.
        
        Tuy nhiên, việc xây dựng một đường hầm tàu cao tốc dưới nước đặt ra rất nhiều thách thức kỹ thuật. Tính khả thi về mặt kỹ thuật và hậu cần trong việc xây dựng một dự án cơ sở hạ tầng khổng lồ ở vùng nước sâu là mối quan tâm hàng đầu. Đường hầm tương lai thậm chí có thể có khung cửa xuyên thấu để hành khách có thể nhìn ngắm đại dương và các sinh vật dưới biển.
     
        Việc phân tích kỹ lưỡng sẽ cho ra các thông số kỹ thuật và cách thức xây dựng công trình này. Nhưng một điều chắc chắn là dự án sẽ cần một khoản đầu tư không hề nhỏ, có thể lên tới vài tỷ USD. Dù vậy, UAE cũng không còn lạ lẫm trong việc chinh phục những thách thức về kỹ thuật.
        
        Trước đây, đường hầm eo biển nối Anh và Pháp đã được xây dựng thành công. Đường hầm này dài hơn 50 km và tàu chạy với tốc độ khoảng 112 km/h. Song, tham vọng của UAE còn vượt xa hơn thế. Họ có kế hoạch xây dựng dự án lớn gấp 50 lần và một đoàn tàu chạy với vận tốc nhanh gấp 10 lần. Điều này thể hiện quyết tâm dẫn đầu cuộc đua phát triển các đô thị tiên tiến.`,
        publishDate: new Date('2023-10-16T11:00:00.000Z'),
        author: 'THIÊN DI',
        category: 'news',
        url: 'https://genk.vn/phuong-tien-re-long-bien-voi-van-toc-luot-gan-1000-km-h-tieu-ton-it-nhat-vai-ty-usd-con-hon-ca-phim-vien-tuong-20231016155209371.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/image3-1697439757661-16974397585301214480686-1697446399006-16974463996381886230680.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Là một tỷ phú người Mỹ gốc Nam Phi có 11 đứa con, Elon Musk sở hữu một trong những nền tảng truyền thông xã hội có ảnh hưởng nhất thế giới (mạng X, trước đây là Twitter) và thống trị hơn một nửa thị trường ô tô điện của Mỹ.

        Elon Musk thường xuyên được vinh danh là một trong những người có ảnh hưởng nhất thế giới. Vậy tiếp theo ông ấy sẽ làm gì?
        
        Với Elon Musk, câu trả lời là: Nỗ lực thống trị không gian.
        
        Chòm sao vệ tinh của Elon Musk & Jeff Bezos
        Cho đến nay nỗ lực đang diễn ra rất thuận lợi. SpaceX - công ty mà Elon Musk thành lập năm 2002, đã phóng hơn 4.500 vệ tinh Starlink trong 5 năm qua, chiếm hơn 50% tổng số vệ tinh đang hoạt động trên quỹ đạo Trái đất tầm thấp (LEO).
        
        Những vệ tinh này cùng nhau có thể cung cấp khả năng truy cập Internet đến hầu hết mọi ngóc ngách trên thế giới, giúp Elon Musk tiếp cận thông tin liên lạc toàn cầu và hơn thế nữa.
        
        Nhưng sức ảnh hưởng chưa từng có này sắp có một đối thủ - một tỷ phú khác của Trái đất.
        
        Jeff Bezos, người sáng lập Amazon và là người giàu thứ ba thế giới (Elon Musk là người giàu nhất - nguồn Forbes, 2023), đang đưa ra nỗ lực của riêng mình nhằm phóng hơn 3.000 vệ tinh lên quỹ đạo Trái đất tầm thấp (LEO).
        
        Cặp vệ tinh đầu tiên của ông đã đi vào quỹ đạo cách đây hơn một tuần.
          
        Nếu Elon Musk có Starlink thì Jeff Bezos có Project Kuiper.
        
        Dự án Kuiper là chùm vệ tinh quỹ đạo Trái đất thấp (LEO) được thiết kế để cung cấp Internet vệ tinh băng thông rộng. Giống như Starlink, chòm sao sẽ bao gồm hàng nghìn vệ tinh nhỏ di chuyển quanh Trái đất theo quỹ đạo thấp.
        
        Dự án Kuiper được điều hành bởi Kuiper Systems, một công ty con của Amazon được thành lập vào năm 2019.
        
        Amazon đã tuyên bố rằng một trong những mục tiêu của họ là giúp thu hẹp khoảng cách kỹ thuật số ở Mỹ, đặc biệt là giữa các sinh viên.
        
        CNBC cho biết, Amazon đã cam kết đầu tư 10 tỷ USD vào Dự án Kuiper , dự án mà họ cho rằng sẽ có thể cung cấp Internet đáng tin cậy và giá cả phải chăng cho những người ở Mỹ không có khả năng truy cập Internet tại nhà một cách đáng tin cậy.
        
        Ai hơn ai?
        The Guardian nhận định, không gian gần Trái đất có thể bị thống trị bởi hai người đàn ông cực kỳ giàu có: Elon Musk và Jeff Bezos.
        
        Victoria Samson, Giám đốc văn phòng Washington của Secure World Foundation, một tổ chức phi lợi nhuận tập trung vào sự bền vững của không gian, cho biết ảnh hưởng của Elon Musk dường như ngày càng tăng lên, với việc SpaceX hiện phóng vệ tinh mới mỗi tuần.
        
        Công ty có hơn 1,5 triệu người dùng trên toàn thế giới vừa yêu cầu phê duyệt và cấp phép phóng cho tổng cộng 42.000 vệ tinh vào quỹ đạo – những con số khiến việc phóng hai vệ tinh gần đây (là Kuipersat-1 và Kuipersat-2) của Amazon trông khá... khác thường.
        
        Dự án Kuiper của Jeff Bezos chỉ vừa bước vào giai đoạn thử nghiệm quỹ đạo.
        
        Nỗ lực của tỷ phú Bezos - một người đam mê không gian, người đã bay lên quỹ đạo Trái đất thấp (LEO) vào năm 2021 - là một quá trình lâu dài và đầy sai sót.
        
        Dự án Kuiper (Project Kuiper) của Amazon ban đầu dự định phóng vệ tinh vào năm 2022, nhưng tên lửa mang Kuipersat-1 và Kuipersat-2 đã thất bại khi phóng.
        
        Công ty Blue Origin của Jeff Bezos, công ty sản xuất tên lửa, bao gồm cả tên lửa đưa ông vào vũ trụ, vốn được mong chờ là phóng vệ tinh Kuiper lên quỹ đạo, nhưng công ty vẫn chưa phóng thành công bất cứ thứ gì vào LEO.
        
        Theo New York Times, tên lửa New Glenn của Blue Origin, được thiết kế để mang tải trọng giống vệ tinh Kuiper vào không gian, đã chậm tiến độ 3 năm so với kế hoạch.
        
        Thay vào đó, vụ phóng cặp nguyên mẫu vệ tinh đầu tiên (Kuipersat-1 và Kuipersat-2) vào ngày 6/10 đã được tên lửa Atlas V của United Launch Alliance phóng vào quỹ đạo, từ Căn cứ Lực lượng Không gian Cape Canaveral của Florida, Mỹ.
        
        Bất chấp những khó khăn này, Jeff Bezos có kế hoạch phóng tổng 3.236 vệ tinh vào năm 2029 , nhưng Amazon đang bước vào cuộc đua vệ tinh vũ trụ với khoảng cách rất lớn giữa họ với SpaceX.
        
        Amazon bắt đầu nghiên cứu và phát triển Dự án Kuiper vào năm 2018 và nhận được giấy phép triển khai và vận hành từ Ủy ban Truyền thông Liên bang Mỹ vào năm 2020.
        
        Giấy phép đó đã "bật đèn xanh" cho một chùm vệ tinh ban đầu gồm 3.236 vệ tinh, quy định rằng Amazon phải vận hành ít nhất một nửa trong số đó trước tháng 7 năm 2026.
        
        Victoria Samson nói: SpaceX có lợi thế là người đi đầu. Chưa hết, các công ty/thực thể khác cũng đang cố gắng bắt kịp, không chỉ Amazon.
        
        Eutelsat OneWeb có 634 vệ tinh ở quỹ đạo Trái đất thấp hơn – một khoảng cách lý tưởng tính từ Trái đất nơi các vệ tinh Starlink của SpaceX cũng hoạt động.
         
        Đầu năm 2023, Liên minh châu Âu (EU) đã công bố kế hoạch phóng 170 vệ tinh lên quỹ đạo từ năm 2025 đến năm 2027.
        
        Về mức độ ảnh hưởng của SpaceX và các công ty hoặc cá nhân tư nhân khác, Victoria Samson cho biết có một số quy định mà nhiều bên phải thực hiện.
        
        Hiệp ước Ngoài Không gian, một bộ luật do Liên Hợp Quốc lãnh đạo năm 1967 đã được tất cả các quốc gia du hành vũ trụ lớn ký kết, cho rằng các quốc gia phải chịu trách nhiệm về những gì các công ty đưa vào vũ trụ từ biên giới của họ - và nên tiếp tục giám sát các vệ tinh và dự án đó.
        
        Điều này có nghĩa là các tổ chức như SpaceX của Elon Musk cần có sự cho phép của chính phủ để phóng vệ tinh.
        
        "Elon không thể có 53% tổng số vệ tinh ngoài kia đang hoạt động nếu không có chính phủ Mỹ cho phép làm điều đó" - Moriba Jah, Phó giáo sư về kỹ thuật hàng không vũ trụ và cơ khí kỹ thuật tại Đại học Texas, Mỹ cho biết.
        
        Vấn đề không chỉ là các vệ tinh đang hoạt động. Theo Cơ quan Vũ trụ châu Âu (ESA), có hơn 30.000 mảnh rác vũ trụ có kích thước lớn hơn 10 cm đang quay quanh Trái đất – hơn một nửa nằm ở quỹ đạo không gian thấp hơn mà các công ty và chính phủ đang chạy đua chiếm giữ.
        
        Phó giáo sư Moriba Jah cho biết các đồng nghiệp của ông tại NASA đã báo cáo rằng một số thí nghiệm khoa học đang trở nên khó khăn do số lượng mảnh vỡ ngoài không gian va chạm vào – điển hình là các mảnh tên lửa, hoặc các vệ tinh bị bỏ rơi.
        
        Chúng ta ngày càng thấy nhiều thân tên lửa và những thứ tương tự bay tới bề mặt Trái đất. Và theo thống kê những thứ này sẽ đổ bộ vào đất liền, nơi có con người sinh sống. Điều này rất nghiêm trọng.
        
        Khi Elon Musk, Jeff Bezos và các đối thủ của họ tăng cường nỗ lực lấp đầy không gian, những mối nguy hiểm tiềm tàng sẽ lớn theo.`,
        publishDate: new Date('2023-10-16T11:00:00.000Z'),
        author: 'TRANG LY',
        category: 'news',
        url: 'https://genk.vn/xuat-hien-doi-thu-dang-gom-cua-elon-musk-do-10-ty-do-de-phong-3236-ve-tinh-20231016155016935.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/ty-phu-giau-nhat-the-gioi-1-16974262251302086406484-1697429971324-16974299716712109750285-1697446291215-1697446292124646916938.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Tờ Wall Street Journal (WSJ) cho hay tăng trưởng doanh số xe điện tại Mỹ đã chậm lại khi nhu cầu thị trường có hạn, khiến những cố gắng của hàng loạt ông lớn trong ngành và các startup mới nổi phải đối mặt với một thực tại tàn khốc: Khách hàng đã phát “ngấy” với ô tô điện.

        Mặc dù doanh số xe điện tiếp tục tăng trưởng 51% từ đầu năm đến nay nhưng tốc độ đã giảm tốc so với cùng kỳ năm trước. Lượng xe tồn kho cũng ngày một nhiều hơn do có quá nhiều hãng tham gia cuộc chơi trong khi thị trường dần bão hòa.
        
        Thậm chí một số hãng như Ford Motor hay Toyora đều đang phân vân về việc có nên dồn lực đầu tư cho xe điện không hay chuyển sang dòng xe Hybrid (kết hợp cả xăng lẫn điện), vốn là phân khúc thu hút người tiêu dùng nhiều hơn so với ô tô điện.
        
        Theo WSJ, những khách hàng giàu có sẵn sàng móc hầu bao mua các sản phẩm xe điện đắt đỏ đều đã sở hữu những chiếc ô tô mới này, thế nhưng đến phân khúc khách hàng tầm trung thì câu chuyện trở nên khó nhằn hơn nhiều.
        
        Hàng loạt nhà môi giới, giám đốc hay các hãng sản xuất xe đều cho rằng người tiêu dùng tầm trung đều đang phân vân khi chắc chắn sẽ có vô số dòng xe điện tốt hơn được ra mắt trong tương lai với giá rẻ hơn nhiều.
        
        “Nhiều người đã dự đoán được đà giảm tốc hiện nay của xe điện. Chúng ta đang chứng kiến khả năng đi ngang của tăng trưởng trong thời điểm này”, giám đốc tài chính John lawler của Ford Motor nhận định.
        
        Đà giảm tốc hiện nay trái ngược so với sự bùng nổ của năm 2022 khi hàng dài khách hàng chờ đợi để mua các sản phẩm xe điện mới ra mắt dù chi phí đắt đỏ.
        
        Đây là một thông tin chẳng mấy tích cực gì cho các hãng xe lẫn startup đã đổ hàng tỷ USD để xây dựng các nhà máy ắc quy hay các công xưởng, chuẩn bị cho một cuộc chiến tổng lực mới.
        
        Toyota đã đúng
        
        Trong vài năm trở lại đây, sự bùng nổ của Tesla cùng các quy định siết chặt hơn về môi trường đã khiến nhiều hãng ô tô chuyển hướng dồn nguồn lực cho ngành xe điện.
        
        Thế rồi việc Mỹ bơm hàng nghìn tỷ USD cho ngành này nhằm chạy đua với Trung Quốc càng kích thích cuộc chiến gay cấn hơn.
        
        Tuy nhiên hãng xe lớn nhất thế giới là Toyota vẫn tỏ ra không chú trọng đến mảng xe điện khi cho rằng cơ sở hạ tầng ở nhiều thị trường vẫn chưa đáp ứng được công nghệ mới này.
        
        Đồng thời hãng cũng cho rằng sẽ phải mất nhiều năm để xe điện có thể trở thành phương tiện chính thay thế hoàn toàn xe xăng, trong khi dòng xe Hybrid lại dễ chuyển đổi hơn nhiều.
        
        Tờ WSJ cho rằng nhận định của Toyota có lẽ đã đúng khi hiện nhiều khách hàng Mỹ đang khá phân vân về việc mua xe điện do giá vẫn còn cao, không thuận tiện bằng xe xăng cả về cảm giác lãi lẫn phạm vi hoạt động cũng như cơ sở hạ tầng hỗ trợ.
        
        “Tôi chưa sẵn sàng mua xe điện bởi phạm vi hoạt động của nó bị giới hạn quá nhiều cũng như phụ thuộc vào số trạm sạc”, anh Robert Duwors trả lời WSJ khi cho biết mình đã mua một chiếc ô tô Hybrid thay thế với phạm vi hoạt động rộng hơn và thuận tiện hơn.
        
        Số liệu của J.D.Power cho thấy thị phần bán lẻ xe điện đã tăng lên mức 9% trong vài tháng trở lại đây nhưng các chuyên gia vẫn tranh cãi liệu xu thế này có thể bùng nổ tiếp hay lại đi ngang về dài hạn.
        
        Về phía các nhà sản xuất, nhiều thương hiệu như Tesla đã phải giảm giá trước bối cảnh nhu cầu thị trường ảm đạm. Một số công ty thì cắt giảm mức dự đoán doanh số, còn nhiều startup thì buộc phải điều chỉnh lại kế hoạch sau nhiều năm đốt tiền vẫn lỗ.
        
        Tập đoàn Ford đã phải lùi thời hạn đạt sản lượng 600.000 xe điện từ cuối năm nay sang cuối năm 2024, đồng thời nhiều khả năng sẽ phải hủy bỏ kế hoạch thay đổi nhà máy sản xuất ô tô xăng sang dây chuyền làm xe điện F-150 do doanh số không như kỳ vọng.
        
        Tương tự, Huyndai đã tích cực tung ra các dòng xe điện mới để thu hút người dùng, đồng thời có các chương trình khuyến mãi như miễn phí sạc điện, giảm giá trả góp lên đến 1.100 USD...
        
        Thậm chí đế chế Tesla của Elon Musk cũng đã phải liên tục giảm giá và bắt đầu dùng đến quảng cáo marketing truyền thống, điều mà vị tỷ phú giàu nhất thế giới từng coi thường.
        
        Quá đắt?
        
        Báo cáo của Cox Automotive cho thấy mức giá xe điện bình quân hiện nay vào khoảng 50.683 USD/chiếc, thấp hơn so với 65.000 USD/chiếc cùng kỳ năm ngoái.
        
        Thế nhưng con số này với những khách hàng tầm trung vẫn là quá cao so với ô tô xăng, nếu tính đến hiệu năng vận hành và sự tiện lợi.
        
        Đặc biệt do lãi suất bị duy trì ở mức cao nên việc trả góp khi mua xe điện trở nên kém hấp dẫn hơn nhiều.
        
        Các nhà môi giới và cửa hàng bán xe cho biết giá cả sẽ phải đi xuống nhiều hơn nữa thì mới có thể thu hút thêm nhiều khách hàng, nhất là những người tiêu dùng tầm trung chỉ chấp nhận trả chưa đến 40.000 USD cho một chiếc ô tô mới.
        
        “Có một sự nhầm lẫn rằng thị trường sẽ hấp thụ xe điện tương tự như những gì đã diễn ra ở thời điểm bùng nổ ban đầu. Thế nhưng hiện khách hàng không còn hứng thú, chấp nhận bỏ nhiều tiền ra để mua xe điện như trước nữa”, chủ tịch Beau Boeckman của Galpin Motors nhận đinh.
        
        Tính đến tháng 9/2023, lượng hàng tồn kho xe điện Mustang Mach E của Ford đã lên đến 3 tháng rưỡi, cao gấp đôi so với mức bình quân toàn ngành.
        
        Hàng loạt tên tuổi như Huyndai, KIA, Volkswagen cũng chứng kiến lượng hàng tồn kho xe điện tăng cao.
        
        Trong khi các tập đoàn lớn vẫn đủ nguồn lực để duy trì thì các startup nhỏ lại lâm vào cảnh khó khăn.
        
        Những thương hiệu như Rivian hay Lucid đang chứng kiến lượng hàng tồn kho xe điện chưa bán được tăng ngày một cao dù đã hạ sản lượng xuống mức thấp.
        
        Trái với xe điện, dòng Hybrid lại có kết quả kinh doanh lạc quan. Số liệu của Motor Intelligence cho thấy doanh số xe Hybrid đã tăng 48% trong quý I/2023 so với cùng kỳ năm trước.
        
        Đây là cú lội ngược dòng ngoạn mục khi doanh số dòng xe này từng giảm 6% quý I/2022 so với cùng kỳ năm 2021.
        
        “Xe Hybrid là một thị trường cực kỳ nóng bỏng”, giám đốc David Christ của Toyota chi nhánh Bắc Mỹ hồ hởi.
        
        Thương hiệu xe hơi Nhật Bản này dù chậm chân hơn đối thủ ở mảng xe điện nhưng lại tích cực đầu tư cho xe Hybrid với tiên đoán nhiều thị trường vẫn chưa thể thích ứng được với công nghệ ô tô điện.
                
        Hiện các nhà máy của Toyota đang tích cực sản xuất xe Hybrid do cung không đủ cầu và lượng khách hàng chờ trong danh sách ngày một dài.
        
        “Chúng tôi đang cố gắng sản xuất nhiều xe Hybrid nhất có thể”, giám đốc Christ nói.
        
        Trong khi đó, lượng tồn kho xe điện bZ4X của Toyota đã lên mức 2 tháng rưỡi, cho thấy sự giảm hứng thú của người tiêu dùng với công nghệ mới này.`,
        publishDate: new Date('2023-10-16T11:00:00.000Z'),
        author: 'BĂNG BĂNG',
        category: 'news',
        url: 'https://genk.vn/loi-tien-tri-cua-toyota-da-thanh-su-that-khong-phai-xe-dien-xe-hybrid-moi-la-chan-ai-20231016153725577.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/japantoyota-1697431413022-1697431413890848485528-1697445476246-1697445477069306487198.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Chắc hẳn trong quá trình sử dụng smartphone, không ít lần bạn cảm thấy như mình đang bị chiếc điện thoại nghe lén, khi nội dung cuộc trò chuyện của bạn nhanh chóng bị biến thành quảng cáo trên các mạng xã hội. Tuy nhiên, theo một chuyên gia an ninh mạng, "chúng không nghe lén bạn".

        Trong buổi phỏng vấn với trang PhoneArena, Jake Moore, cố vấn an ninh mạng cho công ty bảo mật ESET với kinh nghiệm hơn một thập kỷ làm việc với các mối đe dọa trực tuyến, cho biết: "Facebook, Meta, Instagram – họ không được phép nghe lén. Các ứng dụng này không có khả năng nghe lén […] Tôi chưa bao giờ thấy bất kỳ bằng chứng khoa học, xác thực nào cho thấy chúng đang lén nghe mọi cuộc trò chuyện."
        
        Vậy tại sao chúng ta lại có cảm giác cuộc trò chuyện bị theo dõi?
        
        Cần phải nói rõ là điện thoại thực sự có khả năng nghe. Đó là cách trợ lý giọng nói hoạt động. Nếu được phép, chúng có thể nghe các từ đánh thức như "Hey Siri" và "OK Google" và chuyển từ chế độ chờ sang hành động. Đó là một tính năng mà bạn chủ động đồng ý kích hoạt.
        
        Điều mà điện thoại không được phép làm là chủ động và bí mật lắng nghe mọi điều chúng ta nói. Chúng không thể ghi lại các cuộc trò chuyện của chúng ta để phân phát quảng cáo dựa trên những gì chúng nghe được.

        Nhưng ngay cả khi không có khả năng này, Meta và Google cũng đã biết rất nhiều về chúng ta – nhiều hơn hầu hết những gì mọi người nhận ra. Họ biết tuổi tác, giới tính và tình trạng gia đình của chúng ta; họ biết chúng ta sống ở đâu và ghé thăm những địa điểm nào; họ biết chúng ta kết bạn với ai và quan tâm đến điều gì; họ biết chúng ta tìm kiếm gì, nội dung chúng ta xem, thương hiệu chúng ta mua, chủ đề chúng ta quan tâm.
        
        Và những gã khổng lồ công nghệ rất giỏi trong việc kết nối các dữ liệu này lại với nhau và sau đó sử dụng để hiển thị quảng cáo cho chúng ta, những quảng cáo mà chúng ta có nhiều khả năng sẽ xem hoặc click vào.
        
        Thêm vào đó là một loạt thành kiến và xu hướng mà tất cả chúng ta đều có, và công thức cho sự nghi ngờ bắt đầu hình thành.
        
        Là do bộ não "giở trò"?
        
        Có thể bạn đã từng mua một món đồ và sau đó chợt cảm thấy rằng mọi nơi mình đến đều có người sử dụng món hàng tương tự, nhưng đó là hành vi của não bộ báo hiệu cho biết bạn đang quan tâm đến một thứ gì đó.
        
        Bạn hãy thử xem video thử nghiệm sự chú ý chọn lọc dưới đây, và đếm số lần quả bóng được chuyền tay.
        
        Thí nghiệm về sự chú ý chọn lọc của con người
        Bạn có thấy người mặc đồ khỉ đột bước qua trong video không? Nhiều người không nhận ra điều đó.
        
        Theo PhoneArena, bộ não nhiều khi có thể đánh lừa chúng ta. Tóm lại, bộ não của chúng ta có xu hướng chỉ tập trung vào những gì hiện tại, quan trọng và có thể có tác dụng ngay lập tức. Các thông tin khác được lọc qua vì việc tiếp nhận mọi thứ từ mọi nơi mọi lúc sẽ khiến bạn choáng ngợp. 
        
        Điều này ảnh hưởng gì đến những quảng cáo mà ta nhận thấy?
        
        Các nghiên cứu cho thấy chúng ta nói hàng nghìn từ mỗi ngày và chắc chắn trong số đó có những từ khóa có thể liên quan đến sản phẩm, dịch vụ hoặc doanh nghiệp được quảng cáo trực tuyến. Đồng thời, số lượng quảng cáo chúng ta nhận được hàng ngày lên tới hàng trăm. Do đó, nếu điện thoại đang lắng nghe chúng ta để phân phát quảng cáo, thì cũng hợp lý khi nghĩ rằng sẽ luôn có các quảng cáo đặc biệt hướng đến chúng ta.
        
        Nhưng vấn đề mà mọi người không chú ý là vẫn còn hàng trăm trường hợp quảng cáo không khớp với những gì họ đã nói. Mặt khác, mọi người chỉ chú ý đến các kết quả trùng khớp, có thể là do nội dung trong quảng cáo đã xuất hiện trong tâm trí họ trước đó. Rốt thì dù sao họ cũng đã có một cuộc trò chuyện về nó.
        
        PhoneArena cho biết đôi khi, nó chỉ là sự kết hợp giữa các mẫu dữ liệu của Facebook và nền tảng tương tự. Hãy nhớ: Google và Meta biết nhiều về bạn và thói quen của bạn hơn bạn nghĩ – vì vậy, khi quảng cáo về một nhà hàng yêu thích xuất hiện ngay sau khi bạn đề cập đến nó, điều đó rất có thể là do bạn đã đến đó thường xuyên vào cùng thời gian đó trong ngày. Quảng cáo đó cũng sẽ hiện lên dù bạn có trò chuyện về nó hay không.
        
        Facebook và Google đều đã từng thừa nhận lén nghe cuộc trò chuyện của người dùng, nhưng không phải ở mọi nơi. Facebook cho biết họ từng lưu lại bản ghi cuộc gọi Messenger, Google cũng thừa nhận có nghe lén cuộc trò chuyện qua trợ lý ảo. 
        
        "Không. Chúng tôi hiểu rằng đôi khi quảng cáo có thể rất cụ thể, có vẻ như chúng tôi đã nghe cuộc trò chuyện của bạn qua micro nhưng thực tế không phải vậy. Chúng tôi chỉ sử dụng micro của bạn nếu bạn đã cho phép và đang sử dụng tính năng yêu cầu micro.", Facebook cho biết trên trang hỗ trợ của mình`,
        publishDate: new Date('2023-10-16T10:00:00.000Z'),
        author: 'ĐÔNG PHONG',
        category: 'news',
        url: 'https://genk.vn/facebook-co-nghe-len-de-quang-cao-chuyen-gia-an-ninh-mang-khang-dinh-khong-20231016145853126.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/japantoyota-1697431413022-1697431413890848485528-1697445476246-1697445477069306487198.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Các sứ mệnh khám phá không gian tiếp theo để hiểu rõ hơn về Hệ Mặt trời sẽ được thực hiện trên Mặt trăng. Tuy nhiên, trọng lực của Mặt trăng thấp, tình trạng bụi lơ lửng khi tàu thám hiểm Mặt trăng di chuyển trên bề mặt sẽ ảnh hưởng đến hệ thống các phương tiện thám hiểm.

        Một giải pháp để giảm thiểu vấn đề này là xây dựng đường sá và hệ thống bãi đáp trên Mặt Trăng. Trong khi đó, để tăng tính bền vững của các sứ mệnh khám phá Mặt trăng trong tương lai, các kỹ thuật thăm dò cũng nên sử dụng nguồn tài nguyên tại chỗ.
        
        Do chi phí vận chuyển vật liệu, thiết bị từ Trái đất rất cao, nên trong tương lai con người sẽ chế tạo các vật thể trực tiếp ngay trên bề mặt Mặt trăng. Nguồn nguyên liệu thô và năng lượng có thể được thu hoạch trực tiếp từ bề mặt Mặt Trăng, chỉ một số thiết bị và vật tư hiếm hoi mới được mang từ Trái đất.
        
        Kỹ sư Juan-Carlos Ginés-Palomares cho biết, những con đường, bãi đáp như vậy có thể hữu ích cho các sứ mệnh thăm dò Mặt trăng trong tương lai, vì chúng có thể cung cấp cơ sở hạ tầng cho tàu vũ trụ hạ cánh, di chuyển xung quanh mà không làm bay các lớp bụi mịn Mặt Trăng . Thậm chí, cách này cũng phần nào làm giảm việc hư hỏng, tắt nghẽn, bào mòn các thiết bị thăm dò trên tàu vũ trụ.
        
        Theo kết quả từ cuộc thí nghiệm mới liên quan đến tia laser CO2 công suất cao và một chất nhân tạo giống như bụi Mặt trăng, trong tương lai chùm ánh sáng Mặt trời tập trung có thể được sử dụng để xây dựng những con đường trải gạch bụi lát nền ngay trên Mặt trăng, bằng cách làm tan chảy các lớp bụi Mặt trăng đó.
        
        Ý tưởng này của nhóm nhiên cứu do Kỹ sư Juan-Carlos Ginés-Palomares dẫn đầu. Nội dung chính của ý tưởng là triển khai bộ thiết bị tập trung năng lượng ánh sáng Mặt trời tích hợp thấu kính để làm tan chảy lớp regolith (chứa đá rời và bụi Mặt Trăng), thay vì dùng các hệ thống máy sưởi phải cần pin Mặt trời để cung cấp năng lượng cho hoạt động tương tự.
        
        “Bộ thiết bị tập trung năng lượng Mặt trời sử dụng ánh sáng Mặt trời trực tiếp để làm tan chảy vật liệu ”, theo Ginés-Palomares, người làm việc tại Đại học Kỹ thuật Berlin. Ông cho biết không cần phải chuyển đổi năng lượng Mặt trời thành điện năng để thực hiện quy trình này, đó là một điểm cộng.
        
        Tuy nhiên, nhóm nghiên cứu cho biết, những thiết bị như vậy cần thấu kính khổng lồ, đắt tiền. Để có được ý tưởng này, giới nghiên cứu đã sử dụng tia laser CO2 công suất cao để thực hiện cuộc thí nghiệm sơ bộ.
        
        Bằng cách bắn tia laser CO2 công suất cao vào lớp regolith nhân tạo (mô phỏng lớp vật liệu đá rời, bụi Mặt Trăng), kết quả cho thấy nó có thể tạo ra những viên gạch bụi Mặt trăng đường kính khoảng 25 cm. Nhóm chuyên gia đã điều chỉnh thử nghiệm này để cho ra các viên gạch dạng hình học đồng nhất.
        
        Kết quả là chúng có thể lồng vào nhau để tạo thành các mảng gạch bụi hoàn chỉnh. Ngoài đời thực khi kết hợp với nhau, những mảng gạch này sẽ làm nên một con đường hoặc vỉa hè, giúp các tàu thám hiểm Mặt trăng di chuyển dễ dàng hơn. 
        
        Mặc dù thí nghiệm này được thực hiện trên Trái đất, nhưng kết quả cho thấy đầy tiềm năng,  có thể được nhân rộng trên Mặt trăng trong tương lai. Tuy nhiên, các chuyên gia nói thêm rằng, vẫn cần phải làm nhiều việc hơn nữa để hoàn thiện quy trình nghiên cứu này.
        
        Chuyên gia dự án, ông Ginés-Palomares cho biết, kết quả ban đầu rất hứa hẹn, nhưng cần nhiều nghiên cứu hơn nữa, trước khi Mặt trăng có những con đường lát gạch đầu tiên.
        
        Ông nói: “ Độ chắc chắn, ổn định của những viên gạch này phải được kiểm chứng qua sức nặng của tàu vũ trụ, thiết bị do thám. Đồng thời, phải tìm hiểu xem quá trình chế tạo gạch bụi lát nền Mặt trăng có diễn ra suôn sẻ, thuận lợi trong điều kiện trọng lực thấp như ở trên Mặt Trăng hay không" .`,
        publishDate: new Date('2023-10-16T10:00:00.000Z'),
        author: 'HUỲNH DŨNG',
        category: 'Khám phá',
        url: 'https://genk.vn/sang-kien-doc-dao-mo-ra-ky-nguyen-duong-sa-tren-mat-trang-20231016144355688.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/mat-trang-1-08164445-1697442073020-16974420733121315752683.png',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Tháng 9/2022, FPT gây bất ngờ khi công bố sản xuất thành công chip vi mạch, đánh dấu cho bước lấn sân sâu hơn của tập đoàn công nghệ này trong lĩnh vực chip bán dẫn. Đến tháng 4/2023, FPT cho biết đã nhận được đơn hàng quy mô 25 triệu chip từ đối tác nước ngoài và sẽ hoàn thành từ nay đến 2025.

        Trên thực tế, chip bán dẫn là một trong những lĩnh vực được tập đoàn đầu tư phát triển gần 10 năm nay. Tại buổi công bố sự kiện FPT Tech day 2023, ông Nguyễn Văn Khoa - Tổng giám đốc FPT cho biết sau 35 năm phát triển, tập đoàn sẽ có những chiến lược mới, trong đó công nghệ bán dẫn - chip là một trong các trọng tâm chính. 
        
        Theo ông Nguyễn Vinh Quang - Giám đốc FPT Semiconductor (doanh nghiệp phụ trách mảng chip của Tập đoàn), hiện nay dòng sản phẩm mà FPT tập trung sản xuất là chip nguồn, chưa làm chip IOT. Theo ông Quang, đây là sản phẩm có nhu cầu lớn, đặc biệt khi 5G phát triển, lượng thiết bị IOT tăng lên.
        
        "Dòng sản phẩm của chúng tôi có thể bán cho rất nhiều thị trường, trong các ứng dụng khác nhau. Tuy nhiên, cách của chúng tôi là đứng vững ở thi trường Việt Nam, sau đó đi đến thị trường thế giới. Bối cảnh thế giới hiện nay đang thiếu chip trầm trọng. Cuộc đối đầu về công nghệ giữa Trung Quốc và Mỹ cũng tạo ra khó khăn nhưng thuận lợi nhiều hơn cho Việt Nam trong lĩnh vực này", Giám đốc FPT Semiconductor nói.
        
        Chuyện &quot;thế giới đã sản xuất được chip có 1.000 chân, chúng ta mới sản xuất được 8 chân&quot; và màn đặt cược của FPT với ngành bán dẫn - Ảnh 2.
        Ông Nguyễn Vinh Quang - Giám đốc FPT Semiconductor
        
        
        Khi được hỏi về mức độ phức tạp của chip FPT so với các chip của các công ty kỳ cựu trên thế giới, khi mà "thế giới đã sản xuất được chip có đến 1.000 chân, chúng ta mới sản xuất được 8 chân" , ông Quang cho biết chip có nhiều loại và vì thế có các đặc điểm khác nhau.
        
        "Ví dụ như Nvidia - nhà sản xuất chip mà mọi người có thể đã đọc nhiều thông tin trong thời gian gần đây. Thực ra, ngay dòng chip của Nvidia bây giờ bán ra cực kỳ đắt tuy nhiên số lượng chân cũng chưa nhiều. Họ bán với giá 40.000 USD, một số bán với giá khoảng 10.000 USD mà không mua được, phải đặt hàng.
        
        Thêm nữa, nói thêm về công nghệ, kỹ sự Việt và kỹ sự FPT có thể sang Nhật, Mỹ để học hỏi kinh nghiệm và làm được các loại chip cao cấp hơn. Tuy nhiên, FPT đang lựa chọn đi theo hướng đó (sản xuất chip nguồn) bởi sản phẩm phải thương mại được, chứ không phải làm xong rồi đem trưng bày. Hướng đi của FPT là xác định làm gì thì phải sống được với sản phẩm đó", ông Quang phân tích.
        
        Đại diện FPT cũng tiết lộ sẽ sản xuất thêm các loại chip khác trong thời gian tới nhưng chưa thông tin cụ thể. Hiện tại, công ty đang nghiên cứu chip IOT, liên quan ứng dụng smarthome, nông lâm, thủy hải sản, sức khỏe.
        
        Tập đoàn FPT cũng nhận nhiệm vụ từ Chính phủ, đào tạo 10.000 người trong lĩnh vực bán dẫn. Khoa bán dẫn cũng đã được thành lập tại Đại học FPT, qua đó có được lực lượng tham gia vào lĩnh vực bán dẫn nhiều hơn. Đồng thời, Tập đoàn này xây dựng những chương trình đào tạo đặc biệt để có thể nhanh chóng chuyển dịch lực lượng CNTT sang làm chip, thay vì chỉ tập trung vào chương trình giảng dạy 4 năm tại trường Đại học.
        
        Là người đã dành cả thập kỷ làm việc trong lĩnh vực bán dẫn tại FPT, ông Nguyễn Vinh Quang nhận định về mặt bằng chung, nhân sự kỹ thuật về bán dẫn của Việt Nam không thua kém trên thế giới. Có nhiều người gốc Việt thành công ở mảng bán dẫn vi mạch nổi tiếng.
        
        Với khoảng 10.000 nhân sự trong ngành này mà FPT đào tạo, 1/3 sẽ làm việc cho các công ty tại Việt Nam, 2/3 có chương trình riêng tại nước ngoài và có cơ hội ra nước ngoài làm việc. 
        
        Bên cạnh chip bán dẫn, FPT cũng tập trung vào lĩnh vực Automotive, đặc biệt phục vụ cho ngành xe điện. Hiện nay, FPT đã cung cấp dịch vụ phần mềm cho 6 hãng xe trên thế giới. Riêng trong mảng công nghệ ô tô, FPT hiện có hơn 3.800 kỹ sư, chuyên gia công nghệ trên toàn cầu triển khai các dự án cho nhiều đối tác là các hãng xe hàng đầu thế giới. Mảng công nghệ trên ô tô của FPT đạt tiêu chuẩn AUTOSAR quốc tế, và tăng trưởng 40% trong năm 2022, đóng góp quan trọng vào việc hiện thực hóa mục tiêu 1 tỷ USD doanh thu xuất khẩu phần mềm vào năm 2023.
        
        Chuyện &quot;thế giới đã sản xuất được chip có 1.000 chân, chúng ta mới sản xuất được 8 chân&quot; và màn đặt cược của FPT với ngành bán dẫn - Ảnh 3.
        Không gian triển lãm FPT Techday 2023
        
        
        Tại sự kiện FPT Techday 2023, Tập đoàn công nghệ này sẽ trình diễn hàng loạt công nghệ tương ứng với chiến lược phát triển mới, ra mắt hệ sinh thái AI thế hệ mới cùng chuỗi hội thảo chuyên sâu về kinh doanh - công nghệ với sự tham gia của các diễn giả nổi tiếng như Andrew Ng - Top 100 người ảnh hưởng nhất toàn cầu trong lĩnh vực AI, Christopher Cuong T. Nguyen - Nhà sáng lập và Chủ tịch Aitomatic, ông Raymond Teh, Phó Chủ tịch cấp cao khu vực châu Á Thái Bình Dương, Ndivia Asia,... `,
        publishDate: new Date('2023-10-16T12:00:00.000Z'),
        author: 'HOÀNG THÙY',
        category: 'news',
        url: 'https://genk.vn/chuyen-the-gioi-da-san-xuat-duoc-chip-co-1000-chan-chung-ta-moi-san-xuat-duoc-8-chan-va-man-dat-cuoc-cua-fpt-voi-nganh-ban-dan-20231016093944745.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/139269124445442048/2023/10/16/ong-nguyen-van-khoa-tong-giam-doc-tap-doan-fpt01-1697423941841-1697423942504617772480.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Ý nghĩa của các chất bí ẩn
        Tàu thăm dò Chang'e-5 của Trung Quốc đã hoàn thành xuất sắc sứ mệnh đầu tiên vào năm 2020, đưa mẫu vật từ Mặt Trăng về Trái Đất và đây cũng là lần đầu tiên kể từ năm 1976, mẫu vật thu được từ Mặt Trăng được đưa về thành công. Điều thú vị nhất là các nhà khoa học đã phát hiện ra một chất bí ẩn trong những mẫu này, và nó có ý nghĩa rất lớn đối với việc khám phá không gian.
        
        Tầm quan trọng của việc phát hiện về một chất bí ẩn của Chang'e-5 là nó đã phá vỡ sự hiểu biết của nhân loại về Mặt Trăng. Mặt Trăng vốn được cho là một vật thể khô cằn, nhưng việc phát hiện ra chất bí ẩn đã làm thay đổi quan niệm đó. Những vật liệu này có thể đã bị bỏ lại trên Mặt Trăng khi Trái Đất được hình thành và chúng có thể chứa những thông tin có giá trị về lịch sử và nguồn gốc của Trái Đất. 
        
        Khám phá này có ý nghĩa rất lớn đối với việc khám phá không gian của con người. Mặt Trăng là cơ sở quan trọng để nhân loại tiến hành khám phá không gian sâu hơn và việc phát hiện ra các vật liệu bí ẩn cho thấy có thể còn nhiều kho báu chưa được biết đến trên Mặt Trăng. Điều này càng kích thích sự quan tâm và động lực của con người trong việc khám phá không gian bền vững. Trong các sứ mệnh không gian trong tương lai, chúng ta có thể mong đợi nhiều khám phá hơn nữa để tiếp tục khám phá những bí ẩn về Mặt Trăng và các thiên thể khác.
        
        Tầm quan trọng của chất bí ẩn được tàu Chang'e-5 của Trung Quốc phát hiện không chỉ nằm ở bản thân chất thu được mà còn ở bước đột phá của nó trong lĩnh vực thám hiểm không gian. Khám phá này đã có tác động quan trọng đến sự hiểu biết của nhân loại về Mặt Trăng, sự tiến bộ của việc khám phá không gian, sự phát triển của nghiên cứu khoa học và hợp tác quốc tế. Ví dụ thành công này truyền cảm hứng cho chúng ta tiếp tục tiến về phía trước, tiếp tục khám phá những bí mật của vũ trụ và có những đóng góp lớn hơn cho sự tiến bộ của nền văn minh nhân loại.
        
        Đặc điểm của chất bí ẩn
        Qua phân tích và thí nghiệm kỹ lưỡng trên các mẫu do Chang'e-5 trả về, các nhà khoa học phát hiện chất này chủ yếu được cấu tạo từ một loại hợp chất kim loại mới. Hợp chất kim loại này chứa nhiều nguyên tố khác nhau, chẳng hạn như sắt, magie, oxy, v.v.. Sự kết hợp của các thành phần này mang lại cho chất này những đặc tính hóa học đặc biệt cực kỳ hiếm trong tự nhiên.
        
        So với các chất đã biết khác, cấu trúc của chất bí ẩn này cũng cho thấy sự mới lạ lạ thường. Các nhà khoa học đã phân tích thành công cấu trúc tinh thể của nó thông qua các kỹ thuật tiên tiến như tinh thể học tia X. Điều đáng ngạc nhiên là cấu trúc tinh thể của chất này cực kỳ phức tạp, thể hiện một dạng hình học chưa từng có. 
        
        Nghiên cứu sâu hơn cho thấy chất này có đặc tính siêu dẫn - một hiện tượng trong đó dòng điện truyền đi không có điện trở, có ý nghĩa rất lớn đối với cộng đồng khoa học. Tuy nhiên, chất siêu dẫn như chúng ta biết hiện nay thường yêu cầu nhiệt độ cực thấp để đạt được.
        
        Chất bí ẩn này có thể biểu hiện tính siêu dẫn ở nhiệt độ cao hơn, khác biệt hoàn toàn với các chất siêu dẫn truyền thống. Khám phá này mang lại một hướng đi mới cho việc nghiên cứu các chất siêu dẫn mới và có tiềm năng rất lớn trong lĩnh vực năng lượng.
        
        Chất này cũng thể hiện tính chất quang học tuyệt vời. Các nhà khoa học đã sử dụng các kỹ thuật quang phổ tiên tiến để nghiên cứu đặc tính quang học của chất này. Kết quả cho thấy vật liệu này có khả năng hấp thụ mạnh các bước sóng ánh sáng nhất định, đồng thời chuyển đổi năng lượng sang dạng khác với hiệu suất cao. Đặc tính quang học này khiến chất bí ẩn này trở thành mối quan tâm lớn trong lĩnh vực quang điện tử và công nghệ thông tin.
        
        Chất này không chỉ độc đáo về thành phần mà còn có cấu trúc phức tạp và tính chất vật lý tuyệt vời. Khám phá này sẽ thúc đẩy hoạt động nghiên cứu của các nhà khoa học về vật liệu và công nghệ điện tử mới. Khi con người khám phá sâu hơn về chất bí ẩn này, chúng ta sẽ khám phá nhiều hơn về những bí ẩn của vũ trụ và tạo ra một tương lai tốt đẹp hơn.`,
        publishDate: new Date('2023-10-16T13:00:00.000Z'),
        author: 'ĐỨC KHƯƠNG',
        category: 'news',
        url: 'https://genk.vn/change-5-phat-hien-chat-bi-an-tren-mat-trang-20231014115541452.chn',
        active: true,
        cover: 'https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2023/10/14/18820368-0-image-a-271569235732527-1697258615952974840073.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Time to gird your browsers, y’all — Wi-Fi is getting another upgrade very soon. That’s right: about four years after Wi-Fi 6 debuted and two years after Wi-Fi 6E followed it up, Wi-Fi 7 is picking up the baton. And as someone who got his start reviewing routers, I am so tired.

        Okay, but seriously — Wi-Fi 7 could be an even bigger speed boost than Wi-Fi 6E was, thanks in part to the wide open spaces of the 6GHz band that 6E unlocked. It’s also supposed to deploy other tricks for speeding things up and bring new ways to cut through interference and drop the latency of your network.
        
        Does all of that sound familiar? Probably because the big headlining features of both Wi-Fi 6 and Wi-Fi 6E have been their interference-busting abilities and — particularly in the case of 6E — increased speed (assuming you have a compatible device).
        
        The good news is that Wi-Fi 7 will still work fine with your older stuff
        
        If you’re not happy about the idea of replacing all of your devices for the promise of a stable network, the good news is that Wi-Fi 7 will still work fine with your older stuff. And as you replace your phones, computers, and other wireless doodads down the line with ones that support the new standard, certain things should get much better. Whether you should buy a Wi-Fi 7 router now or wait is another question.
        
        What is Wi-Fi 7?
        You can think of Wi-Fi 7 as being to Wi-Fi 6E what Wi-Fi 6 was to Wi-Fi 5. It still operates on the 2.4GHz, 5GHz, and 6GHz bands, like Wi-Fi 6E, but it improves things by offering more potential bandwidth (faster downloads), bundling connections across bands (faster downloads and more stability), and using more signal modulation tricks for dealing with congestion. 
        
        Some of the marketing around Wi-Fi 7 centers on bringing you 8K video, but… I’m somewhat skeptical here. Even if 8K streaming were common, a compressed 8K feed would be lean enough for most modern routers to easily handle.
        
        The most immediate benefit of Wi-Fi 7 is actually raw speed.
        
        So Wi-Fi 7 will actually be faster?
        Yes, it will. According to Intel, a “typical” Wi-Fi 7 laptop could hit a “potential maximum” of nearly 5.8Gbps — that’s theoretical, but even hitting half that number would be extravagant for most people.
        
        What makes it faster for the most part is channel bandwidth, or the size of the pipe that data is shoved through. Wi-Fi 7 doubles the maximum channel bandwidth to 320MHz, compared to the 160MHz you might get on nicer Wi-Fi 5, 6, and 6E routers. It’s a bigger pipe, and it fits more data. That’s pretty straightforward, although only the 6GHz band supports those big ol’ channels — there’s not enough room on the 5GHz band.
        
        The new spec also supports combining bands into a single connection with a feature called Multi-Link Operation (MLO). As a rough exercise, that means if you can download a file at, say, 1Gbps on the 6GHz band and on the 5GHz band at 700Mbps, combining the two could get you up to 1.7Gbps. It also means that if one of those connections stops working for some reason, your device can just fall back to the other one. How well this works in practice remains to be seen when we get to test Wi-Fi 7 routers and devices together.
        
        Wi-Fi 7 also doubles the number of MU-MIMO spatial streams: simultaneous streams to and from other devices. Wi-Fi 6 supports 8 x 8 MU-MIMO, which means a router with eight antennas can talk to eight devices (or one device with eight antennas) and can transmit as many as eight simultaneous streams to each device. For Wi-Fi 7, it’s 16 x 16, but don’t get too excited. Consumer-grade Wi-Fi 6E routers, even pricey ones like Netgear’s Nighthawk RAXE500, generally offer 4 x 4 MU-MIMO, despite the 6E standard being capable of more. It’s also hard to find phones, laptops, and other Wi-Fi-enabled devices that do better than 2 x 2 MU-MIMO.
        
        Will Wi-Fi 7 make my smart home reliable?
        The smart home has gotten better over the years, but devices can still be sluggish or even nonresponsive in a busy wireless environment. There are features tucked into the Wi-Fi 7 spec that may help with that down the line.
        
        When your smart home devices are sluggish, one reason can be that they’re just waiting their turn
        
        One of the big bottlenecks with wireless transmission is airtime — if the router is too busy talking to one or more devices (depending on the standard being used), then others vying for attention have to wait for it to finish. It happens over scant fractions of a second, but with enough network chatter, that time can build up. When your smart home devices are sluggish, one reason can be that they’re just waiting their turn.
        
        Wi-Fi 7 attempts to compensate for this by cramming extra data into what’s called a carrier wave, using a technique called OFDMA. Wi-Fi 6E does this, too, but interference can keep it from using all of that wave, even if the interference isn’t occupying more than a bit of it. Wi-Fi 7 basically ignores the interference and puts the rest of the data on the clear bits, like a river going around a rock and meeting back on the other side.
        
        Unfortunately, OFDMA isn’t backward-compatible with older devices, so when a Wi-Fi 7 router encounters a smart home device that only uses Wi-Fi 4, for instance, it meets that device on its own terms, using that standard’s capabilities — so everyone else is back to waiting in line. So yes, Wi-Fi 7 can help your smart home be better, but it won’t until you’ve moved everything to the new standard — assuming it’s not all using Matter-over-Thread by then, if that ever happens.
        
        What else will Wi-Fi 7 be good for?
        Mesh systems can be a great way to get Wi-Fi coverage throughout your home. But right now, they rely on single wireless connections for backhaul — the wireless or wired connection between mesh nodes — which can be tricky when that band gets congested, forcing the router to switch to another band, which, in turn, can impact throughput while the system rebuilds its backhaul connection. According to Asus’ website, a Wi-Fi 7 mesh system would, through MLO, be able to “switch freely between bands,” leading to no apparent connection loss.
        
        You might also see less lag on your network thanks to MLO and OFDMA in Wi-Fi 7. The ability to connect to multiple bands at once combined with fancy signal modulation means there may be fewer occasions when your devices are waiting in line for other requests on your network to process. 
        
        When will I get Wi-Fi 7 in my devices?
        As I said above, you can buy Wi-Fi 7 routers now. But you shouldn’t rush out to get one — only a handful of devices can support the standard, which, again, isn’t even officially finalized yet. 
        
        The chips are already out there, though. Qualcomm’s FastConnect 7800 mobile wireless chipset was released in 2022 and is even already in some phones, like the Samsung Galaxy S23 Ultra, though Samsung would need to enable Wi-Fi 7 for those phones to support it.
        
        You’ll also find Wi-Fi 7 compatibility in the 16-inch Acer Swift Edge laptop, and Intel’s BE200 Wi-Fi 7 network card is due out before the end of 2023. Other computers supporting the standard should start coming out throughout next year from the other major manufacturers.
        
        The caveats
        These are early days, and most of the benefits of Wi-Fi 7 won’t be felt until manufacturers start defaulting to it, which could take time. After all, you can still find plenty of products that top out at Wi-Fi 5. Unless you’re absolutely into being on the bleeding edge, there really aren’t any practical reasons to dive into the updated spec with a new router.
        
        That’s especially true because, as I write this, the Wi-Fi 7 standard hasn’t yet been adopted by the Institute of Electrical and Electronics Engineers (IEEE), so routers available before then could be missing key features or optimizations. Some of the features, like the doubled channel width, offer concrete, knowable benefits. Others, like MLO, are promising but new and haven’t really been independently tested.
        
        Lastly, the early routers will, by all accounts, be some of the most expensive ever released. The Eero Max 7 mesh system, for example, is expected to be priced just shy of $1,700 for a three-pack when it’s available.
        
        So should I buy a Wi-Fi 7 router now or wait?
        If you’re hoping for Wi-Fi 7 to fix your whole network, you should wait. With the spec incomplete and so few devices supporting it, you wouldn’t see the benefit from it for months or even years.
        
        It’s also a good idea to hold off until the spec is finalized and the Wi-Fi Alliance starts certifying Wi-Fi 7 routers — that way you know it’s fully compliant with the finished standard. Until then, those routers are likely to be too expensive, with wireless devices supporting their fancy features too few to make it worth the cost.`,
        publishDate: new Date('2023-10-17T12:09:00.000Z'),
        author: 'Wes Davis',
        category: 'news',
        url: 'https://www.theverge.com/23902812/wi-fi-7-explained',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24957254/236811_WIFI7_CVirginia_12.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `It’s happening: people are once again walking into public places wearing a video-recording face computer on their heads. Only this time, the faceputer is sold by Meta, not Google.

        Say hello to Meta’s Glassholes.
        
        Over the weekend, as buyers got their first uninterrupted stretches of time with the new Meta Quest 3 headset, some started posting videos of themselves interacting with the real world instead of playing games.
        
        Sure, it’s cool to blast low-poly baddies breaking through your walls, but isn’t it more technically impressive that Meta’s new headset lets you cook a meal or sweep your floors or enjoy a fancy coffee on a beautiful day without ever taking off the machine? That’s what the Quest 3’s full-color, low-latency passthrough video allows.
        
        It didn’t take long for people to begin pushing the limits — both technologically and socially. Jay Mayo walked the New York Comic-Con floor with the headset on, recording clips of strangers along the way.
        
        Kukurio59 filmed themselves waiting for an elevator, already one of the most socially awkward spaces humanity has to offer. (They also filmed some less public demos.)
        
        And, in the video you already saw atop this post, XR and AI booster Cix Liv went nearly full Glasshole by walking straight into a San Francisco coffee shop and placing an order, without bothering to hide the cafe’s address.
        
        Here’s that video again:
        
        I spoke to Ray Ng, co-owner of Fiddle Fig Cafe, the coffee shop in question, and he thinks it was just “a stunt for laughs and giggles.” Liv didn’t sit down and drink his coffee with the headset on, says Ng. “They took the set off, sat down, and that was it,” he tells me over the phone. The whole thing was over in “maybe 5 minutes.”
        
        But that won’t necessarily stop other attention-seekers from following Liv’s lead — they might even embolden each another. “Now I don’t feel bad walking around with the headset during comic con,” Mayo replied to Liv, after the artist who filmed themselves walking around New York Comic-Con saw Liv’s cafe video.
        
        Related
        Ready or not, the Glassholes are coming back
        Ray-Ban Meta Smart Glasses hands-on: in pursuit of content
        Google has reportedly killed its Project Iris augmented reality glasses
        From 2014: Google tells Glass users not to be ‘Glassholes’
        We’ve been through all of this before, of course — a decade ago, public opinion turned against Google Glass, with public business owners in particular coming out against the tech. Diners, movie theaters, casinos, bars, and other public establishments outright banned the headset — one woman was allegedly assaulted for wearing Google Glass in San Francisco, and an XR pioneer was assaulted in Paris while using a similar-looking device.
        
        But that was a decade ago, and I argued last year that our definition of privacy, our tolerance for public photography, and our resistance to wearable technology have all changed considerably since Google first introduced Glass. Maybe it won’t be such a problem this time around? Smartphone cameras everywhere is now the norm, and small businesses often benefit from an influencer plug; Ng was fine with me naming Fiddle Fig Cafe in this story.
        
        I do wonder if Meta was prepared for the Quest 3 to be the glasshole’s headset of choice, though. While the company has put considerable thought into making sure its glasses-like Ray-Bans don’t fall into the same trap — publishing privacy explainers and guidelines on using those glasses in public, including proactively letting people know you’re recording — the Quest 3 doesn’t seem to have similar published guidelines.
        
        It’s also a bit harder for bystanders to tell when the Quest 3 is recording. It simply pulses a white light, slowly, and it’s a light that’s already on by default. When I asked my wife if she thought I was recording, she said she had no clue.
        
        Then again, if I saw someone walking into a cafe with a bulbous white object atop their face with multiple camera slits, I’d just automatically assume they were recording absolutely everything.
        
        Meta didn’t respond to a request for comment.`,
        publishDate: new Date('2023-10-17T07:08:00.000Z'),
        author: 'Sean Hollister',
        category: 'news',
        url: 'https://www.theverge.com/23920102/meta-quest-3-in-public-privacy-recording-glassholes',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1558/750x500/filters:focal(1835x532:1836x533):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25007956/meta_quest_3_elevator_mixed_reality.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `A new house in the Bahamas is built with an alternative concrete that sucks CO2 out of the air. It’s a home that’s supposed to help in the fight against climate change, and the plan is to build 999 more like it.

        That’s the slam dunk NBA Lakers legend-turned-actor Rick Fox is working toward now on the small island nation where he grew up. Fox is the CEO and co-founder of the sustainable building materials startup Partanna that unveiled its first home today. If they’re successful in the Bahamas, the goal is to make its alternative concrete an everyday building material that could cut down pollution from construction.
        
        “I shut down my entire career that was in Hollywood to pursue and create [climate] solutions,” Fox tells The Verge. “I had to move around the industry that was new to me and meet people that were looking at me like, ‘What the hell are you doing in concrete?’”
        
        “What the hell are you doing in concrete?”
        
        Concrete just happens to be a major source of the greenhouse gas emissions causing more intense storms, wildfires, and other catastrophes through climate change. The culprit is actually cement, a key ingredient in concrete that alone is responsible for more than 8 percent of carbon dioxide emissions globally. 
        
        “My entry into the world of concrete was one out of just sheer survival and the need to innovate in my own home country,” Fox says. Hurricane Dorian struck the Bahamas in 2019, wrecking 75 percent of homes on the worst hit island of Abaco and displacing thousands of people. Fox was in Los Angeles at the time. “The closest thing I could do was race to CNN to scream from the rooftops that we needed to do something better,” he says.
        
        Soon after, he met California-based architect Sam Marshall, whose home had sustained damage in the 2018 Woolsey fire, one of the most destructive blazes in the state’s history. Marshall had already “caught lightning in a bottle,” according to Fox. Working with material scientists, they’d developed a way to make concrete without using carbon-intensive cement. Together, they co-founded Partanna.
        
        The pair are pretty tight-lipped around the process, but the main ingredients are brine from desalination plants and a byproduct of steel production called slag. By getting rid of cement as an ingredient, Partanna can avoid the carbon dioxide emissions that come with it. Making cement produces a lot of climate pollution because it has to be heated to high temperatures in a kiln and because it triggers a chemical reaction that releases additional CO2 from limestone.
        
        Related
        Microsoft is testing low-carbon concrete for its data centers
        In a first, climate tech companies say they trapped atmospheric CO2 in concrete
        The house of the future could be built with dirty diapers
        Partanna says its mixture can cure at ambient temperatures, so it doesn’t have to use as much energy. It also says binder ingredients in the mixture absorb CO2 from the air and trap it in the material. In a home or building, the material continues to pull in CO2. Even if that structure is demolished, the material holds onto the CO2 and can be reused as an aggregate to make more of the alternative concrete.
        
        That’s how the startup and can call its material and the newly constructed home “carbon negative.” The 1,250-square-foot structure is supposed to have captured as much CO2 as 5,200 mature trees a year.
        
        To be sure, carbon-counting with trees is tricky. A Guardian investigation earlier this year found that 90 percent of rainforest offsets certified by one of the world’s leading carbon credit certifiers, Verra, are “worthless” because they likely didn’t lead to actual reductions in pollution. Verra is also certifying carbon credits for Partanna. Fox says the CO2 Partanna captures is easier to quantify than forest offsets and isn’t as vulnerable as forests that need to be protected from deforestation in order to store carbon.
        
        It’s also worth noting that Partanna’s key ingredients, slag and brine, come from energy-intensive steel and desalination facilities that can produce a lot of CO2 emissions on their own. Partanna isn’t counting those emissions in its carbon footprint. “That’s not on us ... These are waste materials that we are taking and using for good,” Fox says.
        
        “It’s good that they’re making use of waste,” says Dwarak Ravikumar, an assistant professor at the School of Sustainable Engineering and the Built Environment at Arizona State University. Even so, Ravikumar says, “We need to conduct a robust analysis of this from a systems perspective to understand what is the overall climate impact.” It’s important for the company to share its data so that researchers can assess Partanna’s entire environmental footprint and how scalable its strategy is, he says.
        
        “We are not just on the frontline of climate change; we are the frontline of solutions.”
        
        Fox isn’t the only one on a mission to make a more sustainable building material than traditional concrete. Microsoft announced last month that it’s testing low-carbon concrete for its data centers. And other startups are working to take CO2 out of the atmosphere and trap it in concrete.
        
        Partanna says it has an edge since its material is made with brine. It’s actually supposed to get stronger with exposure to seawater — an attractive trait to a country made up of many low-lying islands exposed to worsening storms and sea level rise.
        
        “We are not just on the frontline of climate change; we are the frontline of solutions,” Philip Davis, prime minister and minister of finance of the Bahamas, said in a Partanna press release.
        
        The Bahamian government is partnering with Partanna to build 1,000 homes, starting with a community of 29 more houses that are supposed to be built by next year. No one is living in the first one in Nassau yet; it’s a prototype. But the next are expected to be part of a program to help first-time homeowners.`,
        publishDate: new Date('2023-10-16T11:01:00.000Z'),
        author: 'Justine Calma',
        category: 'news',
        url: 'https://www.theverge.com/2023/10/16/23916106/nba-lakers-rick-fox-concrete-alternative-house-partanna-climate-change',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:6754x4503/750x500/filters:focal(3377x2252:3378x2253):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25001154/RA23101115192003323.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Some Pixel 6 users are reporting strange issues after updating their devices to the new Android 14 OS, which launched on October 4th for Pixel devices. One critical-sounding bug that seems to have spread to multiple users is losing access to internal storage, which ends up in a complete loss of data. Others seem to have other odd issues, like repeat UI launcher crashes. A Verge tipster pointed out the reports, which show a pattern of striking users with multiple user accounts set up on their devices.

        The original poster reports “storage is full” errors once they rebooted following an overnight update to Android 14, while another commenter said they lost access to internal storage entirely. The Android 14 update launched officially last week alongside Google’s new Pixel 8 devices with updates to the UI, additional customization options, and more.
        
        I have personally tried to reproduce the issue on my Pixel 6A by setting up a new account and attempting to run software updates. While I did not get storage issues, my 6A did crash multiple times. I also got a “System UI isn’t responding” error. But if I switch back to the other account, the issues are no longer present. I should mention that I am on the Android 14 beta, and I have not run into any other issues since attempting this.
        
        We reached out to Google for comment on the issues presented by the users, but we didn’t hear back by the time of publication.`,
        publishDate: new Date('2023-10-17T06:08:00.000Z'),
        author: 'Umar Shakir',
        category: 'Tech',
        url: 'https://www.theverge.com/2023/10/16/23919957/pixel-6-android-14-upgrade-bugs-multiple-user-profiles',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24007893/acastro_STK112_android_02.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
        content: `Apple may have a surprise iPad update announcement in store for this week. 9to5Mac initially said it corroborated a report from Supercharged that Apple will announce spec bumps for three of its iPads — the base model, the iPad Air, and the iPad Mini. Meanwhile, other rumors say we won’t get any new iPads, or there is an announcement but it’s actually a new stylus, or that maybe there is a new version of the iPad getting announced on Tuesday after all.

        However, MacRumors points out that the Japanese blog Mac Otakara reports a more likely announcement is a third-generation Apple Pencil instead of new versions of the tablets. Since then, 9to5Mac said its sources indicate only “something” iPad-related is landing this week.
        
        In a story Sunday morning for Bloomberg, Mark Gurman said, “I don’t believe updates of any significance are imminent,” while also mentioning Apple has versions of the iPads with new chips in development.
        
        A September post on X from the leaker Majin Bu said that the Apple Pencil 3 would add interchangeable magnetic tips to the mix. On Monday evening, MacRumors pointed out another post from Majin Bu claiming that “the new 11 gen 10.9 inch iPad that Apple will present tomorrow will have the exact same design as the 10 gen model, furthermore the accessories will be perfectly compatible.”
        
        9to5Mac says Apple will issue a press release announcing that the iPad Air and the iPad Mini will be bumped to M2 and A16 Bionic chips, respectively. Apple refreshed the iPad Air and 10th-generation iPad last year, but it’s been twice as long since the company updated the iPad Mini with an A15 Bionic chip.
        
        Related
        Apple iPad Air (2022) review: it’s the nice one
        The article points to a rumor that the iPad Mini’s display controller will be updated to address that jelly scroll issue. Other than that and upgraded guts, though, 9to5Mac writes that Apple isn’t changing much else, so don’t expect a bigger refresh like the OLED displays the next iPad Pro is rumored to have coming.
        
        Update October 16th, 5:03PM ET: Added additional reports about a possible Apple Pencil 3 announcement.
        
        Update October 16th, 6:19PM ET: Added report of a new base iPad.`,
        publishDate: new Date('2023-10-17T05:19:00.000Z'),
        author: 'Wes Davis and Richard Lawler',
        category: 'Tech',
        url: 'https://www.theverge.com/2023/10/15/23917926/apple-ipad-air-mini-tablet-m2-a16-bionic-rumor',
        active: true,
        cover: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951261/VRG_Illo_N_Barclay_5_apple.jpg',
        commentCount: 0,
        viewCount: 0,
        source : {
            sourceId : 1,
            sourceName : 'abc',
            sourceUrl : 'https://www.google.com',
            sourceLogo : 'https://www.google.com',
            sourceDescription : 'abc',
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
