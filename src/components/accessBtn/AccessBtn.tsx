import { Icons } from "../icons/Icons";

interface AccesBtnType {
  classBtn: string;
  href: string;
  nameIcon?: "linkedin" | "github";
  sizeIcon?: string;
  colorIcon?: string;
  textBtn?: string;
}

function AccessBtn({
  classBtn,
  href,
  nameIcon,
  sizeIcon,
  colorIcon,
  textBtn,
}: AccesBtnType) {
  return (
    <button className={classBtn}>
      <a href={href} target="_blank">
        {nameIcon && colorIcon && sizeIcon && (
          <Icons name={nameIcon} size={sizeIcon} color={colorIcon} />
        )}
        {textBtn && <span>{textBtn}</span>}
      </a>
    </button>
  );
}

export default AccessBtn;
