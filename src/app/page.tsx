import Link from "../../node_modules/next/link";

export default function Home() {
  return (
    <div>
      <Link 
        className={`text-blue-900 hover:text-blue-400`} 
        href="/portal">
        Acessar Sistema
      </Link>
    </div>
  );
}
