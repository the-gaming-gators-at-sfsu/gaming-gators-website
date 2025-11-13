export default function Home() {
  return (
    <main>

      {/* hero */}
      <div className="flex w-full h-screen">
        
        <div className="w-full h-full">
          <div className="absolute -z-10 w-full h-full bg-linear-to-b from-transparent via-transparent to-[#dc90f7]/50" />
          <video className="absolute -z-20 w-full h-full object-cover" src="/hero_backdrop.webm" loop autoPlay muted></video>
        </div>

        <div>
          
        </div>

      </div>

      {/* <iframe
        src="https://player.twitch.tv/?channel=m3rkmus1c&parent=localhost&muted=true"
        height="720"
        width="1280"
        allowfullscreen>
      </iframe> */}
    </main>
  );
}
