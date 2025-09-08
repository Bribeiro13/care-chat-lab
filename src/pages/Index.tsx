import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import PopularArticles from "@/components/PopularArticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light via-white to-medical-accent/20">
      <Navbar />
      <SearchSection />
      <PopularArticles />
    </div>
  );
};

export default Index;