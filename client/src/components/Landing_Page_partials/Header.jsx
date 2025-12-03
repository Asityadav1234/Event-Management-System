import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeContext";

function Header() {
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    <button
                        onClick={toggleTheme}
                        className="text-sm px-3 py-1 rounded-full border border-[color:var(--darker-secondary-color)] text-[color:var(--gray-color)] bg-[color:var(--white-color)] bg-opacity-80 backdrop-blur cursor-pointer hover:bg-[color:var(--darker-secondary-color)] hover:text-white transition-colors"
                    >
                        {theme === "dark" ? "Light mode" : "Dark mode"}
                    </button>
                    <nav className="flex grow">
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <a
                                    onClick={() =>
                                        router.push("/admin/auth")
                                    }
                                    className="btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer"
                                >
                                    Event Manager
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
