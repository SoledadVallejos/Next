import { redirect } from 'next/navigation'; // funcion que direciona a x ruta

export default function HomePage() {

  redirect('/dashboard/main');

}
