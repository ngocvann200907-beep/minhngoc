import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Lightbulb, Heart } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: 'Kiến thức quan trọng nhất',
    content: 'Kỹ năng đánh giá thông tin và sử dụng AI có trách nhiệm. Trong thời đại thông tin tràn ngập và AI phát triển nhanh chóng, đây là nền tảng thiết yếu cho mọi hoạt động học tập và làm việc.',
  },
  {
    icon: Lightbulb,
    title: 'Khó khăn và cách vượt qua',
    content: 'Thách thức lớn nhất là cân bằng giữa việc sử dụng AI hỗ trợ và duy trì tư duy độc lập. Tôi đã vượt qua bằng cách luôn đặt câu hỏi "Tôi thực sự hiểu điều này không?" sau mỗi lần dùng AI.',
  },
  {
    icon: Heart,
    title: 'Điều tự hào nhất',
    content: 'Tôi tự hào vì đã duy trì sự trung thực trong suốt quá trình học. Mỗi bài tập đều phản ánh suy nghĩ thật của tôi, với sự hỗ trợ minh bạch từ công nghệ.',
  },
];

export const ConclusionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="conclusion" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              <Award className="w-4 h-4" />
              <span>Hoàn thành hành trình</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              Tổng kết
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Nhìn lại hành trình và những gì tôi mang theo từ môn học
            </motion.p>
          </div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Trải nghiệm làm Portfolio
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Xây dựng Portfolio số này là một trải nghiệm học tập độc đáo. Khác với bài tập 
                  thông thường, Portfolio yêu cầu tôi không chỉ hoàn thành từng bài mà còn nhìn lại, 
                  phản tư và kết nối các kiến thức với nhau.
                </p>
                <p>
                  Quá trình này giúp tôi nhận ra rằng học tập không chỉ là tiếp thu kiến thức mới, 
                  mà còn là hiểu bản thân mình đang ở đâu trên hành trình phát triển. Portfolio 
                  như một "nhật ký học tập" giúp tôi theo dõi sự tiến bộ của chính mình.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border shadow-soft text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-block p-8 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Lời cam kết
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Portfolio này được xây dựng với tinh thần học tập nghiêm túc và trung thực. 
                Mọi nội dung đều do tôi tự viết, với sự hỗ trợ minh bạch từ các công cụ AI. 
                Tôi cam kết tuân thủ liêm chính học thuật và chịu trách nhiệm về mọi thông tin 
                trong Portfolio này.
              </p>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="font-display text-lg text-foreground">Nguyễn Thị Minh Ngọc</p>
                <p className="text-sm text-muted-foreground mt-1">Sinh viên ngành Kinh tế • 2024</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
