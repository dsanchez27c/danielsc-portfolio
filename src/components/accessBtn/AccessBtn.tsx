import { Icons } from "../icons/Icons";
import { AccessBtnType } from "src/interfaces/Interfaces";

function AccessBtn({
  classBtn,
  href,
  nameIcon,
  sizeIcon,
  colorIcon,
  textBtn,
}: AccessBtnType) {
  return (
    <a
      aria-label={nameIcon}
      className={classBtn}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {nameIcon && colorIcon && sizeIcon && (
        <Icons name={nameIcon} size={sizeIcon} color={colorIcon} />
      )}
      {textBtn && <span>{textBtn}</span>}
    </a>
  );
}

export default AccessBtn;
