import { motion } from 'framer-motion';
import { BookOpen, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">Minh Ngọc</p>
              <p className="text-sm text-muted-foreground">Digital Portfolio 2024</p>
            </div>
          </div>

          {/* Course info */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Môn học: Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
            </p>
            <p className="text-sm text-muted-foreground">
              Ngành: Kinh tế
            </p>
          </div>

          {/* Back to top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Nguyễn Thị Minh Ngọc. Portfolio được xây dựng với mục đích học tập.
          </p>
        </div>
      </div>
    </footer>
  );
};
