import { createContext, useContext, useEffect, useId, useRef } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

const DialogContext = createContext(null)

export function Dialog({ open, onOpenChange, children }) {
    const id = useId()

    return (
        <DialogContext.Provider value={{ open, onOpenChange, titleId: `${id}-title`, descriptionId: `${id}-description` }}>
            {children}
        </DialogContext.Provider>
    )
}

export function DialogContent({ className, onCancel, onClick, ...props }) {
    const context = useContext(DialogContext)
    const dialogRef = useRef(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog || !context?.open) return

        if (!dialog.open) dialog.showModal()
        return () => {
            if (dialog.open) dialog.close()
        }
    }, [context?.open])

    if (!context?.open || typeof document === "undefined") return null

    const handleCancel = (event) => {
        onCancel?.(event)
        if (event.defaultPrevented) return
        event.preventDefault()
        context.onOpenChange?.(false)
    }

    const handleClick = (event) => {
        onClick?.(event)
        if (event.defaultPrevented || event.target !== event.currentTarget) return
        context.onOpenChange?.(false)
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            onCancel={handleCancel}
            onClick={handleClick}
            aria-labelledby={context.titleId}
            aria-describedby={context.descriptionId}
            className={cn(
                "fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 border border-border bg-background text-foreground shadow-2xl backdrop:bg-black/70",
                className,
            )}
            {...props}
        />,
        document.body,
    )
}

export function DialogHeader({ className, ...props }) {
    return <div className={cn("flex flex-col", className)} {...props} />
}

export function DialogTitle({ className, ...props }) {
    const context = useContext(DialogContext)
    return <h2 id={context?.titleId} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
}

export function DialogDescription({ className, ...props }) {
    const context = useContext(DialogContext)
    return <p id={context?.descriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />
}
