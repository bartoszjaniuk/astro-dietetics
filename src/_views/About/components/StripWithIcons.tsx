export const StripWithIcons = () => {
  return (
    <div className="w-full bg-primary flex  gap-8 justify-center h-fit py-4 xl:py-0 xl:h-20 text-white">
      <ul className="flex flex-col md:flex-row gap-8 xl:gap-4 list-none">
        <li className="flex gap-3 justify-center items-center">
          <img className="w-9" src="/assets/apple.svg" alt="Jabłko z miarką" />
          <p className="text-lg 2xl:text-xl">ZDROWA DIETA</p>
        </li>
        <li className="flex gap-3 justify-center items-center">
          <img className="w-9" src="/assets/body.svg" alt="Brzuch" />
          <p className="text-lg 2xl:text-xl">ZDROWE CIAŁO</p>
        </li>
        <li className="flex gap-3 justify-center items-center">
          <img className="w-9" src="/assets/mind.svg" alt="Brzuch" />
          <p className="text-lg 2xl:text-xl">ZDROWY UMYSŁ</p>
        </li>
      </ul>
    </div>
  );
};
