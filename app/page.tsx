import { hostGrotesk } from "@/lib/fonts";

export default function Home() {
  return (
    <main>
      <h1 className={`${hostGrotesk.className} font-extrabold text-4xl `}>
        Bienvenue sur Agora moderna
      </h1>
      <br />
      <p>
        Agora moderna est une plateforme de discussion en ligne qui permet aux
        utilisateurs de partager
      </p>
    </main>
  );
}
