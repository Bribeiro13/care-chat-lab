import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Redirecionar para login quando tentar pesquisar
    alert("Você precisa fazer login para usar a pesquisa. Redirecionando...");
    console.log("Redirecionando para login...");
  };

  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Bem-vindo ao Medicalink!
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Use a barra de pesquisa abaixo para explorar conhecimentos científicos com IA.
        Uma plataforma segura para estudantes e pesquisadores da área da saúde.
      </p>
      
      <form onSubmit={handleSearch} className="max-w-lg mx-auto">
        <div className="relative flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Pesquise aqui..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-2 border-primary/20 focus:border-primary rounded-xl"
            />
          </div>
          <Button 
            type="submit" 
            className="h-12 px-6 rounded-xl"
          >
            Pesquisar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchSection;