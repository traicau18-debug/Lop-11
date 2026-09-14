import { Chapter } from '../types';

export const chapter6: Chapter = {
  id: 'chuong-6',
  number: 6,
  title: 'Chương 6: Hợp chất Carbonyl & Carboxylic Acid',
  description: 'Hợp chất carbonyl (Aldehyde & Ketone: nhóm C=O phân cực, phản ứng tráng bạc Tollens, tạo kết tủa đỏ gạch Cu2O, phản ứng iodoform) và Carboxylic Acid (nhóm -COOH, liên kết hydro dimer bền vững, tính acid, phản ứng ester hoá, lên men giấm).',
  lessons: [
    {
      id: 'bai-23',
      number: 23,
      title: 'Bài 23: Hợp chất Carbonyl (Aldehyde - Ketone)',
      chapterId: 'chuong-6',
      chapterTitle: 'Chương 6: Hợp chất Carbonyl & Carboxylic Acid',
      description: 'Cấu tạo nhóm C=O, danh pháp IUPAC và thông thường, phản ứng khử bằng NaBH4, phản ứng tráng bạc Tollens, phản ứng với Cu(OH)2 trong kiềm, phản ứng tạo iodoform của nhóm methyl ketone.',
      sections: [
        {
          id: 'b23-s1',
          title: 'I. Khái niệm, Cấu tạo & Danh pháp',
          items: [
            {
              id: 'b23-p1',
              type: 'paragraph',
              text: '- Hợp chất carbonyl có chứa nhóm {{b23_1}} (C=O) trong phân tử.\n- Aldehyde: Nhóm -CHO liên kết với gốc hydrocarbon hoặc nguyên tử {{b23_2}}.\n- Ketone: Nhóm C=O liên kết với {{b23_3}} gốc hydrocarbon.\n- Liên kết C=O phân cực mạnh về phía nguyên tử {{b23_4}}, nguyên tử C mang một phần điện tích {{b23_5}}.\n- Aldehyde đơn no hở kết thúc bằng đuôi {{b23_6}}; Ketone kết thúc bằng đuôi {{b23_7}}.\n- HCHO có tên thay thế là methanal, tên thông thường là {{b23_8}} (formic aldehyde). CH3COCH3 là propan-2-one (tên quen thuộc là {{b23_9}}).',
              blanks: [
                { id: 'b23_1', answer: 'carbonyl', options: ['carbonyl', 'carboxyl', 'hydroxyl', 'ester'] },
                { id: 'b23_2', answer: 'hydrogen (H)', options: ['hydrogen (H)', 'halogen', 'oxygen', 'kim loại'] },
                { id: 'b23_3', answer: 'hai', options: ['hai', 'một', 'ba', 'bốn'] },
                { id: 'b23_4', answer: 'oxygen (O)', options: ['oxygen (O)', 'carbon (C)', 'hydrogen (H)', 'nitrogen (N)'] },
                { id: 'b23_5', answer: 'dương (δ⁺)', options: ['dương (δ⁺)', 'âm (δ⁻)', 'triệt tiêu', 'trung hòa'] },
                { id: 'b23_6', answer: '-al', options: ['-al', '-ol', '-one', '-oic acid'] },
                { id: 'b23_7', answer: '-one', options: ['-one', '-ol', '-al', '-oat'] },
                { id: 'b23_8', answer: 'formaldehyde', options: ['formaldehyde', 'acetaldehyde', 'acetone', 'formalin'] },
                { id: 'b23_9', answer: 'acetone', options: ['acetone', 'acetaldehyde', 'propanol', 'acetic acid'] }
              ]
            }
          ]
        },
        {
          id: 'b23-s2',
          title: 'II. Tính chất hóa học đặc trưng',
          items: [
            {
              id: 'b23-p2',
              type: 'paragraph',
              text: '1. Phản ứng khử (NaBH4 / LiAlH4)\n- Aldehyde bị khử tạo thành alcohol bậc {{b23_10}}.\n- Ketone bị khử tạo thành alcohol bậc {{b23_11}}.\n\n2. Phản ứng oxi hóa của Aldehyde\n- Phản ứng tráng bạc (Thuốc thử Tollens [Ag(NH3)2]OH): Aldehyde bị oxi hóa tạo thành kim loại {{b23_12}} sáng bóng bám vào thành ống nghiệm.\n- Tác dụng với Cu(OH)2 trong môi trường kiềm (đun nóng): Tạo kết tủa màu {{b23_13}} của Cu2O.\n- Ketone {{b23_14}} tham gia phản ứng tráng bạc và phản ứng với Cu(OH)2 (dùng để phân biệt aldehyde và ketone).\n\n3. Phản ứng tạo Iodoform\n- Hợp chất carbonyl có nhóm methyl ketone ({{b23_15}}) phản ứng với I2 trong NaOH tạo kết tủa màu {{b23_16}} nhạt của iodoform (CHI3).',
              blanks: [
                { id: 'b23_10', answer: 'I (nhất)', options: ['I (nhất)', 'II (hai)', 'III (ba)', 'IV'] },
                { id: 'b23_11', answer: 'II (hai)', options: ['II (hai)', 'I (nhất)', 'III (ba)', 'không phản ứng'] },
                { id: 'b23_12', answer: 'bạc (Ag)', options: ['bạc (Ag)', 'đồng (Cu)', 'sắt (Fe)', 'chì (Pb)'] },
                { id: 'b23_13', answer: 'đỏ gạch (Cu2O)', options: ['đỏ gạch (Cu2O)', 'xanh thẫm', 'vàng tươi', 'trắng đục'] },
                { id: 'b23_14', answer: 'không', options: ['không', 'rất dễ', 'luôn luôn', 'ngay tức khắc'] },
                { id: 'b23_15', answer: 'CH3-CO-', options: ['CH3-CO-', 'C2H5-CO-', 'H-CO-', 'CH3-CH2-'] },
                { id: 'b23_16', answer: 'vàng', options: ['vàng', 'trắng bạc', 'nâu đỏ', 'xanh lam'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b23-q1',
          number: 1,
          question: 'Cho ethanal (CH3CHO) tác dụng với lượng dư thuốc thử Tollens đun nóng nhẹ. Hiện tượng thí nghiệm quan sát được là:',
          options: [
            { id: 'a', label: 'A', text: 'Xuất hiện kết tủa trắng xanh' },
            { id: 'b', label: 'B', text: 'Xuất hiện kết tủa màu đỏ gạch' },
            { id: 'c', label: 'C', text: 'Có lớp kim loại bạc sáng bóng bám trên thành ống nghiệm' },
            { id: 'd', label: 'D', text: 'Dung dịch chuyển từ không màu sang màu tím' }
          ],
          correctLabel: 'C',
          explanation: 'Ethanal phản ứng tráng bạc với thuốc thử Tollens sinh ra Ag kim loại sáng bóng như gương bám vào thành ống nghiệm: CH3CHO + 2[Ag(NH3)2]OH → CH3COONH4 + 2Ag↓ + 3NH3 + H2O.'
        },
        {
          id: 'b23-q2',
          number: 2,
          question: 'Cho 4,40 gam ethanal (CH3CHO, M=44) tác dụng hoàn toàn với lượng dư thuốc thử Tollens, lượng kết tủa bạc Ag thu được là:',
          options: [
            { id: 'a', label: 'A', text: '10,80 gam' },
            { id: 'b', label: 'B', text: '21,60 gam' },
            { id: 'c', label: 'C', text: '5,40 gam' },
            { id: 'd', label: 'D', text: '43,20 gam' }
          ],
          correctLabel: 'B',
          explanation: 'n(CH3CHO) = 4,4 / 44 = 0,1 mol. 1 mol CH3CHO sinh ra 2 mol Ag => n(Ag) = 0,2 mol => m(Ag) = 0,2 × 108 = 21,60 gam.'
        }
      ]
    },
    {
      id: 'bai-24',
      number: 24,
      title: 'Bài 24: Carboxylic Acid',
      chapterId: 'chuong-6',
      chapterTitle: 'Chương 6: Hợp chất Carbonyl & Carboxylic Acid',
      description: 'Nhóm carboxyl (-COOH), liên kết hydrogen dạng dimer, nhiệt độ sôi cao vượt trội, tính acid yếu, phản ứng ester hóa, lên men giấm.',
      sections: [
        {
          id: 'b24-s1',
          title: 'I. Cấu tạo, Tính chất vật lí & Danh pháp',
          items: [
            {
              id: 'b24-p1',
              type: 'paragraph',
              text: '- Carboxylic acid là những hợp chất hữu cơ chứa nhóm {{b24_1}} (-COOH) liên kết trực tiếp với nguyên tử C hoặc nguyên tử H.\n- Công thức chung của carboxylic acid no, đơn chức, mạch hở: {{b24_2}} (n ≥ 1).\n- Liên kết hydrogen: Các phân tử carboxylic acid tự liên kết với nhau bằng liên kết hydrogen rất bền vững tạo dạng {{b24_3}} (vòng đôi) hoặc polymer, vì vậy chúng có nhiệt độ sôi {{b24_4}} so với alcohol và carbonyl có cùng phân tử khối.\n- Tên thay thế: Axit + [Tên hydrocarbon] + {{b24_5}} (hoặc [Tên hydrocarbon] + oic acid).\n- HCOOH có tên thông thường là {{b24_6}} (có trong nọc kiến); CH3COOH có tên thông thường là {{b24_7}} (thành phần của giấm ăn).',
              blanks: [
                { id: 'b24_1', answer: 'carboxyl', options: ['carboxyl', 'carbonyl', 'hydroxyl', 'amino'] },
                { id: 'b24_2', answer: 'CnH2nO2', options: ['CnH2nO2', 'CnH2n+2O', 'CnH2n-2O2', 'CnH2nO'] },
                { id: 'b24_3', answer: 'dimer', options: ['dimer', 'monomer', 'tinh thể ion', 'mạng kim loại'] },
                { id: 'b24_4', answer: 'cao hơn hẳn', options: ['cao hơn hẳn', 'thấp hơn', 'tương đương', 'không đổi'] },
                { id: 'b24_5', answer: '-oic acid', options: ['-oic acid', '-ol', '-al', '-one'] },
                { id: 'b24_6', answer: 'formic acid', options: ['formic acid', 'acetic acid', 'oxalic acid', 'propionic acid'] },
                { id: 'b24_7', answer: 'acetic acid', options: ['acetic acid', 'formic acid', 'butyric acid', 'benzoic acid'] }
              ]
            }
          ]
        },
        {
          id: 'b24-s2',
          title: 'II. Tính chất hóa học & Điều chế',
          items: [
            {
              id: 'b24-p2',
              type: 'paragraph',
              text: '1. Tính acid\n- Trong nước phân li giải phóng ion {{b24_8}}, làm quỳ tím chuyển sang màu {{b24_9}}.\n- Tác dụng với kim loại đứng trước hydrogen (Mg, Zn) giải phóng khí {{b24_10}}.\n- Tác dụng với muối carbonate (Na2CO3, CaCO3) giải phóng khí {{b24_11}} sủi bọt mạnh (ứng dụng dùng giấm ăn để tẩy cặn vôi ấm nước).\n\n2. Phản ứng ester hóa & Lên men giấm\n- Carboxylic acid phản ứng với alcohol khi đun nóng với xúc tác {{b24_12}} tạo ester và nước theo phản ứng thuận nghịch.\n- Phương pháp lên men giấm: Oxi hóa ethanol bằng oxygen không khí nhờ vi khuẩn men giấm (acetobacter): C2H5OH + O2 → {{b24_13}} + H2O.',
              blanks: [
                { id: 'b24_8', answer: 'H⁺ (hydronium)', options: ['H⁺ (hydronium)', 'OH⁻', 'Na⁺', 'Cl⁻'] },
                { id: 'b24_9', answer: 'đỏ (hồng)', options: ['đỏ (hồng)', 'xanh', 'vàng', 'tím đậm'] },
                { id: 'b24_10', answer: 'H2', options: ['H2', 'O2', 'CO2', 'CH4'] },
                { id: 'b24_11', answer: 'CO2', options: ['CO2', 'H2', 'SO2', 'NH3'] },
                { id: 'b24_12', answer: 'H2SO4 đặc', options: ['H2SO4 đặc', 'NaOH', 'bột sắt', 'khí clo'] },
                { id: 'b24_13', answer: 'CH3COOH (acetic acid)', options: ['CH3COOH (acetic acid)', 'HCOOH', 'CH3CHO', 'CO2'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b24-q1',
          number: 1,
          question: 'Cho bốn hợp chất có phân tử khối xấp xỉ nhau: propane, acetaldehyde, ethanol, acetic acid. Chất có nhiệt độ sôi cao nhất là:',
          options: [
            { id: 'a', label: 'A', text: 'Propane' },
            { id: 'b', label: 'B', text: 'Acetaldehyde' },
            { id: 'c', label: 'C', text: 'Ethanol' },
            { id: 'd', label: 'D', text: 'Acetic acid' }
          ],
          correctLabel: 'D',
          explanation: 'Acetic acid có khả năng tạo liên kết hydrogen liên phân tử dạng dimer bền hơn hẳn liên kết hydrogen của alcohol, nên có nhiệt độ sôi cao nhất (118 °C).'
        },
        {
          id: 'b24-q2',
          number: 2,
          question: 'Khi nhỏ dung dịch Na2CO3 vào dung dịch acetic acid, hiện tượng quan sát được là:',
          options: [
            { id: 'a', label: 'A', text: 'Xuất hiện kết tủa trắng' },
            { id: 'b', label: 'B', text: 'Có bọt khí CO2 thoát ra sủi bọt mạnh' },
            { id: 'c', label: 'C', text: 'Dung dịch chuyển sang màu xanh lam' },
            { id: 'd', label: 'D', text: 'Không có hiện tượng gì xảy ra' }
          ],
          correctLabel: 'B',
          explanation: '2CH3COOH + Na2CO3 → 2CH3COONa + CO2↑ + H2O (sinh ra khí CO2 sủi bọt mạnh).'
        }
      ]
    },
    {
      id: 'bai-25',
      number: 25,
      title: 'Bài 25: Ôn tập Chương 6 (Carbonyl & Carboxylic Acid)',
      chapterId: 'chuong-6',
      chapterTitle: 'Chương 6: Hợp chất Carbonyl & Carboxylic Acid',
      description: 'So sánh cấu tạo, liên kết hydrogen, phản ứng đặc trưng của hợp chất carbonyl và carboxylic acid, sơ đồ chuỗi biến hoá.',
      sections: [
        {
          id: 'b25-s1',
          title: 'Hệ thống hóa kiến thức cốt lõi Chương 6',
          items: [
            {
              id: 'b25-p1',
              type: 'paragraph',
              text: '- Hợp chất Carbonyl chứa nhóm {{b25_1}} (C=O); Carboxylic acid chứa nhóm {{b25_2}} (-COOH).\n- Phân tử carbonyl {{b25_3}} tự tạo liên kết hydrogen với nhau, còn carboxylic acid tự tạo liên kết hydrogen dạng {{b25_4}} rất bền.\n- Thuốc thử Tollens dùng để nhận biết {{b25_5}} tạo kết tủa bạc Ag.\n- Phản ứng tạo iodoform CHI3 kết tủa màu vàng dùng để nhận biết nhóm {{b25_6}}.\n- Phản ứng ester hóa giữa carboxylic acid và alcohol cần xúc tác {{b25_7}} và đun nóng.',
              blanks: [
                { id: 'b25_1', answer: 'carbonyl', options: ['carbonyl', 'hydroxyl', 'carboxyl', 'amino'] },
                { id: 'b25_2', answer: 'carboxyl', options: ['carboxyl', 'carbonyl', 'este', 'ether'] },
                { id: 'b25_3', answer: 'không', options: ['không', 'luôn', 'rất dễ', 'mạnh mẽ'] },
                { id: 'b25_4', answer: 'dimer (vòng đôi)', options: ['dimer (vòng đôi)', 'mạng ba chiều', 'phối trí', 'ion'] },
                { id: 'b25_5', answer: 'aldehyde', options: ['aldehyde', 'ketone', 'alkane', 'ether'] },
                { id: 'b25_6', answer: 'CH3-CO- (methyl ketone)', options: ['CH3-CO- (methyl ketone)', 'C2H5-CO-', 'H-CO-', 'OH-'] },
                { id: 'b25_7', answer: 'H2SO4 đặc', options: ['H2SO4 đặc', 'NaOH loãng', 'FeCl3', 'bột Ni'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b25-q1',
          number: 1,
          question: 'Hợp chất carbonyl nào dưới đây tham gia phản ứng tráng bạc tạo kết tủa Ag?',
          options: [
            { id: 'a', label: 'A', text: 'Propan-2-one' },
            { id: 'b', label: 'B', text: 'Ethanal (CH3CHO)' },
            { id: 'c', label: 'C', text: 'Acetone' },
            { id: 'd', label: 'D', text: 'Benzophenone' }
          ],
          correctLabel: 'B',
          explanation: 'Ethanal là aldehyde có nhóm -CHO nên tham gia phản ứng tráng bạc với thuốc thử Tollens.'
        }
      ]
    }
  ]
};
