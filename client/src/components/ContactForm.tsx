import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-resources";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  service?: string;
  className?: string;
  variant?: "default" | "card";
}

export function ContactForm({ service, className, variant = "default" }: ContactFormProps) {
  const { toast } = useToast();
  const mutation = useSubmitContact();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: service || "General",
      message: "",
    },
  });

  function onSubmit(data: InsertContact) {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Request Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-2xl p-8 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-primary mb-2">Get A Free Estimate</h3>
        <p className="text-muted-foreground text-sm">Fill out the form below and our team will contact you shortly.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Name" className="h-12 bg-gray-50 border-gray-200" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email Address" className="h-12 bg-gray-50 border-gray-200" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number" className="h-12 bg-gray-50 border-gray-200" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="General">General Inquiry</SelectItem>
                    <SelectItem value="Roof Building">Roof Building</SelectItem>
                    <SelectItem value="Roof Repairing">Roof Repair</SelectItem>
                    <SelectItem value="Roof Checking">Roof Inspection</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-[120px] bg-gray-50 border-gray-200 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 text-lg font-bold uppercase tracking-wider bg-secondary hover:bg-red-700 shadow-lg shadow-red-500/20"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
