type BookingIframeProps = {
  src?: string;
  title?: string;
  className?: string;
};

export function BookingIframe({ 
  src = "https://widget.getinminthair.com/shops/641a69a3-79d2-4277-a04a-3e4616502c67", 
  title = "Online Terminbuchung Hair & Skin Couture",
  className 
}: BookingIframeProps) {
  return (
    <div className={`aspect-[3/4] md:aspect-video max-w-4xl mx-auto w-full rounded-lg overflow-hidden shadow-xl border border-border ${className}`}>
      <img src="/termin-platzhalter.png"></img>
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
