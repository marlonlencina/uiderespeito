export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen">
      <a
        href="https://api.whatsapp.com/send?phone=5551980392037"
        target="_blank"
        className="bg-black text-sm max-w-[384px] w-full py-3 bg-transparent text-gray-300 border border-gray-800 rounded-md font-medium hover:bg-violet-600 hover:border-violet-600 transition-all hover:text-gray-50 gap-2 flex items-center hover:gap-4 justify-center px-6"
      >
        Chat with Marlon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
          />
        </svg>
      </a>
      <p className="font-normal text-xs font-mono">
        Marlon is a busy guy, but is available to help you.
      </p>
    </main>
  );
}
