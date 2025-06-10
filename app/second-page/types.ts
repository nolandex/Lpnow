import type React from "react"
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "full"
}

export interface FeatureListProps {
  features: string[]
  textColor?: string
}

export interface Product {
  name: string
  price: string
  category: string
  subcategory?: string
  features?: string[]
  exampleUrl?: string
  modalType?: "example" | "details" | "contentImages" | "videoPromo" | "seoImages" | "adsImages" | null
}
