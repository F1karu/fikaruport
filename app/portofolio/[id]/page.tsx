// app/portofolio/[id]/page.tsx
import ProjectDetailClient from "./ProjectDetailClient";

type Params = {
  id: string;
};

export default function Page({ params }: { params: Params }) {
  return <ProjectDetailClient id={params.id} />;
}
