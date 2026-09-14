import { Chapter } from '../types';

export const chapter5: Chapter = {
  id: 'chuong-5',
  number: 5,
  title: 'Chương 5: Dẫn xuất Halogen - Alcohol - Phenol',
  description: 'Dẫn xuất halogen (phản ứng thế nucleophile, quy tắc tách Zaitsev), Alcohol (liên kết hydro, phản ứng tách nước, oxi hóa bởi CuO, polyalcohol kề nhau với Cu(OH)2) và Phenol (tính acid, phản ứng thế vào vòng thơm tạo kết tủa trắng 2,4,6-tribromophenol).',
  lessons: [
    {
      id: 'bai-19',
      number: 19,
      title: 'Bài 19: Dẫn xuất Halogen',
      chapterId: 'chuong-5',
      chapterTitle: 'Chương 5: Dẫn xuất Halogen - Alcohol - Phenol',
      description: 'Khái niệm R-X, phân loại theo gốc và bậc, danh pháp thay thế và gốc-chức, phản ứng thế nhóm halogen (thủy phân), quy tắc tách Zaitsev, tầng ozone & CFC.',
      sections: [
        {
          id: 'b19-s1',
          title: 'I. Khái niệm, Phân loại & Danh pháp',
          items: [
            {
              id: 'b19-p1',
              type: 'paragraph',
              text: '- Dẫn xuất halogen: Khi thay thế một hay nhiều nguyên tử {{b19_1}} trong phân tử hydrocarbon bằng nguyên tử {{b19_2}} (F, Cl, Br, I).\n- Bậc của dẫn xuất halogen bằng bậc của nguyên tử {{b19_3}} liên kết trực tiếp với nguyên tử halogen.\n- Danh pháp thay thế: [Vị trí halogen] - [Tên {{b19_4}}] + [Tên hydrocarbon tương ứng]. Đánh số mạch C ưu tiên liên kết bội hơn nhóm thế.\n- Danh pháp gốc - chức: Tên gốc {{b19_5}} + halide (ví dụ: C2H5Cl là ethyl chloride).\n- Khí gas làm lạnh CFC chứa clo gây phá hủy tầng {{b19_6}}, hiện nay được thay thế bằng {{b19_7}} thân thiện hơn.',
              blanks: [
                { id: 'b19_1', answer: 'hydrogen', options: ['hydrogen', 'carbon', 'oxygen', 'nitrogen'] },
                { id: 'b19_2', answer: 'halogen', options: ['halogen', 'kim loại', 'alcohol', 'amine'] },
                { id: 'b19_3', answer: 'carbon', options: ['carbon', 'hydrogen', 'halogen', 'oxygen'] },
                { id: 'b19_4', answer: 'halogeno (fluoro, chloro, bromo, iodo)', options: ['halogeno (fluoro, chloro, bromo, iodo)', 'alkyl', 'acid', 'hydro'] },
                { id: 'b19_5', answer: 'hydrocarbon', options: ['hydrocarbon', 'acid', 'base', 'este'] },
                { id: 'b19_6', answer: 'ozone (O3)', options: ['ozone (O3)', 'khí quyển thấp', 'nhiệt đới', 'đối lưu'] },
                { id: 'b19_7', answer: 'HFC (hydrofluorocarbon)', options: ['HFC (hydrofluorocarbon)', 'DDT', 'khí than đá', 'SO2'] }
              ]
            }
          ]
        },
        {
          id: 'b19-s2',
          title: 'II. Tính chất hóa học: Thế Nucleophile & Tách Zaitsev',
          items: [
            {
              id: 'b19-p2',
              type: 'paragraph',
              text: '1. Phản ứng thế halogen (Thủy phân)\n- Do liên kết C-X phân cực mạnh về phía halogen nên nguyên tử C mang điện tích dương bộ phận dễ bị tấn công bởi tác nhân {{b19_8}} (như OH-).\n- Phương trình tổng quát: R-X + NaOH (đun nóng) → {{b19_9}} + NaX.\n- Nhận biết ion halide sinh ra bằng dung dịch {{b19_10}} sau khi trung hoà dung dịch bằng HNO3 loãng.\n\n2. Phản ứng tách hydrogen halide (Tách HX)\n- Khi đun với dung dịch kiềm (NaOH/KOH) trong dung môi {{b19_11}} (ethanol), tạo ra alkene.\n- Quy tắc Zaitsev: Halogen ưu tiên tách cùng H ở carbon bên cạnh có bậc {{b19_12}} hơn (chứa {{b19_13}} nguyên tử H hơn) tạo alkene có nhiều nhóm alkyl hơn (sản phẩm chính).',
              blanks: [
                { id: 'b19_8', answer: 'nucleophile (OH⁻)', options: ['nucleophile (OH⁻)', 'electrophile', 'gốc tự do', 'chất khử'] },
                { id: 'b19_9', answer: 'R-OH (alcohol)', options: ['R-OH (alcohol)', 'R-H (alkane)', 'R-O-R (ether)', 'R-CHO'] },
                { id: 'b19_10', answer: 'AgNO3', options: ['AgNO3', 'BaCl2', 'CuSO4', 'FeCl3'] },
                { id: 'b19_11', answer: 'alcohol', options: ['alcohol', 'nước cất', 'ether', 'benzen'] },
                { id: 'b19_12', answer: 'cao', options: ['cao', 'thấp', 'bậc I', 'bậc 0'] },
                { id: 'b19_13', answer: 'ít', options: ['ít', 'nhiều', 'nhiều nhất', 'bằng nhau'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b19-q1',
          number: 1,
          question: 'Sản phẩm chính theo quy tắc Zaitsev của phản ứng tách HCl từ 2-chlorobutane (CH3-CH2-CH(Cl)-CH3) khi đun nóng với KOH/ethanol là:',
          options: [
            { id: 'a', label: 'A', text: 'but-1-ene' },
            { id: 'b', label: 'B', text: 'but-2-ene' },
            { id: 'c', label: 'C', text: '2-methylpropene' },
            { id: 'd', label: 'D', text: 'buta-1,3-diene' }
          ],
          correctLabel: 'B',
          explanation: 'Theo Zaitsev, nguyên tử Cl tách cùng H ở C số 3 (C bậc II, có ít H hơn so với C số 1 bậc I có 3 H), tạo liên kết đôi giữa C2 và C3 là but-2-ene (sản phẩm chính chiếm ~81%).'
        }
      ]
    },
    {
      id: 'bai-20',
      number: 20,
      title: 'Bài 20: Alcohol',
      chapterId: 'chuong-5',
      chapterTitle: 'Chương 5: Dẫn xuất Halogen - Alcohol - Phenol',
      description: 'Cấu tạo nhóm -OH, liên kết hydrogen liên phân tử, phản ứng thế H kim loại kiềm, tách nước tạo ether và alkene, oxi hóa bằng CuO, phản ứng đặc trưng của polyalcohol kề nhau với Cu(OH)2.',
      sections: [
        {
          id: 'b20-s1',
          title: 'I. Cấu tạo, Phân loại, Danh pháp & Tính chất vật lí',
          items: [
            {
              id: 'b20-p1',
              type: 'paragraph',
              text: '- Alcohol là hợp chất hữu cơ có nhóm {{b20_1}} (-OH) liên kết trực tiếp với nguyên tử carbon no.\n- Alcohol no, đơn chức, mạch hở: CnH2n+1OH (n ≥ 1).\n- Bậc alcohol được tính bằng bậc của nguyên tử {{b20_2}} liên kết trực tiếp với nhóm -OH.\n- Do có liên kết {{b20_3}} liên phân tử, alcohol có nhiệt độ sôi cao hơn rất nhiều so với hydrocarbon hoặc ether có phân tử khối tương đương, các alcohol đầu dãy tan {{b20_4}} trong nước.\n- Tên thay thế: Tên hydrocarbon + [vị trí] + {{b20_5}}.',
              blanks: [
                { id: 'b20_1', answer: 'hydroxyl', options: ['hydroxyl', 'carboxyl', 'carbonyl', 'amino'] },
                { id: 'b20_2', answer: 'carbon', options: ['carbon', 'oxygen', 'hydrogen', 'halogen'] },
                { id: 'b20_3', answer: 'hydrogen', options: ['hydrogen', 'ion', 'cộng hoá trị không cực', 'kim loại'] },
                { id: 'b20_4', answer: 'vô hạn', options: ['vô hạn', 'rất ít', 'không tan', 'kém'] },
                { id: 'b20_5', answer: '-ol', options: ['-ol', '-al', '-one', '-oic acid'] }
              ]
            }
          ]
        },
        {
          id: 'b20-s2',
          title: 'II. Tính chất hóa học đặc trưng',
          items: [
            {
              id: 'b20-p2',
              type: 'paragraph',
              text: '1. Phản ứng thế H của nhóm -OH & Tách nước\n- Tác dụng với kim loại kiềm (Na, K) giải phóng khí {{b20_6}}.\n- Phản ứng tách nước (H2SO4 đặc):\n+ Ở 140 °C: Tách nước liên phân tử tạo {{b20_7}} (2C2H5OH → C2H5-O-C2H5 + H2O).\n+ Ở 170 - 180 °C: Tách nước nội phân tử tạo {{b20_8}} theo quy tắc Zaitsev.\n\n2. Oxi hóa & Phản ứng của Polyalcohol kề nhau\n- Alcohol bậc I bị CuO nung nóng oxi hóa thành {{b20_9}}.\n- Alcohol bậc II bị CuO nung nóng oxi hóa thành {{b20_10}}.\n- Alcohol bậc III {{b20_11}} bị oxi hóa bởi CuO.\n- Phản ứng nhận biết polyalcohol có từ 2 nhóm -OH kề nhau (như glycerol, ethylene glycol): Hòa tan kết tủa Cu(OH)2 màu xanh lam tạo dung dịch phức chất màu {{b20_12}}.',
              blanks: [
                { id: 'b20_6', answer: 'hydrogen (H2)', options: ['hydrogen (H2)', 'oxygen', 'methane', 'ammonia'] },
                { id: 'b20_7', answer: 'ether', options: ['ether', 'alkene', 'aldehyde', 'ester'] },
                { id: 'b20_8', answer: 'alkene', options: ['alkene', 'ether', 'alkane', 'alkyne'] },
                { id: 'b20_9', answer: 'aldehyde (-CHO)', options: ['aldehyde (-CHO)', 'ketone', 'carboxylic acid', 'ester'] },
                { id: 'b20_10', answer: 'ketone (C=O)', options: ['ketone (C=O)', 'aldehyde', 'alkene', 'ether'] },
                { id: 'b20_11', answer: 'không', options: ['không', 'rất dễ', 'luôn luôn', 'tạo acid'] },
                { id: 'b20_12', answer: 'xanh lam thẫm (đậm)', options: ['xanh lam thẫm (đậm)', 'đỏ gạch', 'trắng sữa', 'vàng nhạt'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b20-q1',
          number: 1,
          question: 'Chất nào sau đây là alcohol bậc II?',
          options: [
            { id: 'a', label: 'A', text: 'propan-1-ol' },
            { id: 'b', label: 'B', text: 'propan-2-ol' },
            { id: 'c', label: 'C', text: '2-methylpropan-1-ol' },
            { id: 'd', label: 'D', text: '2-methylpropan-2-ol' }
          ],
          correctLabel: 'B',
          explanation: 'Propan-2-ol có nhóm -OH gắn vào carbon số 2 (carbon liên kết với 2 carbon khác nên là C bậc II).'
        },
        {
          id: 'b20-q2',
          number: 2,
          question: 'Khi đun nóng butan-2-ol với H2SO4 đặc ở khoảng 170-180 °C, sản phẩm chính thu được là:',
          options: [
            { id: 'a', label: 'A', text: 'but-1-ene' },
            { id: 'b', label: 'B', text: 'but-2-ene' },
            { id: 'c', label: 'C', text: 'dibutyl ether' },
            { id: 'd', label: 'D', text: 'diethyl ether' }
          ],
          correctLabel: 'B',
          explanation: 'Theo quy tắc tách Zaitsev, nhóm -OH tách cùng nguyên tử H của carbon bậc cao hơn (C3) tạo but-2-ene.'
        }
      ]
    },
    {
      id: 'bai-21',
      number: 21,
      title: 'Bài 21: Phenol',
      chapterId: 'chuong-5',
      chapterTitle: 'Chương 5: Dẫn xuất Halogen - Alcohol - Phenol',
      description: 'Cấu tạo nhóm -OH đính trực tiếp vào vòng benzene, tính acid yếu hơn H2CO3 nhưng mạnh hơn alcohol, phản ứng thế nước bromine tạo kết tủa trắng 2,4,6-tribromophenol.',
      sections: [
        {
          id: 'b21-s1',
          title: 'I. Cấu tạo, Tính chất vật lí & Tính acid',
          items: [
            {
              id: 'b21-p1',
              type: 'paragraph',
              text: '- Phenol là những hợp chất hữu cơ có nhóm -OH liên kết trực tiếp với nguyên tử carbon của {{b21_1}}.\n- Công thức phân tử của chất phenol đơn giản nhất: {{b21_2}} (C6H5OH).\n- Ảnh hưởng qua lại: Vòng benzene hút electron làm tăng độ phân cực của liên kết O-H, khiến nguyên tử H trở nên {{b21_3}} hơn so với trong alcohol.\n- Tính acid: Phenol có tính acid yếu, {{b21_4}} làm đổi màu quỳ tím, tác dụng được với kim loại kiềm Na và dung dịch kiềm {{b21_5}}.\n- So sánh lực acid: Phenol có tính acid mạnh hơn {{b21_6}} nhưng yếu hơn {{b21_7}} (khi sục khí CO2 vào sodium phenolate sẽ tái tạo lại phenol ít tan làm vẩn đục dung dịch).',
              blanks: [
                { id: 'b21_1', answer: 'vòng benzene', options: ['vòng benzene', 'mạch thẳng no', 'liên kết đôi', 'gốc alkyl'] },
                { id: 'b21_2', answer: 'C6H6O', options: ['C6H6O', 'C7H8O', 'C6H12O', 'C6H5OH'] },
                { id: 'b21_3', answer: 'linh động', options: ['linh động', 'bền vững', 'trơ', 'kém linh động'] },
                { id: 'b21_4', answer: 'không', options: ['không', 'luôn luôn', 'dễ dàng', 'lập tức'] },
                { id: 'b21_5', answer: 'NaOH (hoặc KOH)', options: ['NaOH (hoặc KOH)', 'NaCl', 'HCl', 'Na2SO4'] },
                { id: 'b21_6', answer: 'alcohol', options: ['alcohol', 'H2SO4', 'HCl', 'HNO3'] },
                { id: 'b21_7', answer: 'carbonic acid (H2CO3)', options: ['carbonic acid (H2CO3)', 'nước', 'ethanol', 'glycerol'] }
              ]
            }
          ]
        },
        {
          id: 'b21-s2',
          title: 'II. Phản ứng thế ở vòng thơm & Ứng dụng',
          items: [
            {
              id: 'b21-p2',
              type: 'paragraph',
              text: '1. Phản ứng thế ở vòng thơm\n- Nhóm -OH đẩy electron vào vòng làm tăng mật độ electron ở các vị trí {{b21_8}} và {{b21_9}} (o-, p-).\n- Tác dụng với nước bromine: Phản ứng ngay ở nhiệt độ thường tạo kết tủa màu {{b21_10}} của chất 2,4,6-tribromophenol (dùng để nhận biết phenol).\n- Tác dụng với HNO3 đặc (xúc tác H2SO4 đặc, đun nóng): Tạo kết tủa màu {{b21_11}} là picric acid (2,4,6-trinitrophenol) dùng làm thuốc nổ.\n\n2. Ứng dụng và điều chế\n- Sản xuất nhựa {{b21_12}} (nhựa bakelite), phẩm nhuộm, thuốc sát trùng, thuốc diệt cỏ 2,4-D.\n- Điều chế công nghiệp: Oxi hóa {{b21_13}} (isopropylbenzene) bằng không khí rồi thủy phân thu được đồng thời phenol và acetone.',
              blanks: [
                { id: 'b21_8', answer: 'ortho', options: ['ortho', 'meta', 'trung tâm', 'ngoài vòng'] },
                { id: 'b21_9', answer: 'para', options: ['para', 'meta', 'đối đỉnh', 'chân vòng'] },
                { id: 'b21_10', answer: 'trắng', options: ['trắng', 'vàng', 'nâu', 'xanh'] },
                { id: 'b21_11', answer: 'vàng', options: ['vàng', 'trắng bạc', 'đỏ thẫm', 'xanh đen'] },
                { id: 'b21_12', answer: 'phenol-formaldehyde', options: ['phenol-formaldehyde', 'PE', 'PP', 'PVC'] },
                { id: 'b21_13', answer: 'cumene', options: ['cumene', 'toluene', 'ethane', 'cyclohexane'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b21-q1',
          number: 1,
          question: 'Phát biểu nào sau đây về phenol là SAI?',
          options: [
            { id: 'a', label: 'A', text: 'Phenol là hợp chất hữu cơ có nhóm -OH liên kết trực tiếp với nguyên tử C của vòng benzene' },
            { id: 'b', label: 'B', text: 'Phenol ít tan trong nước lạnh nhưng tan vô hạn trong nước nóng trên 66 °C' },
            { id: 'c', label: 'C', text: 'Dung dịch phenol có tính acid yếu làm đổi màu quỳ tím thành đỏ nhạt' },
            { id: 'd', label: 'D', text: 'Nhóm -OH đẩy electron vào vòng làm phản ứng thế vào vòng thơm của phenol dễ hơn benzene' }
          ],
          correctLabel: 'C',
          explanation: 'Mặc dù phenol có tính acid và tác dụng được với NaOH, nhưng lực acid của nó rất yếu (yếu hơn cả H2CO3) nên KHÔNG làm đổi màu quỳ tím.'
        },
        {
          id: 'b21-q2',
          number: 2,
          question: 'Để nhận biết phenol trong dung dịch, người ta thường dùng thuốc thử nào sau đây để quan sát kết tủa trắng?',
          options: [
            { id: 'a', label: 'A', text: 'Dung dịch NaOH' },
            { id: 'b', label: 'B', text: 'Nước bromine (Br2)' },
            { id: 'c', label: 'C', text: 'Dung dịch Na2CO3' },
            { id: 'd', label: 'D', text: 'Dung dịch AgNO3/NH3' }
          ],
          correctLabel: 'B',
          explanation: 'Nước bromine tác dụng với phenol ngay ở nhiệt độ thường tạo kết tủa trắng 2,4,6-tribromophenol.'
        }
      ]
    },
    {
      id: 'bai-22',
      number: 22,
      title: 'Bài 22: Ôn tập Chương 5 (Dẫn xuất Halogen - Alcohol - Phenol)',
      chapterId: 'chuong-5',
      chapterTitle: 'Chương 5: Dẫn xuất Halogen - Alcohol - Phenol',
      description: 'Hệ thống hóa so sánh 3 nhóm hợp chất hữu cơ chứa halogen và oxygen, chuỗi chuyển hóa và câu hỏi trắc nghiệm.',
      sections: [
        {
          id: 'b22-s1',
          title: 'Hệ thống hóa kiến thức cốt lõi Chương 5',
          items: [
            {
              id: 'b22-p1',
              type: 'paragraph',
              text: '- Dẫn xuất halogen: Phản ứng thủy phân bằng dung dịch {{b22_1}} nóng; phản ứng tách HX tuân theo quy tắc {{b22_2}}.\n- Alcohol: Có liên kết {{b22_3}} làm tăng nhiệt độ sôi; polyalcohol kề nhau hòa tan {{b22_4}} tạo dung dịch xanh lam đậm.\n- Phenol: Tác dụng được với dung dịch kiềm {{b22_5}} nhưng không làm đổi màu {{b22_6}}; phản ứng với nước bromine tạo kết tủa {{b22_7}}.',
              blanks: [
                { id: 'b22_1', answer: 'kiềm (NaOH)', options: ['kiềm (NaOH)', 'axit HCl', 'nước cất lạnh', 'muối ăn'] },
                { id: 'b22_2', answer: 'Zaitsev', options: ['Zaitsev', 'Markovnikov', 'Le Chatelier', 'Hund'] },
                { id: 'b22_3', answer: 'hydrogen', options: ['hydrogen', 'ion', 'kim loại', 'phối trí'] },
                { id: 'b22_4', answer: 'Cu(OH)2', options: ['Cu(OH)2', 'Fe(OH)3', 'Al(OH)3', 'AgOH'] },
                { id: 'b22_5', answer: 'NaOH', options: ['NaOH', 'NaCl', 'HCl', 'H2O'] },
                { id: 'b22_6', answer: 'quỳ tím', options: ['quỳ tím', 'phenolphthalein', 'chỉ thị vạn năng', 'nước vôi'] },
                { id: 'b22_7', answer: 'trắng (2,4,6-tribromophenol)', options: ['trắng (2,4,6-tribromophenol)', 'vàng', 'nâu đỏ', 'xanh'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b22-q1',
          number: 1,
          question: 'Đun nóng hỗn hợp ethanol (C2H5OH) và methanol (CH3OH) với dung dịch H2SO4 đặc ở 140 °C thu được tối đa bao nhiêu sản phẩm ether hữu cơ?',
          options: [
            { id: 'a', label: 'A', text: '1' },
            { id: 'b', label: 'B', text: '2' },
            { id: 'c', label: 'C', text: '3' },
            { id: 'd', label: 'D', text: '4' }
          ],
          correctLabel: 'C',
          explanation: 'Hai phân tử alcohol tách nước tạo ether có công thức số sản phẩm = n(n+1)/2 = 2×3/2 = 3 ether (CH3-O-CH3, C2H5-O-C2H5, CH3-O-C2H5).'
        }
      ]
    }
  ]
};
