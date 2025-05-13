
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SkeletonCard from "@/components/SkeletonCard";
import ImageCarousel from "@/components/ImageCarousel";
import { ArrowRight, Calendar, Laptop, Users, BookOpen } from "lucide-react";
import { getMarkdownFiles, MarkdownFile, isUpcomingEvent } from "@/utils/markdownLoader";
import BlogPost from "@/components/BlogPost";
import EventCard from "@/components/EventCard";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [stats, setStats] = useState({
    members: 0,
    projects: 0,
    events: 0,
    posts: 0
  });
  const [latestBlogs, setLatestBlogs] = useState<MarkdownFile[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<MarkdownFile[]>([]);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const blogsSectionRef = useRef<HTMLDivElement>(null);
  const eventsSectionRef = useRef<HTMLDivElement>(null);
  
  // Define testimonial data
  const testimonials = [
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    },
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    },
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    },
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    },
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    },
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    },
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    },
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    },
    {
      id: 1,
      name: "name",
      role: "Developer",
      image: "/uploads/tektalentlogo.png",
      content: "content"
    }
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Animate stats counting up
      const duration = 1000; 
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      
      let frame = 0;
      const finalStats = {
        members: 68,
        projects: 0,
        events: 2,
        posts: 3
      };
      
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        
        setStats({
          members: Math.floor(progress * finalStats.members),
          projects: Math.floor(progress * finalStats.projects),
          events: Math.floor(progress * finalStats.events),
          posts: Math.floor(progress * finalStats.posts)
        });
        
        if (frame === totalFrames) {
          clearInterval(counter);
          setStats(finalStats);
        }
      }, frameDuration);
    }, 800); 
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => [...prev, entry.target.id]);
        }
      });
    }, { threshold: 0.2 });
    
    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
    if (featuresSectionRef.current) observer.observe(featuresSectionRef.current);
    if (ctaSectionRef.current) observer.observe(ctaSectionRef.current);
    if (statsSectionRef.current) observer.observe(statsSectionRef.current);
    if (blogsSectionRef.current) observer.observe(blogsSectionRef.current);
    if (eventsSectionRef.current) observer.observe(eventsSectionRef.current);
    
    // Fetch content data
    const fetchContent = async () => {
      try {
        // Fetch blogs
        const blogs = await getMarkdownFiles('content/blog');
        const sortedBlogs = blogs.sort((a, b) => 
          new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
        ).slice(0, 3);
        setLatestBlogs(sortedBlogs);
        
        // Fetch events
        const events = await getMarkdownFiles('content/events');
        const upcoming = events
          .filter(event => isUpcomingEvent(event.frontmatter.date))
          .sort((a, b) => 
            new Date(a.frontmatter.date).getTime() - new Date(b.frontmatter.date).getTime()
          )
          .slice(0, 3);
        setUpcomingEvents(upcoming);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    
    fetchContent();
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
  
  const carouselImages = [
    "/images/tek-talent-meetup-1.jpeg",
    "/images/tek-talent-meetup-2.jpeg",
    "/images/tek-talent-meetup-3.jpeg",
    "/images/tek-talent-soroti.jpeg",
    "/uploads/tektalentlogo.png",
    "/uploads/tektalentlogo.png"
  ];
  
  const carouselImages2 = [
    "/images/tek-talent-soroti.jpeg",
    "/images/tek-talent-meetup-3.jpeg",
    "/images/tek-talent-meetup-2.jpeg",
    "/images/tek-talent-meetup-1.jpeg",
    "/uploads/tektalentlogo.png",
    "/uploads/tektalentlogo.png"
  ];
    
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Text First */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Background Image - Hero Section with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-tekOrange/40 dark:from-black/80 dark:to-tekOrange/30 z-10"></div>
          <div className="parallax" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.3 : 0}px)` }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center mb-16">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              <span className="text-tekOrange">Tek Talent</span> Africa Community
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto">
              A vibrant community of tech enthusiasts, developers and innovators building the future of technology in Africa.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/events">
                <Button className="bg-tekOrange hover:bg-orange-600 text-white text-lg px-8 py-6 transform transition-all hover:scale-105">
                  Join Our Community
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-tekOrange bg-white/10 text-white hover:bg-white/20 text-lg px-8 py-6 transform transition-all hover:scale-105">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Carousel images below the text */}
        <div className="w-full mt-12 z-10">
          {/* Top carousel - moving right */}
          <ImageCarousel 
            images={carouselImages}
            direction="right"
            speed={30}
            pauseOnHover={true}
            className="mb-4"
          />
        
          
          {/* Bottom carousel - moving left */}
          <ImageCarousel 
            images={carouselImages2}
            direction="left"
            speed={30}
            pauseOnHover={true}
          />
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-8 h-12 border-2 border-tekOrange rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-tekOrange rounded-full animate-bounce-subtle"></div>
          </div>
        </div>
      </section>
      
      {/* Community Stats Section */}
      <section
        id="stats"
        ref={statsSectionRef}
        className="py-16 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-800/50 dark:to-gray-700/50"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${visibleSections.includes('stats') ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Our Community Impact</h2>
            <div className="w-24 h-1 bg-tekOrange mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Building Africa's tech ecosystem one developer at a time. Here's our journey so far.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${visibleSections.includes('stats') ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <Users size={36} className="text-tekOrange" />
              </div>
              <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{stats.members.toLocaleString()}</div>
              <p className="text-gray-600 dark:text-gray-400">Community Members</p>
            </div>
            
            <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${visibleSections.includes('stats') ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <Laptop size={36} className="text-tekOrange" />
              </div>
              <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{stats.projects}</div>
              <p className="text-gray-600 dark:text-gray-400">Active Projects</p>
            </div>
            
            <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${visibleSections.includes('stats') ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <Calendar size={36} className="text-tekOrange" />
              </div>
              <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{stats.events}</div>
              <p className="text-gray-600 dark:text-gray-400">Events Hosted</p>
            </div>
            
            <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${visibleSections.includes('stats') ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <BookOpen size={36} className="text-tekOrange" />
              </div>
              <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{stats.posts}</div>
              <p className="text-gray-600 dark:text-gray-400">Knowledge Resources</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section
        id="about"
        ref={aboutSectionRef}
        className="py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${visibleSections.includes('about') ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Us</h2>
              <div className="w-24 h-1 bg-tekOrange mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Tek Talent Africa is a community-driven platform dedicated to fostering tech talent and innovation across Africa. We provide resources, networking opportunities, and support to help tech enthusiasts grow and succeed.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our mission is to bridge the gap between tech education and industry needs, creating a sustainable ecosystem for tech talent development in Africa.
              </p>
            </div>
            
            <div className={loading ? "h-80" : `h-80 overflow-hidden rounded-xl shadow-lg ${visibleSections.includes('about') ? 'animate-fade-in' : 'opacity-0'}`}>
              {loading ? (
                <div className="skeleton h-full w-full rounded-xl"></div>
              ) : (
                <img 
                  src="/uploads/tektalentlogo.png" 
                  alt="Tek Talent community" 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts Section */}
      <section
        id="latest-blogs"
        ref={blogsSectionRef}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center mb-10 ${visibleSections.includes('latest-blogs') ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Latest Articles</h2>
              <div className="w-24 h-1 bg-tekOrange mt-4 mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Fresh insights from our community members</p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="border-tekOrange text-tekOrange hover:bg-tekOrange/10 flex items-center gap-2">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard className="hidden md:block" />
                <SkeletonCard className="hidden lg:block" />
              </>
            ) : latestBlogs.length > 0 ? (
              latestBlogs.map((blog, index) => (
                <div key={blog.slug} className={`${visibleSections.includes('latest-blogs') ? `animate-fade-in delay-${(index + 1) * 100}` : 'opacity-0'}`}>
                  <BlogPost
                    title={blog.frontmatter.title}
                    date={blog.frontmatter.date}
                    author={blog.frontmatter.author || "Tek Talent Africa"}
                    summary={blog.frontmatter.description}
                    image={blog.frontmatter.image || "/uploads/tektalentlogo.png"}
                    category={blog.frontmatter.category || "General"}
                    slug={blog.slug}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No blog posts found</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section
        id="upcoming-events"
        ref={eventsSectionRef}
        className="py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center mb-10 ${visibleSections.includes('upcoming-events') ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Upcoming Events</h2>
              <div className="w-24 h-1 bg-tekOrange mt-4 mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Join us at these exciting tech gatherings</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="border-tekOrange text-tekOrange hover:bg-tekOrange/10 flex items-center gap-2">
                All Events <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard className="hidden md:block" />
                <SkeletonCard className="hidden lg:block" />
              </>
            ) : upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <div key={event.slug} className={`${visibleSections.includes('upcoming-events') ? `animate-fade-in delay-${(index + 1) * 100}` : 'opacity-0'}`}>
                  <EventCard
                    image={event.frontmatter.image || "/uploads/tektalentlogo.png"}
                    title={event.frontmatter.title}
                    date={event.frontmatter.date}
                    summary={event.frontmatter.description}
                    location={event.frontmatter.location}
                    slug={event.slug}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No upcoming events at the moment</p>
                <Button className="mt-4 bg-tekOrange hover:bg-orange-600 text-white">
                  <Link to="/events">Past Events</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Featured Sections Preview */}
      <section
        id="features"
        ref={featuresSectionRef}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${visibleSections.includes('features') ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">What We Do</h2>
            <div className="w-24 h-1 bg-tekOrange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the various initiatives and activities we're undertaking to foster tech growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Events Card */}
            {loading ? (
              <SkeletonCard />
            ) : (
              <div className={`rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${visibleSections.includes('features') ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/uploads/tektalentlogo.png"
                    alt="Tech Events" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Events & Activities</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    From workshops to hackathons, we organize a variety of events to help you learn, connect, and grow your skills.
                  </p>
                  <Link to="/events">
                    <Button variant="ghost" className="text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center">
                      Explore Events <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            
            {/* Projects Card */}
            {loading ? (
              <SkeletonCard />
            ) : (
              <div className={`rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${visibleSections.includes('features') ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/uploads/tektalentlogo.png"
                    alt="Tech Projects" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Explore our community projects and initiatives that are making a real impact in the tech ecosystem.
                  </p>
                  <Link to="/projects">
                    <Button variant="ghost" className="text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center">
                      View Projects <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            
            {/* Blog Card */}
            {loading ? (
              <SkeletonCard />
            ) : (
              <div className={`rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${visibleSections.includes('features') ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/uploads/tektalentlogo.png" 
                    alt="Tech Blog" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Blog</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Insights, tutorials, and stories from our community members and tech experts in Africa and beyond.
                  </p>
                  <Link to="/blog">
                    <Button variant="ghost" className="text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center">
                      Read Articles <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section - New carousel design */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Community Voices
            </h2>
            <div className="w-24 h-1 bg-tekOrange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear what our community members have to say about their experience with Tek Talent Africa.
            </p>
          </div>
          
          <div className="testimonial-carousel">
            <div className="testimonial-track animate-slide-left flex">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-80 p-4">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="mb-6 text-tekOrange">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.606.814-1.083 1.492-1.425.62-.32 1.266-.5 1.94-.6.74-.1 1.95-.06 2.73.2.64.22 1.27.57 1.84 1.05.58.48 1.05 1.15 1.42 2.02.94 2.21.64 5.04-.87 7.7-1.1 1.95-2.69 3.6-4.85 4.96-.55.28-1.4.66-2.76.46-1.83-.3-2.9-1.17-3.52-1.93-.52-.65-.62-1.1-.38-1.03.2.07.47.2.76.35.74.36.89.35 1.96.27.8-.06 1.73-.35 1.67-.8-.04-.36-.81-.55-1.56-.81-1.73-.6-3.3-1.6-4.54-2.95C2.42 15.57 1.8 14.35 1.44 13s-.67-2.7-.64-4.04c.05-1.84.42-3.13 1.08-4.12.8-1.08 1.9-1.9 3.03-2.24.57-.18 1.41-.26 1.98-.26.5 0 1.35.08 1.53.08.05 0 .12.3.15.04 1.18.25 2.26.76 3.15 1.56.93.83 1.37 1.8 1.37 2.9zm7.7-.3c0-.97-.23-1.78-.7-2.44-.37-.5-.83-.86-1.4-.97-.57-.13-1.1-.14-1.54-.06-.17-.9 0-1.6.28-2.17.32-.58.75-1.05 1.3-1.34.55-.32 1.1-.48 1.63-.6.81-.14 2.1-.08 2.94.15.84.23 1.47.6 2.02 1.05.56.46.95 1.08 1.2 1.8.63 1.82.27 4.2-1.1 7.06-1.32 2.76-3.05 4.86-5.23 6.32-.65.43-1.35.65-2.1.65-.37 0-.74-.05-1.1-.16-.67-.2-1.17-.47-1.6-.86-.44-.4-.7-.86-.84-1.38-.15-.52-.18-1.07-.07-1.62.1-.56.32-1.1.66-1.5.4-.5.8-.9 1.47-1.42 1.24-1 2-1.84 2.36-2.54.86-1.77.87-3.07.84-3.97zM5.95 7.76c-.06.46-.05.8.08 1.2.13.42.35.77.7 1.05.33.28.72.4 1.17.36.48-.04.87-.27 1.15-.68.27-.4.35-.9.21-1.44-.17-.5-.5-.8-.98-.92-.5-.12-.93.02-1.28.4-.35.4-.6.9-.8 1.47-.1.36-.2.4-.25.55z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.image} alt={`${testimonial.name} avatar`} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Community CTA */}
      <section
        id="cta"
        ref={ctaSectionRef}
        className="py-20 bg-tekOrange text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto ${visibleSections.includes('cta') ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Today</h2>
            <p className="text-lg mb-8">
              Be part of a growing community of tech enthusiasts, developers and innovators. Together, we're building the future of technology in Africa.
            </p>
            <Button className="bg-white text-tekOrange hover:bg-gray-100 text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
