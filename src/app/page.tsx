"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Coffee, Droplets, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Brunch",
          id: "#brunch",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="The Moonshiners"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Houston’s Premium Southern Table + Bar Experience"
      description="Craft cocktails, Southern comfort food, brunch favorites, smoked brisket, nightlife energy, and unforgettable downtown vibes."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "The absolute best brisket in Houston. The atmosphere at night is unmatched.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-leaning-wall-looking-away_23-2148283882.jpg",
        },
        {
          name: "Marcus R.",
          handle: "@mrcs",
          testimonial: "Great cocktails and the vibe is pure downtown energy. My go-to spot.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/new-year-spend-with-friends-celebrating_23-2149196973.jpg",
        },
        {
          name: "Emily T.",
          handle: "@emilyt",
          testimonial: "Brunch here is a hidden gem. Those chicken and waffles are life-changing.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-smiling-woman-with-collected-hair-wearing-white-shirt_291650-656.jpg",
        },
        {
          name: "James L.",
          handle: "@jl_huston",
          testimonial: "Upscale without being stuffy. The perfect spot for a late night drink.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-luxury-restaurant_23-2150598336.jpg",
        },
        {
          name: "David W.",
          handle: "@davew",
          testimonial: "Solid Southern hospitality. The staff makes you feel like family.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/romantic-female-portrait-with-city-lights_158595-4516.jpg",
        },
      ]}
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Reserve a Table",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/classic-old-fashioned-library-space-with-elegant-wooden-interiors_482257-125296.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/hookah-sparksfrom-grapefruit-hookah-bowl_141793-3261.jpg",
          alt: "Patron 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/wine-glass-table-setting_74190-4678.jpg",
          alt: "Patron 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-length-stock-photo-extremely-trendy-luxurious-brunette-model-crop-top-silver-sparkling-jacket-black-trousers-high-heels-model-trendy-outfit-sitting-bar-stool-club-bar_132075-8992.jpg",
          alt: "Patron 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/two-men-cafe_23-2147775893.jpg",
          alt: "Patron 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-leaning-wall-looking-away_23-2148283882.jpg",
          alt: "Patron 5",
        },
      ]}
      avatarText="Join 5,000+ satisfied guests"
      marqueeItems={[
        {
          type: "text",
          text: "Craft Whiskey",
        },
        {
          type: "text",
          text: "Downtown Nightlife",
        },
        {
          type: "text",
          text: "Southern Hospitality",
        },
        {
          type: "text",
          text: "Live Music",
        },
        {
          type: "text",
          text: "Brunch Vibes",
        },
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "100%",
          title: "Southern Comfort",
          items: [
            "Authentic Recipes",
            "Premium Sourcing",
            "Local Ingredients",
          ],
        },
        {
          id: "2",
          value: "50+",
          title: "Cocktail Selection",
          items: [
            "Handcrafted",
            "Whiskey Focused",
            "Signature Mixes",
          ],
        },
        {
          id: "3",
          value: "24/7",
          title: "Downtown Vibe",
          items: [
            "Late Night Energy",
            "Social Atmosphere",
            "Live Feel",
          ],
        },
      ]}
      title="Why The Moonshiners?"
      description="Premium experiences in the heart of downtown Houston."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Elevated Southern Heritage",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/still-life-vintage-objects_23-2150244539.jpg",
        },
      ]}
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Signature Burger",
          price: "18",
          variant: "Classic Southern",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-person-holding-burger-with-fried-egg_23-2148784520.jpg",
        },
        {
          id: "p2",
          name: "Smoked Brisket Sandwich",
          price: "16",
          variant: "Signature",
          imageSrc: "http://img.b2bpic.net/free-photo/japanese-sandwich-with-breaded-pork-chop-cabbage-tonkatsu-sauce_2829-18631.jpg",
        },
        {
          id: "p3",
          name: "Brisket Nachos",
          price: "19",
          variant: "Appetizer",
          imageSrc: "http://img.b2bpic.net/free-photo/tacos-with-vegetables-meat-top-view_23-2148750435.jpg",
        },
        {
          id: "p4",
          name: "Chicken & Waffles",
          price: "19",
          variant: "Brunch",
          imageSrc: "http://img.b2bpic.net/free-photo/belgian-waffles-with-cream-fresh-raspberries_114579-57179.jpg",
        },
        {
          id: "p5",
          name: "Hand Cut Filet",
          price: "30",
          variant: "Steak",
          imageSrc: "http://img.b2bpic.net/free-photo/carpaccio-with-meat-with-pineapple_140725-3992.jpg",
        },
        {
          id: "p6",
          name: "Moonshine Mojito",
          price: "15",
          variant: "Cocktail",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-with-delicious-beverage-with-ice-cubes_23-2148436985.jpg",
        },
      ]}
      title="Signature Menu"
      description="Hand-cut, slow-smoked, and perfectly paired."
    />
  </div>

  <div id="brunch" data-section="brunch">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Coffee,
          title: "French Toast",
          description: "Classic thick-cut French toast with seasonal berries.",
        },
        {
          icon: Utensils,
          title: "Brisket Benedict",
          description: "Smoked brisket on a toasted English muffin with poached eggs.",
        },
        {
          icon: Droplets,
          title: "Mimosa Carafes",
          description: "Freshly squeezed juice and premium sparkling wine.",
        },
      ]}
      title="Houston Brunch Done Right"
      description="Saturday – Sunday | 11AM – 3PM"
    />
  </div>

  <div id="nightlife" data-section="nightlife">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What is the vibe?",
          content: "Upscale nightlife atmosphere with live music and curated cocktail lists.",
        },
        {
          id: "2",
          title: "Do you offer private events?",
          content: "Yes, we host private parties for corporate gatherings and special occasions.",
        },
        {
          id: "3",
          title: "Is there a dress code?",
          content: "Upscale casual. We encourage a stylish atmosphere.",
        },
      ]}
      title="Craft Cocktails. Downtown Energy."
      description="Late nights in the heart of the city."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="final" data-section="final">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={[
        "Houston Dining",
        "Downtown Social",
        "Texas Nightlife",
        "Whiskey Collective",
        "Southern Table",
        "Premium Brunch",
        "Late Night Vibes",
      ]}
      title="Join the Table"
      description="Reserve your spot for an unforgettable evening."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="1000 Prairie St, Houston, TX 77002. Sunday – Thursday | 11AM – 11PM. Friday – Saturday | 11AM – 2AM."
      buttons={[
        {
          text: "Get Directions",
          href: "#",
        },
        {
          text: "Call Now",
          href: "tel:7132267717",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="The Moonshiners"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Reserve",
              href: "#",
            },
          ],
        },
        {
          title: "Visit",
          items: [
            {
              label: "Directions",
              href: "#",
            },
            {
              label: "Contact",
              href: "tel:7132267717",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
