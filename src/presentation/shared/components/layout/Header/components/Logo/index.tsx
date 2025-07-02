import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/public/images/core/logo.png";

export function Logo() {
  return (
    <Link href="#header">
      <Image
        src={LogoImg}
        alt="Logo Emaranhado Criativo"
        width={88}
        height={56}
        quality={100}
      />
    </Link>
  );
}
