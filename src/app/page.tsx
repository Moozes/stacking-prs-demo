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
    </div>
  );
}

