import CompanionCard from "@/components/CompanionCard";
import SearchForm from "@/components/SearchForm";
import { getAllCompanions } from "@/lib/actions/companion.actions";

interface CompanionLibraryProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const companionLibrary = async ({ searchParams }: CompanionLibraryProps) => {
  const params = await searchParams;
  const search = typeof params.search === 'string' ? params.search : undefined;
  const subject = typeof params.subject === 'string' ? params.subject : undefined;
  
  const companions = await getAllCompanions({ search, subject });
  console.log(companions)

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-gray-900">Companion Library</h1>
        <SearchForm />
      </div>
      {/* Results count and filters display */}
      {(search || subject) && (
        <div className="mb-4 text-sm text-gray-600">
          {companions.companions?.length || 0} companions found
          {search && <span> for "{search}"</span>}
          {subject && <span> in {subject}</span>}
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        {companions.companions && Array.isArray(companions.companions) ? (
          companions.companions.length > 0 ? (
            companions.companions.map((companion: any) => (
              <CompanionCard
                key={companion.id}
                id={companion.id}
                subject={companion.subject}
                title={companion.name}
                topic={companion.topic}
                duration={companion.duration.toString()}
                bgColor="orange"
              />
            ))
          ) : (
            <div className="w-full text-center py-12">
              <div className="text-gray-500 text-lg mb-2">No companions found</div>
              <div className="text-gray-400 text-sm">
                {search || subject 
                  ? "Try adjusting your search criteria or filters"
                  : "Create your first companion to get started"
                }
              </div>
            </div>
          )
        ) : (
          <div className="w-full text-center py-12">
            <div className="text-gray-500 text-lg">Loading companions...</div>
          </div>
        )}
      </div>
    </main>
  );
};

export default companionLibrary;
