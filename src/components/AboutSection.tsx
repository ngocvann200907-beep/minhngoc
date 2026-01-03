import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Camera, Dumbbell, Target, Lightbulb, GraduationCap } from 'lucide-react';

const interests = [
  { icon: BookOpen, label: 'Đọc sách', color: 'text-primary' },
  { icon: Camera, label: 'Chụp ảnh', color: 'text-accent' },
  { icon: Dumbbell, label: 'Thể thao', color: 'text-primary' },
];

const goals = [
  {
    icon: Target,
    title: 'Phát triển kỹ năng số',
    description: 'Nắm vững các công cụ và kỹ năng số cần thiết cho công việc tương lai',
  },
  {
    icon: Lightbulb,
    title: 'Tiếp cận AI có trách nhiệm',
    description: 'Sử dụng AI như một công cụ hỗ trợ học tập hiệu quả và có đạo đức',
  },
  {
    icon: GraduationCap,
    title: 'Học tập suốt đời',
    description: 'Xây dựng thói quen tự học và cập nhật kiến thức công nghệ mới',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium"
            >
              Về tôi
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              Nguyễn Thị Minh Ngọc
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Sinh viên ngành Kinh tế với niềm đam mê khám phá công nghệ và ứng dụng số
            </motion.p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Personal intro */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                <h3 className="text-xl font-semibold text-foreground mb-4">Giới thiệu</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Tôi là Minh Ngọc, hiện đang theo học ngành Kinh tế. Với tôi, việc học không chỉ 
                    dừng lại ở sách vở mà còn là hành trình khám phá bản thân và thế giới xung quanh.
                  </p>
                  <p>
                    Môn học <span className="text-foreground font-medium">Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</span> đã 
                    mở ra cho tôi một góc nhìn mới về cách công nghệ đang thay đổi mọi lĩnh vực, 
                    đặc biệt là ngành kinh tế mà tôi đang theo đuổi.
                  </p>
                </div>

                {/* Interests */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3">Sở thích</h4>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-sm"
                      >
                        <interest.icon className={`w-4 h-4 ${interest.color}`} />
                        <span className="text-foreground">{interest.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Goals */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Mục tiêu học tập</h3>
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border shadow-soft card-hover group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <goal.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{goal.title}</h4>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Portfolio purpose */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="p-6 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5"
              >
                <h4 className="font-semibold text-foreground mb-2">Mục đích Portfolio</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Tổng hợp quá trình học tập và sản phẩm môn học
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Lưu trữ minh chứng học tập có hệ thống
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Thể hiện sự tiến bộ cá nhân qua từng bài
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
