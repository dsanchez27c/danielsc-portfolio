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
    <button aria-label={nameIcon} className={classBtn}>
      <a href={href} aria-label={nameIcon} target="_blank">
        {nameIcon && colorIcon && sizeIcon && (
          <Icons name={nameIcon} size={sizeIcon} color={colorIcon} />
        )}
        {textBtn && <span>{textBtn}</span>}
      </a>
    </button>
  );
}

export default AccessBtn;
