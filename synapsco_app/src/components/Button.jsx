import React from 'react';
import { Link } from 'react-scroll';

const Button = ({ styles }) => {
  return (
    <Link to="iletisim" smooth duration={500} offset={-50} spy={true} exact='true' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] cursor-pointer`}>
      Başlayalım
    </Link>
  );
}

export default Button;