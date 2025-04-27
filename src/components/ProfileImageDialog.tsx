import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface ProfileImageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProfileImageDialog({
  open,
  onOpenChange,
}: ProfileImageDialogProps) {
  const testimonials = [
    {
      quote:
        "Every image tells a story, and the depth and creativity here are absolutely inspiring. Truly a masterpiece in every frame.",
      name: "Sahil Tiwari",
      designation: "Software Developer",
      src: "images/ChatGPT Image Mar 28, 2025, 01_23_07 AM.png",
    },
    {
      quote:
        "A brilliant showcase of imagination and precision. Each visual element feels alive and perfectly captures the emotion behind it.",
      name: "Sahil Tiwari",
      designation: "Software Developer",
      src: "/images/ChatGPT Image Mar 28, 2025, 12_04_01 AM.png",
    },
    {
      quote:
        "Your work beautifully bridges creativity and technique. Every image leaves a lasting impression and sparks new ideas.",
      name: "Sahil Tiwari",
      designation: "Software Developer",
      src: "/images/ChatGPT Image Apr 15, 2025, 08_25_03 AM.png",
    },
    {
      quote:
        "The attention to emotion, lighting, and composition is exceptional. Each piece feels both thoughtful and visionary.",
      name: "Sahil Tiwari",
      designation: "Software Developer",
      src: "/images/ChatGPT Image Mar 27, 2025, 10_06_42 AM.png",
    },
    {
      quote:
        "Absolutely mesmerizing work! The blend of creativity and authenticity makes your visuals unforgettable. Keep inspiring the world!",
      name: "Sahil Tiwari",
      designation: "Software Developer",
      src: "/images/ChatGPT Image Mar 28, 2025, 12_00_38 AM.png",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0">
        <DialogHeader className="p-6 relative">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </DialogContent>
    </Dialog>
  );
}
