"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, UtensilsCrossed } from "lucide-react";
import { trackEvent } from "./contact-link";

const menu = [
  {
    category: "Mains",
    name: "Grilled steak",
    description: "Served with salad and house sauce.",
    price: "₦12,500",
  },
  {
    category: "Mains",
    name: "Crisp chicken",
    description: "Golden chicken with a fresh side salad.",
    price: "₦8,500",
  },
  {
    category: "Sides",
    name: "Garden salad",
    description: "Mixed leaves, onion and a light dressing.",
    price: "₦3,500",
  },
];

export default function RestaurantDemo() {
  const [category, setCategory] = useState("All");
  const [preview, setPreview] = useState(false);
  function openPreview() {
    setPreview(true);
    trackEvent("demo_open", { placement: "restaurant-demo" });
  }
  return (
    <div className="demo-frame">
      <div className="demo-label">
        <span>
          <span className="status-dot" /> Restaurant website concept
        </span>
        <span>Not client work</span>
      </div>
      <div className="demo-browser">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>savour.example / menu</span>
        <span className="demo-preview-tag">PREVIEW</span>
      </div>
      <div className="demo-content">
        <div className="demo-photo">
          <Image
            src="/images/restaurant-food.webp"
            alt="Illustrative food photograph with grilled meat, chicken and salad"
            fill
            sizes="(min-width: 1296px) 570px, (min-width: 640px) 42vw, calc(100vw - 42px)"
            className="object-cover"
          />
          <div className="demo-photo-overlay">
            <span className="demo-brand">
              savour<span> / kitchen</span>
            </span>
            <p>
              Pull up a chair.
              <br />
              <span className="editorial">Find your favourite.</span>
            </p>
            <span className="demo-image-note">
              Illustrative dishes and prices
            </span>
          </div>
        </div>
        <div className="demo-menu">
          <div className="demo-menu-heading">
            <div>
              <span className="eyebrow">A taste of the menu</span>
              <h3>Good food, simply served.</h3>
            </div>
            <UtensilsCrossed size={22} />
          </div>
          <div className="demo-filters" aria-label="Filter example menu">
            {["All", "Mains", "Sides"].map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => {
                  setCategory(item);
                  trackEvent("demo_open", { placement: "menu-filter" });
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="demo-dishes">
            {menu
              .filter(
                (item) => category === "All" || item.category === category,
              )
              .map((item) => (
                <div className="demo-dish" key={item.name}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <span>{item.price}</span>
                </div>
              ))}
          </div>
          <div className="demo-details">
            <span>
              <MapPin size={13} /> Example location
            </span>
            <span>Example hours: 12 pm to 10 pm</span>
          </div>
          <button
            type="button"
            className="button button-brown demo-action"
            onClick={openPreview}
          >
            Preview a WhatsApp enquiry <ArrowRight size={17} />
          </button>
          {preview && (
            <div className="demo-message" role="status">
              <strong>Example message</strong>
              <p>“Hello Savour. I would like to ask about your menu.”</p>
              <p>
                On a restaurant website, the link would open a chat with that
                restaurant. No message has been sent.
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => setPreview(false)}
              >
                Close preview
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="demo-footnote">
        <p>
          Try the menu filters and enquiry preview. No orders or payments are
          accepted.
        </p>
        <a
          href="#audit"
          className="text-link"
          onClick={() => trackEvent("demo_open", { placement: "demo-contact" })}
        >
          Discuss a website like this <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
