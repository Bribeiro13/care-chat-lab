import Navbar from "@/components/Navbar";
import MedicalChat from "@/components/MedicalChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light via-medical-accent/30 to-background">
      <Navbar />
      <MedicalChat />
    </div>
  );
};

export default Index;