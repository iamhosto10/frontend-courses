import { CourseCard } from "@/components/shared/CourseCard";
import { ICourse } from "@/types";

async function getCourses(): Promise<ICourse[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/courses`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
}

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-zinc-50 py-24 px-6 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
            Domina el Desarrollo Moderno
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
            Aprende con los mejores profesionales y transforma tu carrera con nuestros cursos de tecnología.
          </p>
        </div>
      </section>

      {/* Course Catalog */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Catálogo de Cursos
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Explora nuestra selección de cursos y encuentra el ideal para ti.
          </p>
        </div>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border rounded-lg bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800">
            <h3 className="text-xl font-semibold mb-2">No hay cursos disponibles</h3>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
              En este momento no hemos encontrado cursos. Por favor, vuelve a intentarlo más tarde.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
