
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
}

const ProfileImageDialog = ({ 
  open, 
  onOpenChange, 
  imageSrc,
  fallback = "JD" 
}: ProfileImageDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-2 border-blue-500 bg-transparent backdrop-blur-none">
        <div className="relative w-full aspect-square">
          <Avatar className="w-full h-full rounded-md border-none">
            <AvatarImage 
              src={imageSrc} 
              alt="Profile" 
              className="object-cover w-full h-full"
              loading="eager" 
            />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <X size={16} />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImageDialog;
