import { usePosts } from "@/hooks/use-resources";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function News() {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="News & Insights" 
            subtitle="Latest Updates" 
            light={true} 
            centered={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
             [1, 2, 3].map(i => <div key={i} className="h-96 bg-gray-200 rounded-xl animate-pulse"/>)
          ) : (
            (posts || []).map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-400 mb-4 gap-4">
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1"/> {post.date}</span>
                    <span className="flex items-center"><User className="h-3 w-3 mr-1"/> Admin</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-primary mb-3 hover:text-secondary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/news/${post.id}`} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-secondary hover:underline mt-auto">
                    Read More <ArrowRight className="ml-1 h-3 w-3"/>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
