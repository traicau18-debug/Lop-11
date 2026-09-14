import { Chapter } from '../types';

export const chapter2: Chapter = {
  id: 'chuong-2',
  number: 2,
  title: 'Chương 2: Nitrogen và Sulfur',
  description: 'Đơn chất Nitrogen, Ammonia, Muối ammonium, Các Oxide của Nitrogen, Mưa acid, Nitric acid, Phú dưỡng, Sulfur, Sulfur dioxide, Sulfuric acid và Muối sulfate.',
  lessons: [
    {
      id: 'bai-4',
      number: 4,
      title: 'Bài 4: Đơn chất Nitrogen',
      chapterId: 'chuong-2',
      chapterTitle: 'Chương 2: Nitrogen và Sulfur',
      description: 'Trạng thái tự nhiên, cấu tạo phân tử N2 với liên kết ba bền vững, tính chất vật lí, tính oxi hoá, tính khử và ứng dụng.',
      sections: [
        {
          id: 'b4-s1',
          title: 'I. Trạng thái tự nhiên & Cấu tạo phân tử',
          items: [
            {
              id: 'b4-p1',
              type: 'paragraph',
              text: '- Trong khí quyển Trái Đất, nitrogen là nguyên tố phổ biến nhất, chiếm khoảng {{b4_1}}% thể tích và {{b4_2}}% khối lượng.\n- Trong vỏ Trái Đất, tồn tại dạng khoáng vật NaNO3 thường gọi là {{b4_3}}.\n- Kí hiệu nguyên tử: ^{14}_{7}N (số khối A=14, số hiệu nguyên tử Z=7). Cấu hình electron nguyên tử: {{b4_4}}, có {{b4_5}} electron lớp ngoài cùng.\n- Phân tử nitrogen (N2) gồm hai nguyên tử liên kết với nhau bằng {{b4_6}} rất bền vững (gồm {{b4_7}} liên kết σ và {{b4_8}} liên kết π).\n- Năng lượng liên kết rất lớn ({{b4_9}} kJ/mol) và phân tử {{b4_10}} cực, nên ở nhiệt độ thường nitrogen rất trơ về mặt hóa học.',
              blanks: [
                { id: 'b4_1', answer: '78', options: ['78', '21', '50', '90'], hint: 'Khoảng gần 4/5 thể tích không khí' },
                { id: 'b4_2', answer: '75,5', options: ['75,5', '23,2', '80,0', '65,0'], hint: 'Phần trăm khối lượng trong khí quyển' },
                { id: 'b4_3', answer: 'diêm tiêu Chile', options: ['diêm tiêu Chile', 'quặng apatite', 'thạch cao', 'đá vôi'] },
                { id: 'b4_4', answer: '1s² 2s² 2p³', options: ['1s² 2s² 2p³', '1s² 2s² 2p⁶', '1s² 2s² 2p⁴', '[Ne] 3s² 3p³'] },
                { id: 'b4_5', answer: '5', options: ['5', '3', '7', '8'], hint: 'Thuộc nhóm VA trong bảng tuần hoàn' },
                { id: 'b4_6', answer: 'liên kết ba (N≡N)', options: ['liên kết ba (N≡N)', 'liên kết đôi (N=N)', 'liên kết đơn (N-N)', 'liên kết phối trí'] },
                { id: 'b4_7', answer: '1', options: ['1', '2', '3', '0'] },
                { id: 'b4_8', answer: '2', options: ['2', '1', '3', '4'] },
                { id: 'b4_9', answer: '945', options: ['945', '436', '226', '150'], hint: 'Năng lượng liên kết ba N≡N rất cao' },
                { id: 'b4_10', answer: 'không phân', options: ['không phân', 'phân cực mạnh', 'ion', 'lưỡng'] }
              ]
            }
          ]
        },
        {
          id: 'b4-s2',
          title: 'II. Tính chất hóa học & Ứng dụng',
          items: [
            {
              id: 'b4-p2',
              type: 'paragraph',
              text: '1. Tính chất hóa học\n- Ở điều kiện thường nitrogen khá trơ, ở nhiệt độ cao hoặc có tia lửa điện/xúc tác, nitrogen vừa thể hiện tính {{b4_11}}, vừa thể hiện tính {{b4_12}}.\n- Tính oxi hóa: Tác dụng với hydrogen ở nhiệt độ, áp suất cao (xúc tác Fe) tạo {{b4_13}}. Tác dụng với kim loại ở nhiệt độ cao tạo muối nitride (với Lithium phản ứng ngay ở {{b4_14}} tạo Li3N).\n- Tính khử: Tác dụng với oxygen ở nhiệt độ trên 3000 °C hoặc khi có {{b4_15}} tạo khí {{b4_16}} (NO).\n\n2. Ứng dụng\n- Nitrogen lỏng sôi ở {{b4_17}} °C dùng để làm môi trường lạnh sâu bảo quản mẫu sinh học.\n- Bơm vào bao bì thực phẩm tạo khí quyển {{b4_18}} chống ôi thiu và chống cháy nổ.\n- Nguyên liệu để sản xuất {{b4_19}} và phân bón vô cơ.',
              blanks: [
                { id: 'b4_11', answer: 'oxi hóa', options: ['oxi hóa', 'acid', 'base', 'điện li'] },
                { id: 'b4_12', answer: 'khử', options: ['khử', 'nhiệt phân', 'kết tinh', 'thăng hoa'] },
                { id: 'b4_13', answer: 'ammonia (NH3)', options: ['ammonia (NH3)', 'nitric acid', 'hydrazine', 'ammonium'] },
                { id: 'b4_14', answer: 'nhiệt độ thường', options: ['nhiệt độ thường', 'nhiệt độ âm sâu', 'nhiệt độ trên 1000 °C', 'trong lò cao'] },
                { id: 'b4_15', answer: 'tia lửa điện (sấm sét)', options: ['tia lửa điện (sấm sét)', 'nước đá', 'chất tẩy trắng', 'ánh sáng mặt trời dịu'] },
                { id: 'b4_16', answer: 'nitrogen monoxide (NO)', options: ['nitrogen monoxide (NO)', 'ammonia', 'nitric acid', 'N2O5'] },
                { id: 'b4_17', answer: '-196', options: ['-196', '-78,5', '0', '-273'] },
                { id: 'b4_18', answer: 'trơ', options: ['trơ', 'hoạt động', 'cháy mạnh', 'acid'] },
                { id: 'b4_19', answer: 'ammonia', options: ['ammonia', 'sulfuric acid', 'ether', 'chlorine'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b4-q1',
          number: 1,
          question: 'Khí nào chiếm thể tích lớn nhất trong khí quyển Trái Đất?',
          options: [
            { id: 'a', label: 'A', text: 'Oxygen' },
            { id: 'b', label: 'B', text: 'Nitrogen' },
            { id: 'c', label: 'C', text: 'Carbon dioxide' },
            { id: 'd', label: 'D', text: 'Argon' }
          ],
          correctLabel: 'B',
          explanation: 'Khí nitrogen chiếm khoảng 78% thể tích khí quyển Trái Đất.'
        },
        {
          id: 'b4-q2',
          number: 2,
          question: 'Nitrogen thể hiện tính khử trong phản ứng hóa học nào sau đây?',
          options: [
            { id: 'a', label: 'A', text: 'N2 + 3H2 ⇌ 2NH3' },
            { id: 'b', label: 'B', text: 'N2 + O2 ⇌ 2NO' },
            { id: 'c', label: 'C', text: '3Ca + N2 → Ca3N2' },
            { id: 'd', label: 'D', text: '3Mg + N2 → Mg3N2' }
          ],
          correctLabel: 'B',
          explanation: 'Trong phản ứng N2 + O2 ⇌ 2NO, số oxi hóa của N tăng từ 0 lên +2 nên N2 thể hiện tính khử.'
        }
      ]
    },
    {
      id: 'bai-5',
      number: 5,
      title: 'Bài 5: Ammonia và Muối Ammonium',
      chapterId: 'chuong-2',
      chapterTitle: 'Chương 2: Nitrogen và Sulfur',
      description: 'Phân tử NH3 hình chóp tam giác, tính base yếu và tính khử, muối ammonium, phản ứng nhiệt phân và nhận biết ion NH4+.',
      sections: [
        {
          id: 'b5-s1',
          title: 'I. Ammonia (NH3)',
          items: [
            {
              id: 'b5-p1',
              type: 'paragraph',
              text: '1. Cấu tạo & Tính chất vật lí\n- Phân tử ammonia có dạng hình {{b5_1}} với góc liên kết H-N-H khoảng {{b5_2}}°.\n- Nguyên tử nitrogen còn một {{b5_3}} hóa trị chưa tham gia liên kết, hướng ra ngoài.\n- Tính chất vật lí: Khí không màu, mùi {{b5_4}} xốc đặc trưng, {{b5_5}} hơn không khí. Khí ammonia tan {{b5_6}} trong nước (1 lít nước hòa tan khoảng {{b5_7}} lít NH3 ở đkc).\n\n2. Tính chất hóa học\n- Tính base yếu: Làm quỳ tím ẩm chuyển sang màu {{b5_8}}, dung dịch phenolphthalein chuyển sang màu {{b5_9}}.\n- Tác dụng với khí HCl: Khí NH3 tác dụng với khí HCl tạo thành khói trắng {{b5_10}}.\n- Tính khử: Cháy trong oxygen tạo N2 và H2O (ngọn lửa màu {{b5_11}}); khi có xúc tác Pt ở 800 - 900 °C oxi hóa tạo khí {{b5_12}} (quá trình Ostwald).',
              blanks: [
                { id: 'b5_1', answer: 'chóp tam giác', options: ['chóp tam giác', 'tứ diện đều', 'đường thẳng', 'hình vuông phẳng'] },
                { id: 'b5_2', answer: '107', options: ['107', '109,5', '120', '180'] },
                { id: 'b5_3', answer: 'cặp electron tự do', options: ['cặp electron tự do', 'electron độc thân', 'proton', 'neutron'] },
                { id: 'b5_4', answer: 'khai', options: ['khai', 'thơm nhẹ', 'trứng thối', 'hắc khó chịu'] },
                { id: 'b5_5', answer: 'nhẹ', options: ['nhẹ', 'nặng', 'ngang bằng', 'gấp đôi'] },
                { id: 'b5_6', answer: 'rất nhiều', options: ['rất nhiều', 'rất ít', 'không tan', 'vừa phải'] },
                { id: 'b5_7', answer: '800', options: ['800', '10', '50', '2'] },
                { id: 'b5_8', answer: 'xanh', options: ['xanh', 'đỏ', 'vàng', 'hồng'] },
                { id: 'b5_9', answer: 'hồng', options: ['hồng', 'xanh lam', 'vàng', 'đen'] },
                { id: 'b5_10', answer: 'NH4Cl (ammonium chloride)', options: ['NH4Cl (ammonium chloride)', 'NaCl', 'NH4NO3', 'CaCl2'] },
                { id: 'b5_11', answer: 'vàng nhạt', options: ['vàng nhạt', 'xanh lam', 'đỏ rực', 'tím'] },
                { id: 'b5_12', answer: 'NO', options: ['NO', 'NO2', 'N2O', 'HNO3'] }
              ]
            }
          ]
        },
        {
          id: 'b5-s2',
          title: 'II. Muối Ammonium (NH4+)',
          items: [
            {
              id: 'b5-p2',
              type: 'paragraph',
              text: '- Muối ammonium đều là hợp chất tinh thể ion, {{b5_13}} trong nước và phân li hoàn toàn thành ion.\n- Nhận biết ion NH4+: Đun nóng dung dịch muối ammonium với dung dịch kiềm (NaOH/KOH), sinh ra khí {{b5_14}} mùi khai làm xanh quỳ tím ẩm.\n- Phương trình ion: NH4+ + OH- (đun nóng) → {{b5_15}} + H2O.\n- Phản ứng nhiệt phân: Muối ammonium kém bền nhiệt. Khi đun nóng NH4Cl phân huỷ thành {{b5_16}} và {{b5_17}}, khi bay lên gặp lạnh ở miệng ống nghiệm kết hợp lại thành vệt trắng tinh thể.',
              blanks: [
                { id: 'b5_13', answer: 'dễ tan', options: ['dễ tan', 'không tan', 'ít tan', 'kết tủa'] },
                { id: 'b5_14', answer: 'ammonia (NH3)', options: ['ammonia (NH3)', 'hydrogen', 'nitrogen dioxide', 'oxygen'] },
                { id: 'b5_15', answer: 'NH3↑', options: ['NH3↑', 'N2↑', 'NO↑', 'NH4OH'] },
                { id: 'b5_16', answer: 'NH3', options: ['NH3', 'N2', 'H2', 'Cl2'] },
                { id: 'b5_17', answer: 'HCl', options: ['HCl', 'Cl2', 'O2', 'H2O'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b5-q1',
          number: 1,
          question: 'Trong dung dịch nước, khí ammonia đóng vai trò là một base yếu là do nguyên tử nitrogen:',
          options: [
            { id: 'a', label: 'A', text: 'có electron độc thân có thể ghép đôi' },
            { id: 'b', label: 'B', text: 'còn cặp electron hóa trị chưa liên kết có thể nhận proton (H+)' },
            { id: 'c', label: 'C', text: 'có electron hóa trị để nhường cho các ion khác' },
            { id: 'd', label: 'D', text: 'có khả năng tạo liên kết cộng hóa trị phân cực mạnh' }
          ],
          correctLabel: 'B',
          explanation: 'Nguyên tử N trong NH3 còn một cặp electron tự do chưa liên kết, có thể dùng để nhận proton H+ từ phân tử nước tạo ion NH4+ và giải phóng OH-.'
        },
        {
          id: 'b5-q2',
          number: 2,
          question: 'Để nhận biết sự có mặt của ion ammonium (NH4+) trong dung dịch, người ta thường dùng thuốc thử là:',
          options: [
            { id: 'a', label: 'A', text: 'Dung dịch NaCl' },
            { id: 'b', label: 'B', text: 'Dung dịch HCl' },
            { id: 'c', label: 'C', text: 'Dung dịch NaOH (đun nóng)' },
            { id: 'd', label: 'D', text: 'Dung dịch H2SO4' }
          ],
          correctLabel: 'C',
          explanation: 'Cho NaOH vào rồi đun nhẹ, sinh ra khí NH3 có mùi khai đặc trưng làm xanh quỳ tím ẩm.'
        }
      ]
    },
    {
      id: 'bai-6',
      number: 6,
      title: 'Bài 6: Các hợp chất của Nitrogen với Oxygen & Mưa acid',
      chapterId: 'chuong-2',
      chapterTitle: 'Chương 2: Nitrogen và Sulfur',
      description: 'Các oxide NOx, cơ chế tạo mưa acid, tính acid mạnh & tính oxi hoá mạnh của Nitric acid HNO3, hiện tượng phú dưỡng.',
      sections: [
        {
          id: 'b6-s1',
          title: 'I. Các Oxide của Nitrogen & Mưa Acid',
          items: [
            {
              id: 'b6-p1',
              type: 'paragraph',
              text: '1. Các oxide NOx\n- Các oxide phổ biến: N2O (dinitrogen monoxide), NO (nitrogen monoxide), NO2 (nitrogen dioxide - khí màu {{b6_1}}), N2O4 (dinitrogen tetroxide - {{b6_2}} màu).\n- Mưa acid là hiện tượng nước mưa có giá trị pH {{b6_3}} 5,6.\n- Tác nhân chính gây mưa acid: khí {{b6_4}} (SO2) và các oxide của nitrogen (NOx).\n- Trong nước mưa, NO2 bị oxi hoá cùng với O2 tạo thành acid {{b6_5}} (HNO3).',
              blanks: [
                { id: 'b6_1', answer: 'nâu đỏ', options: ['nâu đỏ', 'không màu', 'vàng lục', 'xanh lam'] },
                { id: 'b6_2', answer: 'không', options: ['không', 'nâu đậm', 'vàng chanh', 'tím'] },
                { id: 'b6_3', answer: 'nhỏ hơn (<)', options: ['nhỏ hơn (<)', 'lớn hơn (>)', 'bằng (=)', 'gần bằng'] },
                { id: 'b6_4', answer: 'sulfur dioxide', options: ['sulfur dioxide', 'methane', 'carbon monoxide', 'ammonia'] },
                { id: 'b6_5', answer: 'nitric acid', options: ['nitric acid', 'carbonic acid', 'phosphoric acid', 'acetic acid'] }
              ]
            }
          ]
        },
        {
          id: 'b6-s2',
          title: 'II. Nitric Acid (HNO3) & Hiện tượng phú dưỡng',
          items: [
            {
              id: 'b6-p2',
              type: 'paragraph',
              text: '1. Nitric acid (HNO3)\n- Số oxi hóa của nitrogen trong HNO3 là {{b6_6}} (cao nhất), cộng hóa trị của N là {{b6_7}}.\n- Tính chất hóa học: Vừa là một acid mạnh, vừa là chất {{b6_8}} cực mạnh.\n- Oxi hóa kim loại: Tác dụng với Cu và HNO3 đặc giải phóng khí {{b6_9}} màu nâu đỏ; tác dụng với Cu và HNO3 loãng giải phóng khí {{b6_10}} không màu hoá nâu ngoài không khí.\n- Lưu ý: Các kim loại Al, Fe, Cr bị {{b6_11}} trong dung dịch HNO3 đặc, nguội.\n\n2. Hiện tượng phú dưỡng (Eutrophication)\n- Là sự tích tụ lượng lớn các chất dinh dưỡng chứa nguyên tố {{b6_12}} (N) và {{b6_13}} (P) trong ao hồ, làm cho {{b6_14}} phát triển bùng nổ, khi chết tiêu tốn nhiều oxygen làm cá chết hàng loạt.',
              blanks: [
                { id: 'b6_6', answer: '+5', options: ['+5', '+3', '+4', '-3'] },
                { id: 'b6_7', answer: '4', options: ['4', '5', '3', '2'], hint: 'Do N không có phân lớp d trống nên cộng hoá trị tối đa chỉ bằng 4' },
                { id: 'b6_8', answer: 'oxi hóa', options: ['oxi hóa', 'khử', 'trung tính', 'kết tủa'] },
                { id: 'b6_9', answer: 'NO2', options: ['NO2', 'NO', 'N2', 'NH3'] },
                { id: 'b6_10', answer: 'NO', options: ['NO', 'NO2', 'N2O', 'H2'] },
                { id: 'b6_11', answer: 'thụ động', options: ['thụ động', 'hòa tan nhanh', 'nóng chảy', 'cháy sáng'] },
                { id: 'b6_12', answer: 'nitrogen', options: ['nitrogen', 'calcium', 'carbon', 'iron'] },
                { id: 'b6_13', answer: 'phosphorus', options: ['phosphorus', 'sulfur', 'sodium', 'potassium'] },
                { id: 'b6_14', answer: 'tảo và thực vật thuỷ sinh', options: ['tảo và thực vật thuỷ sinh', 'các loài cá lớn', 'vi khuẩn hiếu khí', 'ấu trùng muỗi'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b6-q1',
          number: 1,
          question: 'Nitric acid (HNO3) dễ bị phân hủy dưới tác dụng của ánh sáng hoặc nhiệt độ tạo thành hỗn hợp sản phẩm gồm:',
          options: [
            { id: 'a', label: 'A', text: 'NO2, H2O' },
            { id: 'b', label: 'B', text: 'NO2, O2, H2O' },
            { id: 'c', label: 'C', text: 'N2, O2, H2O' },
            { id: 'd', label: 'D', text: 'N2, H2O' }
          ],
          correctLabel: 'B',
          explanation: 'Phương trình phân huỷ: 4HNO3 → 4NO2 + O2 + 2H2O (làm dung dịch HNO3 để lâu có màu vàng nhạt do NO2 hoà tan).'
        }
      ]
    },
    {
      id: 'bai-7',
      number: 7,
      title: 'Bài 7: Sulfur và Sulfur Dioxide',
      chapterId: 'chuong-2',
      chapterTitle: 'Chương 2: Nitrogen và Sulfur',
      description: 'Đơn chất sulfur (S8), tính oxi hoá và tính khử, khí SO2, vai trò tẩy trắng và vấn đề ô nhiễm môi trường.',
      sections: [
        {
          id: 'b7-s1',
          title: 'I. Đơn chất Sulfur (Lưu huỳnh)',
          items: [
            {
              id: 'b7-p1',
              type: 'paragraph',
              text: '- Kí hiệu nguyên tử sulfur: ^{32}_{16}S (số khối A=32, số hiệu Z=16). Cấu hình electron: 1s² 2s² 2p⁶ 3s² 3p⁴.\n- Ở nhiệt độ thường, đơn chất sulfur tồn tại ở dạng phân tử vòng khép kín gồm {{b7_1}} nguyên tử, công thức là {{b7_2}}.\n- Lưu huỳnh là chất rắn màu {{b7_3}}, không tan trong nước nhưng tan nhiều trong dung môi không phân cực như {{b7_4}} (CS2).\n- Tính chất hóa học: Sulfur vừa thể hiện tính {{b7_5}} (khi tác dụng với H2, Fe, Al...), vừa thể hiện tính {{b7_6}} (khi tác dụng với O2, F2...).\n- Đặc biệt: Bột sulfur phản ứng với {{b7_7}} ngay ở nhiệt độ thường tạo HgS bền, được dùng để thu gom và xử lý khi nhiệt kế thủy ngân bị vỡ.',
              blanks: [
                { id: 'b7_1', answer: '8', options: ['8', '2', '4', '6'] },
                { id: 'b7_2', answer: 'S8', options: ['S8', 'S2', 'S4', 'S6'] },
                { id: 'b7_3', answer: 'vàng', options: ['vàng', 'đỏ', 'trắng', 'xanh'] },
                { id: 'b7_4', answer: 'carbon disulfide', options: ['carbon disulfide', 'nước cất', 'acid loãng', 'muối ăn'] },
                { id: 'b7_5', answer: 'oxi hóa', options: ['oxi hóa', 'tính bazơ', 'trung tính', 'điện phân'] },
                { id: 'b7_6', answer: 'khử', options: ['khử', 'tính acid', 'chỉ thị', 'thủy phân'] },
                { id: 'b7_7', answer: 'thủy ngân (Hg)', options: ['thủy ngân (Hg)', 'đồng (Cu)', 'bạc (Ag)', 'chì (Pb)'] }
              ]
            }
          ]
        },
        {
          id: 'b7-s2',
          title: 'II. Sulfur Dioxide (SO2)',
          items: [
            {
              id: 'b7-p2',
              type: 'paragraph',
              text: '- Khí SO2 là chất khí không màu, mùi {{b7_8}} khó chịu, {{b7_9}} hơn không khí, độc gây viêm đường hô hấp.\n- Tính chất hóa học: Là một acidic oxide (tan trong nước tạo H2SO3); có tính {{b7_10}} khi phản ứng với H2S tạo kết tủa lưu huỳnh màu vàng; có tính {{b7_11}} khi làm mất màu dung dịch nước bromine (Br2) hoặc thuốc tím (KMnO4).\n- Ứng dụng: Dùng làm chất trung gian sản xuất sulfuric acid, dùng {{b7_12}} bột giấy, chống nấm mốc cho nông sản.',
              blanks: [
                { id: 'b7_8', answer: 'hắc', options: ['hắc', 'thơm', 'khai', 'ngọt'] },
                { id: 'b7_9', answer: 'nặng', options: ['nặng', 'nhẹ', 'tương đương', 'nhẹ bằng một nửa'] },
                { id: 'b7_10', answer: 'oxi hóa', options: ['oxi hóa', 'điện ly', 'bay hơi', 'ngưng tụ'] },
                { id: 'b7_11', answer: 'khử', options: ['khử', 'trơ hóa học', 'tạo phức', 'este hóa'] },
                { id: 'b7_12', answer: 'tẩy trắng', options: ['tẩy trắng', 'tạo màu', 'làm thơm', 'đông tụ'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b7-q1',
          number: 1,
          question: 'Phản ứng nào sau đây chứng minh khí sulfur dioxide (SO2) có tính khử?',
          options: [
            { id: 'a', label: 'A', text: 'SO2 + 2NaOH → Na2SO3 + H2O' },
            { id: 'b', label: 'B', text: 'SO2 + 2H2S → 3S + 2H2O' },
            { id: 'c', label: 'C', text: 'SO2 + Br2 + 2H2O → 2HBr + H2SO4' },
            { id: 'd', label: 'D', text: 'SO2 + H2O ⇌ H2SO3' }
          ],
          correctLabel: 'C',
          explanation: 'Trong phản ứng với Br2, số oxi hóa của lưu huỳnh trong SO2 tăng từ +4 lên +6 trong H2SO4, chứng tỏ SO2 thể hiện tính khử.'
        }
      ]
    },
    {
      id: 'bai-8',
      number: 8,
      title: 'Bài 8: Sulfuric Acid và Muối Sulfate',
      chapterId: 'chuong-2',
      chapterTitle: 'Chương 2: Nitrogen và Sulfur',
      description: 'Cấu tạo phân tử H2SO4, quy tắc an toàn khi pha loãng, tính acid mạnh & tính oxi hoá mạnh, tính háo nước và thuốc thử nhận biết ion SO4²⁻.',
      sections: [
        {
          id: 'b8-s1',
          title: 'I. Sulfuric Acid (H2SO4)',
          items: [
            {
              id: 'b8-p1',
              type: 'paragraph',
              text: '1. Quy tắc pha loãng an toàn H2SO4 đặc\n- Acid sulfuric đặc là chất lỏng sánh như dầu, nặng gần gấp đôi nước và tan trong nước tỏa nhiệt cực kỳ lớn.\n- Khi pha loãng: Rót từ từ {{b8_1}} vào {{b8_2}} dọc theo đũa thủy tinh và khuấy đều. TUYỆT ĐỐI KHÔNG làm ngược lại vì sẽ làm nước sôi đột ngột và {{b8_3}} ra ngoài gây bỏng nguy hiểm.\n\n2. Tính chất của H2SO4 đặc\n- Tính oxi hóa cực mạnh: Oxi hóa được hầu hết kim loại (trừ Au, Pt) lên số oxi hóa cao nhất, giải phóng khí {{b8_4}} có mùi hắc.\n- Tính háo nước: H2SO4 đặc chiếm các phân tử nước trong hợp chất carbohydrate (đường ăn C12H22O11) biến chúng thành chất rắn màu {{b8_5}} (than carbon), sau đó carbon bị oxi hóa sủi bọt đẩy dâng cao cột than.',
              blanks: [
                { id: 'b8_1', answer: 'acid đặc', options: ['acid đặc', 'nước lạnh', 'dung dịch kiềm', 'muối ăn'] },
                { id: 'b8_2', answer: 'nước', options: ['nước', 'acid', 'dầu hỏa', 'bình kín'] },
                { id: 'b8_3', answer: 'bắn bắn tung tóe', options: ['bắn bắn tung tóe', 'đông đá', 'bốc cháy', 'kết tủa'] },
                { id: 'b8_4', answer: 'SO2', options: ['SO2', 'H2', 'H2S', 'O2'] },
                { id: 'b8_5', answer: 'đen', options: ['đen', 'trắng', 'vàng', 'xanh'] }
              ]
            }
          ]
        },
        {
          id: 'b8-s2',
          title: 'II. Muối Sulfate & Nhận biết ion SO4²⁻',
          items: [
            {
              id: 'b8-p2',
              type: 'paragraph',
              text: '- Thuốc thử nhận biết ion sulfate (SO4²⁻) là dung dịch chứa ion {{b8_6}} (như BaCl2, Ba(OH)2, Ba(NO3)2).\n- Hiện tượng: Xuất hiện kết tủa trắng {{b8_7}} không tan trong các acid mạnh dư.\n- Phương trình ion: Ba²⁺ + SO4²⁻ → {{b8_8}}↓ (kết tủa trắng).\n- Ứng dụng muối sulfate: {{b8_9}} dùng bó bột y tế và đúc tượng; {{b8_10}} dùng làm chất cản quang khi chụp X-quang dạ dày.',
              blanks: [
                { id: 'b8_6', answer: 'Ba²⁺', options: ['Ba²⁺', 'Ag⁺', 'Na⁺', 'Cu²⁺'] },
                { id: 'b8_7', answer: 'BaSO4', options: ['BaSO4', 'CaSO4', 'AgCl', 'BaCO3'] },
                { id: 'b8_8', answer: 'BaSO4', options: ['BaSO4', 'PbSO4', 'MgSO4', 'FeSO4'] },
                { id: 'b8_9', answer: 'Thạch cao nung (CaSO4.H2O)', options: ['Thạch cao nung (CaSO4.H2O)', 'BaSO4', 'CuSO4', 'Na2SO4'] },
                { id: 'b8_10', answer: 'Barium sulfate (BaSO4)', options: ['Barium sulfate (BaSO4)', 'CaSO4', 'FeSO4', 'ZnSO4'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b8-q1',
          number: 1,
          question: 'Kim loại nào sau đây KHÔNG tác dụng với dung dịch H2SO4 loãng nhưng tác dụng được với H2SO4 đặc, nóng?',
          options: [
            { id: 'a', label: 'A', text: 'Fe' },
            { id: 'b', label: 'B', text: 'Al' },
            { id: 'c', label: 'C', text: 'Cu' },
            { id: 'd', label: 'D', text: 'Mg' }
          ],
          correctLabel: 'C',
          explanation: 'Cu đứng sau hydrogen trong dãy hoạt động hoá học nên không tác dụng với H2SO4 loãng, nhưng tác dụng với H2SO4 đặc nóng có tính oxi hóa mạnh: Cu + 2H2SO4(đặc) → CuSO4 + SO2 + 2H2O.'
        },
        {
          id: 'b8-q2',
          number: 2,
          question: 'Để nhận biết ion SO4²⁻ trong dung dịch, người ta thường dùng thuốc thử nào sau đây?',
          options: [
            { id: 'a', label: 'A', text: 'Dung dịch AgNO3' },
            { id: 'b', label: 'B', text: 'Dung dịch BaCl2' },
            { id: 'c', label: 'C', text: 'Dung dịch NaOH' },
            { id: 'd', label: 'D', text: 'Dung dịch HCl' }
          ],
          correctLabel: 'B',
          explanation: 'BaCl2 tạo kết tủa trắng BaSO4 không tan trong acid mạnh.'
        }
      ]
    },
    {
      id: 'bai-9',
      number: 9,
      title: 'Bài 9: Ôn tập Chương 2 (Nitrogen - Sulfur)',
      chapterId: 'chuong-2',
      chapterTitle: 'Chương 2: Nitrogen và Sulfur',
      description: 'Tổng kết hệ thống hóa kiến thức các hợp chất của Nitrogen và Sulfur, chuỗi phản ứng và câu hỏi trắc nghiệm.',
      sections: [
        {
          id: 'b9-s1',
          title: 'Hệ thống hóa kiến thức cốt lõi Chương 2',
          items: [
            {
              id: 'b9-p1',
              type: 'paragraph',
              text: '- Đơn chất nitrogen tương đối trơ ở điều kiện thường do có {{b9_1}} rất bền.\n- Khí ammonia có tính base do còn {{b9_2}} trên nguyên tử N có khả năng nhận proton H+.\n- Acid HNO3 và H2SO4 đặc đều có tính {{b9_3}} rất mạnh, oxi hóa được hầu hết các kim loại.\n- Các kim loại Fe, Al, Cr bị {{b9_4}} trong dung dịch HNO3 đặc nguội và H2SO4 đặc nguội.\n- Để nhận biết ion SO4²⁻ dùng thuốc thử là ion {{b9_5}} tạo kết tủa màu {{b9_6}}.',
              blanks: [
                { id: 'b9_1', answer: 'liên kết ba (N≡N)', options: ['liên kết ba (N≡N)', 'liên kết đôi', 'liên kết ion', 'khối lượng nhỏ'] },
                { id: 'b9_2', answer: 'cặp electron tự do', options: ['cặp electron tự do', 'electron độc thân', 'proton tự do', 'liên kết phối trí'] },
                { id: 'b9_3', answer: 'oxi hóa', options: ['oxi hóa', 'khử', 'hút ẩm', 'chỉ thị'] },
                { id: 'b9_4', answer: 'thụ động hóa', options: ['thụ động hóa', 'hòa tan nhanh', 'nóng chảy', 'bốc cháy'] },
                { id: 'b9_5', answer: 'Ba²⁺', options: ['Ba²⁺', 'Ag⁺', 'Cu²⁺', 'Fe³⁺'] },
                { id: 'b9_6', answer: 'trắng (BaSO4)', options: ['trắng (BaSO4)', 'vàng (AgI)', 'xanh lam', 'nâu đỏ'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b9-q1',
          number: 1,
          question: 'Chất nào sau đây được sử dụng làm chất làm lạnh trong các hệ thống làm lạnh công nghiệp?',
          options: [
            { id: 'a', label: 'A', text: 'N2' },
            { id: 'b', label: 'B', text: 'NH3' },
            { id: 'c', label: 'C', text: 'SO2' },
            { id: 'd', label: 'D', text: 'S' }
          ],
          correctLabel: 'B',
          explanation: 'Ammonia (NH3) lỏng dễ hóa lỏng, có nhiệt bay hơi lớn nên được ứng dụng phổ biến làm chất làm lạnh trong công nghiệp.'
        }
      ]
    }
  ]
};
