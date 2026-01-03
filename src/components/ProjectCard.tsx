import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Target, ListChecks, ImageIcon, BarChart3, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Project {
  id: string;
  number: number;
  chapter: string;
  title: string;
  summary: string;
  objectives: string[];
  process: {
    steps: string[];
    tools: string[];
  };
  analysis: {
    strengths: string[];
    improvements: string[];
    lessons: string[];
  };
  aiUsage: string[];
  integrity: string;
  evidenceImage?: string;
  evidenceCaption?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div
        className={`rounded-2xl bg-card border border-border shadow-soft transition-all duration-300 overflow-hidden ${
          isExpanded ? 'shadow-medium' : 'card-hover'
        }`}
      >
        {/* Header - Always visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left flex items-start justify-between gap-4"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                Bài {project.number}
              </span>
              <span className="text-xs text-muted-foreground">{project.chapter}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {project.summary}
            </p>
          </div>
          <div className="flex-shrink-0 mt-1">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </button>

        {/* Expanded content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
            {/* Objectives */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Target className="w-4 h-4 text-primary" />
                <span>Mục tiêu bài tập</span>
              </div>
              <ul className="space-y-2 pl-6">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <ListChecks className="w-4 h-4 text-primary" />
                <span>Quy trình thực hiện</span>
              </div>
              <div className="pl-6 space-y-3">
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">Các bước:</h5>
                  <ol className="space-y-1.5">
                    {project.process.steps.map((step, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-medium">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">Công cụ sử dụng:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.process.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <ImageIcon className="w-4 h-4 text-primary" />
                <span>Minh chứng học tập</span>
              </div>
              <div className="pl-6">
                {project.evidenceImage ? (
                  <div className="rounded-xl overflow-hidden border border-border bg-muted/30">
                    <img 
                      src={project.evidenceImage} 
                      alt={project.evidenceCaption || 'Minh chứng học tập'} 
                      className="w-full h-auto max-h-[400px] object-contain"
                    />
                    {project.evidenceCaption && (
                      <p className="text-sm text-muted-foreground text-center py-3 px-4 bg-muted/50 border-t border-border">
                        {project.evidenceCaption}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/30">
                    <ImageIcon className="w-10 h-10 text-muted-foreground/50 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Khu vực đăng minh chứng (ảnh, link, video...)
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Sẽ được bổ sung sau
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Analysis */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span>Phân tích – Đánh giá</span>
              </div>
              <div className="pl-6 grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <h5 className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">
                    Điểm làm tốt
                  </h5>
                  <ul className="space-y-1">
                    {project.analysis.strengths.map((s, i) => (
                      <li key={i} className="text-xs text-green-600 dark:text-green-300">• {s}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <h5 className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-2">
                    Cần cải thiện
                  </h5>
                  <ul className="space-y-1">
                    {project.analysis.improvements.map((s, i) => (
                      <li key={i} className="text-xs text-amber-600 dark:text-amber-300">• {s}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <h5 className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-2">
                    Bài học rút ra
                  </h5>
                  <ul className="space-y-1">
                    {project.analysis.lessons.map((s, i) => (
                      <li key={i} className="text-xs text-blue-600 dark:text-blue-300">• {s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* AI & Integrity */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Shield className="w-4 h-4 text-primary" />
                <span>Liêm chính học thuật & Sử dụng AI</span>
              </div>
              <div className="pl-6 space-y-3">
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">AI đã hỗ trợ ở:</h5>
                  <ul className="space-y-1">
                    {project.aiUsage.map((usage, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {usage}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-foreground italic">
                    "{project.integrity}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
