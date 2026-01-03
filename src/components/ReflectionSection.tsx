import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, TrendingUp, Sparkles, Shield } from 'lucide-react';

const reflections = [
  {
    icon: TrendingUp,
    title: 'Thay đổi trong cách học',
    content: 'Trước khi học môn này, tôi thường học theo cách truyền thống - đọc sách và ghi chép. Giờ đây, tôi biết cách sử dụng nhiều công cụ số để học tập hiệu quả hơn: từ việc tổ chức tài liệu với Notion, tìm kiếm thông tin chuyên sâu với Google Scholar, đến việc sử dụng AI như một "trợ giảng" cá nhân.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Sparkles,
    title: 'Kỹ năng số tiến bộ nhất',
    content: 'Kỹ năng đánh giá và sử dụng thông tin là điều tôi tiến bộ rõ rệt nhất. Tôi không còn tin ngay mọi thứ đọc được trên mạng, mà biết đặt câu hỏi, kiểm chứng nguồn tin và phân biệt thông tin đáng tin cậy. Đây là kỹ năng sẽ theo tôi suốt đời.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Brain,
    title: 'Bài học về sử dụng AI',
    content: 'AI không phải là "phép màu" cho mọi vấn đề. Tôi đã học được cách đặt câu hỏi đúng, kiểm tra và chỉnh sửa output của AI, và quan trọng nhất là duy trì tư duy phản biện. AI là công cụ mạnh mẽ, nhưng chỉ khi người dùng biết cách điều khiển nó.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Shield,
    title: 'Nhận thức về trách nhiệm học thuật',
    content: 'Môn học giúp tôi hiểu sâu hơn về liêm chính học thuật - không chỉ là "không đạo văn" mà còn là sự trung thực trong mọi khía cạnh học tập. Việc ghi nhận nguồn, thừa nhận sự hỗ trợ của AI, và trình bày quan điểm riêng là những điều tôi sẽ luôn thực hành.',
    color: 'bg-accent/10 text-accent',
  },
];

export const ReflectionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reflection" className="py-24 md:py-32 bg-muted/30">
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium"
            >
              Phản tư
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              Suy ngẫm xuyên suốt
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Những bài học và sự thay đổi trong tư duy sau quá trình học tập
            </motion.p>
          </div>

          {/* Reflections grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {reflections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-card border border-border shadow-soft card-hover"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-display">
                "
              </div>
              <p className="text-xl md:text-2xl font-display text-foreground italic leading-relaxed pt-8">
                Công nghệ số và AI không chỉ là công cụ, mà là cách tư duy mới. 
                Học cách sử dụng chúng một cách có trách nhiệm là kỹ năng quan trọng 
                nhất mà tôi có được từ môn học này.
              </p>
              <footer className="mt-6 text-muted-foreground">
                — Minh Ngọc, sau khi hoàn thành môn học
              </footer>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
