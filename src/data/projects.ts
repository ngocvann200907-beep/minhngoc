import { Project } from '@/components/ProjectCard';

export const projects: Project[] = [
  {
    id: '1',
    number: 1,
    chapter: 'Chương 1',
    title: 'Máy tính và thiết bị ngoại vi',
    summary: 'Tìm hiểu về cấu tạo máy tính, các loại thiết bị ngoại vi và cách chúng phối hợp hoạt động. Bài tập giúp tôi hiểu rõ hơn về phần cứng và cách lựa chọn thiết bị phù hợp với nhu cầu.',
    objectives: [
      'Hiểu cấu tạo cơ bản của máy tính và chức năng các thành phần',
      'Phân biệt được các loại thiết bị ngoại vi (nhập, xuất, lưu trữ)',
      'Biết cách đánh giá và lựa chọn thiết bị phù hợp nhu cầu cá nhân',
    ],
    process: {
      steps: [
        'Nghiên cứu tài liệu về cấu trúc máy tính',
        'Khảo sát thiết bị cá nhân đang sử dụng',
        'So sánh và phân loại các thiết bị ngoại vi',
        'Tổng hợp và viết báo cáo',
      ],
      tools: ['Google Docs', 'Canva', 'ChatGPT'],
    },
    analysis: {
      strengths: ['Phân loại rõ ràng', 'Có ví dụ thực tế', 'Trình bày mạch lạc'],
      improvements: ['Cần thêm hình ảnh minh họa', 'Đào sâu hơn về thông số kỹ thuật'],
      lessons: ['Hiểu rõ hơn thiết bị mình dùng', 'Biết cách đánh giá sản phẩm công nghệ'],
    },
    aiUsage: [
      'Gợi ý cấu trúc bài viết',
      'Giải thích thuật ngữ kỹ thuật',
      'Kiểm tra ngữ pháp và văn phong',
    ],
    integrity: 'Tôi đã sử dụng AI như công cụ hỗ trợ tìm hiểu, nhưng toàn bộ nội dung được viết lại theo cách hiểu của bản thân. Không sao chép nguyên văn từ bất kỳ nguồn nào.',
  },
  {
    id: '2',
    number: 2,
    chapter: 'Chương 2',
    title: 'Khai thác dữ liệu và thông tin',
    summary: 'Học cách tìm kiếm, đánh giá và sử dụng thông tin hiệu quả trong môi trường số. Rèn luyện kỹ năng phân biệt nguồn tin đáng tin cậy và tổ chức thông tin khoa học.',
    objectives: [
      'Sử dụng thành thạo các công cụ tìm kiếm nâng cao',
      'Đánh giá độ tin cậy của nguồn thông tin',
      'Tổ chức và lưu trữ thông tin một cách có hệ thống',
    ],
    process: {
      steps: [
        'Thực hành tìm kiếm với Google Scholar và các CSDL',
        'Áp dụng tiêu chí CRAAP để đánh giá nguồn tin',
        'Sử dụng Notion để tổ chức thông tin thu thập',
        'Tạo bản tóm tắt và phân loại theo chủ đề',
      ],
      tools: ['Google Scholar', 'Notion', 'Zotero', 'ChatGPT'],
    },
    analysis: {
      strengths: ['Biết đánh giá nguồn tin', 'Tổ chức thông tin logic', 'Ứng dụng được vào học tập'],
      improvements: ['Cần mở rộng nguồn tìm kiếm', 'Rèn thêm kỹ năng trích dẫn'],
      lessons: ['Không phải mọi thông tin online đều đáng tin', 'Tổ chức tốt giúp tiết kiệm thời gian'],
    },
    aiUsage: [
      'Hỗ trợ tóm tắt các bài nghiên cứu dài',
      'Gợi ý từ khóa tìm kiếm liên quan',
      'Giải thích các khái niệm chuyên ngành',
    ],
    integrity: 'Mọi thông tin đều được kiểm chứng từ nhiều nguồn. AI chỉ được dùng để hỗ trợ hiểu nội dung, không thay thế việc đọc và phân tích của bản thân.',
  },
  {
    id: '3',
    number: 2,
    chapter: 'Chương 3',
    title: 'Tổng quan về trí tuệ nhân tạo',
    summary: 'Khám phá các khái niệm cơ bản về AI, Machine Learning và Deep Learning. Hiểu được ứng dụng thực tế của AI trong đời sống và những vấn đề đạo đức liên quan.',
    objectives: [
      'Hiểu khái niệm AI, ML, DL và sự khác biệt',
      'Nhận biết các ứng dụng AI trong đời sống hàng ngày',
      'Suy nghĩ về các vấn đề đạo đức khi sử dụng AI',
    ],
    process: {
      steps: [
        'Nghiên cứu lịch sử phát triển của AI',
        'Phân tích các ví dụ ứng dụng AI thực tế',
        'Thảo luận về những mặt lợi và hại của AI',
        'Viết bài phản chiếu cá nhân về AI',
      ],
      tools: ['ChatGPT', 'YouTube', 'Google Docs', 'Canva'],
    },
    analysis: {
      strengths: ['Hiểu được bức tranh tổng quan', 'Có góc nhìn cân bằng về AI', 'Liên hệ với ngành học'],
      improvements: ['Cần tìm hiểu sâu hơn về kỹ thuật', 'Thêm case study cụ thể'],
      lessons: ['AI là công cụ, không phải thay thế con người', 'Cần học cách sống chung với AI'],
    },
    aiUsage: [
      'Giải thích các thuật ngữ kỹ thuật về AI',
      'Cung cấp ví dụ về ứng dụng AI',
      'Thảo luận về các quan điểm đạo đức',
    ],
    integrity: 'Trong bài về AI, tôi đặc biệt chú ý đến việc thể hiện suy nghĩ riêng. AI chỉ là nguồn tham khảo, quan điểm và đánh giá hoàn toàn do tôi đưa ra.',
  },
  {
    id: '4',
    number: 3,
    chapter: 'Chương 4',
    title: 'Giao tiếp và hợp tác trong môi trường số',
    summary: 'Phát triển kỹ năng làm việc nhóm trực tuyến, sử dụng các công cụ cộng tác và giao tiếp chuyên nghiệp trong môi trường số.',
    objectives: [
      'Sử dụng hiệu quả các công cụ cộng tác trực tuyến',
      'Phát triển kỹ năng giao tiếp chuyên nghiệp qua email, chat',
      'Quản lý dự án nhóm với công cụ số',
    ],
    process: {
      steps: [
        'Thiết lập workspace nhóm trên các nền tảng',
        'Phân công và theo dõi tiến độ công việc',
        'Tổ chức họp online và ghi chép hiệu quả',
        'Đánh giá quá trình làm việc nhóm',
      ],
      tools: ['Trello', 'Google Meet', 'Slack', 'Google Drive'],
    },
    analysis: {
      strengths: ['Phối hợp nhóm tốt', 'Giao tiếp rõ ràng', 'Hoàn thành đúng deadline'],
      improvements: ['Cần chủ động hơn trong thảo luận', 'Quản lý thời gian họp tốt hơn'],
      lessons: ['Làm việc nhóm online cần kỷ luật cao', 'Giao tiếp rõ ràng tránh hiểu lầm'],
    },
    aiUsage: [
      'Gợi ý mẫu email chuyên nghiệp',
      'Hỗ trợ soạn nội dung thuyết trình',
      'Tóm tắt nội dung cuộc họp',
    ],
    integrity: 'Trong làm việc nhóm, tôi cam kết đóng góp công bằng. AI chỉ hỗ trợ về mặt ngôn ngữ, không thay thế phần công việc được giao.',
  },
  {
    id: '5',
    number: 2,
    chapter: 'Chương 5',
    title: 'Sáng tạo nội dung số',
    summary: 'Học cách tạo nội dung số đa dạng: infographic, video, bài viết blog. Rèn luyện tư duy sáng tạo và kỹ năng sử dụng các công cụ thiết kế.',
    objectives: [
      'Sử dụng thành thạo công cụ thiết kế cơ bản',
      'Tạo nội dung hấp dẫn và phù hợp với đối tượng',
      'Hiểu về bản quyền và sử dụng tài nguyên hợp pháp',
    ],
    process: {
      steps: [
        'Lên ý tưởng và kịch bản nội dung',
        'Thiết kế infographic với Canva',
        'Chỉnh sửa video với CapCut',
        'Thu thập feedback và chỉnh sửa',
      ],
      tools: ['Canva', 'CapCut', 'Unsplash', 'ChatGPT'],
    },
    analysis: {
      strengths: ['Thiết kế đẹp mắt', 'Nội dung súc tích', 'Biết tìm tài nguyên miễn phí'],
      improvements: ['Cần sáng tạo hơn về ý tưởng', 'Rèn thêm kỹ năng video'],
      lessons: ['Thiết kế đơn giản thường hiệu quả hơn', 'Bản quyền rất quan trọng'],
    },
    aiUsage: [
      'Gợi ý ý tưởng thiết kế',
      'Tạo nội dung mô tả cho infographic',
      'Đề xuất màu sắc và font chữ phù hợp',
    ],
    integrity: 'Tất cả thiết kế là sản phẩm của tôi. AI chỉ gợi ý ý tưởng ban đầu, còn việc thực hiện và quyết định thẩm mỹ hoàn toàn do tôi.',
  },
  {
    id: '6',
    number: 4,
    chapter: 'Chương 6',
    title: 'An toàn và liêm chính học thuật',
    summary: 'Tìm hiểu về bảo mật thông tin cá nhân, nhận diện các mối đe dọa trực tuyến và cam kết liêm chính học thuật trong môi trường số.',
    objectives: [
      'Nhận biết và phòng tránh các rủi ro bảo mật',
      'Bảo vệ thông tin cá nhân trên môi trường số',
      'Hiểu và cam kết thực hành liêm chính học thuật',
    ],
    process: {
      steps: [
        'Đánh giá mức độ bảo mật tài khoản cá nhân',
        'Thiết lập xác thực hai yếu tố cho các tài khoản',
        'Tìm hiểu về các hình thức đạo văn',
        'Thực hành trích dẫn và tham khảo đúng cách',
      ],
      tools: ['Google Security Checkup', 'Turnitin', 'Zotero', 'Google Docs'],
    },
    analysis: {
      strengths: ['Ý thức bảo mật tốt hơn', 'Hiểu rõ về liêm chính học thuật', 'Biết cách trích dẫn'],
      improvements: ['Cần thường xuyên cập nhật mật khẩu', 'Học thêm về các hình thức lừa đảo mới'],
      lessons: ['Bảo mật là trách nhiệm cá nhân', 'Liêm chính là nền tảng của học tập'],
    },
    aiUsage: [
      'Giải thích các khái niệm về bảo mật',
      'Cung cấp ví dụ về đạo văn và cách tránh',
      'Hướng dẫn định dạng trích dẫn',
    ],
    integrity: 'Bài này đặc biệt quan trọng với tôi. Tôi cam kết luôn tuân thủ liêm chính học thuật, trích dẫn đầy đủ và không bao giờ đạo văn.',
  },
];
