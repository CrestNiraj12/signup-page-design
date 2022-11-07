import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

export default function ChangeLanguage() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleChangeLanguage = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: locale });
  };

  const changeTo = router.locale === "en" ? "ja" : "en";

  return (
    <div className="absolute right-10 top-10 text-right z-10">
      <Button
        hasIcon={false}
        className="bg-blue-400 hover:bg-blue-500 text-white"
        onClick={() => handleChangeLanguage(changeTo)}
      >
        {t("change-locale")}
      </Button>
      <Text className="text-xs mt-2">
        Current language: {router.locale ?? "en"}
      </Text>
    </div>
  );
}
