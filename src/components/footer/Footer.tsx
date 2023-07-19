import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div>©2023 Sixn CM. All rights reserved.</div>
      <div>
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="Sixn Facebook Account"
        />
        <Image src="/2.png" width={15} height={15} alt="Sixn" />
        <Image src="/3.png" width={15} height={15} alt="Sixn" />
        <Image src="/4.png" width={15} height={15} alt="Sixn" />
      </div>
    </div>
  );
};

export default Footer;
