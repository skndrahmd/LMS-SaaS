import CompanionCard from "@/components/CompanionCard";
import { Search, ChevronDown } from "lucide-react";
import { getAllCompanions } from "@/lib/actions/companion.actions";



const companionLibrary = async () => {
  const companions = await getAllCompanions()
  console.log(companions)

  return (
    <div className="bg-gray-50">
    <main className="p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-bold text-gray-900">Companion Library</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
            <input
              type="text"
              placeholder="Search your companions..."
              className="border border-black rounded-lg pl-10 pr-4 py-3 w-80 text-sm focus:outline-none"
            />
          </div>
          <div className="relative">
            <select className="appearance-none border border-black rounded-lg pl-4 pr-10 py-3 text-sm text-gray-700 bg-white focus:outline-none cursor-pointer">
              <option value="" disabled selected>
                Select subject
              </option>
              <option value="all">All</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="english">English</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {companions.companions && Array.isArray(companions.companions) ? 
          [companions.companions].map((companion: any) => (
            <CompanionCard
              key={companion.id}
              subject={companion.subject}
              title={companion.name}
              topic={companion.topic}
              duration={companion.duration.toString()}
              bgColor="orange"
            />
          )) : 
          companions.companions ? (
            <CompanionCard
              key={companions.companions.id}
              subject={companions.companions.subject}
              title={companions.companions.name}
              topic={companions.companions.topic}
              duration={companions.companions.duration.toString()}
              bgColor="orange"
            />
          ) : null
        }
      </div>
    </main>
    </div>
  );
};

export default companionLibrary;
