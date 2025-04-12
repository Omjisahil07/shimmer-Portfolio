
import React from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-xl bg-white/10 backdrop-blur-md animate-scale-in">
        <div className="relative w-full flex flex-col items-center">
          <div className="w-full aspect-square">
            <Avatar className="w-full h-full rounded-xl shadow-lg">
              <AvatarImage 
                src={imageSrc} 
                alt="Profile" 
                className="object-cover w-full h-full"
                loading="eager" 
              />
              <AvatarFallback className="text-4xl">{fallback}</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center p-2 bg-black/40 backdrop-blur-sm animate-fade-in">
            <h3 className="text-white font-medium text-lg">{name}</h3>
          </div>
          
          <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200">
            <X size={16} />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImageDialog;
