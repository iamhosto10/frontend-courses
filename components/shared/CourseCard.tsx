import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ICourse } from "@/types";

interface CourseCardProps {
  course: ICourse;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col hover:shadow-xl transition-all hover:-translate-y-1 h-full">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl line-clamp-2 leading-tight">
            {course.titulo}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs truncate max-w-[120px]">
            {course.id_profesor.nombre}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="line-clamp-3 text-sm text-muted-foreground">
          {course.descripcion}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">Ver Curso</Button>
      </CardFooter>
    </Card>
  );
}
