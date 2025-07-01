import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/public/images/core/logo_white.svg";

export function Logo() {
  return (
    <Link href="#header">
      <Image
        src={LogoImg}
        alt="Logo do Emaranhado Criativo"
        width={800}
        height={600}
        layout="responsive"
        objectFit="cover"
        quality={85}
      />
    </Link>
  );
}
