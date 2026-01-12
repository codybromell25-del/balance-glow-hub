const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#A3C1AD] via-[#b8d4c3] to-[#A3C1AD] text-black py-1.5 px-3 md:py-2 md:px-4 text-center text-xs md:text-sm font-medium">
      <div className="container mx-auto">
        <span>
          Download our app on{" "}
          <a
            href="https://apps.apple.com/ie/app/balance-reformer-pilates/id6756276683"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 font-semibold"
          >
            iOS
          </a>{" "}
          or{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.ribbon.balance&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 font-semibold"
          >
            Android
          </a>
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBanner;