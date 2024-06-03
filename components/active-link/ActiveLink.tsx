'use client'; // para usar el hooks debo aclara esta linea 


import Link from 'next/link';
import { usePathname } from 'next/navigation';

import style from './ActiveLink.module.css';// tiene q tener el modulecss sino no lo toma

interface Props {
  path: string;
  text: string;
}


export const ActiveLink = ({  path, text }: Props ) => { // desestructuro y declaro el type

  const pathName = usePathname(); // hooks de next

  return (
    <Link 
      className={ `${ style.link} ${  (pathName === path ) && style['active-link'] } ` } //establece donde esta
      href={ path }>
        { text }
    </Link>
  )
}