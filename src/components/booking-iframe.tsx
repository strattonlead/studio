import { Button } from '@/components/ui/button';
import Link from 'next/link';

type BookingIframeProps = {
  src?: string;
  title?: string;
  className?: string;
};

type BookingButtonProps = {
  href?: string;
  title?: string;
  className?: string;
};

export function BookingButton({
  href = "https://salonkee.de/salon/hairskin-couture/widget",
  title = "Online Terminbuchung Hair & Skin Couture",
  className,
}: BookingButtonProps) {
  return (
    
    <div className={`flex justify-center items-center max-w-4xl mx-auto w-full py-12 ${className}`}>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow font-sans">
        <Link href={href} target="_blank" rel="noopener noreferrer">Jetzt Termin buchen</Link>
      </Button>
    </div>
  );
}

export function BookingIframe({ 
  src = "https://salonkee.de/salon/hairskin-couture/widget", 
  title = "Online Terminbuchung Hair & Skin Couture",
  className 
}: BookingIframeProps) {
  return (
    <div className={`aspect-[3/4] md:aspect-video max-w-4xl mx-auto w-full rounded-lg overflow-hidden shadow-xl border border-border ${className}`}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height="100%"
        frameBorder="0"
        className="min-h-[600px] md:min-h-[700px]"
        loading="lazy"
      ></iframe>
    </div>
  );
}
