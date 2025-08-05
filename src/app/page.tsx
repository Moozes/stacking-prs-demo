export default function Home() {
  return (
    <div className="container m-auto">
      <div className="py-4 border-b flex justify-between">
        <div className="text-2xl">Home</div>
        <div className="flex gap-2">
          <button className="px-1">Login</button>
          <button className="bg-red-300 rounded px-1 text-black">Logout</button>
        </div>
      </div>
      <div>
        Hello Moussa, THIS IS THE HOME PAGE
      </div>
      <div>
        This is a subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam neque in reprehenderit qui amet esse aperiam. Sed praesentium voluptatem itaque assumenda deserunt, illum, placeat molestias voluptates aspernatur dolorem aut nam quas, veritatis a blanditiis qui corrupti tempora ea doloribus nihil voluptatum. Repellendus recusandae hic numquam, minima aliquid nisi! Tenetur!
      </div>
      <div className="h-[400px] border flex items-center justify-center">
        hero
      </div>
    </div>
  );
}

