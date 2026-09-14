import { Chapter } from '../types';

export const chapter3: Chapter = {
  id: 'chuong-3',
  number: 3,
  title: 'Chương 3: Đại cương Hóa học hữu cơ',
  description: 'Khái niệm hợp chất hữu cơ, phân loại hydrocarbon & dẫn xuất, các phương pháp tách biệt và tinh chế (chưng cất, chiết, kết tinh, sắc kí cột), công thức phân tử, phổ MS, thuyết cấu tạo hóa học Butlerov, đồng phân và đồng đẳng.',
  lessons: [
    {
      id: 'bai-10',
      number: 10,
      title: 'Bài 10: Hợp chất hữu cơ và Hóa học hữu cơ',
      chapterId: 'chuong-3',
      chapterTitle: 'Chương 3: Đại cương Hóa học hữu cơ',
      description: 'Khái niệm hợp chất hữu cơ, phân loại (hydrocarbon & dẫn xuất), đặc điểm liên kết cộng hóa trị, phân tích nguyên tố định tính & định lượng.',
      sections: [
        {
          id: 'b10-s1',
          title: 'I. Khái niệm & Phân loại hợp chất hữu cơ',
          items: [
            {
              id: 'b10-p1',
              type: 'paragraph',
              text: '1. Khái niệm hợp chất hữu cơ\n- Định nghĩa: Hợp chất hữu cơ là hợp chất của {{b10_1}} (trừ các hợp chất vô cơ như CO, CO2, muối carbonate, cyanide, carbide...).\n- Một số chất quen thuộc trong tự nhiên: Eugenol có trong tinh dầu cây {{b10_2}}; Limonene có trong vỏ quả {{b10_3}}; Tinh bột có công thức (C6H10O5)n.\n- Hóa học hữu cơ là ngành hóa học chuyên nghiên cứu về {{b10_4}} và các phản ứng của chúng.\n\n2. Phân loại hợp chất hữu cơ\n- Hydrocarbon: Chỉ gồm hai nguyên tố là {{b10_5}} và {{b10_6}} (Alkane, Alkene, Alkyne, Arene).\n- Dẫn xuất của hydrocarbon: Ngoài C và H còn có các nguyên tố khác như {{b10_7}} (halogen, alcohol, aldehyde, carboxylic acid, amine...).',
              blanks: [
                { id: 'b10_1', answer: 'carbon', options: ['carbon', 'hydrogen', 'nitrogen', 'oxygen'] },
                { id: 'b10_2', answer: 'đinh hương', options: ['đinh hương', 'bưởi', 'hoa hồng', 'sả'] },
                { id: 'b10_3', answer: 'cam, bưởi', options: ['cam, bưởi', 'chuối', 'ổi', 'nhãn'] },
                { id: 'b10_4', answer: 'hợp chất hữu cơ', options: ['hợp chất hữu cơ', 'chất vô cơ', 'khoáng sản', 'kim loại'] },
                { id: 'b10_5', answer: 'carbon (C)', options: ['carbon (C)', 'oxygen', 'sulfur', 'chlorine'] },
                { id: 'b10_6', answer: 'hydrogen (H)', options: ['hydrogen (H)', 'nitrogen', 'phosphorus', 'fluorine'] },
                { id: 'b10_7', answer: 'O, N, S, halogen', options: ['O, N, S, halogen', 'chỉ kim loại kiềm', 'chỉ khí hiếm', 'chất vô cơ'] }
              ]
            }
          ]
        },
        {
          id: 'b10-s2',
          title: 'II. Đặc điểm chung & Phân tích nguyên tố',
          items: [
            {
              id: 'b10-p2',
              type: 'paragraph',
              text: '1. Đặc điểm chung\n- Liên kết hóa học chủ yếu trong hợp chất hữu cơ là liên kết {{b10_8}}.\n- Các chất hữu cơ thường có nhiệt độ nóng chảy và sôi {{b10_9}}, kém tan trong {{b10_10}}, nhưng tan tốt trong {{b10_11}} phi cực.\n- Phản ứng hoá học hữu cơ thường xảy ra {{b10_12}}, theo nhiều hướng tạo hỗn hợp nhiều sản phẩm.\n\n2. Phân tích nguyên tố định tính\n- Nhận biết C: Đốt cháy chuyển thành CO2, sục vào dung dịch Ca(OH)2 thấy xuất hiện kết tủa màu {{b10_13}} (CaCO3).\n- Nhận biết H: Chuyển thành H2O, dùng bột CuSO4 khan màu trắng nhận biết, bột chuyển sang màu {{b10_14}}.\n- Nhận biết N: Chuyển thành NH3, nhận biết bằng giấy quỳ tím ẩm thấy giấy đổi sang màu {{b10_15}}.',
              blanks: [
                { id: 'b10_8', answer: 'cộng hóa trị', options: ['cộng hóa trị', 'ion', 'kim loại', 'hydro'] },
                { id: 'b10_9', answer: 'thấp', options: ['thấp', 'rất cao', 'không đổi', 'vô hạn'] },
                { id: 'b10_10', answer: 'nước', options: ['nước', 'xăng', 'dầu', 'ether'] },
                { id: 'b10_11', answer: 'dung môi hữu cơ', options: ['dung môi hữu cơ', 'nước muối', 'acid đặc', 'nước vôi'] },
                { id: 'b10_12', answer: 'chậm', options: ['chậm', 'rất nhanh', 'tức thời', 'không xảy ra'] },
                { id: 'b10_13', answer: 'trắng', options: ['trắng', 'vàng', 'nâu đỏ', 'đen'] },
                { id: 'b10_14', answer: 'xanh', options: ['xanh', 'đỏ', 'đen', 'vàng'] },
                { id: 'b10_15', answer: 'xanh', options: ['xanh', 'đỏ', 'vàng', 'hồng'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b10-q1',
          number: 1,
          question: 'Chất nào sau đây là hợp chất vô cơ?',
          options: [
            { id: 'a', label: 'A', text: 'CH4' },
            { id: 'b', label: 'B', text: 'C2H5OH' },
            { id: 'c', label: 'C', text: 'CO2' },
            { id: 'd', label: 'D', text: 'C6H12O6' }
          ],
          correctLabel: 'C',
          explanation: 'CO2 là oxide của carbon, thuộc loại hợp chất vô cơ theo định nghĩa.'
        },
        {
          id: 'b10-q2',
          number: 2,
          question: 'Khi phân tích định tính nguyên tố hydrogen trong chất hữu cơ, người ta cho sản phẩm cháy qua bột CuSO4 khan. Hiện tượng CuSO4 hóa xanh chứng tỏ sự có mặt của:',
          options: [
            { id: 'a', label: 'A', text: 'Nguyên tố carbon' },
            { id: 'b', label: 'B', text: 'Nguyên tố hydrogen (tạo H2O kết tinh thành CuSO4.5H2O màu xanh)' },
            { id: 'c', label: 'C', text: 'Nguyên tố oxygen' },
            { id: 'd', label: 'D', text: 'Nguyên tố nitrogen' }
          ],
          correctLabel: 'B',
          explanation: 'CuSO4 khan màu trắng hút nước tạo thành tinh thể CuSO4.5H2O có màu xanh lam.'
        }
      ]
    },
    {
      id: 'bai-11',
      number: 11,
      title: 'Bài 11: Phương pháp tách biệt và tinh chế hợp chất hữu cơ',
      chapterId: 'chuong-3',
      chapterTitle: 'Chương 3: Đại cương Hóa học hữu cơ',
      description: 'Bốn phương pháp tách biệt: Chưng cất, Chiết, Kết tinh, Sắc kí cột và bảng so sánh toàn diện.',
      sections: [
        {
          id: 'b11-s1',
          title: 'I. Các phương pháp tách biệt & Bảng so sánh 4 phương pháp',
          items: [
            {
              id: 'b11-p1',
              type: 'paragraph',
              text: '1. Chưng cất\n- Nguyên tắc: Dựa vào sự khác nhau về {{b11_1}} của các chất trong hỗn hợp ở một áp suất nhất định.\n- Chất lỏng có nhiệt độ sôi thấp hơn sẽ {{b11_2}} trước, hơi đi qua ống sinh hàn làm lạnh ngưng tụ thành chất lỏng.\n- Ứng dụng: Chưng cất rượu gạo thủ công (tách ethanol), chưng cất phân đoạn dầu mỏ, chưng cất lôi cuốn hơi nước tách {{b11_3}}.\n\n2. Chiết\n- Nguyên tắc: Dựa vào sự khác nhau về {{b11_4}} của các chất trong hai môi trường không trộn lẫn vào nhau.\n- Chiết lỏng - lỏng dùng {{b11_5}} để phân tách hai lớp chất lỏng.\n- Chiết lỏng - rắn: Dùng dung môi lỏng để hòa tan chất cần tách (ví dụ: ngâm rượu thuốc, pha trà).\n\n3. Kết tinh\n- Nguyên tắc: Dựa vào độ tan khác nhau và sự thay đổi độ tan theo {{b11_6}} của chất rắn.\n- Dung môi lý tưởng: Hòa tan rất tốt ở {{b11_7}} và hòa tan rất kém ở {{b11_8}}.\n\n4. Sắc kí cột\n- Nguyên tắc: Dựa vào sự phân bố khác nhau của các chất giữa {{b11_9}} và {{b11_10}}.\n- Chất bị hấp phụ mạnh sẽ di chuyển {{b11_11}}, chất bị hấp phụ yếu di chuyển {{b11_12}} ra khỏi cột trước.',
              blanks: [
                { id: 'b11_1', answer: 'nhiệt độ sôi', options: ['nhiệt độ sôi', 'độ tan', 'khối lượng riêng', 'màu sắc'] },
                { id: 'b11_2', answer: 'bay hơi', options: ['bay hơi', 'ngưng tụ', 'kết tinh', 'đông đặc'] },
                { id: 'b11_3', answer: 'tinh dầu sả, cam, bưởi', options: ['tinh dầu sả, cam, bưởi', 'muối ăn', 'đường cát', 'dầu hỏa'] },
                { id: 'b11_4', answer: 'độ tan', options: ['độ tan', 'nhiệt độ sôi', 'khối lượng mol', 'hóa trị'] },
                { id: 'b11_5', answer: 'phễu chiết', options: ['phễu chiết', 'ống đong', 'bình tam giác', 'burette'] },
                { id: 'b11_6', answer: 'nhiệt độ', options: ['nhiệt độ', 'áp suất', 'thời gian', 'khối lượng'] },
                { id: 'b11_7', answer: 'nhiệt độ cao', options: ['nhiệt độ cao', 'nhiệt độ phòng', '0 °C', 'nhiệt độ âm'] },
                { id: 'b11_8', answer: 'nhiệt độ thường (thấp)', options: ['nhiệt độ thường (thấp)', 'nhiệt độ sôi', 'áp suất cao', 'môi trường kiềm'] },
                { id: 'b11_9', answer: 'pha động', options: ['pha động', 'chất phản ứng', 'khí quyển', 'dung dịch đệm'] },
                { id: 'b11_10', answer: 'pha tĩnh', options: ['pha tĩnh', 'nhiệt độ', 'xúc tác', 'chất màu'] },
                { id: 'b11_11', answer: 'chậm hơn', options: ['chậm hơn', 'nhanh hơn', 'ngay tức khắc', 'không di chuyển'] },
                { id: 'b11_12', answer: 'nhanh hơn', options: ['nhanh hơn', 'chậm hơn', 'vô hạn', 'chậm nhất'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b11-q1',
          number: 1,
          question: 'Phương pháp chưng cất dùng để tách biệt các chất lỏng dựa vào sự khác nhau về:',
          options: [
            { id: 'a', label: 'A', text: 'Độ tan trong nước' },
            { id: 'b', label: 'B', text: 'Nhiệt độ nóng chảy' },
            { id: 'c', label: 'C', text: 'Nhiệt độ sôi' },
            { id: 'd', label: 'D', text: 'Khối lượng riêng' }
          ],
          correctLabel: 'C',
          explanation: 'Chưng cất dựa vào sự chênh lệch nhiệt độ sôi giữa các chất lỏng trong hỗn hợp.'
        },
        {
          id: 'b11-q2',
          number: 2,
          question: 'Khi tách tinh dầu sả từ cây sả bằng cách đun sả với nước, phương pháp được áp dụng là:',
          options: [
            { id: 'a', label: 'A', text: 'Chưng cất thường' },
            { id: 'b', label: 'B', text: 'Chưng cất lôi cuốn hơi nước' },
            { id: 'c', label: 'C', text: 'Chiết lỏng - lỏng' },
            { id: 'd', label: 'D', text: 'Sắc kí cột' }
          ],
          correctLabel: 'B',
          explanation: 'Tinh dầu có nhiệt độ sôi cao nhưng không tan trong nước và có thể bay hơi cùng hơi nước nên áp dụng chưng cất lôi cuốn hơi nước.'
        }
      ]
    },
    {
      id: 'bai-12',
      number: 12,
      title: 'Bài 12: Công thức phân tử hợp chất hữu cơ',
      chapterId: 'chuong-3',
      chapterTitle: 'Chương 3: Đại cương Hóa học hữu cơ',
      description: 'Công thức đơn giản nhất, công thức phân tử, phương pháp phổ khối lượng MS và thiết lập CTPT.',
      sections: [
        {
          id: 'b12-s1',
          title: 'I. Khái niệm & Phương pháp phổ khối lượng (MS)',
          items: [
            {
              id: 'b12-p1',
              type: 'paragraph',
              text: '- Công thức phân tử (CTPT) cho biết {{b12_1}} nguyên tố và {{b12_2}} của mỗi nguyên tố trong phân tử.\n- Công thức đơn giản nhất (CTĐGN) cho biết {{b12_3}} về số nguyên tử của các nguyên tố.\n- Mối liên hệ: CTPT = (CTĐGN)n với n là số nguyên dương (n ≥ 1).\n- Phương pháp phổ khối lượng (MS): Mảnh ion phân tử kí hiệu là [M+]. Giá trị m/z của peak ion phân tử [M+] có giá trị lớn nhất thường bằng {{b12_4}} của chất nghiên cứu.',
              blanks: [
                { id: 'b12_1', answer: 'thành phần', options: ['thành phần', 'khối lượng riêng', 'trật tự liên kết', 'hình học'] },
                { id: 'b12_2', answer: 'số lượng nguyên tử', options: ['số lượng nguyên tử', 'tỉ lệ tối giản', 'bán kính nguyên tử', 'góc liên kết'] },
                { id: 'b12_3', answer: 'tỉ lệ tối giản', options: ['tỉ lệ tối giản', 'số lượng thực tế', 'khối lượng chính xác', 'thứ tự liên kết'] },
                { id: 'b12_4', answer: 'phân tử khối (M)', options: ['phân tử khối (M)', 'nguyên tử khối C', 'nửa phân tử khối', 'điện tích hạt nhân'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b12-q1',
          number: 1,
          question: 'Công thức phân tử của methyl formate và glucose lần lượt là C2H4O2 và C6H12O6. Công thức đơn giản nhất của hai chất này là:',
          options: [
            { id: 'a', label: 'A', text: 'CH2O' },
            { id: 'b', label: 'B', text: 'C2H4O2' },
            { id: 'c', label: 'C', text: 'C3H6O4' },
            { id: 'd', label: 'D', text: 'C6H12O6' }
          ],
          correctLabel: 'A',
          explanation: 'Tỉ lệ C:H:O của C2H4O2 là 2:4:2 = 1:2:1 => CH2O. Của C6H12O6 là 6:12:6 = 1:2:1 => CH2O.'
        }
      ]
    },
    {
      id: 'bai-13',
      number: 13,
      title: 'Bài 13: Cấu tạo hoá học hợp chất hữu cơ',
      chapterId: 'chuong-3',
      chapterTitle: 'Chương 3: Đại cương Hóa học hữu cơ',
      description: 'Thuyết cấu tạo hóa học Butlerov, 3 dạng biểu diễn CTCT (đầy đủ, thu gọn, khung), hiện tượng đồng phân và đồng đẳng.',
      sections: [
        {
          id: 'b13-s1',
          title: 'I. Thuyết cấu tạo hóa học & Đồng phân, Đồng đẳng',
          items: [
            {
              id: 'b13-p1',
              type: 'paragraph',
              text: '1. Thuyết cấu tạo hoá học (Butlerov)\n- Trong hợp chất hữu cơ, nguyên tử carbon luôn có hóa trị {{b13_1}}.\n- Các nguyên tử carbon có thể liên kết với nhau tạo thành 3 loại mạch carbon: mạch {{b13_2}}, mạch {{b13_3}} và mạch {{b13_4}}.\n- Các nguyên tử liên kết với nhau theo một {{b13_5}} nhất định gọi là cấu tạo hoá học.\n\n2. Đồng phân và Đồng đẳng\n- Đồng phân: Những hợp chất khác nhau có cùng {{b13_6}} nhưng khác nhau về {{b13_7}} nên có tính chất khác nhau.\n- Đồng đẳng: Các chất có {{b13_8}} tương tự nhau và thành phần phân tử hơn kém nhau một hay nhiều nhóm {{b13_9}}.',
              blanks: [
                { id: 'b13_1', answer: 'IV (bốn)', options: ['IV (bốn)', 'II (hai)', 'III (ba)', 'V (năm)'] },
                { id: 'b13_2', answer: 'không phân nhánh', options: ['không phân nhánh', 'xoắn ốc', 'vô hạn', 'kết tụ'] },
                { id: 'b13_3', answer: 'phân nhánh', options: ['phân nhánh', 'thẳng tuyệt đối', 'lưới tinh thể', 'đồng quy'] },
                { id: 'b13_4', answer: 'vòng', options: ['vòng', 'hở dài', 'tự do', 'lơ lửng'] },
                { id: 'b13_5', answer: 'trật tự liên kết', options: ['trật tự liên kết', 'tỉ lệ khối lượng', 'nhiệt độ', 'trọng lực'] },
                { id: 'b13_6', answer: 'công thức phân tử', options: ['công thức phân tử', 'cấu tạo hóa học', 'tên gọi', 'nhiệt độ sôi'] },
                { id: 'b13_7', answer: 'công thức cấu tạo', options: ['công thức cấu tạo', 'khối lượng mol', 'thành phần %', 'số lượng nguyên tử'] },
                { id: 'b13_8', answer: 'cấu tạo hóa học', options: ['cấu tạo hóa học', 'khối lượng', 'trạng thái', 'nguồn gốc'] },
                { id: 'b13_9', answer: '-CH2- (methylene)', options: ['-CH2- (methylene)', '-CH3', '-OH', '-COOH'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b13-q1',
          number: 1,
          question: 'Cấu tạo hoá học là:',
          options: [
            { id: 'a', label: 'A', text: 'Thứ tự liên kết giữa các nguyên tử trong phân tử' },
            { id: 'b', label: 'B', text: 'Phản ứng giữa các phân tử hữu cơ' },
            { id: 'c', label: 'C', text: 'Liên kết cộng hóa trị phân cực' },
            { id: 'd', label: 'D', text: 'Tỉ lệ số lượng các nguyên tử trong phân tử' }
          ],
          correctLabel: 'A',
          explanation: 'Theo Butlerov, thứ tự liên kết giữa các nguyên tử trong phân tử gọi là cấu tạo hoá học.'
        },
        {
          id: 'b13-q2',
          number: 2,
          question: 'Cặp chất nào dưới đây là đồng phân loại nhóm chức của nhau?',
          options: [
            { id: 'a', label: 'A', text: 'CH3-O-CH3 và CH3-CH2-OH' },
            { id: 'b', label: 'B', text: 'CH3-COOH và HCOO-CH3' },
            { id: 'c', label: 'C', text: 'CH3-CH2-CH2-OH và CH3-CH(OH)-CH3' },
            { id: 'd', label: 'D', text: 'Cả A và B đều đúng' }
          ],
          correctLabel: 'D',
          explanation: 'CH3-O-CH3 (ether) và CH3-CH2-OH (alcohol) cùng C2H6O; CH3-COOH (carboxylic acid) và HCOO-CH3 (ester) cùng C2H4O2. Cả 2 cặp đều là đồng phân nhóm chức.'
        }
      ]
    },
    {
      id: 'bai-14',
      number: 14,
      title: 'Bài 14: Ôn tập Chương 3 (Đại cương Hóa học hữu cơ)',
      chapterId: 'chuong-3',
      chapterTitle: 'Chương 3: Đại cương Hóa học hữu cơ',
      description: 'Tổng kết hệ thống hóa toàn bộ kiến thức chương đại cương hữu cơ và trắc nghiệm tổng hợp.',
      sections: [
        {
          id: 'b14-s1',
          title: 'Hệ thống hóa kiến thức cốt lõi Chương 3',
          items: [
            {
              id: 'b14-p1',
              type: 'paragraph',
              text: '- Hợp chất hữu cơ chia làm 2 nhóm: {{b14_1}} (chỉ chứa C, H) và {{b14_2}}.\n- Chưng cất dựa vào sự khác biệt về {{b14_3}} của các chất lỏng.\n- Chiết dựa vào sự khác biệt về {{b14_4}} trong hai dung môi không trộn lẫn.\n- Kết tinh dựa vào sự thay đổi {{b14_5}} theo nhiệt độ.\n- Sắc kí cột dựa vào sự phân bố khác nhau giữa {{b14_6}} và pha tĩnh.\n- Peak [M+] có m/z lớn nhất trong phổ MS cho biết {{b14_7}} của chất.',
              blanks: [
                { id: 'b14_1', answer: 'hydrocarbon', options: ['hydrocarbon', 'polime', 'lipid', 'muối'] },
                { id: 'b14_2', answer: 'dẫn xuất của hydrocarbon', options: ['dẫn xuất của hydrocarbon', 'khoáng chất', 'kim loại', 'axit vô cơ'] },
                { id: 'b14_3', answer: 'nhiệt độ sôi', options: ['nhiệt độ sôi', 'độ tan', 'màu sắc', 'khối lượng'] },
                { id: 'b14_4', answer: 'độ tan', options: ['độ tan', 'khối lượng riêng', 'nhiệt độ nóng chảy', 'tốc độ bay hơi'] },
                { id: 'b14_5', answer: 'độ tan', options: ['độ tan', 'thể tích', 'áp suất', 'độ dẫn điện'] },
                { id: 'b14_6', answer: 'pha động', options: ['pha động', 'khí nén', 'dung môi bay hơi', 'xúc tác'] },
                { id: 'b14_7', answer: 'phân tử khối', options: ['phân tử khối', 'số nguyên tử H', 'nhiệt độ sôi', 'độ âm điện'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b14-q1',
          number: 1,
          question: 'Cặp chất nào dưới đây thuộc cùng một dãy đồng đẳng?',
          options: [
            { id: 'a', label: 'A', text: 'CH3-OH và CH3-CH2-CH2-OH' },
            { id: 'b', label: 'B', text: 'CH3-CH2-OH và HOCH2-CH2OH' },
            { id: 'c', label: 'C', text: 'CH3-CHO và CH3-CO-CH3' },
            { id: 'd', label: 'D', text: 'CH3-COOH và CH3-COO-CH3' }
          ],
          correctLabel: 'A',
          explanation: 'CH3-OH và CH3-CH2-CH2-OH đều là alcohol no, đơn chức, mạch hở thuộc cùng dãy đồng đẳng CnH2n+1OH.'
        }
      ]
    }
  ]
};
