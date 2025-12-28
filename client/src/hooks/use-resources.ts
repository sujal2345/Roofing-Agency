import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertContact } from "@shared/routes";

// ============================================
// PROJECTS
// ============================================
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.projects.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// TESTIMONIALS
// ============================================
export function useTestimonials() {
  return useQuery({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      const res = await fetch(api.testimonials.list.path);
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      return api.testimonials.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// FAQS
// ============================================
export function useFaqs() {
  return useQuery({
    queryKey: [api.faqs.list.path],
    queryFn: async () => {
      const res = await fetch(api.faqs.list.path);
      if (!res.ok) throw new Error("Failed to fetch FAQs");
      return api.faqs.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// NEWS / POSTS
// ============================================
export function usePosts() {
  return useQuery({
    queryKey: [api.posts.list.path],
    queryFn: async () => {
      const res = await fetch(api.posts.list.path);
      if (!res.ok) throw new Error("Failed to fetch posts");
      return api.posts.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// CONTACT FORM MUTATION
// ============================================
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit contact form");
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}
