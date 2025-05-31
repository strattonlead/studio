type BookingIframeProps = {
  src?: string;
  title?: string;
  className?: string;
};

export function BookingIframe({ 
  src = "https://salonkee.de/salon/hairskin-couture/booking", 
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
