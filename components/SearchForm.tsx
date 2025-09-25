"use client"

import { Search, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { subjects } from "@/constants";

const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedSubject, setSelectedSubject] = useState(searchParams.get('subject') || '');

  const updateSearchParams = (search: string, subject: string) => {
    const params = new URLSearchParams();
    
    if (search.trim()) {
      params.set('search', search.trim());
    }
    
    if (subject && subject !== 'all') {
      params.set('subject', subject);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/companion-library?${queryString}` : '/companion-library';
    
    router.push(newUrl);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Debounce search - update URL after user stops typing for 300ms
    const timeoutId = setTimeout(() => {
      updateSearchParams(value, selectedSubject);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSubject(value);
    updateSearchParams(searchQuery, value);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
        <input
          type="text"
          placeholder="Search your companions..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-black rounded-lg pl-10 pr-4 py-3 w-80 text-sm focus:outline-none"
        />
      </div>
      <div className="relative">
        <select 
          value={selectedSubject}
          onChange={handleSubjectChange}
          className="appearance-none border border-black rounded-lg pl-4 pr-10 py-3 text-sm text-gray-700 bg-white focus:outline-none cursor-pointer"
        >
          <option value="">All subjects</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject} className="capitalize">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none" />
      </div>
    </div>
  );
};

export default SearchForm;
