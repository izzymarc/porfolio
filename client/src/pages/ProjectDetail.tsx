import { useParams } from "react-router-dom";
import { projects } from "@/constants/data";
import CaseStudy from "@/components/CaseStudy";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
        <CaseStudy project={project} />
      </div>
    </div>
  );
};

export default ProjectDetail; 