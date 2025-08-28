"use client"

import { useEffect, useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog"
import { X } from "lucide-react"
import { Button } from "../button"

const NotificationBanner = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(true)
  }, [])

  return (
    <AlertDialog open={showModal} onOpenChange={(open) => setShowModal(open)}>
      <AlertDialogContent className="w-[95vw] max-w-[90vw] sm:max-w-2xl lg:max-w-[710px] rounded-2xl sm:!rounded-3xl px-4 py-4 sm:px-7 sm:py-9">
        <AlertDialogHeader className="space-y-3 sm:space-y-5">
          <div className="flex items-start justify-between gap-3">
            <AlertDialogTitle className="text-midnight font-bold text-lg sm:text-xl lg:text-2xl leading-tight pr-2">
              Dear Valued Customer,
            </AlertDialogTitle>
            <AlertDialogCancel asChild>
              <Button variant="ghost" size="icon" className="focus-visible:ring-0">
                <X className="stroke-[#525252] size-5 sm:size-6 lg:size-7" />
              </Button>
            </AlertDialogCancel>
          </div>

          <AlertDialogDescription>
            <div className="space-y-3 sm:space-y-4 text-charcoal text-sm sm:text-base font-medium leading-relaxed">
              <p className="text-justify sm:text-left">
                As per the Finance Act 2025-2026, all online sellers must be registered with Income Tax NTN and Sales Tax STRN authorities.
              </p>

              <div>
                <h6 className="text-justify sm:text-left text-midnight">
                  New Compliance Rule:
                </h6>

                <p className="text-justify sm:text-left">
                  Courier companies will now deduct 2% Withholding Tax and 2% Sales Tax on your COD orders and deposit them directly to the Government.
                </p>
              </div>

              <p className="text-justify sm:text-left">
                Share your NTN & STRN with your assigned contact to stay compliant and avoid penalties.
              </p>

              <p className="text-justify sm:text-left">
                Thanks for your support!
              </p>

            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default NotificationBanner
