import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const Header = () => {
  return (
    <header className="w-full">
      <Container>
        <nav className="flex items-center justify-between h-20 px-6">
          <div className="flex items-center gap-24">
            <Link
              to="/"
              className="flex items-center gap-1 text-xs tracking-[-0.12px]"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cdb5ae839027d2074bbba07ac560e838416a2485e5aaa014dd9e2c989b4f797?placeholderIfAbsent=true"
                className="h-14 w-auto object-contain"
                alt="Logo"
              />
              <div className="flex flex-col justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ca6525ae75b33d38025299b9c68357aaebbab63d1f8aa9ca5c03d58714ece4?placeholderIfAbsent=true"
                  className="h-6 w-auto object-contain"
                  alt="Tutor Expert"
                />
                <div className="text-xs mt-1 leading-none">
                  <span className="font-romanesco">By</span> Teachers
                </div>
              </div>
            </Link>
            
            <div className="flex items-center gap-9 text-[21px]">
              <Link 
                to="/" 
                className="hover:text-primary leading-none flex items-center"
              >
                Home
              </Link>
              <button className="hover:text-primary leading-none flex items-center gap-1">
                <span>Subjects</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/df17986147599625b02099ed984d48726b37541dcfe7ac9a80988d7c35cd4a00?placeholderIfAbsent=true"
                  className="w-4 h-4 object-contain"
                  alt=""
                />
              </button>
              <button className="hover:text-primary leading-none flex items-center gap-1">
                <span>Tutor</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/80733f0c34e8a2ad1edfc5b7165e1208288a9e0794fde376b074dfd2b859d183?placeholderIfAbsent=true"
                  className="w-4 h-4 object-contain"
                  alt=""
                />
              </button>
            </div>
          </div>

          <Button size="md">
            Login
          </Button>
        </nav>
      </Container>
    </header>
  );
};
