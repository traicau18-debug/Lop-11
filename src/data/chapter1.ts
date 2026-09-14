import { Chapter } from '../types';

export const chapter1: Chapter = {
  id: 'chuong-1',
  number: 1,
  title: 'Chương 1: Cân bằng hoá học',
  description: 'Khái niệm phản ứng thuận nghịch, trạng thái cân bằng, nguyên lí Le Chatelier, sự điện li, thuyết Brønsted - Lowry, pH và chuẩn độ acid - base.',
  lessons: [
    {
      id: 'bai-1',
      number: 1,
      title: 'Bài 1: Khái niệm về cân bằng hoá học',
      chapterId: 'chuong-1',
      chapterTitle: 'Chương 1: Cân bằng hoá học',
      description: 'Phản ứng một chiều, phản ứng thuận nghịch, trạng thái cân bằng hoá học, hằng số Kc và các yếu tố chuyển dịch cân bằng.',
      sections: [
        {
          id: 'b1-s1',
          title: 'I. Phản ứng một chiều và phản ứng thuận nghịch',
          items: [
            {
              id: 'b1-p1',
              type: 'paragraph',
              text: '1. Phản ứng một chiều\n- Định nghĩa: Phản ứng một chiều là phản ứng hoá học xảy ra theo {{b1_1}} chiều từ chất phản ứng tạo thành sản phẩm trong {{b1_2}} điều kiện.\n- Biểu diễn phương trình: Sử dụng mũi tên {{b1_3}} chỉ chiều phản ứng.\n- Ví dụ: NaOH + HCl → NaCl + H2O; CH4 + 2O2 → CO2 + 2H2O',
              blanks: [
                {
                  id: 'b1_1',
                  answer: 'một',
                  options: ['một', 'hai', 'nhiều', 'ngược'],
                  hint: 'Chỉ diễn ra theo hướng tạo thành sản phẩm',
                  explanation: 'Phản ứng một chiều chỉ xảy ra theo một chiều xác định.'
                },
                {
                  id: 'b1_2',
                  answer: 'cùng một',
                  options: ['cùng một', 'khác nhau', 'mọi', 'bất kỳ'],
                  hint: 'Điều kiện xác định xác lập cho phản ứng',
                  explanation: 'Xảy ra trong cùng một điều kiện phản ứng.'
                },
                {
                  id: 'b1_3',
                  answer: 'một chiều (→)',
                  options: ['một chiều (→)', 'hai chiều (⇌)', 'nét đứt', 'hai đầu (↔)'],
                  hint: 'Mũi tên đơn từ trái sang phải',
                  explanation: 'Dùng mũi tên đơn → để chỉ phản ứng một chiều.'
                }
              ]
            },
            {
              id: 'b1-p2',
              type: 'paragraph',
              text: '2. Phản ứng thuận nghịch\n- Định nghĩa: Phản ứng thuận nghịch là phản ứng hoá học xảy ra theo {{b1_4}} trái ngược nhau trong {{b1_5}} điều kiện.\n- Biểu diễn phương trình: Sử dụng hai nửa mũi tên {{b1_6}} chỉ chiều phản ứng.\n- Ví dụ: H2(g) + I2(g) ⇌ 2HI(g) (nung nóng trong bình kín)',
              blanks: [
                {
                  id: 'b1_4',
                  answer: 'hai chiều',
                  options: ['hai chiều', 'một chiều', 'ba chiều', 'chiều ngang'],
                  hint: 'Chiều thuận và chiều nghịch',
                  explanation: 'Phản ứng thuận nghịch xảy ra đồng thời theo hai chiều.'
                },
                {
                  id: 'b1_5',
                  answer: 'cùng một',
                  options: ['cùng một', 'khác', 'thay đổi', 'ngẫu nhiên'],
                  hint: 'Diễn ra đồng thời trong cùng điều kiện phản ứng',
                  explanation: 'Phản ứng thuận và nghịch diễn ra trong cùng một điều kiện.'
                },
                {
                  id: 'b1_6',
                  answer: 'ngược chiều nhau (⇌)',
                  options: ['ngược chiều nhau (⇌)', 'cùng chiều nhau (→)', 'thẳng đứng (↑↓)', 'chéo nhau'],
                  hint: 'Kí hiệu ⇌ gồm 2 nửa mũi tên ngược chiều',
                  explanation: 'Biểu diễn bằng hai nửa mũi tên ngược chiều nhau ⇌.'
                }
              ]
            },
            {
              id: 'b1-t1',
              type: 'table',
              title: '3. Bảng so sánh đặc điểm phản ứng một chiều và phản ứng thuận nghịch',
              tableData: {
                headers: ['Tiêu chí so sánh', 'Phản ứng một chiều', 'Phản ứng thuận nghịch'],
                rows: [
                  {
                    cells: [
                      { text: 'Chiều phản ứng' },
                      {
                        text: 'Chỉ xảy ra theo {{b1_7}} từ chất phản ứng thành sản phẩm.',
                        blanks: [
                          {
                            id: 'b1_7',
                            answer: 'một chiều xác định',
                            options: ['một chiều xác định', 'hai chiều trái ngược', 'nhiều hướng ngẫu nhiên', 'chiều từ sản phẩm về']
                          }
                        ]
                      },
                      {
                        text: 'Xảy ra theo {{b1_8}} trong cùng điều kiện.',
                        blanks: [
                          {
                            id: 'b1_8',
                            answer: 'hai chiều trái ngược nhau',
                            options: ['hai chiều trái ngược nhau', 'một chiều duy nhất', 'chiều thuận tuyệt đối', 'chiều không xác định']
                          }
                        ]
                      }
                    ]
                  },
                  {
                    cells: [
                      { text: 'Cách biểu diễn (Mũi tên)' },
                      {
                        text: 'Dùng mũi tên {{b1_9}}',
                        blanks: [
                          {
                            id: 'b1_9',
                            answer: 'đơn chỉ một chiều (→)',
                            options: ['đơn chỉ một chiều (→)', 'hai nửa ngược nhau (⇌)', 'hai đầu (↔)', 'mũi tên đứt nét']
                          }
                        ]
                      },
                      {
                        text: 'Dùng hai nửa mũi tên {{b1_10}}',
                        blanks: [
                          {
                            id: 'b1_10',
                            answer: 'ngược chiều nhau (⇌)',
                            options: ['ngược chiều nhau (⇌)', 'cùng chiều (→)', 'song song cùng hướng', 'mũi tên tỏa tròn']
                          }
                        ]
                      }
                    ]
                  },
                  {
                    cells: [
                      { text: 'Mức độ hoàn thành' },
                      {
                        text: 'Có thể xảy ra {{b1_11}} (chất phản ứng hết hoàn toàn).',
                        blanks: [
                          {
                            id: 'b1_11',
                            answer: 'hoàn toàn',
                            options: ['hoàn toàn', 'không hoàn toàn', 'đạt 50%', 'vô hạn']
                          }
                        ]
                      },
                      {
                        text: 'Xảy ra {{b1_12}} (chất phản ứng luôn còn dư).',
                        blanks: [
                          {
                            id: 'b1_12',
                            answer: 'không hoàn toàn',
                            options: ['không hoàn toàn', 'hoàn toàn 100%', 'tuyệt đối', 'vô hạn']
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'b1-s2',
          title: 'II. Trạng thái cân bằng và Hằng số cân bằng',
          items: [
            {
              id: 'b1-p3',
              type: 'paragraph',
              text: '1. Trạng thái cân bằng của phản ứng thuận nghịch\n- Định nghĩa: Trạng thái cân bằng của phản ứng thuận nghịch là trạng thái tại đó tốc độ phản ứng thuận {{b1_13}} tốc độ phản ứng nghịch (v_thuận {{b1_14}} v_nghịch).\n- Đặc điểm: Cân bằng hoá học là một cân bằng {{b1_15}}, tại đó phản ứng thuận và nghịch liên tục diễn ra nhưng với tốc độ {{b1_16}} nên nồng độ của các chất {{b1_17}} trong trạng thái cân bằng.',
              blanks: [
                {
                  id: 'b1_13',
                  answer: 'bằng',
                  options: ['bằng', 'lớn hơn', 'nhỏ hơn', 'triệt tiêu'],
                  hint: 'Hai tốc độ bằng nhau',
                  explanation: 'Tại trạng thái cân bằng: v_thuận = v_nghịch.'
                },
                {
                  id: 'b1_14',
                  answer: '=',
                  options: ['=', '>', '<', '≠'],
                  hint: 'Dấu bằng',
                  explanation: 'v_thuận = v_nghịch'
                },
                {
                  id: 'b1_15',
                  answer: 'động',
                  options: ['động', 'tĩnh', 'tuyệt đối', 'tạm thời'],
                  hint: 'Các phản ứng vẫn diễn ra không ngừng',
                  explanation: 'Cân bằng hoá học là cân bằng động vì phản ứng thuận và nghịch vẫn liên tục diễn ra.'
                },
                {
                  id: 'b1_16',
                  answer: 'bằng nhau',
                  options: ['bằng nhau', 'khác nhau', 'tăng dần', 'giảm dần'],
                  hint: 'Tốc độ hai chiều bằng nhau',
                  explanation: 'Tốc độ phản ứng thuận và nghịch bằng nhau.'
                },
                {
                  id: 'b1_17',
                  answer: 'không đổi',
                  options: ['không đổi', 'tăng mạnh', 'giảm dần', 'bằng 0'],
                  hint: 'Lượng tạo thành bằng lượng mất đi',
                  explanation: 'Nồng độ các chất ở trạng thái cân bằng giữ nguyên không đổi theo thời gian.'
                }
              ]
            },
            {
              id: 'b1-p4',
              type: 'paragraph',
              text: '2. Hằng số cân bằng (Kc)\n- Xét phản ứng tổng quát: aA + bB ⇌ cC + dD\n- Biểu thức: Kc = {{b1_18}}\n- Lưu ý quan trọng: Biểu thức Kc chỉ áp dụng cho các chất ở trạng thái {{b1_19}} hoặc trạng thái {{b1_20}}, không biểu diễn nồng độ của chất {{b1_21}} tinh khiết.\n- Ý nghĩa: Hằng số Kc chỉ phụ thuộc vào {{b1_22}} và {{b1_23}} của phản ứng. Hằng số Kc càng lớn thì phản ứng thuận xảy ra càng {{b1_24}}, hiệu suất chuyển hóa càng {{b1_25}}.',
              blanks: [
                {
                  id: 'b1_18',
                  answer: '([C]^c . [D]^d) / ([A]^a . [B]^b)',
                  options: [
                    '([C]^c . [D]^d) / ([A]^a . [B]^b)',
                    '([A]^a . [B]^b) / ([C]^c . [D]^d)',
                    '([C] + [D]) / ([A] + [B])',
                    '(c[C] . d[D]) / (a[A] . b[B])'
                  ],
                  hint: 'Tích nồng độ sản phẩm chia tích nồng độ chất phản ứng với số mũ bằng hệ số',
                  explanation: 'Biểu thức hằng số cân bằng Kc theo định luật tác dụng khối lượng.'
                },
                {
                  id: 'b1_19',
                  answer: 'khí (g)',
                  options: ['khí (g)', 'rắn (s)', 'kết tủa', 'kim loại'],
                  hint: 'Các chất ở thể khí hoặc dung dịch',
                  explanation: 'Chất khí có nồng độ mol trong thể tích bình.'
                },
                {
                  id: 'b1_20',
                  answer: 'dung dịch (aq)',
                  options: ['dung dịch (aq)', 'chất rắn tinh khiết', 'chất xúc tác', 'dung môi lỏng'],
                  hint: 'Trạng thái tan trong nước',
                  explanation: 'Dung dịch có nồng độ chất tan xác định.'
                },
                {
                  id: 'b1_21',
                  answer: 'rắn (s)',
                  options: ['rắn (s)', 'khí (g)', 'dung dịch (aq)', 'ion'],
                  hint: 'Chất rắn tinh khiết có nồng độ coi như hằng số = 1',
                  explanation: 'Nồng độ chất rắn tinh khiết là hằng số nên không ghi vào biểu thức Kc.'
                },
                {
                  id: 'b1_22',
                  answer: 'nhiệt độ',
                  options: ['nhiệt độ', 'áp suất', 'chất xúc tác', 'thể tích bình'],
                  hint: 'Yếu tố duy nhất làm thay đổi giá trị số học của Kc',
                  explanation: 'Với một phản ứng xác định, hằng số Kc chỉ phụ thuộc vào nhiệt độ.'
                },
                {
                  id: 'b1_23',
                  answer: 'bản chất',
                  options: ['bản chất', 'nồng độ ban đầu', 'thể tích', 'hình dạng bình'],
                  hint: 'Bản chất của các chất tham gia phản ứng',
                  explanation: 'Kc phụ thuộc vào bản chất phản ứng và nhiệt độ.'
                },
                {
                  id: 'b1_24',
                  answer: 'thuận lợi hơn',
                  options: ['thuận lợi hơn', 'kém đi', 'dừng lại', 'bị ức chế'],
                  hint: 'Tạo ra nhiều sản phẩm hơn',
                  explanation: 'Kc lớn chứng tỏ phản ứng thuận diễn ra mạnh mẽ.'
                },
                {
                  id: 'b1_25',
                  answer: 'cao',
                  options: ['cao', 'thấp', 'bằng 0', 'không đổi'],
                  hint: 'Tỉ lệ chuyển hoá thành sản phẩm cao',
                  explanation: 'Hiệu suất chuyển hóa các chất phản ứng càng cao.'
                }
              ]
            }
          ]
        },
        {
          id: 'b1-s3',
          title: 'III. Các yếu tố ảnh hưởng đến sự chuyển dịch cân bằng hoá học',
          items: [
            {
              id: 'b1-p5',
              type: 'paragraph',
              text: '1. Khái niệm & Nguyên lí Le Chatelier\n- Định nghĩa: Sự chuyển dịch cân bằng hoá học là sự di chuyển từ trạng thái cân bằng này sang {{b1_26}} do tác động của các yếu tố bên ngoài (nhiệt độ, nồng độ, áp suất).\n- Nguyên lí Le Chatelier: Khi chịu một tác động từ bên ngoài (biến đổi nồng độ, nhiệt độ, áp suất) thì cân bằng sẽ chuyển dịch theo chiều làm {{b1_27}} tác động bên ngoài đó.',
              blanks: [
                {
                  id: 'b1_26',
                  answer: 'trạng thái cân bằng khác',
                  options: ['trạng thái cân bằng khác', 'trạng thái ngừng hẳn', 'trạng thái ban đầu', 'hệ hở hoàn toàn'],
                  hint: 'Chuyển sang trạng thái cân bằng mới',
                  explanation: 'Chuyển từ trạng thái cân bằng này sang trạng thái cân bằng khác.'
                },
                {
                  id: 'b1_27',
                  answer: 'giảm tác động (chống lại)',
                  options: ['giảm tác động (chống lại)', 'tăng cường thêm', 'triệt tiêu hoàn toàn', 'giữ nguyên vẹn'],
                  hint: 'Nguyên lí chuyển dịch: chống lại tác động bên ngoài',
                  explanation: 'Cân bằng chuyển dịch theo chiều làm giảm tác động bên ngoài đó.'
                }
              ]
            },
            {
              id: 'b1-p6',
              type: 'paragraph',
              text: '2. Ảnh hưởng của nhiệt độ, nồng độ, áp suất và xúc tác\n- Nhiệt độ: Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều phản ứng {{b1_28}} (ΔrH > 0); khi giảm nhiệt độ, chuyển dịch theo chiều phản ứng {{b1_29}} (ΔrH < 0).\n- Nồng độ: Khi tăng nồng độ một chất, cân bằng chuyển dịch theo chiều làm {{b1_30}} nồng độ chất đó.\n- Áp suất: Khi tăng áp suất chung, cân bằng chuyển dịch theo chiều làm {{b1_31}} số mol khí; khi giảm áp suất chung, chuyển dịch theo chiều làm {{b1_32}} số mol khí.\n- Lưu ý áp suất: Đối với phản ứng không có chất khí hoặc có tổng số mol khí hai vế bằng nhau, sự thay đổi áp suất {{b1_33}} làm chuyển dịch cân bằng.\n- Chất xúc tác: Chất xúc tác {{b1_34}} làm chuyển dịch cân bằng hoá học vì làm tăng tốc độ phản ứng thuận và nghịch với số lần {{b1_35}} (chỉ giúp hệ nhanh đạt cân bằng).',
              blanks: [
                {
                  id: 'b1_28',
                  answer: 'thu nhiệt',
                  options: ['thu nhiệt', 'tỏa nhiệt', 'trung hòa', 'phân hủy'],
                  hint: 'Tăng nhiệt độ -> ưu tiên chiều hấp thụ bớt nhiệt (thu nhiệt)',
                  explanation: 'Tăng nhiệt độ -> chuyển dịch theo chiều thu nhiệt (ΔrH > 0).'
                },
                {
                  id: 'b1_29',
                  answer: 'tỏa nhiệt',
                  options: ['tỏa nhiệt', 'thu nhiệt', 'trao đổi', 'điện li'],
                  hint: 'Giảm nhiệt độ -> ưu tiên chiều sinh nhiệt (tỏa nhiệt)',
                  explanation: 'Giảm nhiệt độ -> chuyển dịch theo chiều tỏa nhiệt (ΔrH < 0).'
                },
                {
                  id: 'b1_30',
                  answer: 'giảm',
                  options: ['giảm', 'tăng', 'giữ nguyên', 'nhân đôi'],
                  hint: 'Làm giảm nồng độ chất vừa được thêm vào',
                  explanation: 'Theo Le Chatelier, cân bằng chuyển dịch theo chiều tiêu thụ bớt chất đó (làm giảm).'
                },
                {
                  id: 'b1_31',
                  answer: 'giảm',
                  options: ['giảm', 'tăng', 'không đổi', 'tăng gấp đôi'],
                  hint: 'Tăng áp suất -> dồn về phía có ít mol khí hơn để giảm áp suất',
                  explanation: 'Tăng áp suất -> chuyển dịch theo chiều làm giảm số mol khí.'
                },
                {
                  id: 'b1_32',
                  answer: 'tăng',
                  options: ['tăng', 'giảm', 'bằng 0', 'triệt tiêu'],
                  hint: 'Giảm áp suất -> dồn về phía có nhiều mol khí hơn',
                  explanation: 'Giảm áp suất -> chuyển dịch theo chiều làm tăng số mol khí.'
                },
                {
                  id: 'b1_33',
                  answer: 'không',
                  options: ['không', 'luôn luôn', 'chắc chắn', 'làm chậm'],
                  hint: 'Hai vế bằng số mol khí thì biến đổi thể tích/áp suất không đổi tỉ lệ',
                  explanation: 'Biến đổi áp suất không làm chuyển dịch cân bằng nếu hai vế có số mol khí bằng nhau.'
                },
                {
                  id: 'b1_34',
                  answer: 'không',
                  options: ['không', 'luôn', 'rất mạnh', 'làm đảo ngược'],
                  hint: 'Xúc tác không ảnh hưởng vị trí cân bằng',
                  explanation: 'Chất xúc tác không làm chuyển dịch cân bằng hoá học.'
                },
                {
                  id: 'b1_35',
                  answer: 'như nhau',
                  options: ['như nhau', 'khác nhau', 'gấp đôi', 'đối nghịch'],
                  hint: 'Tăng cả v_thuận và v_nghịch với cùng một bội số',
                  explanation: 'Xúc tác làm giảm năng lượng hoạt hoá của cả phản ứng thuận và nghịch cùng một lượng.'
                }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b1-q1',
          number: 1,
          question: 'Phản ứng nào sau đây là phản ứng thuận nghịch?',
          options: [
            { id: 'a', label: 'A', text: 'Mg + 2HCl → MgCl2 + H2' },
            { id: 'b', label: 'B', text: '2SO2 + O2 ⇌ 2SO3' },
            { id: 'c', label: 'C', text: 'C2H5OH + 3O2 → 2CO2 + 3H2O' },
            { id: 'd', label: 'D', text: '2KClO3 → 2KCl + 3O2' }
          ],
          correctLabel: 'B',
          explanation: 'Phản ứng 2SO2 + O2 ⇌ 2SO3 là phản ứng thuận nghịch, biểu diễn bằng mũi tên hai chiều ⇌.'
        },
        {
          id: 'b1-q2',
          number: 2,
          question: 'Cho phản ứng: Br2(g) + H2(g) ⇌ 2HBr(g). Biểu thức hằng số cân bằng Kc của phản ứng trên là:',
          options: [
            { id: 'a', label: 'A', text: 'Kc = [HBr]² / ([Br2][H2])' },
            { id: 'b', label: 'B', text: 'Kc = [HBr] / ([H2][Br2])' },
            { id: 'c', label: 'C', text: 'Kc = [H2][Br2] / [HBr]²' },
            { id: 'd', label: 'D', text: 'Kc = [H2][Br2] / 2[HBr]' }
          ],
          correctLabel: 'A',
          explanation: 'Theo định luật tác dụng khối lượng, Kc = [sản phẩm]^(hệ số) / [chất phản ứng]^(hệ số) = [HBr]² / ([Br2][H2]).'
        },
        {
          id: 'b1-q3',
          number: 3,
          question: 'Cho phản ứng hóa học: PCl3(g) + Cl2(g) ⇌ PCl5(g). Ở T °C, nồng độ các chất ở trạng thái cân bằng là [PCl5] = 0,059 mol/L; [PCl3] = [Cl2] = 0,035 mol/L. Hằng số cân bằng Kc là:',
          options: [
            { id: 'a', label: 'A', text: '1,68' },
            { id: 'b', label: 'B', text: '48,16' },
            { id: 'c', label: 'C', text: '0,02' },
            { id: 'd', label: 'D', text: '16,95' }
          ],
          correctLabel: 'B',
          explanation: 'Kc = [PCl5] / ([PCl3][Cl2]) = 0,059 / (0,035 × 0,035) ≈ 48,16.'
        },
        {
          id: 'b1-q4',
          number: 4,
          question: 'Cho phản ứng: N2(g) + 3H2(g) ⇌ 2NH3(g), ΔrH°298 = -92 kJ. Yếu tố nào sau đây cần tác động để cân bằng chuyển dịch sang phải (chiều thuận)?',
          options: [
            { id: 'a', label: 'A', text: 'Thêm chất xúc tác' },
            { id: 'b', label: 'B', text: 'Giảm nồng độ N2 hoặc H2' },
            { id: 'c', label: 'C', text: 'Tăng áp suất chung' },
            { id: 'd', label: 'D', text: 'Tăng nhiệt độ' }
          ],
          correctLabel: 'C',
          explanation: 'Phía trái có 1+3=4 mol khí, phía phải có 2 mol khí. Tăng áp suất chung sẽ làm cân bằng chuyển dịch theo chiều giảm số mol khí, tức chuyển dịch sang phải.'
        }
      ],
      applications: [
        {
          id: 'b1-app1',
          title: 'Vận dụng tổng hợp Ammonia trong công nghiệp',
          question: 'Cho phản ứng N2(g) + 3H2(g) ⇌ 2NH3(g) (ΔrH°298 = -92 kJ). Xác định chiều chuyển dịch cân bằng khi:\n(a) Tăng áp suất chung bằng cách nén thể tích bình.\n(b) Tăng nhiệt độ hệ phản ứng.\n(c) Thêm chất xúc tác bột sắt (Fe).',
          solution: '(a) Tăng áp suất: Cân bằng chuyển dịch theo chiều thuận (từ 4 mol khí sang 2 mol khí, làm giảm áp suất hệ).\n(b) Tăng nhiệt độ: Vì phản ứng thuận tỏa nhiệt (ΔrH < 0), nên khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều nghịch (thu nhiệt) để giảm nhiệt độ.\n(c) Thêm xúc tác Fe: Cân bằng KHÔNG chuyển dịch, xúc tác chỉ làm tăng tốc độ đạt trạng thái cân bằng.'
        }
      ]
    },
    {
      id: 'bai-2',
      number: 2,
      title: 'Bài 2: Cân bằng trong dung dịch nước',
      chapterId: 'chuong-1',
      chapterTitle: 'Chương 1: Cân bằng hoá học',
      description: 'Hiện tượng điện li, chất điện li mạnh và yếu, thuyết acid - base Brønsted - Lowry, thang pH và chuẩn độ acid - base.',
      sections: [
        {
          id: 'b2-s1',
          title: 'I. Sự điện li & Phân loại chất điện li',
          items: [
            {
              id: 'b2-p1',
              type: 'paragraph',
              text: '1. Hiện tượng điện li\n- Thí nghiệm thử tính dẫn điện: Nước cất {{b2_1}}; Muối ăn khan {{b2_2}}; Dung dịch muối ăn (NaCl) {{b2_3}}.\n- Giải thích: Khi tan trong nước, các phân tử nước phân cực hút các ion Na+ và Cl- tách ra tạo thành các ion chuyển động {{b2_4}}.\n- Định nghĩa sự điện li: Là quá trình {{b2_5}} các chất trong nước tạo thành {{b2_6}}.\n- Chất điện li: khi tan trong nước phân li ra các {{b2_7}} (gồm acid, base, muối). Chất không điện li: {{b2_8}} phân li ra ion.',
              blanks: [
                {
                  id: 'b2_1',
                  answer: 'không sáng',
                  options: ['không sáng', 'sáng chói', 'sáng yếu', 'nhấp nháy'],
                  hint: 'Nước cất chứa rất ít ion tự do',
                  explanation: 'Nước cất hầu như không dẫn điện nên bóng đèn không sáng.'
                },
                {
                  id: 'b2_2',
                  answer: 'không sáng',
                  options: ['không sáng', 'sáng tỏ', 'sáng mờ', 'sáng mạnh'],
                  hint: 'Muối khan các ion liên kết chặt chẽ trong mạng tinh thể',
                  explanation: 'Muối ăn khan không có ion tự do di chuyển nên không dẫn điện.'
                },
                {
                  id: 'b2_3',
                  answer: 'sáng',
                  options: ['sáng', 'tắt ngấm', 'chập chờn', 'đổi màu'],
                  hint: 'Dung dịch chứa các ion tự do di chuyển',
                  explanation: 'Dung dịch NaCl chứa các ion Na+ và Cl- tự do chuyển động nên dẫn điện làm bóng đèn sáng.'
                },
                {
                  id: 'b2_4',
                  answer: 'tự do',
                  options: ['tự do', 'cố định', 'thẳng hàng', 'tại chỗ'],
                  hint: 'Các ion tự do di chuyển dẫn điện',
                  explanation: 'Các ion chuyển động tự do trong dung dịch.'
                },
                {
                  id: 'b2_5',
                  answer: 'phân li',
                  options: ['phân li', 'kết tụ', 'bay hơi', 'ngưng tụ'],
                  hint: 'Tách rời thành các ion',
                  explanation: 'Sự điện li là quá trình phân li các chất trong nước.'
                },
                {
                  id: 'b2_6',
                  answer: 'các ion',
                  options: ['các ion', 'nguyên tử trung hòa', 'kết tủa', 'phân tử khí'],
                  hint: 'Cation mang điện tích dương và anion âm',
                  explanation: 'Quá trình phân li tạo thành các ion.'
                },
                {
                  id: 'b2_7',
                  answer: 'ion',
                  options: ['ion', 'nguyên tử', 'hạt nhân', 'kim loại'],
                  hint: 'Hạt mang điện tích',
                  explanation: 'Chất điện li phân li ra ion khi tan trong nước.'
                },
                {
                  id: 'b2_8',
                  answer: 'không',
                  options: ['không', 'hoàn toàn', 'một phần', 'dễ dàng'],
                  hint: 'Chất không điện li như đường, cồn không tạo ion',
                  explanation: 'Chất không điện li không phân li ra ion trong nước.'
                }
              ]
            },
            {
              id: 'b2-p2',
              type: 'paragraph',
              text: '2. Chất điện li mạnh và chất điện li yếu\n- Chất điện li mạnh: Khi tan trong nước, các phân tử hòa tan đều phân li {{b2_9}} thành ion. Dùng mũi tên {{b2_10}} trong phương trình điện li. Ví dụ: acid mạnh (HCl, HNO3, H2SO4), base mạnh (NaOH, KOH, Ba(OH)2) và hầu hết các {{b2_11}}.\n- Chất điện li yếu: Khi tan trong nước chỉ có một phần nhỏ số phân tử hòa tan phân li ra ion, phần còn lại vẫn tồn tại dưới dạng {{b2_12}} trong dung dịch. Dùng mũi tên {{b2_13}}. Ví dụ: acid yếu (CH3COOH, HF, HClO), base yếu (Cu(OH)2, Fe(OH)3) và {{b2_14}}.',
              blanks: [
                {
                  id: 'b2_9',
                  answer: 'hoàn toàn',
                  options: ['hoàn toàn', 'một phần', 'không đáng kể', 'chậm chạp'],
                  hint: '100% số phân tử tan phân li thành ion',
                  explanation: 'Chất điện li mạnh phân li hoàn toàn thành ion.'
                },
                {
                  id: 'b2_10',
                  answer: 'một chiều (→)',
                  options: ['một chiều (→)', 'hai chiều (⇌)', 'hai đầu', 'gạch nối'],
                  hint: 'Mũi tên đơn biểu diễn quá trình hoàn toàn',
                  explanation: 'Chất điện li mạnh dùng mũi tên một chiều →.'
                },
                {
                  id: 'b2_11',
                  answer: 'muối',
                  options: ['muối', 'oxit', 'rượu', 'este'],
                  hint: 'Hầu hết các muối tan và ít tan đều là chất điện li mạnh',
                  explanation: 'Hầu hết các muối tan trong nước đều phân li hoàn toàn thành ion.'
                },
                {
                  id: 'b2_12',
                  answer: 'phân tử',
                  options: ['phân tử', 'nguyên tử', 'kết tủa', 'khí'],
                  hint: 'Dung dịch chứa cả ion và phân tử hòa tan',
                  explanation: 'Trong dung dịch chất điện li yếu có cả ion và phân tử.'
                },
                {
                  id: 'b2_13',
                  answer: 'hai chiều (⇌)',
                  options: ['hai chiều (⇌)', 'một chiều (→)', 'nét đứt', 'ba vạch'],
                  hint: 'Quá trình thuận nghịch',
                  explanation: 'Chất điện li yếu phân li thuận nghịch, dùng mũi tên ⇌.'
                },
                {
                  id: 'b2_14',
                  answer: 'nước (H2O)',
                  options: ['nước (H2O)', 'NaCl', 'HCl', 'NaOH'],
                  hint: 'Dung môi phổ biến điện li cực kì yếu',
                  explanation: 'Nước nguyên chất là chất điện li cực yếu.'
                }
              ]
            }
          ]
        },
        {
          id: 'b2-s2',
          title: 'II. Thuyết Acid - Base của Brønsted - Lowry & Khái niệm pH',
          items: [
            {
              id: 'b2-p3',
              type: 'paragraph',
              text: '1. Thuyết Brønsted - Lowry\n- Acid là chất {{b2_15}} proton (H+).\n- Base là chất {{b2_16}} proton (H+).\n- Ví dụ phản ứng: NH3 + H2O ⇌ NH4+ + OH-. Trong phản ứng thuận: NH3 là {{b2_17}} vì đã nhận H+; H2O là {{b2_18}} vì đã nhường H+.\n- Vai trò của nước: Nước vừa có thể nhường proton vừa có thể nhận proton, nên nước là chất {{b2_19}}.',
              blanks: [
                {
                  id: 'b2_15',
                  answer: 'cho (nhường)',
                  options: ['cho (nhường)', 'nhận', 'giữ nguyên', 'trung hòa'],
                  hint: 'Acid cho proton H+',
                  explanation: 'Theo Brønsted - Lowry, acid là chất cho proton.'
                },
                {
                  id: 'b2_16',
                  answer: 'nhận',
                  options: ['nhận', 'cho', 'phân tách', 'tạo ra'],
                  hint: 'Base nhận proton H+',
                  explanation: 'Theo Brønsted - Lowry, base là chất nhận proton.'
                },
                {
                  id: 'b2_17',
                  answer: 'base',
                  options: ['base', 'acid', 'chất lưỡng tính', 'muối'],
                  hint: 'NH3 nhận proton trở thành NH4+',
                  explanation: 'NH3 nhận H+ từ H2O nên đóng vai trò là base.'
                },
                {
                  id: 'b2_18',
                  answer: 'acid',
                  options: ['acid', 'base', 'chất trơ', 'xúc tác'],
                  hint: 'H2O nhường proton cho NH3',
                  explanation: 'H2O nhường H+ nên đóng vai trò là acid.'
                },
                {
                  id: 'b2_19',
                  answer: 'lưỡng tính',
                  options: ['lưỡng tính', 'trung tính', 'chỉ mang tính acid', 'chỉ mang tính base'],
                  hint: 'Có thể vừa đóng vai trò acid vừa đóng vai trò base',
                  explanation: 'Nước vừa có thể nhường vừa có thể nhận proton tuỳ phản ứng, nên là chất lưỡng tính.'
                }
              ]
            },
            {
              id: 'b2-p4',
              type: 'paragraph',
              text: '2. Thang pH & Chất chỉ thị\n- Ở 25 °C, tích số ion của nước Kw = [H+][OH-] = {{b2_20}}.\n- Môi trường trung tính: [H+] = 10^-7 M, pH = {{b2_21}}.\n- Môi trường acid: [H+] > 10^-7 M, pH < 7. Trị số pH càng nhỏ thì tính acid càng {{b2_22}}.\n- Môi trường base: [H+] < 10^-7 M, pH > 7. Trị số pH càng lớn thì tính base càng {{b2_23}}.\n- Quỳ tím: pH ≤ 6 chuyển sang màu {{b2_24}}; pH = 7 màu tím; pH ≥ 8 chuyển sang màu {{b2_25}}.\n- Phenolphthalein: pH < 8,3 không màu; pH ≥ 8,3 chuyển sang màu {{b2_26}}.',
              blanks: [
                {
                  id: 'b2_20',
                  answer: '1,0.10^-14',
                  options: ['1,0.10^-14', '1,0.10^-7', '1,0.10^-1', '14'],
                  hint: 'Giá trị tích số ion của nước ở 25 °C',
                  explanation: 'Kw = [H+][OH-] = 1,0.10^-14 tại 25 °C.'
                },
                {
                  id: 'b2_21',
                  answer: '7',
                  options: ['7', '0', '14', '1'],
                  hint: 'pH trung tính',
                  explanation: 'pH = -lg(10^-7) = 7.'
                },
                {
                  id: 'b2_22',
                  answer: 'mạnh',
                  options: ['mạnh', 'yếu', 'không đổi', 'trung hòa'],
                  hint: 'pH càng tiến gần 0 thì nồng độ H+ càng cao',
                  explanation: 'pH càng nhỏ thì dung dịch có tính acid càng mạnh.'
                },
                {
                  id: 'b2_23',
                  answer: 'mạnh',
                  options: ['mạnh', 'yếu', 'bão hòa', 'ít tan'],
                  hint: 'pH càng tiến gần 14 thì nồng độ OH- càng cao',
                  explanation: 'pH càng lớn thì tính base càng mạnh.'
                },
                {
                  id: 'b2_24',
                  answer: 'đỏ (hồng)',
                  options: ['đỏ (hồng)', 'xanh', 'vàng', 'không màu'],
                  hint: 'Màu của quỳ tím trong môi trường acid',
                  explanation: 'Quỳ tím hóa đỏ trong môi trường acid (pH ≤ 6).'
                },
                {
                  id: 'b2_25',
                  answer: 'xanh',
                  options: ['xanh', 'đỏ', 'tím', 'vàng cam'],
                  hint: 'Màu của quỳ tím trong môi trường base',
                  explanation: 'Quỳ tím hóa xanh trong môi trường base (pH ≥ 8).'
                },
                {
                  id: 'b2_26',
                  answer: 'hồng (đỏ hồng)',
                  options: ['hồng (đỏ hồng)', 'xanh lam', 'vàng', 'trắng đục'],
                  hint: 'Chỉ thị phenolphthalein nhận biết dung dịch kiềm',
                  explanation: 'Phenolphthalein chuyển sang màu hồng trong môi trường kiềm (pH ≥ 8,3).'
                }
              ]
            }
          ]
        },
        {
          id: 'b2-s3',
          title: 'III. Chuẩn độ Acid - Base và Sự thủy phân muối',
          items: [
            {
              id: 'b2-p5',
              type: 'paragraph',
              text: '1. Chuẩn độ Acid - Base\n- Nguyên tắc: Xác định {{b2_27}} của dung dịch acid (hoặc base) bằng dung dịch chuẩn đã biết chính xác nồng độ.\n- Tại điểm tương đương: Số mol H+ = Số mol OH-, đối với acid và base đơn chức: C_acid . V_acid = {{b2_28}}.\n- Dấu hiệu kết thúc chuẩn độ HCl bằng NaOH với chỉ thị phenolphthalein: Dung dịch trong bình tam giác chuyển sang màu {{b2_29}} nhạt và bền trong ít nhất {{b2_30}} giây.\n\n2. Sự thủy phân của muối\n- Muối tạo bởi acid mạnh và base mạnh (như NaCl): Cả hai ion không bị thủy phân, dung dịch có môi trường {{b2_31}} (pH ≈ 7).\n- Muối tạo bởi base mạnh và acid yếu (như Na2CO3): Anion CO3^2- bị thủy phân tạo ion OH-, dung dịch có môi trường {{b2_32}} (pH > 7).\n- Muối tạo bởi base yếu và acid mạnh (như AlCl3, FeCl3): Cation Al3+ bị thủy phân giải phóng ion H+, dung dịch có môi trường {{b2_33}} (pH < 7).',
              blanks: [
                {
                  id: 'b2_27',
                  answer: 'nồng độ',
                  options: ['nồng độ', 'thể tích', 'khối lượng', 'nhiệt độ'],
                  hint: 'Đại lượng cần xác định của dung dịch mẫu',
                  explanation: 'Chuẩn độ là phương pháp xác định nồng độ dung dịch chưa biết.'
                },
                {
                  id: 'b2_28',
                  answer: 'C_base . V_base',
                  options: ['C_base . V_base', 'C_base / V_base', '2 . C_base', 'V_base / C_base'],
                  hint: 'Biểu thức tích số nồng độ và thể tích của dung dịch chuẩn',
                  explanation: 'C_acid × V_acid = C_base × V_base.'
                },
                {
                  id: 'b2_29',
                  answer: 'hồng',
                  options: ['hồng', 'xanh', 'vàng', 'đen'],
                  hint: 'Chỉ thị phenolphthalein chuyển sang màu hồng nhạt',
                  explanation: 'Dung dịch xuất hiện màu hồng nhạt bền.'
                },
                {
                  id: 'b2_30',
                  answer: '30',
                  options: ['30', '5', '60', '120'],
                  hint: 'Khoảng nửa phút để đảm bảo phản ứng đạt cân bằng điểm cuối',
                  explanation: 'Màu hồng bền trong ít nhất khoảng 30 giây.'
                },
                {
                  id: 'b2_31',
                  answer: 'trung tính',
                  options: ['trung tính', 'acid', 'base', 'lưỡng tính'],
                  hint: 'Cả cation mạnh và anion mạnh đều không thủy phân',
                  explanation: 'Muối của acid mạnh và base mạnh có môi trường trung tính (pH = 7).'
                },
                {
                  id: 'b2_32',
                  answer: 'base (kiềm)',
                  options: ['base (kiềm)', 'acid', 'trung tính', 'không xác định'],
                  hint: 'CO3^2- + H2O ⇌ HCO3- + OH-',
                  explanation: 'Sinh ra OH- nên dung dịch có môi trường base (pH > 7).'
                },
                {
                  id: 'b2_33',
                  answer: 'acid',
                  options: ['acid', 'base', 'trung tính', 'kiềm mạnh'],
                  hint: 'Al3+ + H2O ⇌ Al(OH)2+ + H+',
                  explanation: 'Sinh ra ion H+ nên dung dịch có tính acid (pH < 7).'
                }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b2-q1',
          number: 1,
          question: 'Thêm nước vào 10 mL dung dịch NaOH 1,0 M thu được 1000 mL dung dịch A. pH của dung dịch A thay đổi thế nào so với dung dịch ban đầu?',
          options: [
            { id: 'a', label: 'A', text: 'pH giảm đi 2 đơn vị' },
            { id: 'b', label: 'B', text: 'pH giảm đi 1 đơn vị' },
            { id: 'c', label: 'C', text: 'pH tăng 2 đơn vị' },
            { id: 'd', label: 'D', text: 'pH tăng gấp đôi' }
          ],
          correctLabel: 'A',
          explanation: 'Dung dịch ban đầu: [OH-] = 1 M => pOH = 0 => pH = 14. Pha loãng 100 lần (10 mL lên 1000 mL): [OH-] = 0,01 M = 10^-2 M => pOH = 2 => pH = 12. Vậy pH giảm đi 2 đơn vị.'
        },
        {
          id: 'b2-q2',
          number: 2,
          question: 'Dung dịch A chứa 0,01 mol Mg²⁺; 0,01 mol Na⁺; 0,02 mol Cl⁻ và x mol SO4²⁻. Giá trị của x theo định luật bảo toàn điện tích là:',
          options: [
            { id: 'a', label: 'A', text: '0,01' },
            { id: 'b', label: 'B', text: '0,02' },
            { id: 'c', label: 'C', text: '0,05' },
            { id: 'd', label: 'D', text: '0,005' }
          ],
          correctLabel: 'D',
          explanation: 'Tổng điện tích dương = 0,01×2 + 0,01×1 = 0,03. Tổng điện tích âm = 0,02×1 + x×2. Bảo toàn điện tích: 0,03 = 0,02 + 2x => 2x = 0,01 => x = 0,005 mol.'
        },
        {
          id: 'b2-q3',
          number: 3,
          question: 'Dung dịch muối nào sau đây có pH > 7 (môi trường kiềm do phản ứng thuỷ phân)?',
          options: [
            { id: 'a', label: 'A', text: 'KNO3' },
            { id: 'b', label: 'B', text: 'K2SO4' },
            { id: 'c', label: 'C', text: 'Na2CO3' },
            { id: 'd', label: 'D', text: 'NaCl' }
          ],
          correctLabel: 'C',
          explanation: 'Na2CO3 là muối tạo bởi base mạnh (NaOH) và acid yếu (H2CO3). Anion CO3²⁻ bị thuỷ phân tạo môi trường base: CO3²⁻ + H2O ⇌ HCO3⁻ + OH⁻ nên pH > 7.'
        },
        {
          id: 'b2-q4',
          number: 4,
          question: 'Trong các dung dịch acid sau có cùng nồng độ 0,1 M: HF, HCl, HBr, HI. Dung dịch nào có pH cao nhất?',
          options: [
            { id: 'a', label: 'A', text: 'HF' },
            { id: 'b', label: 'B', text: 'HCl' },
            { id: 'c', label: 'C', text: 'HBr' },
            { id: 'd', label: 'D', text: 'HI' }
          ],
          correctLabel: 'A',
          explanation: 'HCl, HBr, HI là các acid mạnh điện li hoàn toàn ([H+] = 0,1 M => pH = 1). HF là acid yếu, điện li không hoàn toàn nên [H+] < 0,1 M => pH của HF > 1 (cao nhất).'
        }
      ],
      applications: [
        {
          id: 'b2-app1',
          title: 'Ứng dụng của phèn chua và vôi bột',
          question: 'a) Tại sao phèn chua (chứa ion Al3+) được dùng rộng rãi để làm trong nước sinh hoạt đục?\nb) Tại sao người nông dân thường bón vôi bột (CaO) cho những mảnh ruộng bị chua (đất có pH thấp)?',
          solution: 'a) Ion Al3+ bị thủy phân trong nước tạo kết tủa dạng keo Al(OH)3: Al3+ + 3H2O ⇌ Al(OH)3↓ + 3H+. Kết tủa keo Al(OH)3 có bề mặt tiếp xúc lớn, hấp phụ các hạt chất bẩn lơ lửng rồi lắng xuống đáy, làm nước trong.\nb) Vôi bột CaO tác dụng với nước tạo Ca(OH)2 (base mạnh). Base này cung cấp ion OH- trung hòa lượng ion H+ dư thừa trong đất chua: H+ + OH- → H2O, giúp nâng độ pH của đất về mức thích hợp cho cây trồng.'
        }
      ]
    },
    {
      id: 'bai-3',
      number: 3,
      title: 'Bài 3: Ôn tập Chương 1 (Cân bằng hoá học)',
      chapterId: 'chuong-1',
      chapterTitle: 'Chương 1: Cân bằng hoá học',
      description: 'Tổng kết hệ thống lý thuyết chương 1, bài tập vận dụng tính toán nồng độ cân bằng và câu hỏi trắc nghiệm tổng hợp.',
      sections: [
        {
          id: 'b3-s1',
          title: 'Hệ thống hóa kiến thức cốt lõi Chương 1',
          items: [
            {
              id: 'b3-p1',
              type: 'paragraph',
              text: '- Trạng thái cân bằng: Là trạng thái phản ứng thuận nghịch khi {{b3_1}} bằng {{b3_2}}. Là cân bằng {{b3_3}}, nồng độ các chất {{b3_4}} theo thời gian.\n- Hằng số cân bằng Kc: Đặc trưng cho {{b3_5}} của phản ứng ở một nhiệt độ xác định, phụ thuộc duy nhất vào {{b3_6}} và {{b3_7}} của phản ứng.\n- Nguyên lí Le Chatelier: Cân bằng chuyển dịch theo chiều làm {{b3_8}} tác động bên ngoài.\n- Thuyết Brønsted - Lowry: Acid là chất {{b3_9}} H+, Base là chất {{b3_10}} H+.\n- Công thức tính pH: pH = {{b3_11}}, môi trường acid có pH {{b3_12}} 7, môi trường base có pH {{b3_13}} 7.',
              blanks: [
                {
                  id: 'b3_1',
                  answer: 'tốc độ phản ứng thuận',
                  options: ['tốc độ phản ứng thuận', 'khối lượng chất đầu', 'thể tích bình', 'áp suất chung']
                },
                {
                  id: 'b3_2',
                  answer: 'tốc độ phản ứng nghịch',
                  options: ['tốc độ phản ứng nghịch', 'nhiệt độ hệ', 'thể tích khí', 'nồng độ các chất']
                },
                {
                  id: 'b3_3',
                  answer: 'động',
                  options: ['động', 'tĩnh', 'cố định', 'ngắt quãng']
                },
                {
                  id: 'b3_4',
                  answer: 'không đổi',
                  options: ['không đổi', 'tăng liên tục', 'giảm về 0', 'bằng nhau']
                },
                {
                  id: 'b3_5',
                  answer: 'mức độ chuyển hóa',
                  options: ['mức độ chuyển hóa', 'tốc độ phản ứng', 'khối lượng mol', 'năng lượng hoạt hóa']
                },
                {
                  id: 'b3_6',
                  answer: 'nhiệt độ',
                  options: ['nhiệt độ', 'áp suất', 'nồng độ ban đầu', 'thể tích bình']
                },
                {
                  id: 'b3_7',
                  answer: 'bản chất',
                  options: ['bản chất', 'hình dạng', 'diện tích', 'chất xúc tác']
                },
                {
                  id: 'b3_8',
                  answer: 'giảm',
                  options: ['giảm', 'tăng', 'triệt tiêu', 'nhân đôi']
                },
                {
                  id: 'b3_9',
                  answer: 'nhường (cho)',
                  options: ['nhường (cho)', 'nhận', 'kết tụ', 'phân tách']
                },
                {
                  id: 'b3_10',
                  answer: 'nhận',
                  options: ['nhận', 'nhường', 'tạo thành', 'bay hơi']
                },
                {
                  id: 'b3_11',
                  answer: '-lg[H+]',
                  options: ['-lg[H+]', 'lg[H+]', '-ln[H+]', '10^[H+]']
                },
                {
                  id: 'b3_12',
                  answer: '<',
                  options: ['<', '>', '=', '≥']
                },
                {
                  id: 'b3_13',
                  answer: '>',
                  options: ['>', '<', '=', '≤']
                }
              ]
            }
          ]
        }
      ],
      quizzes: [
        {
          id: 'b3-q1',
          number: 1,
          question: 'Biểu thức hằng số cân bằng Kc của phản ứng este hóa thuận nghịch: CH3COOH(l) + CH3OH(l) ⇌ CH3COOCH3(l) + H2O(l) là:',
          options: [
            { id: 'a', label: 'A', text: 'Kc = [CH3COOCH3][H2O] / ([CH3COOH][CH3OH])' },
            { id: 'b', label: 'B', text: 'Kc = [CH3COOCH3] / ([CH3COOH][CH3OH])' },
            { id: 'c', label: 'C', text: 'Kc = [CH3COOH][CH3OH] / ([CH3COOCH3][H2O])' },
            { id: 'd', label: 'D', text: 'Kc = [CH3COOCH3][H2O]' }
          ],
          correctLabel: 'A',
          explanation: 'Ở phản ứng este hoá trong môi trường lỏng đồng thể không có dung môi nước dư thừa, H2O tham gia với tư cách sản phẩm phản ứng nên có mặt trong biểu thức Kc.'
        },
        {
          id: 'b3-q2',
          number: 2,
          question: 'Cho dung dịch NaOH có nồng độ mol là 0,01 M. Giá trị pH của dung dịch này là:',
          options: [
            { id: 'a', label: 'A', text: '2' },
            { id: 'b', label: 'B', text: '12' },
            { id: 'c', label: 'C', text: '7' },
            { id: 'd', label: 'D', text: '10' }
          ],
          correctLabel: 'B',
          explanation: '[OH-] = 0,01 M = 10^-2 M => pOH = 2 => pH = 14 - 2 = 12.'
        },
        {
          id: 'b3-q3',
          number: 3,
          question: 'Cho phản ứng dị thể nung vôi trong lò kín: CaCO3(s) ⇌ CaO(s) + CO2(g). Phát biểu nào sau đây đúng về hằng số cân bằng Kc?',
          options: [
            { id: 'a', label: 'A', text: 'Kc = [CaO][CO2] / [CaCO3]' },
            { id: 'b', label: 'B', text: 'Kc = [CO2]' },
            { id: 'c', label: 'C', text: 'Kc phụ thuộc vào lượng CaCO3 ban đầu' },
            { id: 'd', label: 'D', text: 'Kc = [CaO] / [CaCO3]' }
          ],
          correctLabel: 'B',
          explanation: 'Chất rắn tinh khiết CaCO3(s) và CaO(s) có nồng độ không đổi coi như bằng 1 trong biểu thức Kc, do đó Kc = [CO2].'
        }
      ]
    }
  ]
};
