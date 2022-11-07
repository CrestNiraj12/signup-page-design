import Image from "../atoms/Image";
import Heading from "../atoms/Heading";
import { useTranslation } from "react-i18next";

export default function Title({ className = "" }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <Image
        src="/images/logo.svg"
        className="scale-150"
        height={100}
        width={59}
      />
      <Heading className="font-[600] mt-5 text-xl tracking-wide">
        {t("signup")}
      </Heading>
    </div>
  );
}
