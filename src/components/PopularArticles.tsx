import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart } from "lucide-react";

const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Artigo 1",
      description: "Pesquisa sobre novos tratamentos em cardiologia",
      icon: <Heart className="w-8 h-8 text-primary" />,
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Artigo 2", 
      description: "Estudos recentes em medicina preventiva",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Artigo 3",
      description: "Colaboração em pesquisas multidisciplinares",
      icon: <Users className="w-8 h-8 text-primary" />,
      readTime: "6 min",
    },
  ];

  return (
    <div className="py-16 px-4 bg-medical-light/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Artigos Populares
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-medical-accent/20 rounded-full w-fit">
                  {article.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    Ler mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;