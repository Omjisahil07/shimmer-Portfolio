
import React from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from "@/components/ui/card";

interface ProfileImageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc: string;
  fallback?: string;
  name?: string;
}

const ProfileImageDialog = ({ 
  open, 
  onOpenChange, 
  imageSrc,
  fallback = "JD",
  name = "John Doe"
}: ProfileImageDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-xl bg-transparent border-none shadow-none animate-scale-in">
        <DialogTitle className="sr-only">Profile Image</DialogTitle>
        <Card className="overflow-hidden border shadow-lg bg-background/95 backdrop-blur-sm">
          <div className="relative w-full">
            <div className="w-full aspect-square">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage 
                  src={imageSrc} 
                  alt="Profile" 
                  className="object-cover w-full h-full"
                  loading="eager" 
                />
                <AvatarFallback className="text-4xl">{fallback}</AvatarFallback>
              </Avatar>
            </div>
            
            <DialogClose className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200">
              <X size={16} />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          
          <CardContent className="text-center p-4 animate-fade-in">
            <h3 className="text-foreground font-medium text-xl">{name}</h3>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImageDialog;
