import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { projects, testimonials, faqs, posts } from "@shared/schema";
import { db } from "./db";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const submission = await storage.createContactSubmission(input);
      res.status(201).json(submission);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const list = await storage.getProjects();
    res.json(list);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  });

  // Testimonials
  app.get(api.testimonials.list.path, async (req, res) => {
    const list = await storage.getTestimonials();
    res.json(list);
  });

  // FAQs
  app.get(api.faqs.list.path, async (req, res) => {
    const list = await storage.getFaqs();
    res.json(list);
  });

  // Posts
  app.get(api.posts.list.path, async (req, res) => {
    const list = await storage.getPosts();
    res.json(list);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPost(Number(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await db.insert(projects).values([
      {
        title: "Modern Residential Roof",
        description: "Complete roof replacement for a 2-story suburban home using premium asphalt shingles.",
        image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80",
        category: "Residential",
        roofColor: "Charcoal Grey",
        location: "Springfield, IL",
        completedDate: "2023-11-15"
      },
      {
        title: "Commercial Building Upgrade",
        description: "Flat roof installation with energy-efficient TPO membrane for a local office complex.",
        image: "https://images.unsplash.com/photo-1533596773229-4595e64887b6?auto=format&fit=crop&q=80",
        category: "Commercial",
        roofColor: "White Reflective",
        location: "Chicago, IL",
        completedDate: "2023-10-01"
      },
      {
        title: "Luxury Tile Installation",
        description: "Installation of clay tiles for a Mediterranean-style estate.",
        image: "https://images.unsplash.com/photo-1596245984638-7f9999011171?auto=format&fit=crop&q=80",
        category: "Residential",
        roofColor: "Terracotta",
        location: "Naples, FL",
        completedDate: "2023-12-10"
      },
      // Adding more for the 6 card requirement
      {
        title: "Slate Roof Restoration",
        description: "Restoring a historic slate roof to its original glory.",
        image: "https://images.unsplash.com/photo-1628135248564-927506c278c2?auto=format&fit=crop&q=80",
        category: "Repair",
        roofColor: "Slate Grey",
        location: "Boston, MA",
        completedDate: "2024-01-15"
      },
      {
        title: "Metal Roof Modern Home",
        description: "Sleek standing seam metal roof for a contemporary home.",
        image: "https://images.unsplash.com/photo-1583156174312-70b190f84570?auto=format&fit=crop&q=80",
        category: "Residential",
        roofColor: "Matte Black",
        location: "Austin, TX",
        completedDate: "2024-02-20"
      },
      {
        title: "Suburban Shingle Repair",
        description: "Storm damage repair and shingle matching.",
        image: "https://images.unsplash.com/photo-1587582522770-4dbd54483750?auto=format&fit=crop&q=80",
        category: "Repair",
        roofColor: "Brown",
        location: "Seattle, WA",
        completedDate: "2024-03-05"
      }
    ]);

    await db.insert(testimonials).values([
      {
        name: "John Smith",
        role: "Homeowner",
        content: "The team was professional, on time, and the new roof looks amazing. Highly recommended!",
        rating: 5
      },
      {
        name: "Sarah Johnson",
        role: "Business Owner",
        content: "Excellent service for our warehouse roof. They minimized downtime and delivered quality work.",
        rating: 5
      },
      {
        name: "Michael Brown",
        role: "Property Manager",
        content: "We use them for all our properties. Reliable, honest, and great craftsmanship.",
        rating: 5
      }
    ]);

    await db.insert(faqs).values([
      {
        question: "How long does a roof replacement take?",
        answer: "Typically, a residential roof replacement takes 1-3 days depending on the size and complexity.",
        category: "General"
      },
      {
        question: "Do you offer warranties?",
        answer: "Yes, we offer comprehensive material and workmanship warranties on all our installations.",
        category: "General"
      },
      {
        question: "How often should I have my roof checked?",
        answer: "We recommend a professional inspection at least once a year and after major storms.",
        category: "Checking"
      }
    ]);
    
    await db.insert(posts).values([
      {
        title: "5 Signs You Need a New Roof",
        excerpt: "Don't wait until it leaks! Here are the early warning signs.",
        content: "Content about roof signs...",
        image: "https://images.unsplash.com/photo-1628135248564-927506c278c2?auto=format&fit=crop&q=80",
        date: "2024-03-15"
      },
      {
        title: "Maintenance Tips for Winter",
        excerpt: "Prepare your roof for the cold season with these simple tips.",
        content: "Content about winter maintenance...",
        image: "https://images.unsplash.com/photo-1518717871277-22f254b4132b?auto=format&fit=crop&q=80",
        date: "2024-02-10"
      },
      {
        title: "Understanding Roofing Materials",
        excerpt: "Shingles, metal, tile - which is right for you?",
        content: "Content about materials...",
        image: "https://images.unsplash.com/photo-1583156174312-70b190f84570?auto=format&fit=crop&q=80",
        date: "2024-01-20"
      }
    ]);
  }
}
