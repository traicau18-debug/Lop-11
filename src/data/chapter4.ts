import { Chapter } from '../types';

export const chapter4: Chapter = {
  id: 'chuong-4',
  number: 4,
  title: 'Chương 4: Hydrocarbon',
  description: 'Alkane (no), Hydrocarbon không no (Alkene, Alkyne) và Arene (Hydrocarbon thơm). Quy tắc thế Markovnikov, phản ứng trùng hợp, phản ứng tráng bạc của alk-1-yne, quy tắc thế vòng benzene, TNT.',
  lessons: [
    {
      id: 'bai-15',
      number: 15,
      title: 'Bài 15: Alkane',
      chapterId: 'chuong-4',
      chapterTitle: 'Chương 4: Hydrocarbon',
      description: 'Công thức chung CnH2n+2, danh pháp IUPAC, tính chất vật lí, phản ứng thế halogen (chiếu sáng), phản ứng cracking, reforming, phản ứng cháy.',
      sections: [
        {
          id: 'b15-s1',
          title: 'I. Cấu tạo, Đồng phân & Danh pháp',
          items: [
            {
              id: 'b15-p1',
              type: 'paragraph',
              text: '- Alkane là các hydrocarbon {{b15_1}}, mạch hở, chỉ chứa liên kết {{b15_2}} C-C và C-H trong phân tử.\n- Công thức chung: CnH2n+2 (với n là số nguyên, n ≥ {{b15_3}}).\n- Bốn liên kết của nguyên tử carbon trung tâm hướng về 4 đỉnh của hình {{b15_4}} với góc liên kết khoảng {{b15_5}}°.\n- Từ C4H10 trở đi xuất hiện đồng phân mạch {{b15_6}}.\n- Danh pháp: Tên phần nền + đuôi {{b15_7}}. Nhánh gọi là gốc {{b15_8}} (đuôi -yl). Đánh số C mạch chính sao cho số chỉ vị trí nhánh là {{b15_9}} nhất.',
              blanks: [
                { id: 'b15_1', answer: 'no', options: ['no', 'không no', 'thơm', 'mạch vòng'] },
                { id: 'b15_2', answer: 'đơn', options: ['đơn', 'đôi', 'ba', 'phối trí'] },
                { id: 'b15_3', answer: '1', options: ['1', '2', '3', '4'] },
                { id: 'b15_4', answer: 'tứ diện đều', options: ['tứ diện đều', 'chóp tam giác', 'vuông phẳng', 'đường thẳng'] },
                { id: 'b15_5', answer: '109,5', options: ['109,5', '120', '180', '90'] },
                { id: 'b15_6', answer: 'carbon', options: ['carbon', 'nhóm chức', 'vị trí liên kết bội', 'hình học'] },
                { id: 'b15_7', answer: '-ane', options: ['-ane', '-ene', '-yne', '-ol'] },
                { id: 'b15_8', answer: 'alkyl', options: ['alkyl', 'aryl', 'acyl', 'halogeno'] },
                { id: 'b15_9', answer: 'nhỏ', options: ['nhỏ', 'lớn', 'chẵn', 'lẻ'] }
              ]
            }
          ]
        },
        {
          id: 'b15-s2',
          title: 'II. Tính chất hóa học & Ứng dụng',
          items: [
            {
              id: 'b15-p2',
              type: 'paragraph',
              text: '1. Phản ứng thế halogen\n- Khi chiếu sáng hoặc đun nóng, alkane phản ứng với chlorine/bromine.\n- Quy tắc thế: Nguyên tử halogen ưu tiên thế vào nguyên tử hydrogen của carbon bậc {{b15_10}} hơn.\n- Phương trình thế clo vào methane: CH4 + Cl2 (ánh sáng) → {{b15_11}} + HCl.\n\n2. Cracking, Reforming & Oxi hóa\n- Cracking: Phân cắt liên kết C-C tạo các hydrocarbon có mạch carbon {{b15_12}} hơn.\n- Reforming: Chuyển alkane mạch thẳng thành alkane mạch {{b15_13}} hoặc hydrocarbon thơm, làm tăng chỉ số {{b15_14}} của xăng.\n- Phản ứng cháy tỏa nhiệt lớn: CnH2n+2 + (3n+1)/2 O2 → {{b15_15}} CO2 + (n+1) H2O.',
              blanks: [
                { id: 'b15_10', answer: 'cao', options: ['cao', 'thấp', 'bậc I', 'trung gian'] },
                { id: 'b15_11', answer: 'CH3Cl', options: ['CH3Cl', 'CH2Cl2', 'CHCl3', 'CCl4'] },
                { id: 'b15_12', answer: 'ngắn', options: ['ngắn', 'dài', 'vòng', 'bậc cao'] },
                { id: 'b15_13', answer: 'nhánh', options: ['nhánh', 'dài hơn', 'không no', 'thẳng tuyệt đối'] },
                { id: 'b15_14', answer: 'octane', options: ['octane', 'cetane', 'iodine', 'acid'] },
                { id: 'b15_15', answer: 'n', options: ['n', 'n+1', '2n', 'n-1'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b15-q1',
          number: 1,
          question: 'Alkane nào sau đây có nhiệt độ sôi cao nhất ở điều kiện thường?',
          options: [
            { id: 'a', label: 'A', text: 'Methane' },
            { id: 'b', label: 'B', text: 'Ethane' },
            { id: 'c', label: 'C', text: 'Propane' },
            { id: 'd', label: 'D', text: 'Butane' }
          ],
          correctLabel: 'D',
          explanation: 'Nhiệt độ sôi của các alkane mạch không phân nhánh tăng dần theo chiều tăng của phân tử khối do lực tương tác van der Waals tăng.'
        },
        {
          id: 'b15-q2',
          number: 2,
          question: 'Khi cho neopentane (2,2-dimethylpropane) tác dụng với chlorine (tỉ lệ mol 1:1, chiếu sáng) thu được tối đa bao nhiêu sản phẩm thế monochlorine?',
          options: [
            { id: 'a', label: 'A', text: '1 sản phẩm' },
            { id: 'b', label: 'B', text: '2 sản phẩm' },
            { id: 'c', label: 'C', text: '3 sản phẩm' },
            { id: 'd', label: 'D', text: '4 sản phẩm' }
          ],
          correctLabel: 'A',
          explanation: 'Neopentane C(CH3)4 có cấu trúc đối xứng hoàn hảo, cả 12 nguyên tử H ở 4 nhóm -CH3 đều tương đương nhau, carbon trung tâm không còn H nên chỉ tạo 1 dẫn xuất monochloro duy nhất.'
        }
      ]
    },
    {
      id: 'bai-16',
      number: 16,
      title: 'Bài 16: Hydrocarbon không no (Alkene & Alkyne)',
      chapterId: 'chuong-4',
      chapterTitle: 'Chương 4: Hydrocarbon',
      description: 'Alkene CnH2n và Alkyne CnH2n-2, đồng phân cis-trans, phản ứng cộng HX quy tắc Markovnikov, phản ứng trùng hợp, phản ứng tráng bạc alk-1-yne.',
      sections: [
        {
          id: 'b16-s1',
          title: 'I. Cấu tạo, Đồng phân cis-trans & Danh pháp',
          items: [
            {
              id: 'b16-p1',
              type: 'paragraph',
              text: '- Alkene: Hydrocarbon mạch hở chứa 1 liên kết {{b16_1}} C=C (gồm 1 liên kết σ và 1 liên kết π kém bền), công thức chung CnH2n (n ≥ {{b16_2}}).\n- Alkyne: Hydrocarbon mạch hở chứa 1 liên kết {{b16_3}} C≡C (gồm 1 liên kết σ và 2 liên kết π kém bền), công thức chung CnH2n-2 (n ≥ {{b16_4}}).\n- Đồng phân hình học (cis-trans): Xuất hiện khi mỗi C của liên kết đôi liên kết với 2 nhóm thế {{b16_5}} nhau.\n+ Đồng phân {{b16_6}}-: Có mạch C chính nằm về cùng một phía của liên kết đôi.\n+ Đồng phân {{b16_7}}-: Có mạch C chính nằm về hai phía khác nhau của liên kết đôi.',
              blanks: [
                { id: 'b16_1', answer: 'đôi', options: ['đôi', 'ba', 'đơn', 'ion'] },
                { id: 'b16_2', answer: '2', options: ['2', '1', '3', '4'] },
                { id: 'b16_3', answer: 'ba', options: ['ba', 'đôi', 'đơn', 'vòng'] },
                { id: 'b16_4', answer: '2', options: ['2', '1', '3', '4'] },
                { id: 'b16_5', answer: 'khác', options: ['khác', 'giống', 'đối xứng', 'bằng'] },
                { id: 'b16_6', answer: 'cis', options: ['cis', 'trans', 'iso', 'neo'] },
                { id: 'b16_7', answer: 'trans', options: ['trans', 'cis', 'ortho', 'para'] }
              ]
            }
          ]
        },
        {
          id: 'b16-s2',
          title: 'II. Tính chất hóa học đặc trưng',
          items: [
            {
              id: 'b16-p2',
              type: 'paragraph',
              text: '1. Phản ứng cộng & Quy tắc Markovnikov\n- Alkene và alkyne làm mất màu dung dịch nước {{b16_8}} màu vàng nâu (phản ứng nhận biết hydrocarbon không no).\n- Quy tắc Markovnikov: Trong phản ứng cộng HX vào alkene bất đối xứng, H ưu tiên cộng vào C mang liên kết đôi có {{b16_9}} nguyên tử H hơn (carbon bậc thấp hơn), X ưu tiên cộng vào C có {{b16_10}} H hơn (carbon bậc cao hơn).\n\n2. Phản ứng trùng hợp & Thế kim loại alk-1-yne\n- Trùng hợp ethylene (xúc tác, t°, p) thu được polymer {{b16_11}} (PE).\n- Phản ứng riêng của alk-1-yne: Tác dụng với dung dịch AgNO3 trong NH3 xuất hiện kết tủa màu {{b16_12}} nhạt (CAg≡CAg), dùng để {{b16_13}} alk-1-yne với các alkyne khác.',
              blanks: [
                { id: 'b16_8', answer: 'bromine (Br2)', options: ['bromine (Br2)', 'chlorine', 'thuốc tím', 'vôi trong'] },
                { id: 'b16_9', answer: 'nhiều', options: ['nhiều', 'ít', 'không có', 'bậc cao'] },
                { id: 'b16_10', answer: 'ít', options: ['ít', 'nhiều', 'bậc 0', 'tự do'] },
                { id: 'b16_11', answer: 'polyethylene', options: ['polyethylene', 'polypropylene', 'PVC', 'teflon'] },
                { id: 'b16_12', answer: 'vàng', options: ['vàng', 'trắng bạc', 'xanh lam', 'đỏ gạch'] },
                { id: 'b16_13', answer: 'phân biệt (nhận biết)', options: ['phân biệt (nhận biết)', 'tổng hợp', 'khử trùng', 'điện phân'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b16-q1',
          number: 1,
          question: 'Khi cho propene (CH3-CH=CH2) tác dụng với nước (xúc tác H+), sản phẩm chính thu được là:',
          options: [
            { id: 'a', label: 'A', text: 'Propan-1-ol (CH3-CH2-CH2-OH)' },
            { id: 'b', label: 'B', text: 'Propan-2-ol (CH3-CH(OH)-CH3)' },
            { id: 'c', label: 'C', text: 'Propanal' },
            { id: 'd', label: 'D', text: 'Acetone' }
          ],
          correctLabel: 'B',
          explanation: 'Theo quy tắc Markovnikov, H cộng vào C mang liên kết đôi có nhiều H hơn (-CH2- thành -CH3), OH cộng vào C có ít H hơn (-CH= thành -CH(OH)-), tạo sản phẩm chính propan-2-ol.'
        },
        {
          id: 'b16-q2',
          number: 2,
          question: 'Khí nào sau đây tạo kết tủa màu vàng nhạt khi dẫn vào dung dịch AgNO3 trong NH3?',
          options: [
            { id: 'a', label: 'A', text: 'Ethane' },
            { id: 'b', label: 'B', text: 'Ethylene' },
            { id: 'c', label: 'C', text: 'Acetylene' },
            { id: 'd', label: 'D', text: 'Propene' }
          ],
          correctLabel: 'C',
          explanation: 'Acetylene (CH≡CH) là alk-1-yne có nguyên tử H linh động gắn ở C mang liên kết ba đầu mạch, phản ứng thế ion Ag+ tạo kết tủa vàng nhạt CAg≡CAg.'
        }
      ]
    },
    {
      id: 'bai-17',
      number: 17,
      title: 'Bài 17: Arene (Hydrocarbon thơm)',
      chapterId: 'chuong-4',
      chapterTitle: 'Chương 4: Hydrocarbon',
      description: 'Cấu trúc vòng benzene, hệ liên hợp pi bền vững, tính thơm, quy tắc định hướng ortho/para của toluene, phản ứng điều chế thuốc nổ TNT.',
      sections: [
        {
          id: 'b17-s1',
          title: 'I. Cấu tạo vòng Benzene & Danh pháp',
          items: [
            {
              id: 'b17-p1',
              type: 'paragraph',
              text: '- Benzene có công thức phân tử là {{b17_1}}.\n- Cấu trúc: 6 nguyên tử carbon nằm ở 6 đỉnh của một hình lục giác đều cùng nằm trên một {{b17_2}} phẳng, hệ liên kết pi {{b17_3}} trải đều rất bền vững.\n- Góc liên kết C-C-C và C-C-H đều bằng {{b17_4}}°.\n- Vị trí hai nhóm thế trên vòng benzene: 1,2 gọi là vị trí {{b17_5}} (o-); 1,3 gọi là vị trí {{b17_6}} (m-); 1,4 gọi là vị trí {{b17_7}} (p-).\n- Tính thơm: {{b17_8}} tham gia phản ứng thế, {{b17_9}} tham gia phản ứng cộng và bền vững với chất oxi hóa.',
              blanks: [
                { id: 'b17_1', answer: 'C6H6', options: ['C6H6', 'C6H12', 'C6H14', 'C7H8'] },
                { id: 'b17_2', answer: 'mặt phẳng', options: ['mặt phẳng', 'đường cong', 'khối cầu', 'hình thoi'] },
                { id: 'b17_3', answer: 'liên hợp', options: ['liên hợp', 'đơn lập', 'phân cực', 'cô lập'] },
                { id: 'b17_4', answer: '120', options: ['120', '109,5', '180', '90'] },
                { id: 'b17_5', answer: 'ortho', options: ['ortho', 'meta', 'para', 'iso'] },
                { id: 'b17_6', answer: 'meta', options: ['meta', 'ortho', 'para', 'neo'] },
                { id: 'b17_7', answer: 'para', options: ['para', 'ortho', 'meta', 'trans'] },
                { id: 'b17_8', answer: 'Dễ', options: ['Dễ', 'Khó', 'Không thể', 'Chậm'] },
                { id: 'b17_9', answer: 'khó', options: ['khó', 'dễ', 'luôn luôn', 'ngay tức thì'] }
              ]
            }
          ]
        },
        {
          id: 'b17-s2',
          title: 'II. Tính chất hóa học của Benzene và Toluene',
          items: [
            {
              id: 'b17-p2',
              type: 'paragraph',
              text: '1. Phản ứng thế ở vòng thơm\n- Phản ứng brom hoá: Benzene phản ứng với Br2 khan xúc tác bột {{b17_10}} tạo bromobenzene (C6H5Br).\n- Khi toluene phản ứng thế, nhóm methyl (-CH3) định hướng nhóm thế vào vị trí {{b17_11}} và {{b17_12}}.\n- Phản ứng nitro hoá toluene bằng hỗn hợp HNO3 đặc và H2SO4 đặc tạo chất kết tủa màu vàng là {{b17_13}} (2,4,6-trinitrotoluene) dùng làm thuốc nổ.\n\n2. Phản ứng oxi hóa mạch nhánh\n- Benzene {{b17_14}} làm mất màu thuốc tím KMnO4 kể cả khi đun nóng.\n- Toluene làm mất màu dung dịch thuốc tím khi {{b17_15}} tạo potassium benzoate (C6H5COOK).',
              blanks: [
                { id: 'b17_10', answer: 'sắt (Fe, t°)', options: ['sắt (Fe, t°)', 'ánh sáng', 'nước', 'nickel'] },
                { id: 'b17_11', answer: 'ortho', options: ['ortho', 'meta', 'không xác định', 'mạch nhánh'] },
                { id: 'b17_12', answer: 'para', options: ['para', 'meta', 'trung tâm', 'chân vòng'] },
                { id: 'b17_13', answer: 'TNT', options: ['TNT', 'PVC', 'PE', 'DDT'] },
                { id: 'b17_14', answer: 'không', options: ['không', 'dễ dàng', 'nhanh chóng', 'luôn'] },
                { id: 'b17_15', answer: 'đun nóng', options: ['đun nóng', 'làm lạnh', 'chiếu sáng', 'ở nhiệt độ thường'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b17-q1',
          number: 1,
          question: 'Chất nào dưới đây khi tác dụng với dung dịch KMnO4 và đun nóng sẽ làm mất màu thuốc tím?',
          options: [
            { id: 'a', label: 'A', text: 'Benzene' },
            { id: 'b', label: 'B', text: 'Toluene' },
            { id: 'c', label: 'C', text: 'Cyclohexane' },
            { id: 'd', label: 'D', text: 'Butane' }
          ],
          correctLabel: 'B',
          explanation: 'Toluene có nhóm methyl (-CH3) gắn vào vòng thơm bị oxi hóa bởi dung dịch KMnO4 khi đun nóng, làm mất màu tím và sinh ra kết tủa đen MnO2.'
        },
        {
          id: 'b17-q2',
          number: 2,
          question: 'Cho toluene tác dụng với bromine khan có chiếu sáng (không có xúc tác Fe, t°), sản phẩm thế chính thu được là:',
          options: [
            { id: 'a', label: 'A', text: 'o-bromotoluene' },
            { id: 'b', label: 'B', text: 'p-bromotoluene' },
            { id: 'c', label: 'C', text: 'benzyl bromide (C6H5CH2Br)' },
            { id: 'd', label: 'D', text: 'm-bromotoluene' }
          ],
          correctLabel: 'C',
          explanation: 'Khi có ánh sáng (không có xúc tác Fe), phản ứng thế xảy ra ở nhánh alkyl -CH3 tạo benzyl bromide C6H5CH2Br.'
        }
      ]
    },
    {
      id: 'bai-18',
      number: 18,
      title: 'Bài 18: Ôn tập Chương 4 (Hydrocarbon)',
      chapterId: 'chuong-4',
      chapterTitle: 'Chương 4: Hydrocarbon',
      description: 'Bảng tổng hợp đặc điểm cấu tạo, phản ứng đặc trưng và chuỗi biến hóa liên hoàn giữa Alkane, Alkene, Alkyne, Arene.',
      sections: [
        {
          id: 'b18-s1',
          title: 'Hệ thống hóa kiến thức cốt lõi Chương 4',
          items: [
            {
              id: 'b18-p1',
              type: 'paragraph',
              text: '- Alkane: Phản ứng đặc trưng là phản ứng {{b18_1}} halogen theo cơ chế thế gốc tự do.\n- Alkene và Alkyne: Phản ứng đặc trưng là phản ứng {{b18_2}} vào liên kết pi.\n- Alk-1-yne có phản ứng thế với ion {{b18_3}} trong dung dịch NH3 tạo kết tủa màu vàng nhạt.\n- Arene có tính thơm: dễ tham gia phản ứng {{b18_4}}, khó tham gia phản ứng {{b18_5}}.',
              blanks: [
                { id: 'b18_1', answer: 'thế', options: ['thế', 'cộng', 'trùng hợp', 'tách'] },
                { id: 'b18_2', answer: 'cộng', options: ['cộng', 'thế', 'nhiệt phân', 'trao đổi'] },
                { id: 'b18_3', answer: 'Ag⁺', options: ['Ag⁺', 'Cu²⁺', 'Fe³⁺', 'Na⁺'] },
                { id: 'b18_4', answer: 'thế', options: ['thế', 'cộng', 'oxy hóa mạnh', 'nhiệt phân'] },
                { id: 'b18_5', answer: 'cộng', options: ['cộng', 'thế', 'este hóa', 'xà phòng hóa'] }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b18-q1',
          number: 1,
          question: 'Hợp chất hữu cơ nào sau đây có khả năng làm mất màu dung dịch nước bromine nhanh nhất ở nhiệt độ thường?',
          options: [
            { id: 'a', label: 'A', text: 'Propane (C3H8)' },
            { id: 'b', label: 'B', text: 'Propene (C3H6)' },
            { id: 'c', label: 'C', text: 'Benzene (C6H6)' },
            { id: 'd', label: 'D', text: 'Cyclohexane (C6H12)' }
          ],
          correctLabel: 'B',
          explanation: 'Propene có liên kết đôi C=C phản ứng cộng làm mất màu nước bromine ngay lập tức ở điều kiện thường.'
        }
      ]
    }
  ]
};
