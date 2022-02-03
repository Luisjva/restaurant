import { useRouter } from "next/router";

export default function Language({ textEn, textEs }) {
  const router = useRouter();
  const { locale } = router;

  return <>{locale === "en" ? textEn : textEs}</>;
}
