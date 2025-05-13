import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Share2, ChevronLeft } from "lucide-react";
import { getMarkdownFiles, isUpcomingEvent, MarkdownFile } from "@/utils/markdownLoader";
import EventCard from "@/components/EventCard";
import { useToast } from "@/components/ui/use-toast";
import SkeletonCard from "@/components/SkeletonCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Helmet } from "react-helmet";

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<MarkdownFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedEvents, setRelatedEvents] = useState<MarkdownFile[]>([]);
  const [registered, setRegistered] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const events = await getMarkdownFiles('content/events');
        const foundEvent = events.find(e => e.slug === slug);
        
        if (foundEvent) {
          setEvent(foundEvent);
          
          // Find related events (same category or tags if available)
          const categoryEvents = events.filter(e => 
            e.slug !== slug && 
            e.frontmatter.category === foundEvent.frontmatter.category
          );
          
          const otherEvents = events.filter(e => 
            e.slug !== slug && 
            !categoryEvents.some(ce => ce.slug === e.slug)
          );
          
          // Combine and limit to 3 events
          const related = [...categoryEvents, ...otherEvents].slice(0, 3);
          setRelatedEvents(related);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        toast({
          title: "Error",
          description: "Failed to load event details. Please try again later.",
          variant: "destructive"
        });
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchEvent();
    }
  }, [slug, toast]);

  const handleRegister = () => {
    toast({
      title: "Registration successful!",
      description: "You've registered for this event. We'll send you the details shortly.",
    });
    setRegistered(true);
  };
  
  const handleShare = () => {
    const urlPath = window.location.pathname;
    const cleanOrigin = window.location.origin.replace(/^https?:\/\/[^.]+\.[^.]+\./, 'https://');
    const shareUrl = `${cleanOrigin}${urlPath}`;
    
    if (navigator.share) {
      navigator.share({
        title: event?.frontmatter.title || "Tek Talent Event",
        text: event?.frontmatter.description || "Check out this event!",
        url: shareUrl,
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "Event link copied to clipboard",
      });
    }
  };
  
  if (loading) {
    return (
      <div className="pt-20 animate-fade-in">
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              className="text-tekOrange"
              disabled
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </div>
          <div className="max-w-5xl mx-auto">
            <SkeletonCard className="h-72 mb-8 rounded-xl" />
            <SkeletonCard className="h-10 w-1/3 mb-4" />
            <SkeletonCard className="h-6 w-2/3 mb-2" />
            <SkeletonCard className="h-6 w-1/2 mb-6" />
            <SkeletonCard className="h-[400px] rounded-xl" />
          </div>
        </div>
      </div>
    );
  }
  
  if (!event) {
    return (
      <div className="pt-20 animate-fade-in">
        <div className="container max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Event Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/events')} className="bg-tekOrange hover:bg-orange-600 text-white">
            Back to Events
          </Button>
        </div>
      </div>
    );
  }
  
  const isUpcoming = isUpcomingEvent(event.frontmatter.date);
  
  return (
    <>
      {/* SEO metadata */}
      <Helmet>
        <title>{event?.frontmatter.title || "Event"} | Tek Talent Africa</title>
        <meta name="description" content={event?.frontmatter.description} />
        <meta property="og:title" content={event?.frontmatter.title || "Event"} />
        <meta property="og:description" content={event?.frontmatter.description} />
        {event?.frontmatter.image && <meta property="og:image" content={event.frontmatter.image} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <div className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen animate-fade-in">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <AnimatedSection animation="fade-in" className="animate-fade-in">
            <Button 
              variant="outline" 
              className="mb-6 border-tekOrange text-tekOrange dark:text-orange-300"
              onClick={() => navigate('/events')}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </AnimatedSection>
          
          <div className="max-w-5xl mx-auto">
            {/* Event Image */}
            <AnimatedSection animation="scale-in" delay={50} className="rounded-xl overflow-hidden mb-8 h-72 md:h-96 shadow-xl">
              <img 
                src={event.frontmatter.image || "/uploads/tektalentlogo.png"} 
                alt={event.frontmatter.title} 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
                loading="eager" 
              />
            </AnimatedSection>
            
            {/* Event Header */}
            <AnimatedSection animation="slide-up" delay={75} className="mb-8">
              {isUpcoming && (
                <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium mb-4">
                  Upcoming Event
                </div>
              )}
              {!isUpcoming && (
                <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium mb-4">
                  Past Event
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {event.frontmatter.title}
              </h1>
              
              <div className="flex flex-col md:flex-row gap-6 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-tekOrange" />
                  <span>{event.frontmatter.date}</span>
                </div>
                
                {event.frontmatter.location && (
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-tekOrange" />
                    <span>{event.frontmatter.location}</span>
                  </div>
                )}
                
                {event.frontmatter.attendees && (
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-tekOrange" />
                    <span>{event.frontmatter.attendees} attendees</span>
                  </div>
                )}
                
                <div className="flex items-center ml-auto">
                  <Button variant="ghost" size="sm" onClick={handleShare} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Event Content */}
            <AnimatedSection animation="fade-in" delay={100} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8">
              <EventCard
                image={event.frontmatter.image || "/uploads/tektalentlogo.png"}
                title={event.frontmatter.title}
                date={event.frontmatter.date}
                summary={event.frontmatter.description}
                location={event.frontmatter.location}
                slug={event.slug}
                content={event.content}
                showContent={true}
                category={event.frontmatter.category}
                attendees={event.frontmatter.attendees}
                className="mb-0 shadow-none"
              />
            </AnimatedSection>
            
            {/* Call to Action */}
            {isUpcoming && (
              <AnimatedSection animation="slide-up" delay={150} className="bg-gradient-to-r from-tekOrange/20 to-tekOrange/10 dark:from-tekOrange/30 dark:to-tekOrange/20 rounded-xl p-8 my-12 text-center shadow-lg border border-tekOrange/20">
                <h3 className="text-2xl font-bold mb-4 text-tekOrange">Ready to join us?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Don't miss this opportunity to connect, learn, and grow with the Tek Talent Africa community.
                </p>
                <Button 
                  className={`${
                    registered 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "bg-tekOrange hover:bg-orange-600"
                  } text-white px-8 py-6 shadow-md`}
                  onClick={handleRegister}
                  disabled={registered}
                >
                  {registered ? "You're Registered ✓" : "Register Now"}
                </Button>
              </AnimatedSection>
            )}
            
            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <AnimatedSection animation="fade-in" delay={200} className="mt-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Other Events You Might Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedEvents.map((relatedEvent, index) => (
                    <AnimatedSection 
                      key={relatedEvent.slug} 
                      animation="slide-up" 
                      delay={250 + index * 50}
                    >
                      <EventCard 
                        image={relatedEvent.frontmatter.image || "/uploads/tektalentlogo.png"}
                        title={relatedEvent.frontmatter.title}
                        date={relatedEvent.frontmatter.date}
                        summary={relatedEvent.frontmatter.description}
                        location={relatedEvent.frontmatter.location}
                        slug={relatedEvent.slug}
                        className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                      />
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
