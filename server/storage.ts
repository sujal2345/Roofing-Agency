import { db } from "./db";
import {
  contactSubmissions,
  projects,
  testimonials,
  faqs,
  posts,
  type InsertContact,
  type Project,
  type Testimonial,
  type Faq,
  type Post
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Contact
  createContactSubmission(contact: InsertContact): Promise<typeof contactSubmissions.$inferSelect>;
  
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  
  // FAQs
  getFaqs(): Promise<Faq[]>;
  
  // Posts
  getPosts(): Promise<Post[]>;
  getPost(id: number): Promise<Post | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(contact: InsertContact) {
    const [submission] = await db.insert(contactSubmissions).values(contact).returning();
    return submission;
  }

  async getProjects() {
    return await db.select().from(projects);
  }

  async getProject(id: number) {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async getTestimonials() {
    return await db.select().from(testimonials);
  }

  async getFaqs() {
    return await db.select().from(faqs);
  }

  async getPosts() {
    return await db.select().from(posts);
  }

  async getPost(id: number) {
    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    return post;
  }
}

export const storage = new DatabaseStorage();
