import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "../ui/theme-toggle";

const Navbar = () => {
  return (
    <div className="container border-b w-[90%] max-w-300 py-4 mx-auto flex justify-between items-center">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold">Dineshzzz</h1>
      </Link>

      <nav className="flex items-center gap-4">
        <Link className={buttonVariants()} href={"/signup"}>
          Sign up
        </Link>
        <Link
          className={buttonVariants({
            variant: "outline",
          })}
          href={"/login"}
        >
          Login
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
