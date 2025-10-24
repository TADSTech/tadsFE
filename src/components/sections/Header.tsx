import { FloatingNav } from "../ui/floating-navbar";
import { User, Code } from "lucide-react";

export const Header: React.FC = () => {

    const navItems = [
        { name: 'About', link: '#who-we-are', icon: <User /> },
        { name: 'Projects', link: '#projects', icon: <Code /> },
    ];
    return (
        <div>
            <FloatingNav navItems={navItems} />
        </div>
    );
}