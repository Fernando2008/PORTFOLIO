/* eslint-disable react/prop-types */
import { styles } from "../../utils/styles";

const HoverLink = ({ href, text, download }) => {
  return (
    <>
      <a
        href={href}
        className={`${styles.normalTransition} text-lightText cursor-pointer rounded-2xl px-4 py-2 w-max h-max text-lg font-bold bg-primary hover:bg-primaryHover hover:shadow-black hover:shadow-[0px_5px_2px_0px]`}
        download={download ? true : false}
      >
        <span>{text}</span>
      </a>
    </>
  );
};

export default HoverLink;
