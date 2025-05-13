
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getMarkdownFiles, isUpcomingEvent, MarkdownFile, getCategories, searchFiles } from "@/utils/markdownLoader";
import EventCard from "@/components/EventCard";
import { Calendar, ChevronRight, Search, MapPin, Users, Tag, Filter } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";
import { useToast } from "@/components/ui/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import AnimatedSection from "@/components/AnimatedSection";
import PageLoader from "@/components/PageLoader";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const [events, setEvents] = useState<MarkdownFile[]>([]);
  const [featuredEvents, setFeaturedEvents] = useState<MarkdownFile[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<MarkdownFile[]>([]);
  const [pastEvents, setPastEvents] = useState<MarkdownFile[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [locations, setLocations] = useState<string[]>(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUpcoming, setFilteredUpcoming] = useState<MarkdownFile[]>([]);
  const [filteredPast, setFilteredPast] = useState<MarkdownFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming');
  const carouselRef = useRef(null);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await getMarkdownFiles('content/events');
        
        // Sort by date (newest first)
        const sortedEvents = allEvents.sort((a, b) => 
          new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
        );
        
        // Extract unique categories and locations
        const eventCategories = getCategories(sortedEvents);
        const eventLocations = ['All', ...Array.from(new Set(
          sortedEvents
            .map(event => event.frontmatter.location)
            .filter(Boolean) as string[]
        ))];
        
        // Filter for upcoming and past events
        const upcoming = sortedEvents.filter(event => isUpcomingEvent(event.frontmatter.date));
        const past = sortedEvents.filter(event => !isUpcomingEvent(event.frontmatter.date));
        
        // Featured events (either upcoming or most recent past events)
        const featured = upcoming.length > 0 ? 
          upcoming.slice(0, 3) : 
          sortedEvents.slice(0, 3);
        
        setEvents(sortedEvents);
        setFeaturedEvents(featured);
        setUpcomingEvents(upcoming);
        setPastEvents(past);
        setFilteredUpcoming(upcoming);
        setFilteredPast(past);
        setCategories(eventCategories);
        setLocations(eventLocations);
        
        setLoading(false);
        
        // Simulate page loading for smoother transitions
        setTimeout(() => setPageLoading(false), 700);
      } catch (error) {
        console.error("Error fetching events:", error);
        toast({
          title: "Error",
          description: "Failed to load events. Please try again later.",
          variant: "destructive"
        });
        setLoading(false);
        setPageLoading(false);
      }
    };
    
    fetchEvents();
  }, [toast]);
  
  // Apply filters to events
  useEffect(() => {
    const filterEvents = () => {
      let filteredUpcoming = [...upcomingEvents];
      let filteredPast = [...pastEvents];
      
      // Apply category filter
      if (selectedCategory !== 'All') {
        filteredUpcoming = filteredUpcoming.filter(event => 
          event.frontmatter.category === selectedCategory
        );
        filteredPast = filteredPast.filter(event => 
          event.frontmatter.category === selectedCategory
        );
      }
      
      // Apply location filter
      if (selectedLocation !== 'All') {
        filteredUpcoming = filteredUpcoming.filter(event => 
          event.frontmatter.location === selectedLocation
        );
        filteredPast = filteredPast.filter(event => 
          event.frontmatter.location === selectedLocation
        );
      }
      
      // Apply search filter
      if (searchQuery) {
        filteredUpcoming = searchFiles(filteredUpcoming, searchQuery);
        filteredPast = searchFiles(filteredPast, searchQuery);
      }
      
      setFilteredUpcoming(filteredUpcoming);
      setFilteredPast(filteredPast);
    };
    
    filterEvents();
  }, [selectedCategory, selectedLocation, searchQuery, upcomingEvents, pastEvents]);
  
  // Reset filters
  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedLocation('All');
    setSearchQuery('');
  };
  
  const renderSkeleton = (count: number = 3) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
  
  const renderEventList = (eventList: MarkdownFile[]) => {
    if (eventList.length === 0) {
      return (
        <AnimatedSection animation="fade-in" delay={300} className="text-center py-12">
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">No events found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 mb-4">
              {activeTab === 'upcoming' 
                ? "There are no upcoming events matching your criteria." 
                : "No past events match your current filters."}
            </p>
            <Button 
              variant="outline" 
              className="border-tekOrange text-tekOrange hover:bg-tekOrange/10"
              onClick={resetFilters}
            >
              Clear Filters
            </Button>
          </div>
        </AnimatedSection>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map((event, index) => (
          <AnimatedSection 
            key={event.slug} 
            animation="slide-up" 
            delay={index * 100} 
            className="h-full"
          >
            <EventCard 
              image={event.frontmatter.image || "/public/uploads/tektalentlogo.png"}
              title={event.frontmatter.title}
              date={event.frontmatter.date}
              summary={event.frontmatter.description} 
              location={event.frontmatter.location}
              slug={event.slug}
              className="h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            />
          </AnimatedSection>
        ))}
      </div>
    );
  };
  
  if (pageLoading) {
    return <PageLoader />;
  }
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-tekOrange/10 to-orange-100 dark:from-tekOrange/5 dark:to-gray-800 py-16 md:py-24">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMTUiIHI9IjIiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjE1IiByPSIyIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSI0NSIgcj0iMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNDUiIHI9IjIiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-in" className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-tekOrange via-tekOrangeDark to-orange-700">
              Community <span className="text-tekOrange">Events</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join us for workshops, meetups, hackathons, and other tech events happening in our community.
            </p>
          </AnimatedSection>
          
          {/* Search and filters */}
          <AnimatedSection animation="slide-up" delay={150} className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search events..." 
                className="pl-10 pr-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-tekOrange/20 focus:border-tekOrange transition-all shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </div>
            
            {/* Filter badges */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <Filter size={14} className="mr-1" /> Filters:
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mr-4">
                {categories.slice(0, 5).map(category => (
                  <Badge 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`${selectedCategory === category 
                      ? "bg-tekOrange hover:bg-orange-600 cursor-pointer" 
                      : "border-tekOrange/50 text-tekOrange hover:bg-tekOrange/10 cursor-pointer"}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <Tag size={12} className="mr-1" />
                    {category}
                  </Badge>
                ))}
              </div>
              
              {/* Locations */}
              <div className="flex flex-wrap gap-2">
                {locations.slice(0, 3).map(location => (
                  <Badge 
                    key={location} 
                    variant={selectedLocation === location ? "default" : "outline"}
                    className={`${selectedLocation === location 
                      ? "bg-tekOrange hover:bg-orange-600 cursor-pointer" 
                      : "border-tekOrange/50 text-tekOrange hover:bg-tekOrange/10 cursor-pointer"}`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <MapPin size={12} className="mr-1" />
                    {location}
                  </Badge>
                ))}
              </div>
              
              {/* Reset button */}
              {(selectedCategory !== 'All' || selectedLocation !== 'All' || searchQuery) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="ml-auto text-tekOrange hover:bg-tekOrange/10"
                >
                  Reset
                </Button>
              )}
            </div>
          </AnimatedSection>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute -bottom-8 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-2"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Events Carousel */}
        <AnimatedSection animation="slide-up" delay={200} className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white relative">
              Featured Events
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-tekOrange to-orange-300/40 rounded-full"></span>
            </h2>
            <Link to="/events">
              <Button variant="link" className="text-tekOrange hover:text-orange-600 gap-1 group">
                View all <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          {loading ? (
            renderSkeleton(3)
          ) : featuredEvents.length > 0 ? (
            <Carousel
              ref={carouselRef}
              opts={{
                align: "start",
                loop: featuredEvents.length > 3
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredEvents.map((event) => (
                  <CarouselItem key={event.slug} className="md:basis-1/2 lg:basis-1/3 p-1">
                    <EventCard
                      image={event.frontmatter.image || "/public/uploads/tektalentlogo.png"}
                      title={event.frontmatter.title}
                      date={event.frontmatter.date}
                      summary={event.frontmatter.description} 
                      location={event.frontmatter.location}
                      slug={event.slug}
                      className="h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 w-10 h-10 bg-white dark:bg-gray-800 shadow-md" />
                <CarouselNext className="static translate-y-0 w-10 h-10 bg-white dark:bg-gray-800 shadow-md" />
              </div>
            </Carousel>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No featured events at the moment</p>
            </div>
          )}
        </AnimatedSection>
        
        {/* Events Tabs */}
        <AnimatedSection animation="slide-up" delay={400} className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-md">
          <Tabs 
            defaultValue="upcoming" 
            className="w-full"
            onValueChange={value => setActiveTab(value)}
          >
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger 
                value="upcoming" 
                className={`text-base transition-all ${activeTab === 'upcoming' ? 'text-tekOrange' : ''}`}
              >
                <Calendar size={18} className="mr-2" />
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger 
                value="past" 
                className={`text-base transition-all ${activeTab === 'past' ? 'text-tekOrange' : ''}`}
              >
                <Calendar size={18} className="mr-2" />
                Past Events
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                  <Users size={18} className="mr-2 text-tekOrange" />
                  {filteredUpcoming.length > 0 ? `${filteredUpcoming.length} Upcoming Event${filteredUpcoming.length !== 1 ? 's' : ''}` : 'Upcoming Events'}
                </h3>
                {filteredUpcoming.length !== upcomingEvents.length && (
                  <span className="text-sm text-gray-500">
                    Showing {filteredUpcoming.length} of {upcomingEvents.length} events
                  </span>
                )}
              </div>
              {loading ? renderSkeleton(6) : renderEventList(filteredUpcoming)}
            </TabsContent>
            
            <TabsContent value="past" className="mt-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                  <Users size={18} className="mr-2 text-tekOrange" />
                  {filteredPast.length > 0 ? `${filteredPast.length} Past Event${filteredPast.length !== 1 ? 's' : ''}` : 'Past Events'}
                </h3>
                {filteredPast.length !== pastEvents.length && (
                  <span className="text-sm text-gray-500">
                    Showing {filteredPast.length} of {pastEvents.length} events
                  </span>
                )}
              </div>
              {loading ? renderSkeleton(6) : renderEventList(filteredPast)}
            </TabsContent>
          </Tabs>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fade-in" delay={600} className="mt-16 relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-tekOrange to-orange-600"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMTUiIHI9IjIiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjE1IiByPSIyIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSI0NSIgcj0iMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNDUiIHI9IjIiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIyIi8+PC9nPjwvc3ZnPg==')]  opacity-10"></div>
          
          <div className="relative p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to join our next event?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don't miss out on upcoming workshops, meetups and hackathons. Join our community and be part of the tech revolution in Africa.
            </p>
            <Button
              className="bg-white text-tekOrange hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden group"
              onClick={() => {
                toast({
                  title: "Wait",
                  description: "We're working on this",
                });
              }}
            >
              <span className="relative z-10">Get Notified</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Events;
