import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div
      className="min-h-svh w-full  flex items-center justify-center gap-4 flex-col
    
    "
    >
      <Hero />
      <h2 className="text-4xl font-bold tracking-tight capitalize">
        Agora moderna
      </h2>
      <p>Binevenue dans votre nouveau blog!</p>
    </div>
  );
}
