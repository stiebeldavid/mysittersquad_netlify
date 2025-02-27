import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Edit } from "lucide-react";
import { Babysitter } from "@/types/babysitter";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface BabysitterCardProps {
  babysitter: Babysitter;
  onEdit: (babysitter: Babysitter) => void;
  onDelete: (id: string) => void;
}

export const BabysitterCard = ({ babysitter, onEdit, onDelete }: BabysitterCardProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = () => {
    onDelete(babysitter.id);
    setShowDeleteDialog(false);
  };

  return (
    <>
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>
              {babysitter.firstName} {babysitter.lastName}
            </span>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(babysitter)}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowDeleteDialog(true)}
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Mobile:</span> {babysitter.mobile}
            </p>
            {babysitter.age && (
              <p className="text-sm">
                <span className="font-medium">Age:</span> {babysitter.age}
              </p>
            )}
            {babysitter.grade && (
              <p className="text-sm">
                <span className="font-medium">Grade:</span> {babysitter.grade}
              </p>
            )}
            {babysitter.rate && (
              <p className="text-sm">
                <span className="font-medium">Rate:</span> ${babysitter.rate}/hour
              </p>
            )}
            {babysitter.specialties && (
              <p className="text-sm">
                <span className="font-medium">Specialties:</span>{" "}
                {babysitter.specialties}
              </p>
            )}
            {babysitter.notes && (
              <p className="text-sm">
                <span className="font-medium">Notes:</span> {babysitter.notes}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete {babysitter.firstName} {babysitter.lastName} from your babysitters list.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};