import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";
import {Button} from "@/common/components/ui/button.tsx";
import {Input} from "@/common/components/ui/input.tsx";
import {Label} from "@/common/components/ui/label.tsx";


type DialogDataPropsType = {
  buttonName: string
  dialogTitle: string
  dialogDescription: string
  submitButtonName: string
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

type LoginPopUpPropsType = {
  dialogData: DialogDataPropsType;
}


export const LoginPopUp = (props: LoginPopUpPropsType) => {

  const {buttonName, dialogTitle, dialogDescription, submitButtonName, variant} = props.dialogData

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant}>{buttonName}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="John Doe"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="john.doe99@gmail.com"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{submitButtonName}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
