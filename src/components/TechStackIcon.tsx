import Image from "next/image";
import { motion } from "framer-motion";

type TechStackIconProps = {
  src: string;
  alt: string;
  name: string;

}
// components/TechStackIcon.tsx
const TechStackIcon = ({ src, alt, name }: TechStackIconProps) => (
  <motion.div
    whileHover={{ y: 2, scale: 0.9 }}
    className="flex flex-col items-center text-center"
  >
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="w-16 h-16 mb-4"
    />
    <span className="font-semibold text-lg">{name}</span>
  </motion.div>
);

export default TechStackIcon;
