import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
      <div className="container mx-auto px-6">
        <p className="flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Portfolio. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by a Developer.
        </p>
      </div>
    </footer>
  );
}
